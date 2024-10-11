"use client";

import { useState } from "react";
import { GlassSwitch } from "@/components/ui/GlassSwitch";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassLabel } from "@/components/ui/GlassLabel";

export default function SwitchPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Switch</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { useState } from 'react'
import { GlassSwitch } from '@/components/ui/GlassSwitch'
import { GlassLabel } from '@/components/ui/GlassLabel'

export default function MyComponent() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <GlassSwitch
        id="airplane-mode"
        checked={isChecked}
        onCheckedChange={setIsChecked}
      />
      <GlassLabel htmlFor="airplane-mode">Airplane Mode</GlassLabel>
    </div>
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Default Switch
            </h3>
            <div className="flex items-center space-x-2">
              <GlassSwitch
                id="default-switch"
                checked={isChecked}
                onCheckedChange={setIsChecked}
              />
              <GlassLabel htmlFor="default-switch" className="text-white">
                Toggle me
              </GlassLabel>
            </div>
            <p className="mt-2 text-sm text-white">
              Current state: {isChecked ? "On" : "Off"}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Disabled Switch
            </h3>
            <div className="flex items-center space-x-2">
              <GlassSwitch id="disabled-switch" disabled />
              <GlassLabel htmlFor="disabled-switch" className="text-white">
                Disabled
              </GlassLabel>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Switch with Custom GlassLabel
            </h3>
            <div className="flex items-center space-x-2">
              <GlassSwitch id="custom-GlassLabel-switch" />
              <GlassLabel
                htmlFor="custom-GlassLabel-switch"
                className="text-white"
              >
                Enable notifications
              </GlassLabel>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
