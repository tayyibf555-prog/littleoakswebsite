# Little Oaks — Design Direction Guide

> **Purpose:** Actionable design reference for building the Little Oaks website in Antigravity.
> **Tone:** Playful, warm, nursery-themed — with subtle Islamic identity. Not corporate.
> **Benchmark:** Better than CyberTots. More polished, more intentional, more alive.

---

## 1. Colour Palette

The brief's Heritage Green is kept but warmed up. Corporate gold is replaced with a softer honey. Playful pastels round out the palette.

### Primary

| Name | Hex | Usage |
|------|-----|-------|
| **Soft Forest** | `#2D7A50` | Primary brand green — headers, nav, CTAs, footer. Warmer than the brief's #1B5E3B |
| **Warm White** | `#FBF8F3` | Page backgrounds. Creamy, not sterile |
| **Deep Green** | `#1B5E3B` | Accent text, hover states, footer background |

### Secondary

| Name | Hex | Usage |
|------|-----|-------|
| **Honey Gold** | `#D4A843` | Accent highlights, icons, decorative elements, badge backgrounds |
| **Soft Peach** | `#FDDEC0` | Section backgrounds (alternating), card accents, warm glow |
| **Cloud Blue** | `#D6EAF0` | Secondary section backgrounds, info cards, subtle variety |

### Accent / Playful

| Name | Hex | Usage |
|------|-----|-------|
| **Terracotta** | `#D4785C` | Attention CTAs ("Book Now"), notification badges |
| **Lavender Mist** | `#E8DFF0` | Decorative blobs, pathway card accents |
| **Sage** | `#A8C5A0` | Success states, testimonial cards, soft green alternative |
| **Blush Pink** | `#F5D5D5` | Decorative elements, light accents |

### Neutrals

| Name | Hex | Usage |
|------|-----|-------|
| **Charcoal** | `#2C2C2C` | Body text |
| **Slate** | `#5A5A5A` | Secondary text, captions |
| **Light Grey** | `#E8E4DF` | Borders, dividers |

### Colour Rules

- **Never** use pure white (`#FFFFFF`) as a page background — always Warm White
- Section backgrounds alternate: Warm White → Soft Peach → Warm White → Cloud Blue
- Green is dominant (60%), pastels are supporting (30%), accent colours are pops (10%)
- Honey Gold is for delight — stars, badges, highlights — never for large fills

---

## 2. Typography

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headings** | **Baloo 2** | 600, 700 | `"Nunito", sans-serif` |
| **Body** | **Nunito Sans** | 400, 600 | `"Inter", sans-serif` |
| **Accent / Labels** | **Poppins** | 500, 600 | `sans-serif` |

> **Why Baloo 2?** Rounded, playful, warm — reads as "nursery" without being childish. Available on Google Fonts. Far more personality than Inter for headings.
>
> **Why Nunito Sans?** Clean and readable like Inter but with softer terminals that match the rounded heading font. Feels cohesive.

### Type Scale

| Element | Size (desktop) | Size (mobile) | Weight | Line Height | Letter Spacing |
|---------|---------------|---------------|--------|-------------|----------------|
| H1 (Hero) | 56px | 36px | 700 | 1.15 | -0.5px |
| H2 (Section) | 40px | 28px | 700 | 1.2 | -0.3px |
| H3 (Card/Sub) | 28px | 22px | 600 | 1.3 | 0 |
| H4 | 22px | 18px | 600 | 1.3 | 0 |
| Body Large | 18px | 16px | 400 | 1.7 | 0.1px |
| Body | 16px | 15px | 400 | 1.7 | 0.1px |
| Caption | 14px | 13px | 400 | 1.5 | 0.2px |
| Button | 16px | 15px | 600 | 1 | 0.5px |
| Nav Link | 15px | 14px | 600 | 1 | 0.3px |
| Label / Tag | 13px | 12px | 600 (Poppins) | 1 | 1px (uppercase) |

### Type Rules

- Headings: Baloo 2, Deep Green or Charcoal
- Hero H1 can use Soft Forest green
- Body: Nunito Sans, Charcoal
- Max body text width: 680px (for readability)
- Labels/tags: Poppins, uppercase, Honey Gold or Slate
- Never use all-caps on headings — only on small labels

---

## 3. Layout & Grid

### Grid System

- **Max container width:** 1200px
- **Columns:** 12-column grid
- **Gutter:** 32px (desktop), 20px (tablet), 16px (mobile)
- **Page margin:** 64px (desktop), 40px (tablet), 20px (mobile)

### Spacing Rhythm

Base unit: **8px**. All spacing uses multiples:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 8px | Inline spacing, icon gaps |
| `sm` | 16px | Card padding, element gaps |
| `md` | 24px | Component spacing |
| `lg` | 40px | Between groups |
| `xl` | 64px | Section padding (top/bottom) |
| `2xl` | 96px | Hero section padding |
| `3xl` | 120px | Major section breaks (desktop) |

### Section Patterns

Sections follow a consistent rhythm. Each section has:
- **Top/bottom padding:** 80px desktop / 48px mobile
- **Background:** Alternates between Warm White, Soft Peach, Cloud Blue
- **Optional decorator:** Wavy SVG divider between sections (not straight lines)

#### Wavy Dividers

Between sections, use subtle SVG wave shapes instead of hard edges. Wave height: 40-60px. Colour matches the upcoming section background. This is the single biggest upgrade over CyberTots' flat sections.

### Card Styles

#### Standard Card
```
Border radius:    20px
Background:       #FFFFFF
Shadow:           0 2px 12px rgba(0,0,0,0.06)
Padding:          28px
Hover shadow:     0 8px 24px rgba(0,0,0,0.1)
Hover transform:  translateY(-4px)
Transition:       all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

#### Feature Card (icon + text)
```
Border radius:    24px
Background:       Warm White (#FBF8F3)
Border:           2px solid #E8E4DF
Padding:          32px
Icon:             48px, inside 72px circle (Soft Peach or Cloud Blue bg)
Hover:            Border colour → Honey Gold, icon circle bg shifts
```

#### Pathway Card (larger, coloured)
Each of the 4 pathways gets a unique pastel accent:
- Pathway 1: Soft Peach (`#FDDEC0`)
- Pathway 2: Cloud Blue (`#D6EAF0`)
- Pathway 3: Lavender Mist (`#E8DFF0`)
- Pathway 4: Sage (`#A8C5A0`)

```
Border radius:    24px
Background:       Pathway colour at 40% opacity
Padding:          36px
Left border:      4px solid [pathway colour full opacity]
Number badge:     40px circle, Deep Green bg, white Baloo 2 text
```

---

## 4. UI Components

### Buttons

#### Primary Button
```
Background:       #2D7A50 (Soft Forest)
Text:             #FFFFFF
Font:             Nunito Sans 600, 16px
Padding:          14px 32px
Border radius:    50px (full pill shape)
Shadow:           0 4px 12px rgba(45,122,80,0.25)
Hover bg:         #1B5E3B (Deep Green)
Hover shadow:     0 6px 16px rgba(45,122,80,0.35)
Hover transform:  translateY(-2px)
Transition:       all 0.25s ease
```

#### Secondary Button
```
Background:       transparent
Border:           2px solid #2D7A50
Text:             #2D7A50
Padding:          12px 28px
Border radius:    50px
Hover:            Background fills #2D7A50, text → white
```

#### Accent / CTA Button (Book Now, Get Started)
```
Background:       #D4785C (Terracotta)
Text:             #FFFFFF
Padding:          16px 36px
Border radius:    50px
Shadow:           0 4px 12px rgba(212,120,92,0.3)
Hover bg:         #C06A4F
```

#### Small / Tag Button
```
Background:       #FBF8F3
Border:           1.5px solid #E8E4DF
Text:             #5A5A5A (Slate)
Font:             Poppins 500, 13px
Padding:          8px 16px
Border radius:    50px
Hover bg:         Soft Peach
```

### Navigation

#### Desktop Nav
```
Height:           72px
Background:       #FFFFFF
Shadow:           0 1px 8px rgba(0,0,0,0.05)
Position:         Sticky top
Logo:             Left-aligned, max height 44px
Links:            Centre or right, Nunito Sans 600, 15px, Charcoal
Active link:      Soft Forest, with 3px bottom dot indicator (not underline)
CTA button:       Right-most item, Primary Button style (smaller: 10px 24px)
```

On scroll (past 100px): Add slightly stronger shadow, optionally reduce height to 64px.

#### Mobile Nav
```
Hamburger icon:   3 rounded lines, 2px stroke, Charcoal
Menu:             Full-screen overlay, Warm White bg
Links:            Centred, Baloo 2 600, 24px, stacked
Close:            × icon top-right
Transition:       Slide in from right, 0.3s ease
```

#### Dropdown (for Regional pages)
```
Trigger:          Nav link with chevron
Panel:            White, 20px border radius, shadow, 8px padding
Items:            16px, 12px vertical padding, hover bg Soft Peach
```

### Forms

```
Input height:     52px
Border radius:    14px
Border:           2px solid #E8E4DF
Focus border:     #2D7A50
Focus shadow:     0 0 0 4px rgba(45,122,80,0.1)
Background:       #FFFFFF
Padding:          0 16px
Font:             Nunito Sans 400, 16px
Label:            Poppins 500, 13px, uppercase, Slate, 8px margin bottom
Error:            Terracotta text + border
```

### Icons

- **Style:** Rounded line icons, 2px stroke weight
- **Source:** Phosphor Icons (rounded set) or Lucide — both available as SVGs
- **Size:** 24px default, 20px compact, 32px feature
- **Colour:** Inherit from text, or Soft Forest for standalone icons
- **Feature icons:** Place inside coloured circles (72px diameter, pastel fill)

### Badges / Tags

```
Font:             Poppins 600, 12px, uppercase
Padding:          6px 14px
Border radius:    50px
Variants:
  - Green:   bg #2D7A50, text white
  - Gold:    bg #D4A843, text white
  - Pastel:  bg Soft Peach, text Charcoal
```

---

## 5. Visual Elements

### Illustration Style

**Direction:** Flat, modern vector with a hand-drawn warmth. Think Headspace meets nursery.

- **Characters:** Simple, diverse, friendly vector people — minimal detail, rounded features
- **Objects:** Trees (little oaks!), leaves, building blocks, books, stars, clouds
- **Colour:** Use the palette — no outside colours
- **Line quality:** Slightly imperfect / organic, not rigid
- **Source options:** Custom illustrations ideal, but undraw.co or Storyset (Freepik) as starting points. Apply brand colours.

### Islamic Geometric Patterns

Subtle. Decorative. Never dominant.

- Use as **background textures** at 3-5% opacity over section backgrounds
- Use as **border accents** — a thin strip of geometric pattern as a section divider
- Use inside **decorative circles** behind feature icons
- Pattern style: 8-point star tessellation or simple arabesque — single colour (Deep Green or Honey Gold at low opacity)
- **Where:** Hero section background, footer background texture, About page header, inside large quote blocks
- **Where NOT:** Cards, buttons, navigation, anywhere that competes with content

### Decorative Elements

- **Floating shapes:** Small circles, leaves, and stars scattered in hero/section backgrounds at 8-15% opacity. Soft Peach, Cloud Blue, Lavender. Adds playfulness.
- **Blob shapes:** Organic blob SVGs behind images and feature sections. Use Soft Peach or Cloud Blue at 60% opacity.
- **Leaf motif:** A simple oak leaf icon appears throughout — in headers, as list bullets, in the footer. Deep Green or Honey Gold. This is the signature element.
- **Dotted patterns:** Subtle dot grids (4px dots, 24px gap, 5% opacity Light Grey) as background texture variety.

### Photo Treatment

- **Border radius:** 24px on all photos
- **Aspect ratios:** Hero images 16:9, card images 4:3 or 1:1, team photos 1:1
- **Overlay option:** Soft Forest green at 10% over images for brand warmth
- **Frame option:** Some images get a 4px Honey Gold border + 8px offset shadow (for featured/hero images)
- **Blob mask:** Feature images can sit inside organic blob shapes instead of rectangles
- **Photo style:** Warm, natural light, real children engaged in play/learning, diverse, candid not posed. **No generic stock.** Use real photos or high-quality diverse nursery photography.

---

## 6. Homepage Wireframe

### Section 1: Hero
```
┌─────────────────────────────────────────────────────┐
│  [Sticky Nav: Logo | About ▾ | Pathways ▾ |        │
│   Regions ▾ | Resources | Book a Call]              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Background: Warm White + subtle geometric pattern  │
│  + floating pastel shapes (circles, leaves)         │
│                                                     │
│  ┌──────────────────┐  ┌────────────────────────┐   │
│  │                  │  │                        │   │
│  │  "Nurturing      │  │   [Hero Image:         │   │
│  │   Little Minds,  │  │    Children playing,   │   │
│  │   Growing Big    │  │    blob-masked,        │   │
│  │   Futures"       │  │    24px radius]        │   │
│  │                  │  │                        │   │
│  │  H1 — Baloo 2   │  └────────────────────────┘   │
│  │  56px, Deep Green│                               │
│  │                  │                               │
│  │  Body: Supporting│                               │
│  │  text about      │                               │
│  │  Little Oaks     │                               │
│  │  18px Nunito Sans│                               │
│  │                  │                               │
│  │  [Book a Call]   │                               │
│  │  [Learn More ↓]  │                               │
│  └──────────────────┘                               │
│                                                     │
│  ~~~~~ wavy divider to next section ~~~~~           │
└─────────────────────────────────────────────────────┘
```
- **Layout:** 2 columns (55/45 split). Text left, image right.
- **Image:** Inside an organic blob mask with a peach blob behind it (offset 20px)
- **Padding:** 120px top, 80px bottom
- **Floating elements:** Small oak leaf icon, scattered pastel circles

### Section 2: Trust Bar
```
┌─────────────────────────────────────────────────────┐
│  Background: Soft Peach                             │
│  Padding: 40px vertical                             │
│                                                     │
│  "Trusted by nurseries across England, Scotland     │
│   & Wales"                                          │
│                                                     │
│  [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]  │
│  (Partner logos or stat counters)                    │
│                                                     │
│  OR: 3 stat counters in circles:                    │
│  "50+ Nurseries" | "3 Nations" | "4 Pathways"       │
└─────────────────────────────────────────────────────┘
```

### Section 3: What is Little Oaks?
```
┌─────────────────────────────────────────────────────┐
│  Background: Warm White                             │
│  Padding: 80px vertical                             │
│                                                     │
│  Label: "ABOUT US" — Poppins, gold, uppercase       │
│  H2: "A National Framework for Muslim Childcare"    │
│                                                     │
│  2-column layout:                                   │
│  Left: Short paragraph (max 3 sentences)            │
│  Right: Illustration or image (blob-masked)         │
│                                                     │
│  Below: 3 Feature Cards in a row                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │ 🌱 Icon  │  │ 📚 Icon  │  │ 🤝 Icon  │          │
│  │ Title    │  │ Title    │  │ Title    │          │
│  │ 2 lines  │  │ 2 lines  │  │ 2 lines  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
│  (Feature Card style, icon in pastel circle)        │
└─────────────────────────────────────────────────────┘
```

### Section 4: The 4 Pathways
```
┌─────────────────────────────────────────────────────┐
│  Background: Cloud Blue                             │
│  Padding: 80px vertical                             │
│                                                     │
│  Label: "OUR APPROACH"                              │
│  H2: "Four Pathways to Excellence"                  │
│  Subtitle: 1 line description                       │
│                                                     │
│  2×2 grid of Pathway Cards:                         │
│  ┌───────────────────┐  ┌───────────────────┐       │
│  │ ① Pathway Name    │  │ ② Pathway Name    │       │
│  │ Peach bg          │  │ Blue bg           │       │
│  │ 2-line desc       │  │ 2-line desc       │       │
│  │ [Explore →]       │  │ [Explore →]       │       │
│  └───────────────────┘  └───────────────────┘       │
│  ┌───────────────────┐  ┌───────────────────┐       │
│  │ ③ Pathway Name    │  │ ④ Pathway Name    │       │
│  │ Lavender bg       │  │ Sage bg           │       │
│  │ 2-line desc       │  │ 2-line desc       │       │
│  │ [Explore →]       │  │ [Explore →]       │       │
│  └───────────────────┘  └───────────────────┘       │
│                                                     │
│  ~~~~~ wavy divider ~~~~~                           │
└─────────────────────────────────────────────────────┘
```

### Section 5: Regional Coverage
```
┌─────────────────────────────────────────────────────┐
│  Background: Warm White                             │
│  Padding: 80px vertical                             │
│                                                     │
│  H2: "Supporting Nurseries Across the UK"           │
│                                                     │
│  3 region cards in a row:                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │ 🏴 Image │  │ 🏴 Image │  │ 🏴 Image │          │
│  │ England  │  │ Scotland │  │ Wales    │          │
│  │ Brief    │  │ Brief    │  │ Brief    │          │
│  │ [View →] │  │ [View →] │  │ [View →] │          │
│  └──────────┘  └──────────┘  └──────────┘          │
│  (Standard Card style, image top, 24px radius)      │
└─────────────────────────────────────────────────────┘
```

### Section 6: Income Calculator Preview
```
┌─────────────────────────────────────────────────────┐
│  Background: Soft Peach                             │
│  Padding: 80px vertical                             │
│                                                     │
│  2-column:                                          │
│  Left:                                              │
│    Label: "FREE TOOL"                               │
│    H2: "Calculate Your Nursery Income"              │
│    Body: What the calculator does, who it's for     │
│    [Try the Calculator] — Accent CTA button         │
│                                                     │
│  Right:                                             │
│    Screenshot/mockup of the calculator              │
│    in a device frame or floating card               │
│    with blob shape behind                           │
└─────────────────────────────────────────────────────┘
```

### Section 7: Testimonials
```
┌─────────────────────────────────────────────────────┐
│  Background: Warm White                             │
│  Padding: 80px vertical                             │
│                                                     │
│  H2: "What Nurseries Say"                           │
│                                                     │
│  Horizontal scroll / carousel:                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  │
│  │ " Quote "    │  │ " Quote "    │  │ " Quote  │  │
│  │              │  │              │  │          │  │
│  │ ★★★★★       │  │ ★★★★★       │  │ ★★★★★   │  │
│  │ Name, Role  │  │ Name, Role  │  │ Name     │  │
│  │ 📍 Location │  │ 📍 Location │  │ 📍 Loc   │  │
│  └──────────────┘  └──────────────┘  └──────────┘  │
│                                                     │
│  Cards: Sage bg, 24px radius, large " opening quote │
│  in Honey Gold, Baloo 2 italic                      │
└─────────────────────────────────────────────────────┘
```

### Section 8: Book a Consultation CTA
```
┌─────────────────────────────────────────────────────┐
│  Background: Deep Green (#1B5E3B)                   │
│  + subtle geometric pattern at 5% opacity           │
│  Padding: 96px vertical                             │
│  Text: White, centred                               │
│                                                     │
│  H2: "Ready to Transform Your Nursery?"             │
│  Body: 1 line supporting text                       │
│  [Book a Free Consultation] — White bg, green text  │
│  Small text: "30-minute call • No obligation"       │
│                                                     │
│  Decorative: Oak leaf illustrations, gold stars     │
└─────────────────────────────────────────────────────┘
```

### Section 9: FAQ Accordion
```
┌─────────────────────────────────────────────────────┐
│  Background: Warm White                             │
│  Padding: 80px vertical                             │
│                                                     │
│  H2: "Common Questions"                             │
│                                                     │
│  Max width: 760px, centred                          │
│  ┌─────────────────────────────────────────┐        │
│  │ ▸ Question one                          │        │
│  ├─────────────────────────────────────────┤        │
│  │ ▾ Question two                          │        │
│  │   Answer text, Nunito Sans 16px         │        │
│  ├─────────────────────────────────────────┤        │
│  │ ▸ Question three                        │        │
│  └─────────────────────────────────────────┘        │
│                                                     │
│  Items: 20px padding, Light Grey bottom border      │
│  Expand icon: Rounded chevron, rotates 180° on open │
│  Transition: Height + opacity, 0.3s ease            │
└─────────────────────────────────────────────────────┘
```

### Section 10: Footer
```
┌─────────────────────────────────────────────────────┐
│  Background: #1B5E3B (Deep Green)                   │
│  + geometric pattern at 3% opacity                  │
│  Text: White / rgba(255,255,255,0.7) for secondary  │
│  Padding: 64px top, 32px bottom                     │
│                                                     │
│  4-column layout:                                   │
│  Logo + tagline | Quick Links | Pathways | Contact  │
│                                                     │
│  Below: Divider (rgba white 10%)                    │
│  Bottom bar: © 2026 Little Oaks | Privacy | Cookies │
│                                                     │
│  Decorative: Small oak leaf illustrations in gold   │
└─────────────────────────────────────────────────────┘
```

---

## 7. Key Page Layouts

### About / Founder Page

- **Hero:** Full-width image (founder photo or team) with Deep Green overlay at 40%, white H1 overlay text
- **Bio section:** 2-column — photo left (blob-masked, 1:1 ratio), text right. Name in Baloo 2, role in Poppins label style
- **Vision section:** Full-width Soft Peach background, centred large quote in Baloo 2 italic, with large Honey Gold quotation marks
- **Timeline:** Vertical timeline with alternating left/right entries. Green line, dots as oak leaf icons. Each entry: year badge + description card

### Pathway Pages (×4)

- **Hero:** Pathway-coloured background (at 30% opacity). H1 + short description + breadcrumb
- **Overview section:** Warm White, 2-column — text left, icon illustration right
- **Key components:** 3-4 Feature Cards in a grid explaining the pathway pillars
- **Resources section:** Card grid linking to PDF guides (gated). Each card: document icon, title, "Download" button. Lock icon for gated content with "Enter email to access" overlay
- **CTA banner:** Book a consultation (same pattern as homepage Section 8)

### Regional Pages (England / Scotland / Wales)

- **Hero:** Map illustration or flag-themed with region name
- **Stats section:** 3 stat counters — number of nurseries, children served, key metric
- **Content:** 2-column text + image layout
- **Local resources:** Card grid
- **CTA:** Region-specific consultation booking

### Contact / Booking Page

- **Layout:** 2-column
- **Left column:** H1 "Let's Talk", body text, contact details (email, phone), social links, small map embed
- **Right column:** Calendly embed (styled to match — Calendly allows brand colour customisation, use Soft Forest green)
- **Background:** Warm White, with subtle floating decorative elements
- **Below:** FAQ accordion (compact version, 3-4 questions about the consultation process)

---

## 8. Mobile Considerations

### Breakpoints

| Name | Width | Grid |
|------|-------|------|
| Desktop | ≥1024px | 12-col, 1200px max |
| Tablet | 768-1023px | 8-col, 40px margins |
| Mobile | <768px | 4-col, 20px margins |

### Mobile Adaptations

- **Nav:** Collapses to hamburger at <768px
- **Hero:** Stacks to single column — text above image. Image shrinks to ~280px wide
- **Card grids:** 2-col → 1-col stacking. Cards get 100% width
- **Pathway cards:** Stack vertically, full width
- **Section padding:** Reduces from 80px → 48px
- **H1:** 56px → 36px. H2: 40px → 28px
- **Testimonial carousel:** Swipeable, 1 card visible + peek of next
- **Floating decorative elements:** Reduce by 50% or hide on mobile to avoid clutter
- **Buttons:** Full width on mobile (100% of container minus padding)
- **FAQ accordion:** Full width, larger tap targets (min 48px height per item)
- **Footer:** Stacks to single column, centred
- **Sticky CTA:** On mobile, add a fixed bottom bar with "Book a Call" button (60px height, Soft Forest bg, appears after scrolling past hero)

### Touch Targets

- Minimum tap target: 44×44px
- Button min height: 48px on mobile
- Nav items: 48px vertical spacing in mobile menu

---

## 9. Micro-interactions & Animations

### Page Load

- Hero text: Fade up + slide up (20px), 0.6s ease, 0.1s delay between heading/body/button
- Hero image: Fade in + slight scale (1.02 → 1.0), 0.8s ease
- Floating decorative elements: Gentle continuous float animation (translateY ±8px, 3s loop, ease-in-out)

### Scroll Animations

- **Cards:** Fade up + translateY(30px → 0), triggered when 20% visible. Stagger: 0.1s between cards in a row
- **Section headings:** Fade in, 0.4s
- **Stat counters:** Count up animation (0 → target number), 1.5s, on scroll into view
- **Images:** Gentle fade in, 0.5s

### Hover Effects

- **Cards:** translateY(-4px) + shadow increase, 0.3s ease
- **Buttons:** translateY(-2px) + shadow increase + colour shift, 0.25s ease
- **Nav links:** Underline grows from centre (width 0 → 100%), 0.25s ease
- **Image cards:** Image subtle scale (1.0 → 1.05), overflow hidden on container, 0.4s ease

### Interactive Elements

- **FAQ accordion:** Smooth height transition (0 → auto via max-height trick), chevron rotates 180°, 0.3s ease
- **Mobile menu:** Slides in from right, items stagger fade-in (0.05s each), 0.3s ease
- **Form focus:** Border colour transition + subtle box-shadow glow, 0.2s ease
- **Cookie banner:** Slides up from bottom, 0.4s ease, slight bounce

### Loading States

- **Page transition:** Quick fade (0.2s)
- **Calculator:** Skeleton loading → result with count-up animation
- **Calendly embed:** Skeleton placeholder while loading (green tint shimmer)
- **Images:** Low-res blur placeholder → sharp (if supported by Antigravity)

### Animation Rules

- **Performance:** Use `transform` and `opacity` only — never animate layout properties
- **Reduced motion:** Respect `prefers-reduced-motion` — disable all motion, show content immediately
- **Duration:** Nothing longer than 0.8s. Keep it snappy.
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for most. Ease-out for entrances.

---

## 10. How to Beat CyberTots

CyberTots is a decent baseline but has clear weaknesses. Here's how Little Oaks wins:

### ❌ CyberTots Problem → ✅ Little Oaks Solution

| CyberTots Weakness | Little Oaks Fix |
|---|---|
| **WordPress template feel** — generic, boxy, predictable layout | **Custom-feeling design** — wavy section dividers, blob-masked images, organic floating shapes. Feels designed, not templated. |
| **Inconsistent spacing** — padding varies randomly section to section | **8px spacing system** — rigid rhythm. Every element breathes consistently. |
| **Generic stock photos** — posed, lifeless nursery photos | **Photo guidelines** — real, warm, candid, diverse. Blob-mask and frame treatments make even stock feel curated. |
| **Flat, boring sections** — white background, content, white background, content | **Alternating pastel backgrounds** + wavy SVG dividers between sections. Visual rhythm that guides the eye. |
| **No visual identity beyond the logo** — no recurring motifs | **Oak leaf motif** — appears in icons, list bullets, footer, hero. Geometric Islamic patterns as subtle textures. You remember this brand. |
| **Basic typography** — one font, one weight, no hierarchy | **Three-font system** — Baloo 2 headings feel playful, Nunito Sans body is clean, Poppins labels add structure. Clear hierarchy. |
| **Dated card design** — flat or minimal shadow, square-ish | **Generous border radius (20-24px)**, layered shadows, hover lift animations. Cards feel modern and tactile. |
| **Broken interactive elements** — map widget doesn't work | **Tested embeds** — Calendly properly styled, calculator functional, all interactive elements load gracefully with skeleton states. |
| **No playful personality** — could be any business website | **Floating shapes, illustrated accents, warm pastels, oak leaf everywhere** — clearly a nursery, clearly cared for. |
| **No clear user journey** — scattered CTAs | **Every section drives toward booking** — consistent CTA placement, "Book a Call" in nav, sticky mobile CTA, dedicated CTA section before footer. |
| **Mobile feels like shrunk desktop** | **Mobile-first touches** — sticky bottom CTA bar, full-width buttons, swipeable testimonials, properly sized tap targets. |
| **No brand depth** — surface level visual identity | **Islamic geometric patterns as subtle textures** — adds cultural depth without being overt. A design choice competitors can't replicate. |

### The Killer Differentiators

1. **Wavy section dividers** — The single easiest upgrade. Makes the whole page feel organic and modern.
2. **Blob-masked images** — Hero images and feature photos sit in organic shapes, not rectangles.
3. **Oak leaf motif** — Recurring brand element that builds recognition.
4. **Colour-coded pathways** — Each of the 4 pathways has its own pastel, creating a wayfinding system.
5. **Subtle Islamic geometric textures** — Cultural identity embedded in the design DNA, not bolted on.
6. **Sticky mobile CTA** — Users always see "Book a Call" on mobile.
7. **Micro-animations** — Subtle scroll reveals and hover lifts make the site feel alive and premium.

---

## Appendix: Quick Reference for Antigravity Build

### Google Fonts Import
```
Baloo 2: 600, 700
Nunito Sans: 400, 600
Poppins: 500, 600
```

### Colour Copy-Paste
```
--soft-forest:    #2D7A50
--deep-green:     #1B5E3B
--warm-white:     #FBF8F3
--honey-gold:     #D4A843
--soft-peach:     #FDDEC0
--cloud-blue:     #D6EAF0
--terracotta:     #D4785C
--lavender-mist:  #E8DFF0
--sage:           #A8C5A0
--blush-pink:     #F5D5D5
--charcoal:       #2C2C2C
--slate:          #5A5A5A
--light-grey:     #E8E4DF
```

### Border Radius Values
```
Buttons:    50px (full pill)
Cards:      20-24px
Images:     24px
Inputs:     14px
Badges:     50px
```

### Shadow Tokens
```
--shadow-sm:   0 2px 8px rgba(0,0,0,0.04)
--shadow-md:   0 2px 12px rgba(0,0,0,0.06)
--shadow-lg:   0 8px 24px rgba(0,0,0,0.10)
--shadow-btn:  0 4px 12px rgba(45,122,80,0.25)
```

### Free SVG Wave Generator
Use [Haikei](https://haikei.app/) or [SVG Wave](https://svgwave.in/) to generate section dividers. Export as SVGs, match section background colours.

### Free Blob Generator
Use [Blobmaker](https://www.blobmaker.app/) for image masks and decorative shapes.

### Icon Library
[Phosphor Icons](https://phosphoricons.com/) — use the "Regular" weight for consistency with the rounded design language.

---

*Document created for Little Oaks. Design direction only — build in Antigravity.*
