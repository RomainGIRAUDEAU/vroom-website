#!/usr/bin/env bash
# Configuration unique du déploiement automatique GitHub Actions -> Cloud Run.
# À lancer une fois par quelqu'un qui a les droits IAM sur vroom-1776153394
# et `gh` connecté au repo RomainGIRAUDEAU/vroom-website.
#
# Crée (moindre privilège) :
#  - un compte de service dédié `vroom-website-deployer` ;
#  - un provider OIDC `github-website` dans le pool WIF `github` existant, limité
#    au repo vroom-website (le provider de l'API n'est pas modifié) ;
#  - les droits : push d'images sur le repo Artifact Registry, déploiement du seul
#    service vroom-website, utilisation de son compte d'exécution.
# Puis renseigne les variables GitHub et active l'auto-merge des PR.
set -euo pipefail

P=vroom-1776153394
PN=981436003035
R=europe-west1
REPO=RomainGIRAUDEAU/vroom-website
SA_NAME=vroom-website-deployer
SA="${SA_NAME}@${P}.iam.gserviceaccount.com"
POOL=github
PROVIDER=github-website

gcloud iam service-accounts describe "$SA" --project "$P" >/dev/null 2>&1 ||
  gcloud iam service-accounts create "$SA_NAME" --project "$P" \
    --display-name "GitHub Actions - deploy vroom-website"

gcloud iam workload-identity-pools providers describe "$PROVIDER" --project "$P" \
  --location global --workload-identity-pool "$POOL" >/dev/null 2>&1 ||
  gcloud iam workload-identity-pools providers create-oidc "$PROVIDER" --project "$P" \
    --location global --workload-identity-pool "$POOL" \
    --issuer-uri https://token.actions.githubusercontent.com \
    --attribute-mapping "google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref" \
    --attribute-condition "assertion.repository=='${REPO}' && assertion.ref=='refs/heads/main'"

gcloud iam service-accounts add-iam-policy-binding "$SA" --project "$P" \
  --role roles/iam.workloadIdentityUser \
  --member "principalSet://iam.googleapis.com/projects/${PN}/locations/global/workloadIdentityPools/${POOL}/attribute.repository/${REPO}" \
  --format=none

gcloud artifacts repositories add-iam-policy-binding cloud-run-source-deploy --project "$P" \
  --location "$R" --member "serviceAccount:${SA}" --role roles/artifactregistry.writer --format=none

gcloud run services add-iam-policy-binding vroom-website --project "$P" --region "$R" \
  --member "serviceAccount:${SA}" --role roles/run.developer --format=none

gcloud iam service-accounts add-iam-policy-binding "vroom-cloud-run@${P}.iam.gserviceaccount.com" \
  --project "$P" --member "serviceAccount:${SA}" --role roles/iam.serviceAccountUser --format=none

# Variables GitHub (non secrètes) lues par .github/workflows/ci-deploy.yml
gh variable set WIF_PROVIDER --repo "$REPO" \
  --body "projects/${PN}/locations/global/workloadIdentityPools/${POOL}/providers/${PROVIDER}"
gh variable set WIF_SERVICE_ACCOUNT --repo "$REPO" --body "$SA"

# PR : auto-merge possible une fois la CI verte, branche supprimée après merge
gh repo edit "$REPO" --enable-auto-merge --delete-branch-on-merge

# main : la CI doit être verte pour merger une PR (les admins peuvent toujours pousser directement)
gh api -X PUT "repos/${REPO}/branches/main/protection" --input - <<'JSON'
{
  "required_status_checks": { "strict": true, "contexts": ["Type-check & build"] },
  "enforce_admins": false,
  "required_pull_request_reviews": null,
  "restrictions": null
}
JSON

echo "OK : chaque merge sur main sera déployé automatiquement."
