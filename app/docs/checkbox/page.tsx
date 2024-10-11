"use client";
import { useState } from "react";
import { GlassCheckbox } from "@/components/ui/GlassCheckbox";
import { GlassCard } from "@/components/ui/GlassCard";

export default function CheckboxPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Checkbox</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { useState } from 'react'
import { GlassCheckbox } from '@/components/ui/GlassCheckbox'

export default function MyComponent() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <GlassCheckbox
      checked={isChecked}
      onChange={(checked) => setIsChecked(checked)}
      label="Accept terms and conditions"
    />
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <GlassCheckbox
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked)}
            label="Default checkbox"
          />
          <GlassCheckbox
            checked={true}
            onCheckedChange={() => {}}
            label="Checked checkbox"
          />
          <GlassCheckbox
            checked={false}
            onCheckedChange={() => {}}
            label="Disabled checkbox"
            disabled
          />
        </div>
      </GlassCard>
    </div>
  );
}
