# Moonb V2 — Design Tokens

## Colors

### Base
--color-black: #1A1A1A;
--color-white: #FFFFFF;
--color-off-white: #FAFAF8;
--color-gray-50: #F5F5F3;
--color-gray-100: #EBEBEB;
--color-gray-200: #D4D4D4;
--color-gray-300: #A3A3A3;
--color-gray-400: #737373;
--color-gray-500: #525252;
--color-gray-600: #404040;
--color-gray-700: #2D2D2D;

### Accent (revealed through animation)
--color-accent: #0D9488;
--color-accent-light: #14B8A6;
--color-accent-glow: rgba(13, 148, 136, 0.15);

### Text
--color-text-primary: #1A1A1A;
--color-text-secondary: #525252;
--color-text-muted: #A3A3A3;
--color-text-on-dark: #FAFAF8;

### Backgrounds
--bg-white: #FFFFFF;
--bg-off-white: #FAFAF8;
--bg-dark: #1A1A1A;
--bg-dark-soft: #2D2D2D;

## Typography

### Font Family
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

### Font Sizes
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 28px;
--text-4xl: 36px;
--text-5xl: 48px;
--text-6xl: 56px;
--text-7xl: 72px;

### Font Weights
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

### Line Heights
--leading-tight: 1.1;
--leading-snug: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.6;

### Letter Spacing
--tracking-tight: -0.04em;
--tracking-snug: -0.02em;
--tracking-normal: 0;

## Spacing (8px base)
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;

## Border Radius (aave.com style — pill buttons)
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-pill: 9999px;

## Shadows
--shadow-card: inset 0 0 0 1px rgba(0,0,0,0.06);
--shadow-card-hover: 0 4px 12px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.06);
--shadow-elevated: 0 8px 24px rgba(0,0,0,0.08);
--shadow-nav: 0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04);

## Layout
--max-width: 1080px;
--max-width-narrow: 720px;
--nav-height: 56px;
--section-padding: 96px;

## Z-Index
--z-base: 0;
--z-above: 10;
--z-nav: 100;
--z-modal: 200;
--z-toast: 300;

## Animation
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-reveal: 800ms;
--ease-out: cubic-bezier(0.19, 1, 0.22, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--stagger-delay: 80ms;

## Responsive Breakpoints
--bp-sm: 480px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
