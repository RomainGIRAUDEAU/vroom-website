"""
Extrait les photos des maquettes client (design/maquettes/*.png, générées par
ChatGPT) pour les utiliser telles quelles sur le site : même scènes, même
lumière, même identité visuelle que les maquettes validées.

Pour chaque visuel : découpe -> effacement (inpainting) des éléments d'UI
incrustés dans la maquette (cartes, boutons, textes) -> upscale x2 ->
léger renforcement de netteté -> JPEG dans public/images/photos/.

Usage (Pillow + numpy + opencv-python-headless) :
    python3 scripts/extract-photos.py
"""

from pathlib import Path

import cv2
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "design" / "maquettes"
OUT = ROOT / "public" / "images" / "photos"

# name: (maquette, (x0, y0, x1, y1), [zones à effacer en coords maquette], scale)
#  zone = (x0, y0, x1, y1, mode) ; mode "box" = rectangle plein,
#  "text" = uniquement les pixels clairs (texte/icône) de la zone.
CROPS = {
    # Accueil — hero : automobiliste au bord de la route, dépanneuse qui arrive
    "hero-accueil": ("4-accueil.png", (352, 54, 836, 374), [], 2),
    # Accueil — "Pourquoi Vroom existe" : conductrice seule dans sa voiture la nuit
    "conductrice-nuit": ("4-accueil.png", (372, 380, 836, 596), [], 2),
    # Accueil — "La liberté de rouler" : famille en voiture au coucher du soleil
    "famille-route": ("4-accueil.png", (50, 1127, 388, 1289), [], 3),
    # Accueil — "Où va Vroom" : carte de France réseau néon
    "carte-france": ("4-accueil.png", (405, 1466, 786, 1664), [], 2),
    # Accueil — carte Particuliers : femme au téléphone, capot ouvert
    "carte-particuliers": (
        "1-accueil-cartes.png",
        (48, 150, 610, 650),
        [(72, 176, 148, 252, "box")],
        2,
    ),
    # Accueil — carte Pros : dépanneur avec tablette devant sa dépanneuse
    "carte-pros": (
        "1-accueil-cartes.png",
        (925, 150, 1484, 630),
        [(950, 176, 1026, 252, "box")],
        2,
    ),
    # Pro — hero : dépanneur souriant, téléphone en main
    "hero-pro": (
        "2-pro.png",
        (540, 62, 1024, 440),
        [(762, 280, 980, 426, "box")],
        2,
    ),
    # Pro — "La liberté de travailler" : mécanicien sous le capot
    "mecanicien-capot": (
        "2-pro.png",
        (506, 1167, 962, 1362),
        [(748, 1252, 946, 1300, "box"), (748, 1300, 946, 1326, "text")],
        2,
    ),
    # Pro — "Statut Vroom Pro" : dépanneuse dans la pénombre
    "depanneuse-statut": (
        "2-pro.png",
        (55, 878, 298, 1136),
        [(92, 905, 296, 1040, "text")],
        2,
    ),
    # Contact — hero : conseillère support avec casque + V néon
    "hero-contact": (
        "3-contact.png",
        (506, 62, 1024, 440),
        [(810, 298, 982, 426, "box")],
        2,
    ),
}


def text_mask(region: np.ndarray) -> np.ndarray:
    """Pixels clairs (texte blanc ou jaune) d'une zone, légèrement dilatés."""
    hsv = cv2.cvtColor(region, cv2.COLOR_BGR2HSV)
    v = hsv[..., 2]
    m = (v > 120).astype(np.uint8) * 255
    return cv2.dilate(m, np.ones((5, 5), np.uint8), iterations=2)


def process(name, spec):
    file, (x0, y0, x1, y1), erase, scale = spec
    img = cv2.imread(str(SRC / file))
    crop = img[y0:y1, x0:x1].copy()

    if erase:
        mask = np.zeros(crop.shape[:2], np.uint8)
        for ex0, ey0, ex1, ey1, mode in erase:
            cx0, cy0 = max(ex0 - x0, 0), max(ey0 - y0, 0)
            cx1, cy1 = min(ex1 - x0, crop.shape[1]), min(ey1 - y0, crop.shape[0])
            if mode == "box":
                mask[cy0:cy1, cx0:cx1] = 255
            else:
                mask[cy0:cy1, cx0:cx1] = text_mask(crop[cy0:cy1, cx0:cx1])
        crop = cv2.inpaint(crop, mask, 9, cv2.INPAINT_TELEA)
        # adoucit la zone reconstruite pour masquer les artefacts
        blurred = cv2.GaussianBlur(crop, (0, 0), 6)
        soft = cv2.GaussianBlur(mask, (0, 0), 8).astype(np.float32)[..., None] / 255
        crop = (crop * (1 - soft) + blurred * soft).astype(np.uint8)

    h, w = crop.shape[:2]
    up = cv2.resize(crop, (w * scale, h * scale), interpolation=cv2.INTER_LANCZOS4)
    # unsharp mask léger
    blur = cv2.GaussianBlur(up, (0, 0), 1.2)
    up = cv2.addWeighted(up, 1.35, blur, -0.35, 0)

    OUT.mkdir(parents=True, exist_ok=True)
    out = OUT / f"{name}.jpg"
    cv2.imwrite(str(out), up, [cv2.IMWRITE_JPEG_QUALITY, 86, cv2.IMWRITE_JPEG_PROGRESSIVE, 1])
    print(f"{out.relative_to(ROOT)}  {up.shape[1]}x{up.shape[0]}")


if __name__ == "__main__":
    for n, s in CROPS.items():
        process(n, s)
