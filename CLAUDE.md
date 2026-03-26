# Moonb V2 — Design System & Build Rules

## What This Is
A complete redesign of moonb.io inspired by family.co (Benji Taylor) and aave.com. 
Enterprise creative production company site competing with Superside.

## Design Philosophy
"Quiet premium" — confidence through restraint. B&W base with color appearing through scroll-triggered animations. Every pixel of spacing, every font weight, every animation timing must be perfect. The precision IS the design.

## What Moonb Is
- An embedded creative department for enterprise brands
- Provides dedicated video production, design, motion graphics, and animation teams
- Each client gets a dedicated Creative Director
- Enterprise clients: Dell, Intel, Toyota, Nestle, Microsoft, Opko Health, Shionogi, Refine Labs
- Based in Lisbon, Portugal, serving US and global enterprise clients

## What Moonb Is NOT
- NOT an agency (never call it an agency)
- NOT a subscription service
- NOT a marketplace or platform  
- NOT a replacement for existing teams (frame as "support" or "alternative to hiring")

## Banned Words (absolute, no exceptions)
subscription, flat fee, flat monthly fee, subscribe, plan (in pricing context), cheap, affordable, budget, discount, deal, offer, unlimited

## Banned Formatting
Never use em dashes. Use commas, semicolons, periods, or parentheses.

## Preferred Language
Dedicated creative team, embedded creative department, creative infrastructure, creative partner, ongoing creative partnership, your Creative Director, predictable monthly investment, enterprise-grade, human-made, taste at scale.

## Copy Tone
Confident but approachable. Think family.co warmth meets enterprise credibility. Direct, concise, no filler. Sell through clarity, not hype.

## Tech Stack
- Framework: Astro 5.x (zero JS by default)
- Styling: Vanilla CSS with custom properties (no Tailwind, no CSS frameworks)
- Animations: CSS @keyframes + Intersection Observer (no GSAP, no Framer Motion)
- CMS: Sanity (wire up later, hardcode content for now)
- Hosting: Vercel
- Video: Vimeo embeds or self-hosted MP4
- Fonts: FT Regola Neue (or Inter as free alternative) — self-hosted for speed

## Design References
- family.co — THE primary reference. Study: spacing, typography scale, card design, section rhythm, animation restraint
- aave.com — Secondary reference. Study: color strategy, illustration style (semicircles), dark/light section flow, FT Regola Neue usage
- See /references/ folder for detailed analysis documents

## Color System
- Base: near-black #1A1A1A, white #FFFFFF, warm off-white #FAFAF8
- All UI starts monochrome — buttons, cards, nav, type
- Color appears ONLY through: scroll-triggered text highlights, hover states, animated accents
- Accent color: a refined teal/cyan that reveals itself as you scroll deeper
- The site "comes alive" with color as you explore

## Typography
- Headings: Inter (700 weight), large sizes (48-72px), tight letter-spacing (-0.02em to -0.04em)
- Body: Inter (400 weight), 16-18px, line-height 1.6
- Hierarchy through size contrast, not weight variation
- All text starts near-black, color appears through animation

## Spacing
- 8px base grid
- Sections: 96-128px vertical padding
- Cards: 24-32px internal padding
- Maximum content width: 1080px
- Generous whitespace — when in doubt, add more space

## Border Radius
- Cards: 12-16px
- Buttons: 8-10px (NOT full pill — that's too playful for enterprise)
- Sections: 0 (clean edges)
- Images: 8-12px

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

### Button (Primary)
- Background: #1A1A1A (near-black)
- Text: #FFFFFF
- Padding: 12px 24px
- Border-radius: 8px
- Font-weight: 500
- Hover: lighten to #333, lift 1px

### Button (Secondary)  
- Background: #F5F5F3 (light gray)
- Text: #1A1A1A
- Same sizing as primary
- Hover: darken background slightly

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
1. Hero — Headline, subtext, 2 CTAs ("Book a Call" primary, "Watch Showreel" secondary opens video modal)
2. Client logos strip — Grayscale, subtle, no fanfare
3. "Made for" — Animated role pills (Creative Directors, CMOs, Marketing Leaders, etc.) with changing content
4. Feature cards grid — 6 cards with mini UI mockups showing moonb's value props (like family.co's feature grid)
5. Work showcase — Large case study cards, one at a time, auto-cycling or horizontal scroll
6. How it works — 3 clean steps with animated SVG connecting lines + embedded process video
7. Social proof — Testimonial cards + client stats
8. CTA — Dark section, big headline, one button
9. FAQ — Collapsed accordion, minimal
10. Footer — Clean, organized columns

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
