# Canary Template

A production-ready Next.js UI template featuring 40+ accessible components built on Base UI, styled with Tailwind CSS, and designed with a refined typography system.

## What is This?

Canary Template is a **starting point for building modern web applications**. It provides:

- **Pre-built UI components** that are accessible, customizable, and production-ready
- **A complete design system** with consistent colors, typography, and spacing
- **Dark/light mode** that works out of the box
- **A dashboard layout** with responsive sidebar navigation

Instead of building UI from scratch, clone this template and start building your application logic immediately.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router, React 19, Turbopack) |
| Styling | Tailwind CSS 4 (CSS-first configuration) |
| UI Primitives | Base UI (unstyled, accessible components) |
| Icons | Phosphor Icons (primary) + Lucide (supplementary) |
| Typography | Switzer (display/body) + JetBrains Mono (data/code) |

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

Visit [http://localhost:3000/playground](http://localhost:3000/playground) to explore all components interactively.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system variables & theme
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home/dashboard page
│   ├── playground/          # Interactive component showcase
│   └── settings/            # Settings page example
├── components/
│   ├── ui/                  # All UI components (40+)
│   │   ├── Accordion.tsx
│   │   ├── Autocomplete.tsx
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Checkbox.tsx
│   │   ├── ContextMenu.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Field.tsx
│   │   ├── Form.tsx
│   │   ├── HoverMenu.tsx
│   │   ├── Input.tsx
│   │   ├── Menubar.tsx
│   │   ├── Meter.tsx
│   │   ├── Modal.tsx
│   │   ├── NavigationMenu.tsx
│   │   ├── NumberField.tsx
│   │   ├── Popover.tsx
│   │   ├── PreviewCard.tsx
│   │   ├── Progress.tsx
│   │   ├── RadioGroup.tsx
│   │   ├── ScrollArea.tsx
│   │   ├── Separator.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Slider.tsx
│   │   ├── Switch.tsx
│   │   ├── Table.tsx
│   │   ├── Tabs.tsx
│   │   ├── Toast.tsx
│   │   ├── Toggle.tsx
│   │   ├── Toolbar.tsx
│   │   ├── Tooltip.tsx
│   │   └── index.ts         # Barrel export (import from here)
│   ├── DashboardLayout.tsx  # Main layout wrapper
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── ThemeProvider.tsx    # Dark/light mode context
│   └── ThemeToggle.tsx      # Theme switcher button
```

## Using Components

All components are exported from a single entry point:

```tsx
import {
  Button,
  Card,
  CardHeader,
  Input,
  Select,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
  Tabs,
  TabsList,
  Tab,
  TabPanel,
  // ... 40+ components available
} from "@/components/ui";
```

### Example Usage

```tsx
import { Button, Card, CardHeader, useToast } from "@/components/ui";

export function MyComponent() {
  const { addToast } = useToast();

  return (
    <Card>
      <CardHeader title="Welcome" description="Get started with your project" />
      <Button onClick={() => addToast({ type: "success", title: "It works!" })}>
        Click me
      </Button>
    </Card>
  );
}
```

## Customization

### Theme Colors

Edit `src/app/globals.css` to customize the color palette:

```css
:root {
  --primary: #6366F1;        /* Primary brand color (indigo) */
  --primary-hover: #818CF8;
  --primary-active: #4F46E5;

  --success: #06D6A0;        /* Teal */
  --warning: #F3D104;        /* Yellow */
  --danger: #E84855;         /* Red */
  --info: #0077B6;           /* Blue */
  --navy: #023047;           /* Dark navy */
}
```

### Adding Navigation

Edit `src/components/Sidebar.tsx` to add routes:

```tsx
<NavItem
  href="/your-page"
  icon={<YourIcon size={20} weight="duotone" />}
  label="Your Page"
  isCollapsed={isCollapsed}
/>
```

### Creating Pages

Create new pages in `src/app/` using the App Router:

```tsx
// src/app/your-page/page.tsx
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader } from "@/components/ui";

export default function YourPage() {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader title="Your Page" />
        {/* Your content */}
      </Card>
    </DashboardLayout>
  );
}
```

## How Components Work

This template uses **Base UI** for unstyled, accessible primitives. Base UI handles behavior and accessibility—we add styling using CSS variables and Tailwind classes.

### Component Pattern

1. Import the Base UI primitive from `@base-ui/react`
2. Wrap it with custom styling using our design system variables
3. Export from the barrel file for easy imports

### Example: Creating a New Component

```tsx
// src/components/ui/MyComponent.tsx
"use client";

import { SomePrimitive } from "@base-ui/react/some-primitive";

interface MyComponentProps {
  // your props
}

export function MyComponent({ ...props }: MyComponentProps) {
  return (
    <SomePrimitive.Root
      className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg"
    >
      {/* Component structure */}
    </SomePrimitive.Root>
  );
}
```

Then add to `src/components/ui/index.ts`:

```tsx
export { MyComponent } from "./MyComponent";
```

### Styling Guidelines

- Use CSS variables from `globals.css` (e.g., `var(--primary)`, `var(--card-bg)`)
- Variables automatically adapt to dark/light mode
- Use Tailwind classes for layout and spacing
- Add `"use client"` directive for interactive components
- Use `modal={false}` on menus/popovers to prevent layout shift

## Design System

### Typography

| Font | Usage |
|------|-------|
| Switzer | Headings, body text, UI labels |
| JetBrains Mono | Numbers, code, data display, keyboard shortcuts |

### Color Variables

| Variable | Purpose |
|----------|---------|
| `--primary` | Primary actions, links, focus states |
| `--foreground` | Main text color |
| `--muted` | Secondary/helper text |
| `--background` | Page background |
| `--card-bg` | Card/surface backgrounds |
| `--card-border` | Borders and dividers |
| `--accent` | Hover states, highlights |
| `--success`, `--warning`, `--danger`, `--info` | Semantic colors |

## Available Components

### Layout
- Card, CardHeader, StatCard, GradientCard, MetricCard
- Tabs, TabsList, Tab, TabPanel, TabsPills
- Accordion, AccordionItem, CollapsibleCard
- Separator, ScrollArea

### Forms
- Button, AnimatedButton, IconButton, TexturedButton
- Input, Textarea, Select
- Autocomplete, GroupedAutocomplete
- Checkbox, CheckboxGroup, Switch
- Slider, RangeSlider
- RadioGroup, RadioItem, RadioCard
- Toggle, ToggleGroup
- NumberField, CompactNumberField
- Field, FieldLabel, FieldDescription, FieldError, Fieldset
- Form

### Data Display
- Badge
- Avatar, AvatarGroup
- Table, TableHeader, TableBody, TableRow, TableHead, TableCell
- Progress, CircularProgress
- Meter, GradientMeter
- PreviewCard, UserPreviewCard, LinkPreviewCard

### Feedback
- ToastProvider, useToast
- Modal, ModalTrigger, ModalContent, ModalHeader, ModalBody, ModalFooter
- AlertDialog

### Overlay
- Tooltip
- Popover, PopoverTrigger, PopoverContent
- Dropdown, DropdownTrigger, DropdownContent, DropdownItem
- HoverMenu, HoverMenuTrigger, HoverMenuContent, HoverMenuItem
- ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem

### Navigation
- NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent
- Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem
- Toolbar, ToolbarButton, ToolbarSeparator, ToolbarGroup

### Loading
- Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard, SkeletonTable

## Helpful Links

### Core Technologies
- [Next.js Documentation](https://nextjs.org/docs) - Framework documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Base UI](https://base-ui.com) - Unstyled, accessible React components

### Icons
- [Phosphor Icons](https://phosphoricons.com) - Primary icon library (supports multiple weights: thin, light, regular, bold, fill, duotone)
- [Lucide Icons](https://lucide.dev) - Supplementary icons

### Fonts
- [Switzer on Fontshare](https://www.fontshare.com/fonts/switzer) - Display and body font
- [JetBrains Mono on Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) - Monospace font for code and data

### Base UI Components Reference
- [All Components](https://base-ui.com/react/components) - Complete list of available primitives
- [Accordion](https://base-ui.com/react/components/accordion)
- [Dialog](https://base-ui.com/react/components/dialog)
- [Menu](https://base-ui.com/react/components/menu)
- [Popover](https://base-ui.com/react/components/popover)
- [Tabs](https://base-ui.com/react/components/tabs)
- [Tooltip](https://base-ui.com/react/components/tooltip)

## License

MIT
