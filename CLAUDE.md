# Moonb V2 — Design System & Build Rules

## What This Is
A complete redesign of moonb.io. The goal is to replicate the design language, quality, and feel of family.co and aave.com as closely as possible, with moonb's content, custom animations, and illustrations. Competing with Superside.

## Design Philosophy
Copy family.co and aave.com as faithfully as humanly possible. Same spacing logic, same typography approach, same card styles, same animation restraint, same section rhythm. The only differences should be: moonb's content, moonb's brand color, and custom illustrations/animations unique to moonb. When in doubt about any design decision, look at what family.co or aave.com does and do that.

## What Moonb Is
- An embedded creative department for companies of all sizes
- Provides dedicated video production, design, motion graphics, and animation teams
- Each client gets a dedicated Creative Director
- Notable clients include Dell, Intel, Toyota, Nestle, Microsoft, Opko Health, Shionogi, Refine Labs
- Based in Lisbon, Portugal, serving US and global clients
- For ANY company that needs ongoing creative production, not just enterprise

## What Moonb Is NOT
- NOT an agency (never call it an agency)
- NOT a subscription service
- NOT a marketplace or platform  
- NOT a replacement for existing teams (frame as "support" or "alternative to hiring")

## Banned Words (absolute, no exceptions)
subscription, flat fee, flat monthly fee, subscribe, plan (in pricing context), cheap, affordable, budget, discount, deal, offer, unlimited

## CRITICAL: No Legacy Design Influence
The previous moonb project (in /moonb/moonb-website/) has a completely different design direction (purple/green palette, liquid glass, paper textures, GSAP, Poppins font, rounded mega-sections). NONE of that applies here. Zero. Do not reference its DESIGN.md, DESIGN_BRIEF.md, global.css, or any component styles. The ONLY references are family.co and aave.com. If something from the old moonb project conflicts with family.co/aave.com, family.co/aave.com wins. Always. The old project is only useful for: business context (what moonb does), SEO keywords, banned words, and content (testimonials, work samples, videos).

## Banned Formatting
Never use em dashes. Use commas, semicolons, periods, or parentheses.

## Preferred Language
Dedicated creative team, embedded creative department, creative infrastructure, creative partner, ongoing creative partnership, your Creative Director, predictable monthly investment, human-made, taste at scale.

## Copy Tone
Match family.co's tone exactly: warm, friendly, approachable, confident without being corporate. Short sentences. Feels like a friend explaining something cool, not a sales pitch. Direct, concise, no filler. NO corporate/enterprise jargon.

## Tech Stack
- Framework: Astro 5.x (zero JS by default)
- Styling: Vanilla CSS with custom properties (no Tailwind, no CSS frameworks)
- Animations: CSS @keyframes + Intersection Observer (no GSAP, no Framer Motion)
- CMS: Sanity (wire up later, hardcode content for now)
- Hosting: Vercel
- Video: Vimeo embeds or self-hosted MP4
- Fonts: FT Regola Neue (or Inter as free alternative) — self-hosted for speed

## Design References — COPY THESE SITES
- family.co — PRIMARY reference for everything: spacing, typography, cards, buttons, section rhythm, nav, footer, animation approach, warmth, illustrations
- aave.com — EQUAL reference: button styles (fully round/pill), section variety, dark sections, blog preview, illustration style (semicircles, abstract shapes), FT Regola Neue, color usage
- superside.com — Product/section IDEAS only (not design): how they structure services, pricing approach, "made for" targeting, comparison sections, ROI messaging
- See /references/ folder for detailed analysis documents
- IMPORTANT: When any design decision conflicts between old moonb instructions and family.co/aave.com, ALWAYS follow family.co/aave.com

## Color System (like family.co + aave.com — natural color, not B&W gimmick)
- Backgrounds: white #FFFFFF, warm off-white #FBFAF9 (family.co's --beige), alternating between sections
- Headings: dark charcoal #343433 (family.co) or #1A1A1A
- Body text: warm dark #494440 (family.co)
- Muted text: #848281
- Borders: #E8E8E8 (subtle, like family.co)
- Primary button: #171717 with white text (exactly like family.co)
- Secondary button: #F6F4EF with dark text (exactly like family.co)
- Accent color: used naturally throughout (not hidden behind scroll animations)
- NO B&W-to-color gimmick. Use color naturally like both reference sites do

## Typography (FT Regola Neue — same as aave.com)
- Headings: FT Regola Neue, Medium (500) or Semibold (600), 48-72px, letter-spacing -0.02em
- Body: Inter, Regular (400), 16-18px, line-height 1.6
- Small/labels: Inter, Medium (500), 13-14px
- Hierarchy through size contrast AND font family contrast (Regola for headings, Inter for body)
- Negative letter-spacing on ALL text (tighter = more premium)
- Font fallback while loading: Inter from Google Fonts as fallback for Regola

## Spacing
- 8px base grid
- Sections: 96-128px vertical padding
- Cards: 24-32px internal padding
- Maximum content width: 1080px
- Generous whitespace — when in doubt, add more space

## Border Radius (match aave.com exactly)
- Buttons: 9999px (full pill/round — like aave.com)
- Cards: 12-16px
- Sections: 0 (clean edges)
- Images: 8-12px
- Nav CTA button: full pill
- Tags/pills: full pill

## Shadows
- Cards: `0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)` (inset border style, like family.co)
- Hover: slight lift `0 4px 12px rgba(0,0,0,0.06)`
- No heavy shadows anywhere

## Animation Rules
1. Scroll-reveal: Elements fade in (opacity 0→1) + slide up (translateY 20px→0) on viewport entry
2. Stagger: Cards in a grid animate with 80ms delay between each
3. Text color: Headlines start #1A1A1A, specific words animate to accent color on scroll
4. Timing: 500ms duration, cubic-bezier(0.19, 1, 0.22, 1) easing (the family.co curve)
5. NEVER: scroll-jacking, cursor effects, loading screens, content-blocking animations
6. All animations via CSS + Intersection Observer — no JS animation libraries

## Component Patterns

### Card
- White background (#FFFFFF) on off-white sections, or off-white on white sections
- 12px border-radius
- Subtle inset border: `box-shadow: inset 0 0 0 1px rgba(0,0,0,0.06)`
- 24-32px padding
- Hover: background shifts slightly, subtle lift

### Button (Primary) — like aave.com
- Background: #1A1A1A (near-black)
- Text: #FFFFFF
- Padding: 12px 28px
- Border-radius: 9999px (full pill, like aave)
- Font-weight: 500
- Font-size: 15px
- Hover: lighten to #333, subtle lift

### Button (Secondary) — like aave.com
- Background: transparent or #F5F5F3
- Text: #1A1A1A
- Border: 1px solid #D4D4D4
- Border-radius: 9999px (full pill)
- Same sizing as primary
- Hover: background fills slightly

### Navigation
- Fixed top, centered
- Clean solid background (not glass — this isn't the old moonb)
- Logo left, links center, CTA right
- Compact, 56px height

### Section
- Full-width, centered content (max 1080px)
- 96-128px vertical padding
- Background alternates: white → off-white → white
- No rounded section corners (clean, modern)

## Homepage Sections (in order)
1. **Hero** — Massive typographic headline ("Your creative team, without the overhead."), short subtext, 2 pill CTAs ("Book a Call" primary, "Watch Showreel" scrolls to video). NO image/video in hero. The typography IS the design. Clean, centered, massive whitespace like family.co. Showreel URL: https://vimeo.com/1084258404/bf1bb4d67b
2. **Client logos strip** — Grayscale marquee, subtle, continuous scroll like family.co's emoji carousel
3. **"Made for" section** — Animated role pills (Creative Directors, CMOs, Marketing Leaders, Founders, Brand Teams, Content Teams). Click one and right side changes with different illustration + copy. Like Wispr Flow's audience section
4. **What we do / Services overview** — Cards or tabs showing Design, Video, Motion Graphics, Animation, Strategy. With animated illustrations inside each (like family.co's feature grid)
5. **Feature cards grid** — 6 cards with mini UI mockups inside showing moonb value props (dedicated CD, fast turnaround, quality output, etc.) Exactly like family.co's "Explore Ethereum" grid
6. **Work showcase** — Large case study cards showing actual moonb work. Horizontal scroll or auto-cycling
7. **How it works** — 3-4 clean steps with animated SVG process flow + embedded video. Like aave's process sections
8. **Stats/numbers** — Key metrics animated on scroll (projects delivered, client retention, etc.) Like aave's stats bar
9. **Social proof** — Testimonial cards, scrolling carousel like family.co
10. **Blog preview** — 2-3 latest blog post cards, like aave's blog section
11. **Comparison section** — "Moonb vs hiring in-house" or "vs traditional agencies" (Superside does this well)
12. **CTA** — Dark section, big headline, one pill button
13. **FAQ** — Collapsed accordion, minimal
14. **Footer** — Clean, organized columns like aave/family.co

## Quality Checklist (must pass before presenting ANY section)
- [ ] Typography hierarchy is clear (one dominant size, supporting sizes are notably smaller)
- [ ] Spacing feels generous, never cramped
- [ ] Colors are strictly B&W with accent appearing only through animation
- [ ] Border-radius is consistent (12px cards, 8px buttons)
- [ ] Shadows are barely visible (inset borders, not drop shadows)
- [ ] Animations are smooth, purposeful, never flashy
- [ ] Mobile responsive
- [ ] No generic "template" feel — every section feels intentional
- [ ] Compared against family.co reference and matches quality level

## Build Process
1. Build one section at a time
2. Preview and screenshot after each section
3. Self-check against quality checklist
4. Get user feedback before moving to next section
5. Minimum 2 rounds of refinement per section

## SEO Requirements
- Title formula: [Keyword] | Moonb (under 60 chars)
- Meta formula: What Moonb does + proof point (under 155 chars)
- All pages need: title, meta description, og:image, structured data
- Service pages target specific keywords (graphic-design, motion-graphics, etc.)
