import React from "react";

type P = { className?: string };

function Svg({ className, children, viewBox = "0 0 24 24" }: P & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const IconUser = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
  </Svg>
);

export const IconUserPlus = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="9" cy="8" r="4" />
    <path d="M2 21c0-4 3.1-6.5 7-6.5s7 2.5 7 6.5" />
    <path d="M19 8v6M16 11h6" />
  </Svg>
);

export const IconWrench = ({ className }: P) => (
  <Svg className={className}>
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z" />
  </Svg>
);

export const IconDownload = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </Svg>
);

export const IconArrowRight = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4 12h16m0 0-6-6m6 6-6 6" />
  </Svg>
);

export const IconPhone = ({ className }: P) => (
  <Svg className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
);

export const IconMail = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
);

export const IconChat = ({ className }: P) => (
  <Svg className={className}>
    <path d="M21 12a8 8 0 0 1-8 8H4l2.2-2.6A8 8 0 1 1 21 12z" />
    <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
  </Svg>
);

export const IconPin = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const IconBolt = ({ className }: P) => (
  <Svg className={className}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </Svg>
);

export const IconEuro = ({ className }: P) => (
  <Svg className={className}>
    <path d="M18 7a7 7 0 1 0 0 10" />
    <path d="M4 10h9M4 14h9" />
  </Svg>
);

export const IconShield = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const IconClock = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const IconCard = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
  </Svg>
);

export const IconClipboard = ({ className }: P) => (
  <Svg className={className}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4a3 3 0 0 1 6 0" />
    <path d="m9 13 2 2 4-4" />
  </Svg>
);

export const IconBattery = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="8" width="16" height="9" rx="2" />
    <path d="M21 11v3" />
    <path d="m11 10-2 3h3l-2 3" />
  </Svg>
);

export const IconTire = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21" />
  </Svg>
);

export const IconFuel = ({ className }: P) => (
  <Svg className={className}>
    <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
    <path d="M3 21h14" />
    <path d="M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-3-3" />
  </Svg>
);

export const IconGauge = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4 14a8 8 0 1 1 16 0" />
    <path d="m12 14 4-4" />
    <path d="M2 20h20" />
  </Svg>
);

export const IconKey = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9M17 6l3 3M14 9l2 2" />
  </Svg>
);

export const IconTow = ({ className }: P) => (
  <Svg className={className}>
    <path d="M3 17V9h8v8" />
    <path d="M11 12h5l3 3v2h-2" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="16" cy="18" r="2" />
    <path d="M9 18h5M3 17h2" />
  </Svg>
);

export const IconHome = ({ className }: P) => (
  <Svg className={className}>
    <path d="m3 11 9-8 9 8" />
    <path d="M5 10v10h14V10" />
  </Svg>
);

export const IconStar = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5 14.9 8.6l6.6.8-4.9 4.5 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <Svg className={className}>
    <path d="m4 12.5 5 5L20 6.5" />
  </Svg>
);

export const IconBell = ({ className }: P) => (
  <Svg className={className}>
    <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </Svg>
);

export const IconMenu = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const IconClose = ({ className }: P) => (
  <Svg className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const IconChevronDown = ({ className }: P) => (
  <Svg className={className}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const IconBriefcase = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
  </Svg>
);

export const IconUsers = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.5 2.9-5.5 6.5-5.5s6.5 2 6.5 5.5" />
    <path d="M16 5a3.5 3.5 0 0 1 0 7M17.5 14.7c2.4.6 4 2.3 4 5.3" />
  </Svg>
);

export const IconHeart = ({ className }: P) => (
  <Svg className={className}>
    <path d="M12 20.5s-7.5-4.7-9.3-9A5.4 5.4 0 0 1 12 6.4a5.4 5.4 0 0 1 9.3 5.1c-1.8 4.3-9.3 9-9.3 9z" />
  </Svg>
);

export const IconCalendar = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </Svg>
);

export const IconCar = ({ className }: P) => (
  <Svg className={className}>
    <path d="M5 16 6.5 9a2 2 0 0 1 2-1.5h7a2 2 0 0 1 2 1.5L19 16" />
    <rect x="3" y="16" width="18" height="4" rx="1.5" />
    <circle cx="7.5" cy="18" r="1.6" />
    <circle cx="16.5" cy="18" r="1.6" />
    <path d="M5 12h14" />
  </Svg>
);

export const IconFacebook = ({ className }: P) => (
  <Svg className={className}>
    <path d="M14 8h3V4.5h-3A4.5 4.5 0 0 0 9.5 9v2.5H7V15h2.5v6H13v-6h3l.5-3.5H13V9a1 1 0 0 1 1-1z" />
  </Svg>
);

export const IconInstagram = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </Svg>
);

export const IconLinkedin = ({ className }: P) => (
  <Svg className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M8 10.5V17M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4" />
  </Svg>
);

export const IconApple = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.7 12.9c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.9-1.6 0-3.1 1-4 2.4-1.7 2.9-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.7zM14.4 5.6c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.8-1.5z" />
  </svg>
);

export const IconPlay = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 3.5v17a1 1 0 0 0 1.5.9l14-8.5a1 1 0 0 0 0-1.7l-14-8.5A1 1 0 0 0 4 3.5z" />
  </svg>
);
