"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Card,
  CardHeader,
  StatCard,
  GradientCard,
  MetricCard,
  Button,
  AnimatedButton,
  IconButton,
  TexturedButton,
  Input,
  Textarea,
  Select,
  Checkbox,
  CheckboxGroup,
  Switch,
  Slider,
  RangeSlider,
  RadioGroup,
  RadioItem,
  RadioCard,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Tabs,
  TabsList,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  CollapsibleCard,
  Progress,
  CircularProgress,
  useToast,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  AlertDialog,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
  DropdownCheckboxItem,
  HoverMenu,
  HoverMenuTrigger,
  HoverMenuContent,
  HoverMenuItem,
  HoverMenuSeparator,
  HoverMenuLabel,
  HoverSubmenu,
  HoverSubmenuTrigger,
  HoverMenuCheckboxItem,
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonTable,
  SkeletonStat,
  SkeletonList,
} from "@/components/ui";
import {
  Package,
  Truck,
  Clock,
  CheckCircle,
  PencilSimple,
  Trash,
  Copy,
  DownloadSimple,
  ShareNetwork,
  User,
  Gear,
  SignOut,
  Bell,
  Star,
  Heart,
  Lightning,
  ChartLineUp,
  CurrencyDollar,
  Users,
  ShoppingCart,
  TrendUp,
  TrendDown,
  CaretRight,
  Palette,
  FolderOpen,
  FileText,
  Image,
  Code,
  ArrowRight,
  Sparkle,
  Cube,
  Globe,
} from "@phosphor-icons/react";

export default function PlaygroundPage() {
  const { addToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    notifications: true,
    emails: false,
    updates: true,
  });
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("option1");

  // New component states
  const [formCheckboxes, setFormCheckboxes] = useState({
    terms: false,
    marketing: true,
    analytics: false,
  });
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValue, setRangeValue] = useState<[number, number]>([25, 75]);
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <DashboardLayout>
      <div className="space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">UI Components Playground</h1>
          <p className="text-[var(--muted)] mt-2">
            Interactive showcase of all available UI components
          </p>
        </div>

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Typography
          </h2>

          <Card>
            <CardHeader
              title="Switzer + JetBrains Mono"
              description="A refined pairing: Switzer for body and display, JetBrains Mono for data"
            />
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Display Font — Switzer</p>
                <p className="text-2xl font-bold tracking-tight">The quick brown fox jumps over the lazy dog.</p>
                <p className="text-lg">Body text at a larger size for emphasis and readability.</p>
                <p className="text-base">Standard body text at the base size. Clean and refined.</p>
                <p className="text-sm text-[var(--muted)]">Smaller text for captions and secondary information.</p>
              </div>
              <div className="border-t border-[var(--card-border)] pt-4 space-y-4">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Mono Font — JetBrains Mono</p>
                <p className="text-2xl font-mono font-bold tracking-tight">$12,450.00</p>
                <p className="text-lg font-mono">Code, data, and technical elements</p>
                <p className="text-sm font-mono text-[var(--muted)]">SKU-2847-XL • #A1B2C3 • 127.0.0.1</p>
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader
              title="Typography Utilities"
              description="Special text treatments and styles"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">Label Style</p>
                <p className="text-sm">Used for form labels and categorizations</p>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-2xl font-bold tracking-tight">$12,450.00</p>
                <p className="text-sm text-[var(--muted)]">Data style with tabular numbers</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-gradient">Gradient Text</p>
                <p className="text-sm text-[var(--muted)]">Premium gradient text effect</p>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-gradient-gold">Gold Accent</p>
                <p className="text-sm text-[var(--muted)]">Gold gradient for premium accents</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Gradient Cards Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Gradient Cards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GradientCard icon={<ChartLineUp size={96} />} gradient="primary">
              <p className="text-xs uppercase tracking-wider text-white/70">Revenue</p>
              <p className="text-3xl font-mono font-bold mt-2">$48,352</p>
              <p className="text-sm text-white/70 mt-2"><span className="font-mono">+12.5%</span> this month</p>
            </GradientCard>

            <GradientCard icon={<Users size={96} />} gradient="success">
              <p className="text-xs uppercase tracking-wider text-white/70">Users</p>
              <p className="text-3xl font-mono font-bold mt-2">2,847</p>
              <p className="text-sm text-white/70 mt-2"><span className="font-mono">+8.2%</span> this week</p>
            </GradientCard>

            <GradientCard icon={<ShoppingCart size={96} />} gradient="warning">
              <p className="text-xs uppercase tracking-wider text-white/70">Orders</p>
              <p className="text-3xl font-mono font-bold mt-2">1,294</p>
              <p className="text-sm text-white/70 mt-2"><span className="font-mono">+23%</span> today</p>
            </GradientCard>

            <GradientCard icon={<Sparkle size={96} />} gradient="gold">
              <p className="text-xs uppercase tracking-wider text-white/70">Premium</p>
              <p className="text-3xl font-mono font-bold mt-2">847</p>
              <p className="text-sm text-white/70 mt-2">Active subscribers</p>
            </GradientCard>
          </div>
        </section>

        {/* Stat Card Variants */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Stat Card Variants
          </h2>

          <div className="space-y-4">
            <p className="text-sm text-[var(--muted)] uppercase tracking-wider">Default</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Shipments"
                value="1,284"
                icon={<Package size={20} weight="duotone" />}
                trend={{ value: 12, isPositive: true }}
              />
              <StatCard
                title="In Transit"
                value="48"
                icon={<Truck size={20} weight="duotone" />}
                trend={{ value: 8, isPositive: true }}
              />
              <StatCard
                title="Pending"
                value="23"
                icon={<Clock size={20} weight="duotone" />}
                trend={{ value: 3, isPositive: false }}
              />
              <StatCard
                title="Delivered"
                value="1,213"
                icon={<CheckCircle size={20} weight="duotone" />}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[var(--muted)] uppercase tracking-wider">Gradient Variant</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                variant="gradient"
                title="Revenue"
                value="$48,352"
                icon={<CurrencyDollar size={64} weight="duotone" />}
                trend={{ value: 12.5, isPositive: true }}
              />
              <StatCard
                variant="gradient"
                title="Active Users"
                value="2,847"
                icon={<Users size={64} weight="duotone" />}
                trend={{ value: 8.2, isPositive: true }}
              />
              <StatCard
                variant="gradient"
                title="Conversion"
                value="3.24%"
                icon={<ChartLineUp size={64} weight="duotone" />}
                trend={{ value: 1.2, isPositive: true }}
              />
              <StatCard
                variant="gradient"
                title="Orders"
                value="1,294"
                icon={<ShoppingCart size={64} weight="duotone" />}
                trend={{ value: 23, isPositive: true }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[var(--muted)] uppercase tracking-wider">Accent Variant</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                variant="accent"
                title="Total Sales"
                value="$128K"
                icon={<TrendUp size={24} weight="duotone" />}
                trend={{ value: 18, isPositive: true }}
              />
              <StatCard
                variant="accent"
                title="Visitors"
                value="45.2K"
                icon={<Globe size={24} weight="duotone" />}
                trend={{ value: 5.4, isPositive: true }}
              />
              <StatCard
                variant="accent"
                title="Products"
                value="847"
                icon={<Cube size={24} weight="duotone" />}
                trend={{ value: 2, isPositive: false }}
              />
              <StatCard
                variant="accent"
                title="Returns"
                value="23"
                icon={<TrendDown size={24} weight="duotone" />}
                trend={{ value: 12, isPositive: false }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[var(--muted)] uppercase tracking-wider">Metric Cards</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard
                label="Avg. Order Value"
                value="$127.50"
                icon={<CurrencyDollar size={24} weight="duotone" />}
              />
              <MetricCard
                label="Cart Rate"
                value="68.2%"
                icon={<ShoppingCart size={24} weight="duotone" />}
                subvalue="+2.1%"
              />
              <MetricCard
                label="Sessions"
                value="12,847"
                icon={<ChartLineUp size={24} weight="duotone" />}
              />
              <MetricCard
                label="Bounce Rate"
                value="32.4%"
                icon={<TrendDown size={24} weight="duotone" />}
                subvalue="-4.2%"
              />
            </div>
          </div>
        </section>

        {/* Menus Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Menus
          </h2>

          <Card>
            <CardHeader
              title="Hover Menus"
              description="Menus that open on hover with submenus"
            />
            <div className="flex flex-wrap gap-4">
              <HoverMenu>
                <HoverMenuTrigger>
                  <FolderOpen size={18} weight="duotone" />
                  File
                </HoverMenuTrigger>
                <HoverMenuContent>
                  <HoverMenuItem icon={<FileText size={16} />} shortcut="⌘N">
                    New File
                  </HoverMenuItem>
                  <HoverMenuItem icon={<FolderOpen size={16} />} shortcut="⌘O">
                    Open...
                  </HoverMenuItem>
                  <HoverMenuSeparator />
                  <HoverSubmenu>
                    <HoverSubmenuTrigger icon={<Image size={16} />}>
                      Export As
                    </HoverSubmenuTrigger>
                    <HoverMenuContent side="right" align="start">
                      <HoverMenuItem>PNG</HoverMenuItem>
                      <HoverMenuItem>JPG</HoverMenuItem>
                      <HoverMenuItem>SVG</HoverMenuItem>
                      <HoverMenuItem>PDF</HoverMenuItem>
                    </HoverMenuContent>
                  </HoverSubmenu>
                  <HoverMenuSeparator />
                  <HoverMenuItem icon={<DownloadSimple size={16} />} shortcut="⌘S">
                    Save
                  </HoverMenuItem>
                </HoverMenuContent>
              </HoverMenu>

              <HoverMenu>
                <HoverMenuTrigger>
                  <PencilSimple size={18} weight="duotone" />
                  Edit
                </HoverMenuTrigger>
                <HoverMenuContent>
                  <HoverMenuItem shortcut="⌘Z">Undo</HoverMenuItem>
                  <HoverMenuItem shortcut="⌘⇧Z">Redo</HoverMenuItem>
                  <HoverMenuSeparator />
                  <HoverMenuItem shortcut="⌘X">Cut</HoverMenuItem>
                  <HoverMenuItem shortcut="⌘C">Copy</HoverMenuItem>
                  <HoverMenuItem shortcut="⌘V">Paste</HoverMenuItem>
                  <HoverMenuSeparator />
                  <HoverMenuItem shortcut="⌘A">Select All</HoverMenuItem>
                </HoverMenuContent>
              </HoverMenu>

              <HoverMenu>
                <HoverMenuTrigger>
                  <Gear size={18} weight="duotone" />
                  Settings
                </HoverMenuTrigger>
                <HoverMenuContent>
                  <HoverMenuLabel>Preferences</HoverMenuLabel>
                  <HoverMenuCheckboxItem
                    checked={checkboxes.notifications}
                    onCheckedChange={(c) => setCheckboxes({ ...checkboxes, notifications: c })}
                    icon={<Bell size={16} />}
                  >
                    Notifications
                  </HoverMenuCheckboxItem>
                  <HoverMenuCheckboxItem
                    checked={checkboxes.emails}
                    onCheckedChange={(c) => setCheckboxes({ ...checkboxes, emails: c })}
                  >
                    Email Updates
                  </HoverMenuCheckboxItem>
                  <HoverMenuCheckboxItem
                    checked={checkboxes.updates}
                    onCheckedChange={(c) => setCheckboxes({ ...checkboxes, updates: c })}
                  >
                    Auto Updates
                  </HoverMenuCheckboxItem>
                  <HoverMenuSeparator />
                  <HoverMenuItem icon={<Code size={16} />}>
                    Developer Settings
                  </HoverMenuItem>
                </HoverMenuContent>
              </HoverMenu>
            </div>
          </Card>

          <Card>
            <CardHeader
              title="Click Menus (Dropdowns)"
              description="Traditional click-to-open dropdowns"
            />
            <div className="flex flex-wrap gap-4">
              <Dropdown>
                <DropdownTrigger>Actions</DropdownTrigger>
                <DropdownContent>
                  <DropdownItem icon={<Copy size={16} />} onSelect={() => addToast({ type: "info", title: "Copied" })}>
                    Copy
                  </DropdownItem>
                  <DropdownItem icon={<DownloadSimple size={16} />}>Download</DropdownItem>
                  <DropdownItem icon={<ShareNetwork size={16} />}>Share</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem icon={<Trash size={16} />} destructive>Delete</DropdownItem>
                </DropdownContent>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <User size={16} />
                  Account
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownLabel>My Account</DropdownLabel>
                  <DropdownItem icon={<User size={16} />}>Profile</DropdownItem>
                  <DropdownItem icon={<Gear size={16} />}>Settings</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem icon={<SignOut size={16} />} destructive>Log out</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </div>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Buttons
          </h2>

          <Card>
            <CardHeader title="Button Variants" description="Different button styles" />
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </Card>

          <Card>
            <CardHeader title="Button Sizes & States" description="Sizes and loading states" />
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Card>

          <Card>
            <CardHeader title="With Icons (Phosphor)" description="Using Phosphor icons" />
            <div className="flex flex-wrap items-center gap-4">
              <Button icon={<Package size={16} weight="duotone" />}>Package</Button>
              <Button variant="secondary" icon={<Truck size={16} weight="duotone" />}>Shipping</Button>
              <Button variant="outline" icon={<ArrowRight size={16} />} iconPosition="right">Continue</Button>
              <AnimatedButton>
                <Sparkle size={18} weight="fill" />
                Animated
              </AnimatedButton>
            </div>
          </Card>

          <Card>
            <CardHeader title="Textured Buttons" description="Premium tactile style — use sparingly for key actions" />
            <div className="flex flex-wrap items-center gap-4">
              <TexturedButton variant="dark">Move Money</TexturedButton>
              <TexturedButton variant="dark" icon={<Package size={16} />}>Ship Order</TexturedButton>
              <TexturedButton variant="primary" icon={<Sparkle size={16} weight="fill" />}>Upgrade</TexturedButton>
              <TexturedButton variant="light" icon={<CurrencyDollar size={16} />}>Cashback</TexturedButton>
              <TexturedButton variant="light">Neutral Action</TexturedButton>
            </div>
          </Card>

          <Card>
            <CardHeader title="Icon Buttons" description="Icon-only buttons with tooltips" />
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip content="Edit">
                <span><IconButton icon={<PencilSimple size={18} weight="duotone" />} aria-label="Edit" /></span>
              </Tooltip>
              <Tooltip content="Delete">
                <span><IconButton icon={<Trash size={18} weight="duotone" />} variant="danger" aria-label="Delete" /></span>
              </Tooltip>
              <Tooltip content="Settings">
                <span><IconButton icon={<Gear size={18} weight="duotone" />} variant="ghost" aria-label="Settings" /></span>
              </Tooltip>
              <Tooltip content="Favorite">
                <span><IconButton icon={<Heart size={18} weight="duotone" />} variant="ghost" aria-label="Favorite" /></span>
              </Tooltip>
              <Tooltip content="Star">
                <span><IconButton icon={<Star size={18} weight="duotone" />} variant="ghost" aria-label="Star" /></span>
              </Tooltip>
            </div>
          </Card>
        </section>

        {/* Forms Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Form Controls
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Input" description="Text input with label" />
              <div className="space-y-4">
                <Input label="Name" placeholder="Enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Input label="Email" type="email" placeholder="Enter your email" />
                <Input label="With Error" placeholder="Invalid input" error="This field is required" />
              </div>
            </Card>

            <Card>
              <CardHeader title="Textarea & Select" description="Multi-line input and dropdown" />
              <div className="space-y-4">
                <Textarea label="Description" placeholder="Enter a description..." rows={3} />
                <Select
                  label="Category"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Checkboxes & Switches Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Checkboxes & Switches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Checkboxes" description="Multi-select options" />
              <CheckboxGroup label="Preferences">
                <Checkbox
                  checked={formCheckboxes.terms}
                  onCheckedChange={(c) => setFormCheckboxes({ ...formCheckboxes, terms: c as boolean })}
                  label="Accept terms and conditions"
                  description="Required to continue"
                />
                <Checkbox
                  checked={formCheckboxes.marketing}
                  onCheckedChange={(c) => setFormCheckboxes({ ...formCheckboxes, marketing: c as boolean })}
                  label="Receive marketing emails"
                />
                <Checkbox
                  checked={formCheckboxes.analytics}
                  onCheckedChange={(c) => setFormCheckboxes({ ...formCheckboxes, analytics: c as boolean })}
                  label="Share analytics data"
                  description="Helps us improve the product"
                />
                <Checkbox
                  checked={false}
                  disabled
                  label="Disabled option"
                />
              </CheckboxGroup>
            </Card>

            <Card>
              <CardHeader title="Switches" description="Toggle settings" />
              <div className="space-y-4">
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  label="Dark mode"
                  description="Use dark theme"
                />
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  label="Email notifications"
                />
                <Switch
                  checked={false}
                  disabled
                  label="Disabled switch"
                />
                <div className="pt-2 border-t border-[var(--card-border)]">
                  <p className="text-xs text-[var(--muted)] mb-3">Size variants</p>
                  <div className="flex items-center gap-6">
                    <Switch checked size="sm" label="Small" />
                    <Switch checked size="md" label="Medium" />
                    <Switch checked size="lg" label="Large" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Sliders Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Sliders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Single Slider" description="Select a single value" />
              <div className="space-y-6">
                <Slider
                  label="Volume"
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  showValue
                />
                <Slider
                  label="Brightness"
                  defaultValue={75}
                  showValue
                />
                <Slider
                  label="Disabled"
                  defaultValue={30}
                  disabled
                  showValue
                />
              </div>
            </Card>

            <Card>
              <CardHeader title="Range Slider" description="Select a range of values" />
              <div className="space-y-6">
                <RangeSlider
                  label="Price Range"
                  value={rangeValue}
                  onValueChange={setRangeValue}
                  min={0}
                  max={100}
                  showValue
                />
                <RangeSlider
                  label="Date Range"
                  defaultValue={[10, 90]}
                  showValue
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Radio Groups Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Radio Groups
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Basic Radio Group" description="Single selection" />
              <RadioGroup
                label="Select a plan"
                value={selectedPlan}
                onValueChange={setSelectedPlan}
              >
                <RadioItem value="free" label="Free" description="Basic features" />
                <RadioItem value="pro" label="Pro" description="Advanced features" />
                <RadioItem value="enterprise" label="Enterprise" description="Custom solutions" />
                <RadioItem value="disabled" label="Disabled" disabled />
              </RadioGroup>
            </Card>

            <Card>
              <CardHeader title="Horizontal Layout" description="Inline options" />
              <RadioGroup
                label="Frequency"
                defaultValue="monthly"
                orientation="horizontal"
              >
                <RadioItem value="daily" label="Daily" />
                <RadioItem value="weekly" label="Weekly" />
                <RadioItem value="monthly" label="Monthly" />
                <RadioItem value="yearly" label="Yearly" />
              </RadioGroup>
            </Card>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Tabs
          </h2>

          <Card>
            <CardHeader title="Standard Tabs" description="Segmented content navigation" />
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList>
                <Tab value="overview">Overview</Tab>
                <Tab value="analytics">Analytics</Tab>
                <Tab value="reports">Reports</Tab>
                <Tab value="settings">Settings</Tab>
              </TabsList>
              <TabPanel value="overview">
                <p className="text-[var(--muted)]">Overview content goes here. This is the main dashboard view.</p>
              </TabPanel>
              <TabPanel value="analytics">
                <p className="text-[var(--muted)]">Analytics content with charts and metrics would appear here.</p>
              </TabPanel>
              <TabPanel value="reports">
                <p className="text-[var(--muted)]">Reports and downloadable data exports.</p>
              </TabPanel>
              <TabPanel value="settings">
                <p className="text-[var(--muted)]">Settings and configuration options.</p>
              </TabPanel>
            </Tabs>
          </Card>
        </section>

        {/* Progress Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Linear Progress" description="Horizontal progress bars" />
              <div className="space-y-6">
                <Progress value={75} label="Upload Progress" showValue />
                <Progress value={45} label="Success" variant="success" showValue />
                <Progress value={60} label="Warning" variant="warning" showValue />
                <Progress value={30} label="Danger" variant="danger" showValue />
                <div className="pt-2 border-t border-[var(--card-border)]">
                  <p className="text-xs text-[var(--muted)] mb-3">Size variants</p>
                  <div className="space-y-3">
                    <Progress value={50} size="sm" />
                    <Progress value={50} size="md" />
                    <Progress value={50} size="lg" />
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader title="Circular Progress" description="Radial progress indicators" />
              <div className="flex flex-wrap items-end gap-6">
                <CircularProgress value={75} />
                <CircularProgress value={45} variant="success" />
                <CircularProgress value={60} variant="warning" />
                <CircularProgress value={30} variant="danger" />
                <CircularProgress value={90} size={48} strokeWidth={4} />
                <CircularProgress value={65} size={80} strokeWidth={8} />
              </div>
            </Card>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Accordion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Single Accordion" description="One panel open at a time" />
              <Accordion type="single" defaultValue={["item-1"]}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Base UI?</AccordionTrigger>
                  <AccordionContent>
                    Base UI is a library of unstyled, accessible components that you can customize to match your design system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I customize components?</AccordionTrigger>
                  <AccordionContent>
                    You can customize components using CSS variables defined in globals.css and Tailwind utility classes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes! All components follow WAI-ARIA guidelines and support keyboard navigation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            <Card>
              <CardHeader title="Collapsible Card" description="Standalone collapsible" />
              <div className="space-y-3">
                <CollapsibleCard title="Click to expand" defaultOpen>
                  This is the content inside a collapsible card. It can contain any content you need.
                </CollapsibleCard>
                <CollapsibleCard title="Another collapsible">
                  More content here. Use this for FAQ sections, settings panels, or any content that benefits from being hidden by default.
                </CollapsibleCard>
              </div>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Badges
          </h2>

          <Card>
            <CardHeader title="Badge Variants" description="Status indicators and labels" />
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </Card>
        </section>

        {/* Table Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Table
          </h2>

          <Card>
            <CardHeader title="Data Table" description="Display tabular data" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-[var(--primary)]">#001</TableCell>
                  <TableCell>Acme Corp</TableCell>
                  <TableCell><Badge variant="success">Completed</Badge></TableCell>
                  <TableCell className="font-mono">$1,200.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-[var(--primary)]">#002</TableCell>
                  <TableCell>TechStart Inc</TableCell>
                  <TableCell><Badge variant="warning">Pending</Badge></TableCell>
                  <TableCell className="font-mono">$850.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-[var(--primary)]">#003</TableCell>
                  <TableCell>Global Retail</TableCell>
                  <TableCell><Badge variant="info">Processing</Badge></TableCell>
                  <TableCell className="font-mono">$2,400.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Toasts & Modals */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Feedback
          </h2>

          <Card>
            <CardHeader title="Toast Notifications" description="Click buttons to trigger toasts" />
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => addToast({ type: "success", title: "Success!", description: "Action completed." })}>
                Success
              </Button>
              <Button variant="danger" onClick={() => addToast({ type: "error", title: "Error", description: "Something went wrong." })}>
                Error
              </Button>
              <Button variant="secondary" onClick={() => addToast({ type: "warning", title: "Warning", description: "Please review." })}>
                Warning
              </Button>
              <Button variant="outline" onClick={() => addToast({ type: "info", title: "Info", description: "Updates available." })}>
                Info
              </Button>
            </div>
          </Card>

          <Card>
            <CardHeader title="Modal Dialogs" description="Overlay dialogs" />
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Button variant="danger" onClick={() => setAlertOpen(true)}>Alert Dialog</Button>
            </div>

            <Modal open={modalOpen} onOpenChange={setModalOpen}>
              <ModalContent size="md">
                <ModalHeader>Edit Profile</ModalHeader>
                <ModalBody>
                  <div className="space-y-4">
                    <Input label="Name" placeholder="Enter your name" />
                    <Input label="Email" type="email" placeholder="Enter your email" />
                    <Textarea label="Bio" placeholder="Tell us about yourself..." rows={3} />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                  <Button onClick={() => setModalOpen(false)}>Save</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <AlertDialog
              open={alertOpen}
              onOpenChange={setAlertOpen}
              title="Delete Item?"
              description="This action cannot be undone."
              confirmText="Delete"
              variant="danger"
              onConfirm={() => addToast({ type: "success", title: "Deleted" })}
            />
          </Card>
        </section>

        {/* Skeletons */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Skeletons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader title="Basic Skeletons" description="Loading placeholders" />
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <SkeletonAvatar size={48} />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-1/3 mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <SkeletonText lines={3} />
              </div>
            </Card>

            <Card>
              <CardHeader title="Stat Skeleton" description="For stat cards" />
              <div className="grid grid-cols-2 gap-4">
                <SkeletonStat />
                <SkeletonStat />
              </div>
            </Card>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Color Palette
          </h2>

          <Card>
            <CardHeader title="Theme Colors" description="Custom palette: #E84855, #F3D104, #06D6A0, #0077B6, #023047" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Danger", var: "var(--danger)", hex: "#E84855" },
                { name: "Warning", var: "var(--warning)", hex: "#F3D104" },
                { name: "Success", var: "var(--success)", hex: "#06D6A0" },
                { name: "Info", var: "var(--info)", hex: "#0077B6" },
                { name: "Navy", var: "var(--navy)", hex: "#023047" },
                { name: "Primary", var: "var(--primary)", hex: "" },
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div className="w-full h-16 rounded-xl mb-2 shadow-sm" style={{ backgroundColor: color.var }} />
                  <p className="text-xs font-medium">{color.name}</p>
                  {color.hex && <p className="text-xs font-mono text-[var(--muted)]">{color.hex}</p>}
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Icons Preview */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-[var(--card-border)] pb-2 tracking-tight">
            Icons (Phosphor)
          </h2>

          <Card>
            <CardHeader title="Duotone Icons" description="Premium duotone style from Phosphor" />
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: Package, name: "Package" },
                { Icon: Truck, name: "Truck" },
                { Icon: Clock, name: "Clock" },
                { Icon: CheckCircle, name: "CheckCircle" },
                { Icon: PencilSimple, name: "Edit" },
                { Icon: Trash, name: "Trash" },
                { Icon: Gear, name: "Settings" },
                { Icon: User, name: "User" },
                { Icon: Bell, name: "Bell" },
                { Icon: Star, name: "Star" },
                { Icon: Heart, name: "Heart" },
                { Icon: Lightning, name: "Lightning" },
                { Icon: ChartLineUp, name: "Chart" },
                { Icon: Sparkle, name: "Sparkle" },
              ].map(({ Icon, name }) => (
                <Tooltip key={name} content={name}>
                  <div className="p-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer">
                    <Icon size={24} weight="duotone" className="text-[var(--foreground-secondary)]" />
                  </div>
                </Tooltip>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="Icon Weights" description="Different weights available" />
            <div className="flex flex-wrap items-center gap-6">
              {(["thin", "light", "regular", "bold", "fill", "duotone"] as const).map((weight) => (
                <div key={weight} className="text-center">
                  <div className="p-4 rounded-xl bg-[var(--accent)] mb-2">
                    <Package size={32} weight={weight} className="text-[var(--foreground-secondary)]" />
                  </div>
                  <p className="text-xs font-mono text-[var(--muted)]">{weight}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
}
