/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION — Flo Works Limited
 * ─────────────────────────────────────────────────────────────────────────────
 * English punch-line headings + Thai body copy.
 * Colors: keep the starter navy #1B3A6B + orange #F97316 (owner choice).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Flo Works',
  tagline: 'Open-source ERP, implemented properly.',
  description:
    'Flo Works Limited implements ERPNext — the open-source ERP — for Thai SMEs and growing companies. One system, every function, zero license fees, Thai-ready.',
  url: 'https://flo-erpnext.example.com', // TODO: replace with the real domain before go-live
  locale: 'th_TH',

  // ── Logo ───────────────────────────────────────────────────────────────────
  // Assets derived from the owner's `floworks_logo_v3_badge.svg`
  // (see public/). Header/footer use the wordmark lockup WITHOUT the tiny
  // "ERPNEXT · AI" subtitle — it is illegible below ~100px lockup height.
  logo: {
    header:   '/floworks-logo-header.svg', // badge + wordmark (light surfaces)
    reversed: '/floworks-logo-white.svg',  // badge + white wordmark (dark surfaces)
    full:     '/floworks-logo.svg',        // full lockup incl. subtitle (large/press use)
    alt:      'Flo Works — ERPNext · AI',
  },

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // Keep in sync with astro.config.mjs.
  fonts: {
    body: 'Inter',
    display: 'Oswald',
    thai: 'Noto Sans Thai',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  colors: {
    primary:      '#1B3A6B',
    primaryLight: '#2563EB',
    primaryFg:    '#ffffff',

    accent:       '#F97316',
    accentFg:     '#ffffff',

    background:   '#ffffff',
    surface:      '#F8FAFC',
    border:       '#E2E8F0',

    text:         '#0F172A',
    textMuted:    '#475569',

    dark:         '#0F172A',
    darkSurface:  '#1E293B',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '1rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;
