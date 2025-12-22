# Canary Template

A premium Next.js UI template with refined components, beautiful typography, and a complete design system.

## Features

- **20+ UI Components** - Buttons, Cards, Inputs, Modals, Tables, Toasts, and more
- **Dark/Light Mode** - System-aware theming with smooth transitions
- **Typography Pairing** - Switzer (display/body) + JetBrains Mono (data/code)
- **Custom Color Palette** - Red (#E84855), Yellow (#F3D104), Teal (#06D6A0), Blue (#0077B6), Navy (#023047)
- **Tailwind CSS 4** - Latest version with CSS-first configuration
- **Next.js 16** - App Router, React 19, Turbopack

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

Visit [http://localhost:3000/playground](http://localhost:3000/playground) to explore all components.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design system & theme variables
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Home page
│   ├── playground/      # Component showcase
│   └── settings/        # Settings page
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Dropdown.tsx
│   │   ├── HoverMenu.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Table.tsx
│   │   ├── Toast.tsx
│   │   ├── Tooltip.tsx
│   │   └── index.ts     # Barrel export
│   ├── DashboardLayout.tsx
│   ├── Sidebar.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
```

## Customization

### Theme Colors
Edit `src/app/globals.css` to customize the color palette:

```css
:root {
  --primary: #00A6FF;        /* Your primary brand color */
  --success: #06D6A0;        /* Teal */
  --warning: #F3D104;        /* Yellow */
  --danger: #E84855;         /* Red */
  --info: #0077B6;           /* Blue */
}
```

### Navigation
Edit `src/components/Sidebar.tsx` to add your routes:

```tsx
<NavItem
  href="/your-page"
  icon={<YourIcon size={20} />}
  label="Your Page"
  isCollapsed={isCollapsed}
/>
```

### Adding Pages
Create new pages in `src/app/` using the App Router convention:

```tsx
// src/app/your-page/page.tsx
import { DashboardLayout } from "@/components/DashboardLayout";

export default function YourPage() {
  return (
    <DashboardLayout>
      {/* Your content */}
    </DashboardLayout>
  );
}
```

## Components

All components are available from `@/components/ui`:

```tsx
import {
  Button,
  Card,
  Input,
  Select,
  Badge,
  Table,
  Modal,
  useToast,
  // ... and more
} from "@/components/ui";
```

## Adding Base UI Components

This template uses [Base UI](https://base-ui.com/) for unstyled, accessible primitives. Base UI provides the behavior and accessibility—we add the styling using our design system variables.

### Pattern

1. **Import the Base UI primitive** from `@base-ui/react`
2. **Create a wrapper component** in `src/components/ui/`
3. **Apply styling** using CSS variables from `globals.css`
4. **Export from the barrel** in `src/components/ui/index.ts`

### Example: Adding a Slider

```tsx
// src/components/ui/Slider.tsx
"use client";

import { Slider as BaseSlider } from "@base-ui/react/slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

export function Slider({ value, onChange, min = 0, max = 100 }: SliderProps) {
  return (
    <BaseSlider.Root
      value={value}
      onValueChange={(val) => onChange?.(val)}
      min={min}
      max={max}
      className="relative flex items-center w-full h-5"
    >
      <BaseSlider.Track className="h-1.5 w-full rounded-full bg-[var(--accent)]">
        <BaseSlider.Indicator className="h-full rounded-full bg-[var(--primary)]" />
        <BaseSlider.Thumb className="w-4 h-4 rounded-full bg-[var(--primary)] border-2 border-white shadow-md cursor-pointer" />
      </BaseSlider.Track>
    </BaseSlider.Root>
  );
}
```

Then add to `src/components/ui/index.ts`:
```tsx
export { Slider } from "./Slider";
```

### Available Base UI Primitives

See [base-ui.com/react/components](https://base-ui.com/react/components) for all available components:
- Accordion, Alert Dialog, Checkbox, Collapsible
- Dialog, Field, Form, Menu, Number Field
- Popover, Progress, Radio Group, Scroll Area
- Select, Separator, Slider, Switch, Tabs
- Toast, Toggle, Toggle Group, Tooltip

### Styling Guidelines

- Use CSS variables from `globals.css` (e.g., `var(--primary)`, `var(--accent)`)
- Support both light and dark modes automatically via variables
- Use Tailwind classes for layout and spacing
- Add `"use client"` directive for interactive components

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **UI Primitives:** Base UI (unstyled, accessible components)
- **Icons:** Phosphor Icons + Lucide
- **Fonts:** Switzer (Fontshare) + JetBrains Mono (Google Fonts)

## License

MIT
