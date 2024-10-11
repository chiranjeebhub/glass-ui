"use client";

import { useState } from "react";
import {
  GlassSheet,
  GlassSheetTrigger,
  GlassSheetContent,
  GlassSheetHeader,
  GlassSheetFooter,
  GlassSheetTitle,
  GlassSheetDescription,
} from "@/components/ui/GlassSheet";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";

export default function SheetPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Sheet</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { useState } from 'react'
import {
  GlassSheet,
  GlassSheetTrigger,
  GlassSheetContent,
  GlassSheetHeader,
  GlassSheetFooter,
  GlassSheetTitle,
  GlassSheetDescription,
} from '@/components/ui/GlassSheet'
import { GlassButton } from '@/components/ui/GlassButton'

export default function MyComponent() {
  const [open, setOpen] = useState(false)

  return (
    <GlassSheet open={open} onOpenChange={setOpen}>
      <GlassSheetTrigger asChild>
        <GlassButton>Open Sheet</GlassButton>
      </GlassSheetTrigger>
      <GlassSheetContent>
        <GlassSheetHeader>
          <GlassSheetTitle>Sheet Title</GlassSheetTitle>
          <GlassSheetDescription>
            This is a description of the sheet.
          </GlassSheetDescription>
        </GlassSheetHeader>
        <div className="py-4">
          <p>This is the main content of the sheet.</p>
        </div>
        <GlassSheetFooter>
          <GlassButton onClick={() => setOpen(false)}>Close Sheet</GlassButton>
        </GlassSheetFooter>
      </GlassSheetContent>
    </GlassSheet>
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Example</h2>
        <GlassSheet open={open} onOpenChange={setOpen}>
          <GlassSheetTrigger asChild>
            <GlassButton>Open Sheet</GlassButton>
          </GlassSheetTrigger>
          <GlassSheetContent>
            <GlassSheetHeader>
              <GlassSheetTitle>Sheet Title</GlassSheetTitle>
              <GlassSheetDescription>
                This is a description of the sheet.
              </GlassSheetDescription>
            </GlassSheetHeader>
            <div className="py-4">
              <p className="text-white/80">
                This is the main content of the sheet. You can put any content
                here.
              </p>
            </div>
            <GlassSheetFooter>
              <GlassButton onClick={() => setOpen(false)}>
                Close Sheet
              </GlassButton>
            </GlassSheetFooter>
          </GlassSheetContent>
        </GlassSheet>
      </GlassCard>
    </div>
  );
}
