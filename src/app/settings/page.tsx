"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, Button, Input } from "@/components/ui";
import { User, Building, Bell, Shield, Palette, Globe } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "company", label: "Company", icon: Building },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: Globe },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-[var(--muted)] mt-1">
            Manage your account and application preferences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <Card className="lg:w-64 shrink-0 p-2">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[var(--primary)] text-white"
                        : "text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </Card>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {activeTab === "profile" && (
              <>
                <Card>
                  <CardHeader
                    title="Profile Information"
                    description="Update your personal details"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-2xl font-semibold">
                        JD
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Change Avatar
                        </Button>
                        <p className="text-xs text-[var(--muted)] mt-1">
                          JPG, PNG or GIF. Max 2MB.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="First Name" defaultValue="John" />
                      <Input label="Last Name" defaultValue="Doe" />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      defaultValue="john.doe@shipflow.com"
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </Card>
              </>
            )}

            {activeTab === "company" && (
              <Card>
                <CardHeader
                  title="Company Settings"
                  description="Manage your organization details"
                />
                <div className="space-y-4">
                  <Input label="Company Name" defaultValue="ShipFlow Inc." />
                  <Input
                    label="Business Email"
                    defaultValue="contact@shipflow.com"
                  />
                  <Input label="Address" defaultValue="123 Shipping Lane" />
                  <div className="grid grid-cols-3 gap-4">
                    <Input label="City" defaultValue="New York" />
                    <Input label="State" defaultValue="NY" />
                    <Input label="ZIP" defaultValue="10001" />
                  </div>
                  <Input label="Tax ID" defaultValue="XX-XXXXXXX" />
                </div>
                <div className="mt-6 flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </Card>
            )}

            {activeTab === "notifications" && (
              <Card>
                <CardHeader
                  title="Notification Preferences"
                  description="Choose what updates you want to receive"
                />
                <div className="space-y-4">
                  {[
                    {
                      title: "Order Updates",
                      description: "Get notified when orders are placed or updated",
                    },
                    {
                      title: "Shipment Status",
                      description: "Receive updates on shipment tracking",
                    },
                    {
                      title: "Low Stock Alerts",
                      description: "Be alerted when inventory is running low",
                    },
                    {
                      title: "Weekly Reports",
                      description: "Receive weekly performance summaries",
                    },
                    {
                      title: "Marketing Emails",
                      description: "Get tips and product updates",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between py-3 border-b border-[var(--card-border)] last:border-0"
                    >
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-[var(--muted)]">
                          {item.description}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-[var(--accent)] peer-focus:ring-2 peer-focus:ring-[var(--primary)] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === "security" && (
              <Card>
                <CardHeader
                  title="Security Settings"
                  description="Manage your account security"
                />
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Change Password</h3>
                    <Input
                      label="Current Password"
                      type="password"
                      placeholder="Enter current password"
                    />
                    <Input
                      label="New Password"
                      type="password"
                      placeholder="Enter new password"
                    />
                    <Input
                      label="Confirm New Password"
                      type="password"
                      placeholder="Confirm new password"
                    />
                    <Button>Update Password</Button>
                  </div>
                  <div className="border-t border-[var(--card-border)] pt-6">
                    <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 bg-[var(--accent)] rounded-lg">
                      <div>
                        <p className="font-medium">2FA is currently disabled</p>
                        <p className="text-sm text-[var(--muted)]">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === "appearance" && (
              <Card>
                <CardHeader
                  title="Appearance"
                  description="Customize how the app looks"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Theme</h3>
                    <div className="flex gap-4">
                      {["Light", "Dark", "System"].map((theme) => (
                        <button
                          key={theme}
                          className={`px-6 py-3 rounded-lg border-2 transition-colors cursor-pointer ${
                            theme === "System"
                              ? "border-[var(--primary)] bg-[var(--accent)]"
                              : "border-[var(--card-border)] hover:border-[var(--primary)]"
                          }`}
                        >
                          {theme}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Sidebar</h3>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span>Auto-collapse sidebar on small screens</span>
                    </label>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === "integrations" && (
              <Card>
                <CardHeader
                  title="Integrations"
                  description="Connect with third-party services"
                />
                <div className="space-y-4">
                  {[
                    {
                      name: "Shopify",
                      description: "Sync orders from your Shopify store",
                      connected: true,
                    },
                    {
                      name: "Stripe",
                      description: "Process payments and manage billing",
                      connected: true,
                    },
                    {
                      name: "Slack",
                      description: "Get notifications in your Slack channels",
                      connected: false,
                    },
                    {
                      name: "QuickBooks",
                      description: "Sync with your accounting software",
                      connected: false,
                    },
                  ].map((integration) => (
                    <div
                      key={integration.name}
                      className="flex items-center justify-between p-4 border border-[var(--card-border)] rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center font-medium">
                          {integration.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{integration.name}</p>
                          <p className="text-sm text-[var(--muted)]">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant={integration.connected ? "outline" : "primary"}
                        size="sm"
                      >
                        {integration.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
