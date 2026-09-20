/**
 * BSA-DIU Global Animation Configuration
 * Centralized Framer Motion variants — import from here, never duplicate.
 *
 * Philosophy: subtle + smooth + premium
 * Easing: [0.22, 1, 0.36, 1] for premium feel
 */

// ─── Custom Easing ────────────────────────────────────────────────────────────
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT   = [0.4, 0, 0.2, 1];

// ─── Fade variants ────────────────────────────────────────────────────────────
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const fadeDown = {
  hidden:  { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

// ─── Scale variants ───────────────────────────────────────────────────────────
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT_EXPO },
  },
};

// ─── Stagger containers ────────────────────────────────────────────────────────
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

/** Each direct child of a stagger container */
export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

// ─── Page transition ──────────────────────────────────────────────────────────
export const pageTransition = {
  initial:  { opacity: 0, y: 8 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT_EXPO } },
  exit:     { opacity: 0, y: -4, transition: { duration: 0.2, ease: EASE_IN_OUT } },
};

// ─── Modal variants ───────────────────────────────────────────────────────────
export const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.18 } },
};

export const modalVariants = {
  hidden:  { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: { duration: 0.18, ease: EASE_IN_OUT },
  },
};

// ─── Mobile menu variants ─────────────────────────────────────────────────────
export const mobileMenuBackdrop = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
};

export const mobileMenuPanel = {
  hidden:  { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.18, ease: EASE_IN_OUT },
  },
};

export const mobileMenuStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};

export const mobileMenuLink = {
  hidden:  { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE_OUT_EXPO } },
};

// ─── Dropdown variant ─────────────────────────────────────────────────────────
export const dropdownVariants = {
  hidden:  { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

// ─── Hero sequential variants ─────────────────────────────────────────────────
export const heroBadge = {
  hidden:  { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 },
  },
};

export const heroHeading = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO, delay: 0.18 },
  },
};

export const heroSubtitle = {
  hidden:  { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.28 },
  },
};

export const heroButtons = {
  hidden:  { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.38 },
  },
};

export const heroImage = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: EASE_OUT_EXPO, delay: 0.22 },
  },
};

export const heroStats = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.5 },
  },
};

// ─── Viewport defaults ─────────────────────────────────────────────────────────
/** Standard viewport options – animate once, trigger at 15% in view */
export const VIEWPORT = { once: true, amount: 0.15 };

/** Looser trigger – useful for tall sections */
export const VIEWPORT_LOOSE = { once: true, amount: 0.08 };
