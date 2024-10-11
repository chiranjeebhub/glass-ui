"use client";

import { useState } from "react";
import { GlassTextarea } from "@/components/ui/GlassTextarea";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassLabel } from "@/components/ui/GlassLabel";

export default function TextareaPage() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Textarea</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { GlassTextarea } from '@/components/ui/GlassTextarea'

export default function MyComponent() {
  return (
    <GlassTextarea
      placeholder="Enter your message"
      rows={4}
    />
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Default Textarea
            </h3>
            <GlassTextarea
              placeholder="Enter your message"
              rows={4}
              className="w-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Textarea with Label
            </h3>
            <GlassLabel htmlFor="message" className="mb-2 block">
              Message
            </GlassLabel>
            <GlassTextarea
              id="message"
              placeholder="Type your message here"
              rows={4}
              className="w-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Controlled Textarea
            </h3>
            <GlassTextarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type something..."
              rows={4}
              className="w-full mb-2"
            />
            <p className="text-sm text-white">Characters: {value.length}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Disabled Textarea
            </h3>
            <GlassTextarea
              disabled
              placeholder="This textarea is disabled"
              rows={4}
              className="w-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Resizable Textarea
            </h3>
            <GlassTextarea
              placeholder="This textarea is resizable"
              rows={4}
              className="w-full resize-y"
            />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
