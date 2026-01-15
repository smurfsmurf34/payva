"use client";

import React, { useRef, useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button, Input, Field, FieldLabel } from "@/components/ui";
import { Download, Eye, EyeSlash, Image as ImageIcon } from "@phosphor-icons/react";
import { toPng } from "html-to-image";
import NextImage from "next/image";

interface SlideData {
  clientName: string;
  projectName: string;
  subtitle: string;
  date: string;
}

export default function SlidesPage() {
  const slideRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [slideData, setSlideData] = useState<SlideData>({
    clientName: "",
    projectName: "",
    subtitle: "",
    date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
  });

  const handleExport = async () => {
    if (!slideRef.current) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(slideRef.current, {
        width: 1920,
        height: 1080,
        pixelRatio: 2,
        backgroundColor: "#FAFAF8",
        skipFonts: true,
        filter: (node: HTMLElement) => {
          // Skip external stylesheets that cause CORS issues
          if (node.tagName === 'LINK' && node.getAttribute('rel') === 'stylesheet') {
            return false;
          }
          return true;
        },
      });

      const link = document.createElement("a");
      link.download = `canary-slide-${slideData.clientName || "template"}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error exporting slide:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const updateSlideData = (field: keyof SlideData, value: string) => {
    setSlideData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Slide Generator</h1>
            <p className="text-[var(--muted)] mt-1">
              Create branded slides for client decks and pitches
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setShowControls(!showControls)}
            >
              {showControls ? <EyeSlash size={18} /> : <Eye size={18} />}
              <span className="ml-2">{showControls ? "Hide" : "Show"} Controls</span>
            </Button>
            <Button
              variant="primary"
              onClick={handleExport}
              disabled={isExporting}
            >
              {isExporting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="ml-2">Exporting...</span>
                </>
              ) : (
                <>
                  <Download size={18} weight="bold" />
                  <span className="ml-2">Export PNG</span>
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
          {/* Slide Preview */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 overflow-hidden">
            <div className="flex items-center gap-2 mb-4 text-sm text-[var(--muted)]">
              <ImageIcon size={16} />
              <span>Preview (1920 x 1080)</span>
            </div>

            {/* Slide Container - scaled preview */}
            <div className="overflow-auto">
              <div
                className="origin-top-left"
                style={{
                  transform: "scale(0.45)",
                  width: "1920px",
                  height: "1080px",
                  marginBottom: "-594px", // Compensate for scale (1080 * 0.45 - 1080)
                  marginRight: "-1056px", // Compensate for scale (1920 * 0.45 - 1920)
                }}
              >
                {/* Actual Slide - 1920x1080 */}
                <div
                  ref={slideRef}
                  className="relative overflow-hidden"
                  style={{
                    width: "1920px",
                    height: "1080px",
                    backgroundColor: "#FAFAF8",
                    fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {/* Header - Small branding with client name */}
                  <div
                    className="absolute top-0 left-0 right-0 px-16 py-10 flex items-center justify-between"
                    style={{
                      borderBottom: "1px solid #E5E5E5",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5"
                        style={{ backgroundColor: "#F3D104" }}
                      >
                        <NextImage
                          src="/canarycanarylogo-white.svg"
                          alt="Canary Canary"
                          width={28}
                          height={28}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span
                        className="font-semibold"
                        style={{ fontSize: "20px", color: "#1A1A1A" }}
                      >
                        Canary Canary
                      </span>
                    </div>
                    {/* Client Name - centered in header */}
                    {slideData.clientName && (
                      <span
                        className="font-medium absolute left-1/2 -translate-x-1/2"
                        style={{ fontSize: "20px", color: "#71717A" }}
                      >
                        {slideData.clientName}
                      </span>
                    )}
                    <span
                      className="font-medium"
                      style={{ fontSize: "18px", color: "#71717A" }}
                    >
                      2026
                    </span>
                  </div>

                  {/* Main content area - centered */}
                  <div
                    className="absolute left-0 right-0 flex flex-col justify-center items-center text-center px-24"
                    style={{
                      top: "120px",
                      bottom: "100px",
                    }}
                  >
                    {/* Project Name - Main focus */}
                    {slideData.projectName && (
                      <h1
                        className="font-bold leading-tight"
                        style={{
                          fontSize: "96px",
                          color: "#1A1A1A",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {slideData.projectName}
                      </h1>
                    )}

                    {/* Subtitle */}
                    {slideData.subtitle && (
                      <p
                        className="mt-8 font-normal"
                        style={{
                          fontSize: "36px",
                          color: "#71717A",
                          maxWidth: "1200px",
                        }}
                      >
                        {slideData.subtitle}
                      </p>
                    )}

                    {/* Placeholder text when empty */}
                    {!slideData.projectName && !slideData.subtitle && (
                      <div className="flex flex-col items-center gap-4">
                        <p
                          className="font-medium"
                          style={{
                            fontSize: "32px",
                            color: "#D4D4D8",
                          }}
                        >
                          Project Name
                        </p>
                        <p
                          style={{
                            fontSize: "24px",
                            color: "#E5E5E5",
                          }}
                        >
                          Add your content using the controls
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Footer - Small branding */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-16 py-8 flex items-center justify-between"
                    style={{
                      borderTop: "1px solid #E5E5E5",
                    }}
                  >
                    <p
                      className="font-medium"
                      style={{
                        fontSize: "16px",
                        color: "#A1A1AA",
                      }}
                    >
                      canarycanary.com
                    </p>
                    <p
                      className="font-medium"
                      style={{
                        fontSize: "16px",
                        color: "#A1A1AA",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {slideData.date || "January 2026"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          {showControls && (
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 h-fit space-y-6">
              <div>
                <h2 className="font-semibold text-lg mb-4">Customize Slide</h2>
                <p className="text-sm text-[var(--muted)]">
                  Add client and project details to personalize your slide.
                </p>
              </div>

              <div className="space-y-4">
                <Field>
                  <FieldLabel>Client Name</FieldLabel>
                  <Input
                    placeholder="e.g., Acme Corporation"
                    value={slideData.clientName}
                    onChange={(e) => updateSlideData("clientName", e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel>Project Name</FieldLabel>
                  <Input
                    placeholder="e.g., Brand Refresh 2026"
                    value={slideData.projectName}
                    onChange={(e) => updateSlideData("projectName", e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel>Subtitle / Description</FieldLabel>
                  <Input
                    placeholder="e.g., Strategic Brand Partnership"
                    value={slideData.subtitle}
                    onChange={(e) => updateSlideData("subtitle", e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel>Date</FieldLabel>
                  <Input
                    placeholder="e.g., January 2026"
                    value={slideData.date}
                    onChange={(e) => updateSlideData("date", e.target.value)}
                  />
                </Field>
              </div>

              <div className="pt-4 border-t border-[var(--card-border)]">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => setSlideData({
                    clientName: "",
                    projectName: "",
                    subtitle: "",
                    date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                  })}
                >
                  Reset to Default
                </Button>
              </div>

              <div className="text-xs text-[var(--muted)] space-y-1">
                <p><strong>Export:</strong> 1920 x 1080px @ 2x (3840 x 2160px)</p>
                <p><strong>Format:</strong> PNG with transparency support</p>
                <p><strong>Use:</strong> Import into Photoshop, Keynote, or PowerPoint</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
