# AAVE.COM Homepage Deep Analysis

> Reference document for site build. Analysis conducted March 2026.
> Sources: Direct site scraping, Aave brand kit (GitHub), design case studies, industry coverage.

---

## Table of Contents

1. [Design Philosophy & Rebrand Context](#design-philosophy--rebrand-context)
2. [Navigation](#navigation)
3. [Hero Section](#hero-section)
4. [Integration / Social Proof Section](#integration--social-proof-section)
5. [About Aave Section](#about-aave-section)
6. [Why Choose Aave (Stats) Section](#why-choose-aave-stats-section)
7. [Features Section ("Your Money, Your Choice")](#features-section-your-money-your-choice)
8. [Security Section](#security-section)
9. [GHO Stablecoin Section](#gho-stablecoin-section)
10. [Ecosystem Section](#ecosystem-section)
11. [Governance Section](#governance-section)
12. [Blog / News Section](#blog--news-section)
13. [FAQ Section](#faq-section)
14. [Email Signup Section](#email-signup-section)
15. [Footer](#footer)
16. [Color System](#color-system)
17. [Typography System](#typography-system)
18. [Button & Component Styles](#button--component-styles)
19. [Illustration & Visual Language](#illustration--visual-language)
20. [Animation & Interaction Patterns](#animation--interaction-patterns)
21. [Section Transitions & Flow Strategy](#section-transitions--flow-strategy)
22. [Dark vs Light Strategy](#dark-vs-light-strategy)
23. [Tech Stack](#tech-stack)
24. [Key People & Design Credits](#key-people--design-credits)
25. [Design Case Study Notes](#design-case-study-notes)

---

## Design Philosophy & Rebrand Context

The current aave.com launched in late 2024/early 2025 as a complete rebrand. The previous site used a dark, noir aesthetic with deep purples, blues, and black backgrounds featuring abstract ethereal gradients. The rebrand flipped the script entirely.

**Before (Pre-2024):** Dark mode DeFi aesthetic. Deep purples, blues, black. Abstract ethereal gradients. Information-dense. Targeted crypto-native audience.

**After (Current):** Playful minimalism. White/light backgrounds with bright pastels. Simple colorful diagrams. Conversion-optimized. Targeting mainstream adoption.

**Strategic rationale:** As Aave expanded across multiple chains, launched Aave Arc for institutions, built the GHO stablecoin, and integrated with traditional finance, the brand needed to evolve from a "crypto-native protocol" into credible global financial infrastructure. The redesign trades information density for conversion optimization, signaling that Aave now prioritizes growth over preaching to the converted.

**Information hierarchy pattern:** Headline -> Value proposition -> Visual proof -> Options -> Detailed information. Each section has a single focus.

---

## Navigation

### Structure
- **Layout:** Horizontal sticky navigation bar, full-width
- **Logo:** Aave Ghost Logomark + "aave" wordmark on the left
- **Primary nav items (center/right):** Products, Resources, Developers, About
- **CTA (far right):** Primary action button

### Dropdown Menus

**Products:**
- Aave for Web
- Aave App (marked "New" with a badge)

**Resources:**
- Blog
- Brand
- FAQ
- Help & Support
- Governance

**Developers:**
- Build
- Case Studies
- Documentation
- Security
- Bug Bounty

**About:**
- Aave Labs
- Careers

### Nav Styling
- Clean, minimal design with generous horizontal spacing
- Transparent background that becomes solid on scroll (likely white/light with subtle blur)
- Text in dark neutral color
- Dropdown menus are clean, no heavy borders or shadows
- "New" badge uses accent color (likely teal or purple) as a small pill/tag

---

## Hero Section

### Content
- **Headline:** "Say hello to New Aave App"
- **Subheadline:** "Earn up to 6.50% on your stablecoins with industry-leading interest rates and balance protection up to $1M."
- **CTA Button:** "Get Early Access"

### Layout
- Full-width banner section
- Two-column layout: text content on the left, visual/product imagery on the right
- Generous vertical padding (likely 120-160px top/bottom)
- Text is left-aligned, vertically centered

### Visual Elements
- **Image carousel** on the right side featuring product interface mockups (4 rotating images)
- 3 hero background images showing product interface variations
- Smooth crossfade transitions between carousel images
- The product mockups appear to show the Aave App interface on light backgrounds with colorful UI elements

### Typography
- Headline: FT Regola Neue, likely Semibold or Bold, large display size (48-64px estimated)
- Subheadline: Inter, Regular weight, 18-20px, muted/secondary color
- Clear vertical spacing between headline, subheadline, and CTA

### Colors
- Light/white background for the hero section
- Dark text (#211D1D or similar near-black from the neutral palette)
- CTA button likely uses primary brand color (purple or teal)

---

## Integration / Social Proof Section

### Content
- **Headline:** "The best build with Aave."
- **Subtext:** "Reach millions of users and access billions in capital with a few lines of code."
- **CTAs:** "Start Building" and "Contact Us" (two buttons, primary + secondary)

### Testimonial Cards (5 quotes in a grid)
1. **Igor Teslya** - MetaMask Institutional: Emphasizes DeFi leadership and governance
2. **Andrew Koller** - Engineer (Kraken/Ink): Highlights safety record and risk management
3. **Jeremy Allaire** - Circle Co-Founder/CEO: Notes USDC distribution partnership
4. **Sergey Nazarov** - Chainlink Co-Founder: Praises security standards
5. **Paolo Ardoino** - Tether CEO: Discusses USDT ecosystem growth

### Layout
- Section headline centered at top
- Grid of testimonial/quote cards below (likely 2-3 columns)
- Each card contains: quote text, person's name, title, company/organization
- Cards are visually distinct with subtle borders or background differentiation

### Card Component Pattern
- Clean card with generous internal padding
- Quote text in Inter (body font)
- Attribution in smaller text, possibly with company logo or avatar
- Subtle card background (white or very light gray) with minimal border
- No heavy shadows -- flat or very subtle elevation

---

## About Aave Section

### Content
- **Headline:** "About Aave."
- **Subheadline:** "Earn interest. Borrow when you need. 24/7."

### Two-Column Layout
- **Left column (Supply):** "Earn interest by supplying assets to the lending network."
- **Right column (Borrow):** "Borrow against your collateral from across multiple networks and assets."

### Layout
- Clean two-column split
- Each column likely has an accompanying illustration or icon
- Headline centered above the columns
- Generous whitespace between headline and columns

### Visual Elements
- Likely uses colorful circular/geometric illustrations to represent Supply and Borrow concepts
- The illustrations follow Aave's geometric visual language with semicircular motifs

---

## Why Choose Aave (Stats) Section

### Content
- **Headline:** "Why choose Aave?"
- **Context line:** "Aave handles tens of billions of dollars across 12+ networks."

### Statistics Grid (4 key metrics)
1. **Net deposits** supplied across 12+ networks (large number, likely $XX.XB format)
2. **Volume** past 30 days (transaction volume figure)
3. **Average stablecoin supply APY** -- Ethereum network, past year
4. **Average stablecoin borrow APR** -- Ethereum network, past year

### Layout
- Headline centered or left-aligned at top
- Stats displayed in a 2x2 or 4-column grid
- Each stat: large number (display typography) + descriptive label below
- Numbers likely animate/count up on scroll into view

### Typography
- Stat numbers: FT Regola Neue, Bold or Semibold, very large display size (40-56px+)
- Stat labels: Inter, Regular, smaller size (14-16px), muted color
- Possibly using Roboto Mono for the stat numbers (monospace for numerical data)

---

## Features Section ("Your Money, Your Choice")

### Content
- **Headline:** "Your money, your choice."

### Four Feature Cards
1. **Earn** -- "Earn interest lending out assets."
2. **Swap** -- "Swap assets, even those borrowed or supplied."
3. **Save** -- "Save and earn yield with Aave's native stablecoin GHO."
4. **Health Factor** -- "Easily track your loans."

### Layout
- 4-column grid (or 2x2 on smaller screens)
- Each card has: icon/illustration, feature title, short description
- Cards are uniform in size
- Colorful illustrations make abstract DeFi concepts visual

### Visual Elements
- Each card features a unique colorful illustration
- Illustrations use the brand's circular/geometric visual language
- Colors from the extended palette (teal, gold, blue, purple)
- The illustrations are simple and playful, making DeFi comprehensible rather than intimidating

---

## Security Section

### Content
- **Headline:** "Serious security."
- **Subheadline:** "Peace of mind by design."

### Four Security Cards
1. **Extensive Audits**
   - "Peace of mind supported by multiple audits by the world's leading security firms."
   - CTA: "Learn More" -> /security

2. **Bug Bounty**
   - "Security is a top priority. Report vulnerabilities or bugs responsibly and get rewarded."
   - CTA: "Learn More" -> Immunefi

3. **Shortfall Secured**
   - "The Aave Protocol is secured with a backstop against protocol insolvency."
   - CTA: "Learn More"

4. **5 Years Strong**
   - "Aave is leading the DeFi Renaissance, committed to its mission of bringing global finance onchain."
   - CTA: "Learn More"

### Layout
- 2x2 grid or 4-column layout
- Each card: title, description paragraph, "Learn More" link
- Likely has a darker or contrasting background section (this is a trust-building section)
- Cards may have subtle icons or visual indicators

### Design Pattern
- This section likely uses a darker background (navy/charcoal from the neutral palette) to create visual contrast and gravitas for the security message
- "Learn More" links are inline text links, not large buttons
- Clean, text-forward design -- security communicates through clarity, not flashiness

---

## GHO Stablecoin Section

### Content
- **Headline:** "GHO"
- **Subheadline:** "GHO is a decentralized stablecoin powered by Aave."
- **CTA:** "Learn More" -> /gho

### Data Points
- **Collateralization** (30 Day Avg): Percentage stat
- **GHO Minted** (1 Yr): Volume stat

### Layout
- Likely a distinct section with its own visual identity
- May feature the GHO brand colors (could use gold/amber from the palette)
- Stats displayed prominently alongside the description
- Possibly accompanied by a unique GHO illustration

---

## Ecosystem Section

### Content
- **Headline:** "Aave everywhere."
- **Subheadline:** "Join Aave's growing constellation of builders."

### Partner/Builder Grid (21+ projects)
Includes: Aave Chan Initiative, Paladin, TokenLogic, Token Terminal, Instadapp, Skate, Messari, Dune, Notional, Chaos Labs, Bored Ghost Developing, DefiSaver, Spectra, Idle, Pendle, DefiLlama, Brahma, Symbiosis, and more.

### Layout
- Logo grid/wall pattern
- Likely 4-6 columns of partner logos
- Clean, evenly spaced grid
- Logos may be monochrome (grayscale) or use their native colors
- Possibly interactive -- logos may have hover states or link out

---

## Governance Section

### Content
- **Headline:** "Governed by you & others."
- **Body:** "AAVE token holders guide the Aave Protocol via procedures, voting, and smart contract execution."
- **CTA:** "Go to the Forum"
- **Key stat:** Token Holders count (214,189 documented)

### Layout
- Single-column centered layout
- Large headline, body text, then stat
- CTA button below
- May feature a governance-themed illustration

---

## Blog / News Section

### Content
- **Headline:** "Latest from Aave."
- **CTA:** "View the Blog" (top right, likely a text link)

### Three Blog Cards
1. **"Aave Powers Yield for Whop's 21M+ Users"** -- Category: News
2. **"Aave V4's Reinvestment Module"** -- Category: Research
3. **"Security by Design: Aave V4 Governance Security Update"** -- Category: News

### Card Structure
- Thumbnail image (top)
- Category tag/label (small pill or text)
- Headline (linked)
- Excerpt text (2-3 lines)
- Clean card borders, minimal shadow

### Layout
- 3-column grid for the cards
- Section headline + "View the Blog" link at top (flex between them)
- Cards are uniform height with image aspect ratio maintained

---

## FAQ Section

### Content
- **Headline:** "FAQs"
- **CTA at bottom:** "See More" -> /faq

### Four Accordion Items
1. "What is Aave?"
2. "Where are supplied tokens stored?"
3. "Does Aave have risks?"
4. "What is the Aave token?"

### Layout
- Full-width accordion/collapsible pattern
- Each item: question text + expand/collapse indicator (chevron or plus icon)
- Expanded state reveals answer paragraph
- Clean divider lines between items
- Likely on a light background

---

## Email Signup Section

### Content
- **Headline:** "Be the first to hear about Aave Labs news."
- **Input:** Email address text field
- **CTA:** "Sign Up" button

### Layout
- Centered single-column layout
- Inline form: input field + button side by side
- Minimal, clean design
- Possibly on a light or contrasting background strip

---

## Footer

### Structure
Multi-column layout with legal disclaimer at top and navigation links below.

### Disclaimer
Long legal text at top of footer explaining that aave.com provides information about the decentralized protocol, not custodial services.

### Link Columns

**Resources:** Blog, Brand, FAQ, Help & Support, Governance

**Developers:** Build, Case Studies, Documentation, Technical Paper, Security, Bug Bounty

**About:** Aave Labs, Careers

**Legal & Privacy:** Privacy Policy, Terms of Service, Contact, Press, Manage Analytics

### Social Icons (bottom row)
X (Twitter), Instagram, TikTok, LinkedIn, Discord, GitHub, Dune Analytics

### Footer Styling
- Dark background (likely dark neutral #211D1D or similar)
- Light/white text
- Links in muted white/gray, hover to brighter white
- Social icons as small icon buttons
- Generous padding and clean column alignment

---

## Color System

### Primary Palette

The brand's foundational colors are **Gray** and **Purple** scales, used for the logomark, wordmark, and critical visual communications.

| Role | Light | Mid | Dark |
|------|-------|-----|------|
| **Purple** | #E2E0FF | #BDBBFF | #9896FF |
| **Teal** | #83EEE8 | #39BEB7 | #00827B |
| **Gold** | #FFF7A5 | #FFD400 | #FFB400 |
| **Blue** | #96E9FF | #00AEFF | #008AFF |
| **Red/Orange** | #FFC38B | #FF8130 | #FF3200 |
| **Cyan** | #D9F7FF | #A7E9FD | #39D1F9 |
| **Navy** | #A7D4FF | #5589C5 | #00498B |
| **Neutral** | #E6E6E6 | #847E7E | #211D1D |

### Legacy/Alternate Brand Colors
- Aave Purple: #B6509E
- Aave Blue/Teal: #2EBAC6

### Color Usage Strategy
- **Backgrounds:** Predominantly white/light for most sections. Dark (#211D1D or similar navy) for footer and possibly security/trust sections.
- **Accents:** Purple and teal are the primary accent colors for CTAs, links, and highlights.
- **Illustrations:** Use the full extended palette -- each feature/concept gets a unique color from the palette.
- **Text:** Dark neutral (#211D1D) for body copy on light backgrounds. White/light for text on dark sections.
- **Muted text:** #847E7E for secondary/descriptive text.

### Dark vs Light Section Strategy
The homepage primarily uses light/white backgrounds, reserving dark backgrounds for:
1. **Footer** -- always dark
2. **Security section** -- likely dark for gravitas and trust
3. **Possible hero variant** -- some hero states may use darker backgrounds

The overwhelming strategy is LIGHT -- this is the key differentiator from the old dark-mode Aave. The playful, accessible feel comes from white space + colorful illustrations.

---

## Typography System

### Font Families

| Font | Role | License | Source |
|------|------|---------|--------|
| **FT Regola Neue** | Headlines, display text | Commercial (purchased from Formula Type) | formulatype.com |
| **Inter** | Body text, descriptions, UI | Free, open source | Google Fonts / variable font |
| **Roboto Mono** | Code snippets, monospace data | Free, open source | Google Fonts |

### FT Regola Neue Details
- **Classification:** Geo-grotesque (geometric + grotesque hybrid)
- **Character:** Circular letterforms that complement Aave's semicircular brand motifs
- **Key rule:** Must use the single-storey 'a' variant in all communications (the font offers two 'a' styles)
- **Available weights:** Regular (400), Medium (500), Semibold (600), Bold (700), plus Italics
- **Font-display:** `swap` (for optimal web performance)

### Weight Usage Rules
| Weight | Usage |
|--------|-------|
| Regular (400) | Extended body text (rarely used -- Inter handles most body text) |
| Medium (500) | Headlines AND substantial text blocks |
| Semibold (600) | Headlines only, or text emphasis |
| Bold (700) | Display numbers, key stats |

### Typography Hierarchy (Estimated Sizes)

| Element | Font | Weight | Size (est.) | Line Height |
|---------|------|--------|-------------|-------------|
| Hero headline | FT Regola Neue | Semibold/Bold | 56-72px | 1.1 |
| Section headlines | FT Regola Neue | Medium/Semibold | 40-48px | 1.15 |
| Card titles | FT Regola Neue | Medium | 24-28px | 1.2 |
| Subheadlines | Inter | Regular | 18-20px | 1.5 |
| Body text | Inter | Regular (400) | 16px | 1.6 |
| Small/caption text | Inter | Regular | 14px | 1.5 |
| Stat numbers | FT Regola Neue or Roboto Mono | Bold | 40-56px | 1.1 |
| Nav items | Inter | Medium (500) | 14-16px | 1.0 |
| Button text | Inter | Medium/Semibold | 14-16px | 1.0 |
| Code/technical | Roboto Mono | Regular | 14px | 1.5 |

---

## Button & Component Styles

### Primary Button
- Solid fill using primary brand color (purple #9896FF or teal #00827B)
- White text
- Rounded corners (likely 8-12px border-radius, or possibly fully rounded/pill-shaped)
- Generous padding (12-16px vertical, 24-32px horizontal)
- Hover state: slight color shift or opacity change
- No heavy shadows

### Secondary Button
- Outlined/bordered variant
- Transparent or white background
- Border in brand color
- Text in brand color
- Same border-radius and padding as primary

### Text Link / Tertiary CTA
- "Learn More" style links
- Text only, no background or border
- Brand color text with possible arrow/chevron icon
- Underline on hover

### Card Components
- **Background:** White or very light (#F5F5F5 range)
- **Border:** Subtle, 1px, light gray (#E6E6E6)
- **Border-radius:** 12-16px (modern, rounded corners)
- **Padding:** 24-32px internal
- **Shadow:** None or very subtle (0 2px 8px rgba(0,0,0,0.04) range)
- **Hover:** Possible subtle lift or border color change

### Testimonial Card
- Quote text in slightly larger body size
- Attribution (name, title) in smaller, muted text
- Possibly includes company logo or avatar
- Clean separation between quote and attribution

### Blog Card
- Image at top (aspect ratio ~16:9 or 3:2)
- Category tag below image (small pill/badge)
- Title text (linked, semibold)
- Excerpt below title (regular weight, muted)
- No heavy decoration

### FAQ Accordion
- Full-width items with divider lines between them
- Question text: Medium/Semibold weight
- Expand indicator: Chevron or plus/minus icon on the right
- Smooth expand/collapse animation
- Answer text: Regular weight, slightly muted

---

## Illustration & Visual Language

### Core Visual Elements

**The Semicircle**
- Derived from the Ghost Logomark's foundational shape
- Functions as a modular accent element
- Can be: standalone, layered, rotated, overlapped to create complex patterns
- Text must never overlap these elements
- Used throughout the site as decorative accents and section dividers

**Ronnie the Ghost (Mascot)**
- The Ghost Logomark character rendered in various complexity levels
- Semitransparent, designed to blend with solid backgrounds
- Used to clarify different aspects of the Aave ecosystem
- Three derivative versions with unique eye treatments:
  - **Community:** Star-shaped eyes
  - **Events:** Heart-shaped eyes
  - **DAO:** Rhombus-shaped eyes

### Illustration Style
- **Geometric and circular motifs** -- circles, semicircles, arcs
- **Colorful and playful** -- uses the full extended palette
- **Simple, flat design** -- no heavy gradients, 3D effects, or photorealism
- **Conceptual** -- each illustration represents an abstract financial concept (earn, borrow, swap) made visual
- **Visual language of interconnection** -- circles represent cycles, flow, and interconnection (concepts central to lending and liquidity)
- The playful illustrations make DeFi comprehensible, not trivial

### How Illustrations Are Used
- Feature cards each get a unique illustration with distinct color
- Hero section uses product mockup imagery
- Stats section is text-driven (numbers are the visual)
- Security section is more restrained (text-forward, less illustration)
- Ecosystem section uses partner logos instead of custom illustrations
- Governance section may have a dedicated governance illustration

---

## Animation & Interaction Patterns

### Observed/Inferred Animations

**Hero Carousel**
- Auto-advancing image carousel with smooth crossfade transitions
- Multiple product interface mockups rotating
- Likely 4-5 second intervals between slides

**Scroll-Triggered Animations**
- Elements likely fade in and slide up as they enter the viewport
- Stats/numbers likely count up (animated counter) on scroll into view
- Sections may have staggered reveal animations (elements appearing one by one)

**Navigation**
- Sticky nav with transparency-to-solid transition on scroll
- Dropdown menus with smooth open/close transitions
- Possible subtle blur backdrop-filter on nav background

**Cards**
- Subtle hover states (possible scale transform, shadow change, or border highlight)
- FAQ accordion with smooth height transition on expand/collapse

**General Approach**
- Animations are restrained and purposeful -- not flashy or heavy
- Performance-focused: uses `font-display: swap`, optimized image loading
- The site prioritizes clarity and speed over animation spectacle
- No heavy parallax, no full-page scroll-jacking, no 3D WebGL effects
- The animation philosophy matches the "playful minimalism" brand direction

### Likely Tech
- CSS transitions for simple hover/state changes
- Possible Framer Motion or GSAP for scroll-triggered reveals
- Native CSS scroll-snap may be used for the hero carousel
- IntersectionObserver for scroll-triggered number counters

---

## Section Transitions & Flow Strategy

### Page Flow (Top to Bottom)

```
1. HERO (Attention + Value Proposition)
   |-- "Here's what you can earn" -- immediate value hook
   v
2. INTEGRATION / SOCIAL PROOF (Credibility)
   |-- "Industry leaders trust us" -- external validation
   v
3. ABOUT AAVE (Education)
   |-- "Here's what we do" -- simple explanation
   v
4. WHY CHOOSE AAVE / STATS (Proof)
   |-- "Here are the numbers" -- quantitative evidence
   v
5. FEATURES (Functionality)
   |-- "Here's what you can do" -- product capabilities
   v
6. SECURITY (Trust)
   |-- "Here's why it's safe" -- address objections
   v
7. GHO (Product Extension)
   |-- "We also have this" -- ecosystem depth
   v
8. ECOSYSTEM (Community)
   |-- "Others build with us" -- network effects
   v
9. GOVERNANCE (Decentralization)
   |-- "You have a voice" -- differentiation from TradFi
   v
10. BLOG / NEWS (Activity)
    |-- "We're actively developing" -- ongoing momentum
    v
11. FAQ (Objection Handling)
    |-- "Common questions answered" -- reduce friction
    v
12. EMAIL SIGNUP (Conversion)
    |-- "Stay connected" -- capture leads
    v
13. FOOTER (Navigation / Legal)
```

### Transition Strategy
- Sections transition cleanly with generous vertical spacing (80-120px between sections)
- No harsh visual boundaries -- sections flow through whitespace
- Alternating visual weight: heavy visual section (illustrations) followed by text-heavy section
- Dark sections (footer, possibly security) create natural visual breaks
- Background color changes mark major thematic shifts

---

## Dark vs Light Strategy

### Light Sections (Majority of Page)
- Hero
- Integration/Social Proof
- About Aave
- Stats
- Features
- GHO
- Ecosystem
- Governance
- Blog
- FAQ
- Email Signup

**Light section characteristics:**
- White or near-white background (#FFFFFF or #FAFAFA)
- Dark text (#211D1D)
- Colorful illustrations and accents
- Feels open, accessible, modern

### Dark Sections
- Security (possibly -- to convey gravitas)
- Footer (definitely)

**Dark section characteristics:**
- Dark neutral background (#211D1D or similar charcoal/navy)
- White/light text
- More restrained use of color
- Creates visual contrast and signals "serious" content

### The Overall Balance
Approximately 85-90% light, 10-15% dark. This is deliberate -- the light-dominant approach is the core brand statement of the redesign, signaling accessibility and approachability over the crypto-typical dark mode.

---

## Tech Stack

### Website (aave.com)
- **Framework:** Likely Next.js (React-based, confirmed via GitHub package.json patterns showing `next dev`/`next build`)
- **Hosting:** Likely Vercel or similar JAMstack platform
- **Fonts:** Self-hosted via @font-face with `font-display: swap`
- **Performance:** Optimized image loading, font swap strategy

### App Interface (app.aave.com)
- Next.js (confirmed from open-source aave/interface GitHub repo)
- React with TypeScript
- Separate from the marketing site

---

## Key People & Design Credits

### Benji Taylor
- **Role at Aave:** Chief Product Officer at Aave Labs (after Family wallet acquisition in 2023, through October 2025)
- **Background:** Founded Los Feliz Engineering, developer of the self-custody wallet "Family" which was acquired by Aave in 2023. Also worked as design lead at Coinbase's Base.
- **Current role:** Head of Design at X (Elon Musk's platform), hired March 2026 to lead design as X launches X Money payments.
- **Significance:** Taylor was CPO during the rebrand period. His background in wallet UX and consumer-facing crypto products likely influenced the shift toward playful minimalism and mainstream accessibility.
- **Personal site:** benji.org

### Design Approach Attribution
The rebrand coincided with Aave's push toward mainstream adoption, regulatory clarity in crypto, and the launch of consumer-facing products. The design direction reflects Taylor's consumer product background -- making complex financial infrastructure feel approachable.

---

## Design Case Study Notes

### From Marie Siegrist's Analysis (Medium)

**Key observations about the rebrand:**

1. **Dark-to-light shift:** The most dramatic change. The old site's noir aesthetic was replaced with white backgrounds and bright pastels.

2. **Visual explanation over text explanation:** The new site uses colorful circles and simple diagrams to explain DeFi concepts. Each concept gets its own visual representation.

3. **Conversion optimization:** The new design has a clear hierarchy optimized for converting visitors: headline -> value proposition -> visual proof -> options -> detailed information.

4. **FAQ as objection handler:** The accordion FAQ at the bottom systematically addresses concerns, reducing friction before the final "Get started" CTA.

5. **Single-focus sections:** Each section has one job. The old site mixed multiple concepts per section; the new one isolates each message.

6. **Typography as brand signal:** The choice of FT Regola Neue -- a geo-grotesque with circular letterforms -- reinforces the circular visual motifs throughout the brand.

### From the Brand Kit (GitHub: aave-dao/aave-brand-kit)

**Critical brand rules:**
- Always use the single-storey 'a' in FT Regola Neue
- The Ghost Logomark must maintain its original form (no stretching, rotating, adding patterns/gradients/shadows)
- The semicircle motif is derived from the logomark and should be used as the primary decorative element
- White is universally applicable across all derivative logos and contexts
- Adequate color contrast must be maintained at all times

### Featured on Design Platforms
- Listed on Lapa Ninja as a landing page design reference
- Uses FT Regola Neue (documented on Fonts In Use and Typewolf)
- Cited in "30 Best Web 3.0 Website Design Examples" by Webstacks

---

## Implementation Notes for Reference

### Key Takeaways for a New Site Build

1. **Light-first design** with strategic dark sections for contrast and gravitas
2. **Generous whitespace** -- sections breathe with 80-120px vertical spacing
3. **Single-focus sections** -- one message per section, clear hierarchy
4. **Playful illustrations** over stock photos or abstract tech imagery
5. **Geo-grotesque headline font** (FT Regola Neue or similar) paired with clean sans-serif body font (Inter)
6. **Circular/geometric visual motifs** create brand coherence
7. **Stats sections with large display numbers** that potentially animate on scroll
8. **Social proof via testimonial cards** from named industry figures
9. **Clean card components** with minimal borders, no heavy shadows
10. **Restrained animations** -- purpose-driven, not decorative
11. **Conversion flow:** Hook (hero) -> Validate (social proof) -> Educate (about) -> Prove (stats) -> Enable (features) -> Reassure (security) -> Expand (ecosystem) -> Convert (signup)
12. **Mobile-first responsive** -- card grids collapse to single column, nav becomes hamburger

### Font Alternatives (if FT Regola Neue license is not available)
- **Satoshi** (free, similar geo-grotesque character)
- **General Sans** (free, clean geometric sans)
- **Plus Jakarta Sans** (free, rounded geometric)
- **Outfit** (free, geometric with similar circular feel)
- **Urbanist** (free, geo-grotesque alternative)

---

## Sources

- [Aave.com](https://aave.com/) -- Direct site analysis
- [Aave Brand Page](https://aave.com/brand) -- Official brand guidelines
- [Aave Brand Kit (GitHub)](https://github.com/aave-dao/aave-brand-kit) -- Brand assets and documentation
- [Aave's 2024 Rebrand: From DeFi Dark Mode to a Playful Minimalism (Marie Siegrist, Medium)](https://medium.com/@mariesiegrist/aaves-2024-rebrand-from-defi-dark-mode-to-a-playful-minimalism-7d6ad5173ac8)
- [Aave on Lapa Ninja](https://www.lapa.ninja/post/aave/)
- [FT Regola Neue on Fonts In Use](https://fontsinuse.com/typefaces/195461/ft-regola-neue)
- [FT Regola Neue on Typewolf](https://www.typewolf.com/ft-regola-neue)
- [Aave Brand Colors (BrandPalettes)](https://brandpalettes.com/aave-colors/)
- [Benji Taylor joins X as Head of Design (CoinTelegraph)](https://cointelegraph.com/news/elon-musk-taps-ex-aave-product-chief)
- [Benji Taylor joins X (The Block)](https://www.theblock.co/post/395222/elon-musk-taps-benji-taylor)
- [benji.org](https://benji.org/) -- Benji Taylor personal site
- [Aave Visual Identity Governance Discussion](https://governance.aave.com/t/temp-check-aave-visual-identity/17542)
