# Family.co Homepage - Complete Design & Technical Analysis

> **Date of analysis:** 2026-03-26
> **URL:** https://family.co/
> **Purpose:** Reference document for building a site at this quality level

---

## Table of Contents

1. [Overall Design Philosophy](#overall-design-philosophy)
2. [Typography System](#typography-system)
3. [Color System](#color-system)
4. [Spacing & Layout System](#spacing--layout-system)
5. [Navigation Bar](#navigation-bar)
6. [Section-by-Section Breakdown](#section-by-section-breakdown)
7. [Footer](#footer)
8. [Animations & Transitions](#animations--transitions)
9. [Component Patterns](#component-patterns)
10. [Responsive Breakpoints](#responsive-breakpoints)
11. [Technical Implementation Notes](#technical-implementation-notes)

---

## Overall Design Philosophy

Family.co embodies **"approachable modernity"** -- a design that feels warm, clean, and intentionally non-intimidating while maintaining sophistication. Key principles:

- **Generous whitespace**: Sections breathe with large vertical padding (6-8rem between major sections)
- **Warm neutrals**: No harsh whites or stark blacks; everything is softened (beige backgrounds, dark charcoal text)
- **Flat design with subtle depth**: No glassmorphism, no heavy 3D, no neumorphism. Cards use thin inset borders instead of drop shadows
- **Purposeful decoration**: Animated emoji carousels and micro-interactions add personality without clutter
- **Content alternation**: Sections alternate between text-heavy and image/phone-mockup-heavy, preventing visual fatigue
- **Product-first**: Phone mockups showing actual app UI are the primary visual device throughout

**Overall feel:** Warm, accessible, playful, premium. Designed to make crypto feel safe and intuitive.

---

## Typography System

### Font Families

**Primary display font -- "Family" (custom brand font):**
```css
@font-face {
  font-family: "Family";
  src: url("/fonts/Family-Regular.woff2") format("woff2"),
       url("/fonts/Family-Regular.woff") format("woff");
  /* Weights: 400 (Regular), 500 (Medium), 600 (SemiBold) */
}
```

**Secondary UI font -- "LFE Sans" (custom):**
```css
@font-face {
  font-family: "LFE Sans";
  src: url("/fonts/LFESans-Regular.woff2") format("woff2"),
       url("/fonts/LFESans-Regular.woff") format("woff");
  /* Weights: 400, 600, 700 */
}
```

**Body/system font stack:**
```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
             Helvetica, "Apple Color Emoji", Arial, sans-serif,
             "Segoe UI Emoji", "Segoe UI Symbol";
```
Inter loaded via Google Fonts (weights 200-700).

**Monospace (code):**
```css
font-family: "SF Mono", "SFMono-Regular", "Consolas", "Liberation Mono",
             Menlo, Courier, monospace;
```

### Typography Scale

| Role            | Size   | Weight | Line-Height | Letter-Spacing | Font       |
|-----------------|--------|--------|-------------|----------------|------------|
| Hero heading    | 68px   | 500    | 1.1         | -0.02em        | Family     |
| Hero (mobile)   | 44px   | 500    | 48px        | -1.35px        | Family     |
| Section heading | 32px   | 500    | 35px        | -0.69px        | Family     |
| Sub-heading     | 23px   | 500    | 25px        | -0.44px        | Family     |
| Large body      | 19px   | 400    | 27px        | -0.3px         | Inter      |
| Body            | 17px   | 400    | 26px        | -0.22px        | Inter      |
| Small body      | 15px   | 400    | 22px        | -0.13px        | Inter      |
| Caption         | 14px   | 400    | 20px        | -0.09px        | Inter      |
| Tiny/label      | 13px   | 500    | 18px        | -0.13px        | Inter      |
| Micro           | 12px   | 400    | 19px        | -0.01px        | Inter      |

**Key observations:**
- Negative letter-spacing throughout (tighter tracking) -- gives a modern, premium feel
- Headings use the custom "Family" font at weight 500 (medium)
- Body text uses Inter at weight 400
- Bold/emphasis uses weight 600
- Anti-aliased rendering: `-webkit-font-smoothing: antialiased`

### Text Selection Color
```css
::selection { background: #D8ECFC; color: #008cff; }
```

---

## Color System

### CSS Custom Properties (Design Tokens)

**Text Colors:**
```css
--heading: #343433       /* Dark charcoal -- primary headings */
--body: #494440          /* Warm dark brown -- body text */
--body-muted: #848281    /* Medium gray -- secondary text */
```

**Background Colors:**
```css
--white: #FFFFFF         /* Pure white -- primary background */
--beige: #FBFAF9         /* Warm off-white -- alternating section backgrounds */
--beige-dark: #EAEAEA    /* Darker beige -- borders, dividers */
--gray-light: #f2f0ed    /* Light warm gray -- card borders, subtle backgrounds */
--graphic-yellow-pale: #F6F4EF  /* Pale cream -- secondary button background */
```

**Brand Accent Colors:**
```css
--blue: #3784F4          /* Primary brand blue */
--orange: #FF5310        /* Vivid orange -- FAQ toggle, accents */
--red: #EF4444           /* Error red */
--purple: #9553F9        /* Purple accent */
```

**App UI Colors (used in phone mockups):**
```css
--app-green: #34C759     /* iOS-style green */
--app-blue: #018DFF      /* iOS-style blue */
--app-pink: #F966AC      /* Pink accent */
```

**Graphic/Illustration Colors:**
```css
--graphic-green: #44C67F
--graphic-blue: #7DC4FF
--graphic-purple: #5F5DE7
--graphic-gold: #F5B442
--graphic-orange: #FF5310
--graphic-stone: #F2EBE0
--graphic-outline: #B2A79A
```

**Semantic/Status Colors:**
```css
--color-valid: #00C454
--background-valid: rgba(0,196,84,0.1)
--color-invalid: #FF4E4E
--background-invalid: #fff0f0
--color-warning: #F6C30F
--background-warning: #fefae6
```

**UI Element Colors:**
```css
--focus: #848281         /* Focus ring color */
--color-anchor: #6187FE  /* Link blue */
--color-border: #E8E8E8  /* Standard border */
--twitter-blue: #343433  /* Twitter icon (uses charcoal, not brand blue) */
```

### Button Color Patterns

| Button Type    | Background     | Text Color | Border               |
|----------------|----------------|------------|----------------------|
| Primary CTA    | #171717        | #FFFFFF    | none                 |
| Secondary CTA  | #F6F4EF        | #343433    | none                 |
| Tertiary/Link  | transparent    | #1A88F8    | none (underline)     |
| Card hover     | var(--beige)   | inherited  | inset 1px gray-light |

---

## Spacing & Layout System

### Container
```css
max-width: calc(1008px + 2rem);  /* ~1040px total */
/* Alternative: max-width: 67rem (1072px) */
padding: 0 1rem;                  /* Side padding */
margin: 0 auto;                   /* Centered */
```

### Vertical Section Padding (top/bottom rhythm)

| Section Type      | Padding Top  | Padding Bottom |
|-------------------|-------------|----------------|
| Compact           | 2.75rem     | 2.5rem         |
| Standard          | 4.25rem     | 4.75rem        |
| Medium            | 5.625rem    | 5.75rem        |
| Large             | 6.25rem     | 6rem           |
| Extra large       | 7.25rem     | 6.75rem        |
| Maximum           | 8.25rem     | 7rem           |

### Gap Scale
```
1px | 3px | 6px | 8px | 11px | 12px | 16px | 20px | 24px |
2rem | 2.75rem | 3.75rem | 5rem | 5.75rem | 80px
```

### Grid Patterns
```css
/* 2-column feature layout */
grid-template-columns: repeat(2, 1fr);
gap: 5.75rem;

/* 3-column card layout */
grid-template-columns: repeat(3, 1fr);
gap: 2rem;

/* Auto-fit responsive grid */
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

/* Footer nav grid */
grid-template-columns: repeat(3, auto);
gap: 80px;
```

### Border Radius Scale
```
4px   -- focus states, minimal elements
6px   -- small components
8px   -- inputs, compact cards
12px  -- standard cards, panels, images
17px  -- UI components
32px  -- buttons (pill shape)
40px  -- large rounded images
100rem -- fully circular
7.5%  -- phone mockup frame (relative)
50%   -- perfect circles
```

---

## Navigation Bar

### Structure
```
[Logo] -------- [Developers v] [Resources v] [X/Twitter] -------- [Log In] [Get Started]
```

### Behavior
- **Fixed/sticky** at top of page
- Padding: 30px (desktop), 18px (mobile)
- Flex layout with `space-between`
- Gap between nav items: 2.25rem
- `scroll-padding-top: 128px` -- accounts for fixed nav height when anchor-scrolling

### Navigation Items

**Developers dropdown (width: 316px):**
- ConnectKit -- "Connecting a wallet, made simple"
- Family Account -- "Dedicated self-custody account"

**Resources dropdown (width: 316px):**
- Blog
- Changelog
- Help & Support
- FAQs

**Direct links:**
- X (Twitter) -- external link
- Log In -- right-aligned
- Get Started -- right-aligned, likely styled as primary button

### Dropdown behavior
- Positioned absolutely, 8px below trigger
- Hover pseudo-element bridges gap between trigger and dropdown
- Hidden on mobile (< 720px)

### Mobile menu
- Hamburger button replaces nav items below 720px
- Animated pseudo-elements for hamburger-to-X transition
- Full-screen or slide-out menu with same link structure

---

## Section-by-Section Breakdown

### SECTION 1: Hero

**Content:**
- Headline: "Your favorite crypto wallet."
- Subheadline: "Explore Ethereum with the best wallet for iOS. Interacting with crypto has never been so simple."
- Primary CTA: "Download on iOS" (dark charcoal #171717, white text, 32px border-radius, 3rem height)
- Secondary CTA: "Watch the Video" (pale cream #F6F4EF, dark text, same shape)

**Layout:**
- Centered text alignment
- Generous top padding to clear fixed nav
- CTAs side by side in a flex row with gap

**Visual:**
- Phone mockup graphic below/beside the text
- Phone container has `transform: scale(1.06)`, border-radius: 7.5%
- Phone shows app UI with video content overlay
- Clean, minimal -- text dominance with phone as supporting visual

**Typography:**
- Heading: 68px, weight 500, "Family" font, letter-spacing -0.02em
- Mobile heading: 44px, letter-spacing -1.35px
- Body: standard body size, var(--body) color

---

### SECTION 2: Feature Grid -- "Explore Ethereum in a whole new way"

**Content:**
- Section title: "Explore Ethereum in a whole new way."
- Four feature cards in a grid:
  1. **Send** -- "Send tokens and collectibles to addresses or ENS names"
  2. **Swap** -- "Trade tokens within the wallet"
  3. **Receive** -- "Get assets via your unique address"
  4. **Purchase** -- "Buy crypto via bank account (ID Required)"

**Layout:**
- Grid with 4 equal columns (likely `repeat(4, 1fr)` or `repeat(auto-fit, minmax(...)`)
- Each card has icon + title + description

**Styling:**
- Cards likely use subtle borders or background differentiation
- Icons are custom SVG
- Clean, scannable layout

---

### SECTION 3: Four Pillar Cards

**Content -- four value propositions:**
1. **Easy** -- "Whether you're a beginner or seasoned pro..."
2. **Secure** -- "Your crypto, your control. Security at every stage."
3. **Fast** -- "Uncompromising speed. Optimal performance..."
4. **Powerful** -- "Experience the full power of Ethereum..."

**Layout:**
- Grid with 4 equal cards
- Likely `repeat(4, 1fr)` on desktop, stacking on mobile

**Visual:**
- Each card has an associated emoji or icon
- Clean card design with consistent padding

---

### SECTION 4: Emoji Carousel

**Content:**
- 10 emoji images (`/assets/home/emoji-1.png` through `emoji-10.png`) repeating in an infinite loop
- Decorative horizontal scrolling strip

**Animation:**
```css
animation: hdKGda 120s linear infinite;
/* Keyframes: translateX(0%) -> translateX(-50%) */
```
- 120 seconds for full cycle -- very slow, gentle movement
- Items duplicate to create seamless loop
- Hidden on smaller mobile screens

**Layout:**
- Full-width overflow container
- Gradient fade on edges: `linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)`

---

### SECTION 5: Phone Product Demo

**Content:**
- Large phone mockup showing app interface
- Video content plays within the phone frame
- UI overlay elements

**Layout:**
- Phone container centered, scaled at 1.06x
- Content inset: 1.5% 3.3% from phone edges
- Z-index layering: images z-2, content z-1, phone z-10

**Technical:**
- `data-ui="true"` attribute for UI display toggling
- Video element inside phone frame
- Transparent background on content area

---

### SECTION 6: Send/Receive/Swap -- "All in one place"

**Content:**
- Section title: "Send, receive, swap. All in one place."
- Three demo cards with phone mockups:
  1. **Send** -- feature description + phone screenshot
  2. **Receive** -- feature description + phone screenshot
  3. **Swap** -- feature description + phone screenshot

**Feature checklist below:**
- Send & Receive
- Decentralized Swaps
- Full NFT Support
- WalletConnect Enabled
- Self-Custody
- Maximum Privacy

Each feature has descriptive sub-text.

**Layout:**
- 3-column grid on desktop (gap: 2rem)
- Single column on mobile (gap: 1.5rem)
- Phone mockups within each card

**Animations on icons:**
- Send icon: `rotate(0deg) -> rotate(-360deg)` in 1s
- Receive icon: `translateY(0%) -> translateY(100%) -> translateY(-100%) -> translateY(0%)` in 0.5s
- Swap icon: `rotate(0deg) -> rotate(360deg)` in 1s

---

### SECTION 7: NFT/Collectibles -- "Manage your collectibles"

**Content:**
- Title: "Manage your collectibles"
- Description of NFT viewing features
- "Full media support" feature callout
- "Watch demo" link with preview image

**Layout:**
- 2-column grid (text left, phone right)
- Gap: 5.75rem (desktop), 1rem (mobile)
- Padding: 5.625rem top, 4.5rem bottom
- Stacks vertically on mobile

**Phone mockup:**
- Border-radius: 12px
- Background: var(--beige)
- Shows NFT gallery interface

---

### SECTION 8: Media Type Tabs

**Content -- tab labels:**
- Images
- Video
- 3D Models
- Audio
- Interactive Models
- AR Models

**Layout:**
- Horizontal tab bar
- Each tab: width 78px, height 44px, border-radius 4px
- Active tab: background var(--gray-light)
- SVG play icon overlay on video items
- Associated phone preview updates per tab selection

---

### SECTION 9: Watching Wallets

**Content:**
- Title about wallet watching feature
- Description text
- Feature list
- "Watch demo" button
- Phone preview image

**Layout:**
- 2-column (text + phone), similar to NFT section
- Alternating left/right placement from previous section

---

### SECTION 10: Wallet Activity

**Content:**
- Human-readable transaction history feature
- Real-time monitoring
- Custom filtering features
- Phone preview showing transaction feed

**Layout:**
- Same 2-column alternating pattern

---

### SECTION 11: Security -- "Relentless protection. Restful ease."

**Content:**
- Headline: "Relentless protection. Restful ease."
- Feature list:
  - Self-Custody
  - Own Your Keys
  - No Name Required
  - No Lock-In
  - Fully Audited

**Layout:**
- 2-column grid
- Gap: 5.75rem
- Padding: 7.25rem top, 8.5rem bottom
- Stacks on mobile

---

### SECTION 12: Details -- "Details that matter"

**Content:**
- Section title: "Details that matter. We sweat the details, no matter how small."
- Four interactive detail cards:

1. **Monitor In Real-Time**
   - Mini UI showing transaction states: "0 USDC", status indicators
   - Animated states: Transaction -> Analyzing -> Safe
   - Sticky positioning on desktop

2. **Protect Your Assets**
   - Asset icons with percentage values
   - "Ethereum ETH%", "USDC USDC%"
   - Warning/protection messaging

3. **Organize Your Wallet**
   - Drag-and-drop visualization
   - Star favorites feature
   - Trash organization

4. **See Everything Clearly**
   - Multiple wallet overview
   - Grouping display
   - "Birds eye view" messaging

**Layout:**
- 2-column grid
- Gap: 1.75rem
- Padding: 7.25rem top, 6.75rem bottom

---

### SECTION 13: Onboarding -- "Effortless onboarding. Masterful management."

**Content:**
- Section title: "Effortless onboarding. Masterful management."
- Three cards:
  1. **Onboarding** -- phone preview of onboarding flow
  2. **Mission Control** -- phone preview of main dashboard
  3. **Drag and Drop** -- phone preview of reordering UI

**Layout:**
- 3-column grid on desktop
- Single column on mobile
- Gap: 34px

**Card styling:**
- Padding: 0 1.425rem 0.875rem
- Border-radius: 12px
- Background: var(--beige) #FBFAF9

---

### SECTION 14: Blog/News

**Content:**
- Two blog post cards:

1. **"The Crypto Wallet Problem -- Why We Created Family Accounts"**
   - Date: 13 May 2025
   - Preview: About seed phrase challenges in traditional wallets

2. **"Making Family Simpler & Safer"**
   - Date: 2 April 2025
   - Preview: Major upgrade announcement

**Layout:**
- 2-column grid
- Gap: 36px
- Padding: 2.75rem top, 76px bottom

**Card styling:**
- Image container: border-radius 12px, background #fbfaf9
- Hover: `transform: scale(1.02)` on image
- Margin-bottom: 5px between image and text

---

### SECTION 15: Testimonials (Twitter carousel)

**Content -- sample testimonials:**
- @floguo: "One of the best mobile apps *ever* is going to drop soon..."
- @mrdanielfeo: "The family app has some of the best UI and UX..."
- @web3emm: "Got in on the @family beta..."
- @Skytrackr: "This wallet is absolutely amazing!..."
- @dappdesigner, @m1guelpf, @shivnull, and 12+ more

**Layout:**
- Horizontal infinite scroll (same animation as emoji carousel)
- Animation: `translateX(0%) -> translateX(-50%)`, 120s linear infinite
- Hidden on mobile (< 768px)
- Padding: 8.25rem top, 7rem bottom

**Card styling:**
- Padding: 2rem
- Border-radius: 10px
- Background: var(--white)
- Border: `box-shadow: inset 0 0 0 1px var(--gray-light)`
- Hover: background changes to var(--beige)
- Twitter icon: width 1.25rem, padding-top 0.5rem

---

### SECTION 16: FAQ Accordion

**Content:**
- Expandable accordion with multiple Q&A pairs
- Questions shown, answers hidden until clicked

**Layout:**
- Single column, full width
- Gap: 0 (items stacked flush)
- Padding: 6.5rem top, 5.75rem bottom

**Accordion item styling:**
- Padding-bottom: 1.75rem
- Border-bottom: 1px solid var(--gray-light)
- Flex layout with gap 1.5rem
- Question: color var(--heading), font-weight 600, cursor pointer
- Answer: color var(--body), padding-top 0.75rem, hidden until expanded
- Toggle icon: 14px square, flex-shrink 0, color var(--orange) #FF5310, margin-top 5px

---

### SECTION 17: Final CTA

**Content:**
- Heading and descriptive call-to-action text
- CTA buttons (Download on iOS, etc.)
- Illustration positioned absolutely

**Layout:**
- Background: var(--beige)
- Padding: 4.875rem top, 5.75rem bottom (2.5rem mobile)
- Text content takes ~60% width with padding-right
- Illustration positioned on right side
- Mobile: centered, stacked vertically

---

## Footer

### Structure
```
[Logo]  [Nav Grid: 3 columns]  [Social Links]  [Legal Info]
```

### Layout
- Flex layout with `space-between`
- Padding: 4.25rem top, 6rem bottom
- Color: rgba(112, 112, 112, 0.4) -- very muted

### Logo
- Width: 20px, height: 22px
- SVG icon (not full wordmark)
- Margin-right: 70px

### Navigation Columns (3-column grid, gap: 80px)

**Column 1 -- Resources:**
- ConnectKit
- Family Account
- Blog
- Changelog
- Help & Support
- FAQs

**Column 2 -- Social/Legal:**
- X (Twitter)
- Additional legal/social links

### Social Links
- Flex layout, gap: 6px
- SVG icons
- Default color: #e4e4e4
- Hover color: rgba(34, 34, 34, 0.8)
- Smooth color transition

### Info Section
- Flex column, align flex-end (desktop), flex-start (mobile)
- Gap: 13px
- Padding-top: 2px
- Mobile: reverses to column-reverse layout

---

## Animations & Transitions

### Keyframe Animations

**1. Skeleton Loader (dLwxQl)**
```css
@keyframes dLwxQl {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}
/* Duration: 1200ms, linear, infinite */
/* Used with gradient: linear-gradient(90deg, #f3f5f7 50%, #ededed, #f3f5f7) */
```

**2. Send Rotation (hBaPda)**
```css
@keyframes hBaPda {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
/* Duration: 1s, ease-in-out */
```

**3. Receive Bounce (WxNdC)**
```css
@keyframes WxNdC {
  0% { transform: translateY(0%); }
  50% { transform: translateY(100%); }
  51% { transform: translateY(-100%); }
  100% { transform: translateY(0%); }
}
/* Duration: 0.5s, ease-in-out */
```

**4. Swap Rotation (fEWCgj)**
```css
@keyframes fEWCgj {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* Duration: 1s, ease-in-out */
```

**5. Infinite Scroll/Carousel (hdKGda)**
```css
@keyframes hdKGda {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
/* Duration: 120s, linear, infinite */
/* Used for: emoji carousel, testimonial scroll */
```

### Transition Patterns

| Element       | Property          | Duration | Easing                          |
|---------------|-------------------|----------|---------------------------------|
| General       | all               | 0.2s     | ease-out                        |
| Text/links    | color             | 140ms    | ease                            |
| Backgrounds   | background-color  | 100ms    | ease                            |
| Shadows       | box-shadow        | 0.1s     | ease                            |
| Opacity       | opacity           | 100ms    | ease-in-out                     |
| Transform     | transform         | 180ms    | ease                            |
| Premium feel  | -webkit-transform | 220ms    | cubic-bezier(0.19, 1, 0.22, 1) |

The cubic-bezier(0.19, 1, 0.22, 1) easing is notable -- it's an "ease-out-expo" curve that creates a snappy, premium-feeling motion.

### Hover Effects

- **Cards:** Background shifts to var(--beige) on hover
- **Blog images:** `transform: scale(1.02)` -- subtle zoom
- **Buttons:** Background-color transition (100ms)
- **Links:** Underline opacity change
- **Social icons:** Color from #e4e4e4 to rgba(34, 34, 34, 0.8)
- **Nav items:** SVG rotation on interaction
- **Focus-visible:** 2px solid var(--focus) outline

---

## Component Patterns

### Card Component
```css
/* Standard card */
border-radius: 12px;
background: var(--beige);  /* or var(--white) */
box-shadow: inset 0 0 0 1px var(--gray-light);  /* thin inset border */
padding: 2rem;
transition: background-color 100ms ease;

/* Hover state */
background: var(--beige);
```

### Button Component
```css
/* Primary */
background: #171717;
color: #FFFFFF;
border-radius: 32px;
height: 3rem;
padding: 0 1.5rem;  /* estimated */
font-weight: 500;
transition: background-color 100ms ease;

/* Secondary */
background: #F6F4EF;
color: #343433;
border-radius: 32px;
height: 3rem;
```

### Phone Mockup Component
```css
/* Outer frame */
border-radius: 7.5%;
transform: scale(1.06);
overflow: hidden;
position: relative;

/* Content area */
position: absolute;
inset: 1.5% 3.3%;
z-index: 1;

/* Video/image inside */
width: 100%;
height: 100%;
object-fit: cover;
```

### Accordion Component
```css
/* Item */
padding-bottom: 1.75rem;
border-bottom: 1px solid var(--gray-light);
display: flex;
gap: 1.5rem;

/* Question */
color: var(--heading);
font-weight: 600;
cursor: pointer;

/* Answer */
color: var(--body);
padding-top: 0.75rem;
/* Hidden by default, revealed on click */

/* Toggle icon */
width: 14px;
height: 14px;
flex-shrink: 0;
color: var(--orange);
margin-top: 5px;
/* Rotates on open/close */
```

### Scrolling Carousel Component
```css
/* Container */
overflow: hidden;
width: 100%;
position: relative;

/* Track */
display: flex;
animation: hdKGda 120s linear infinite;

/* Fade edges */
/* Left: */ linear-gradient(90deg, var(--beige) 0%, rgba(249,247,245,0) 100%);
/* Right: */ linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
```

---

## Responsive Breakpoints

| Breakpoint     | Width    | Key Changes                                     |
|----------------|----------|--------------------------------------------------|
| Desktop        | default  | Full multi-column layouts                        |
| Large tablet   | 920px    | Grid adjustments begin                           |
| Tablet         | 880px    | 2-column grids, reduced gaps                    |
| Small tablet   | 768px    | Primary mobile breakpoint, testimonials hidden   |
| Mobile large   | 720px    | Nav collapses to hamburger                       |
| Mobile medium  | 580px    | Further layout simplification                    |
| Mobile small   | 420px    | Compact padding, single-column everything        |
| Mobile tiny    | 410px    | Micro adjustments                                |
| Mobile minimal | 390px    | Login button hidden, extreme compact             |

### Key responsive behaviors:
- Grids collapse: 3-col -> 2-col -> 1-col
- Nav becomes hamburger at 720px
- Testimonial carousel hidden below 768px
- Font sizes reduce (68px -> 44px for hero)
- Gaps shrink (5.75rem -> 1rem)
- Section padding reduces significantly
- Footer reverses to column-reverse on mobile

---

## Technical Implementation Notes

### Framework & Build
- **Built with:** React (styled-components -- all class names are generated hashes)
- **Styled-components:** CSS-in-JS approach, evidenced by class names like `.iHjrEA`, `.blZVGu`, etc.
- **Image format:** PNG primarily (`/assets/home/emoji-*.png`, `/assets/phone.png`)
- **Video:** Embedded in phone mockups for demo animations

### Box Shadow System
```css
/* Thin inset border (most cards) */
box-shadow: inset 0 0 0 1px var(--gray-light);

/* Subtle elevation */
box-shadow: 0px 3px 16px rgba(0,0,0,0.1);

/* Light ambient */
box-shadow: 0px 1px 6px rgba(0,0,0,0.04),
            0px 0px 24px rgba(0,0,0,0.05);

/* Heavy (rare) */
box-shadow: 0 0 6px rgba(0,0,0,0.8),
            inset 0 0 6px rgba(0,0,0,0.8);
```

### Scrollbar Styling
```css
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.15);
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.25);
}
```

### Z-Index Scale
```
1   -- base elements
2   -- image overlays
3   -- higher overlays
9   -- dropdowns
10  -- phone UI, modals
9999 -- popups
214748364 -- loading bar (extreme)
```

### Image Loading
- Skeleton loader animation while images load
- Background: `linear-gradient(90deg, #f3f5f7 50%, #ededed, #f3f5f7)` with sliding animation
- Opacity transitions on load complete

### Scroll Behavior
```css
scroll-behavior: auto;  /* Not smooth -- instant scroll */
scroll-padding-top: 128px;  /* Offset for fixed navbar */
```

### Data Attributes
- `data-rmiz-*` -- Image zoom library (react-medium-image-zoom or similar)
- `data-ui="true"` -- Phone UI toggle
- `[data-app-download-button]` -- App store download tracking

---

## Design System Summary for Recreation

### To recreate this quality level, prioritize:

1. **Custom typography**: Invest in a custom or premium display font for headings. Use Inter for body.
2. **Warm color palette**: Avoid pure white (#FFF) as backgrounds -- use warm off-whites (#FBFAF9). Avoid pure black for text -- use warm charcoal (#343433).
3. **Generous spacing**: Section padding of 6-8rem vertically. Let content breathe.
4. **Subtle borders over shadows**: Use `box-shadow: inset 0 0 0 1px` instead of drop shadows for cards.
5. **Micro-interactions**: 100-220ms transitions on everything interactive. Use `cubic-bezier(0.19, 1, 0.22, 1)` for premium feel.
6. **Negative letter-spacing**: Tighten tracking on headings (-0.02em to -0.01em).
7. **Alternating backgrounds**: White and off-white sections create visual rhythm without dividers.
8. **Phone mockups**: Product screenshots inside phone frames are the primary visual device.
9. **Infinite scroll carousels**: Slow (120s), linear, seamless -- adds life without distraction.
10. **Pill-shaped buttons**: 32px border-radius on all CTAs.
11. **Minimal decoration**: No gradients, no glassmorphism, no complex backgrounds. Whitespace IS the design.
12. **Responsive with intention**: Don't just stack columns -- hide non-essential elements (testimonials), adjust typography scale, reverse layout order where it improves mobile UX.

### Color palette to copy (simplified):
```
Background:   #FFFFFF / #FBFAF9 (alternating)
Heading text: #343433
Body text:    #494440
Muted text:   #848281
Primary CTA:  #171717
Accent:       #3784F4 (blue)
Alert:        #FF5310 (orange)
Success:      #44C67F (green)
Border:       #f2f0ed
```

### Font stack to copy:
```
Headings: [Your brand font], "Inter", sans-serif -- weight 500, tight tracking
Body:     "Inter", -apple-system, sans-serif -- weight 400
```
