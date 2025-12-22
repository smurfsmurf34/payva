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
  --primary: #6D28D9;        /* Your primary brand color */
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

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **UI Primitives:** Base UI (Radix-based)
- **Icons:** Phosphor Icons + Lucide
- **Fonts:** Switzer (Fontshare) + JetBrains Mono (Google Fonts)

## License

MIT
