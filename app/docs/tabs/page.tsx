"use client";

import {
  GlassTabs,
  GlassTabsList,
  GlassTabsTrigger,
  GlassTabsContent,
} from "@/components/ui/GlassTabs";
import { GlassCard } from "@/components/ui/GlassCard";

export default function TabsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Tabs</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent } from '@/components/ui/GlassTabs'

export default function MyComponent() {
  return (
    <GlassTabs defaultValue="tab1">
      <GlassTabsList>
        <GlassTabsTrigger value="tab1">Tab 1</GlassTabsTrigger>
        <GlassTabsTrigger value="tab2">Tab 2</GlassTabsTrigger>
        <GlassTabsTrigger value="tab3">Tab 3</GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="tab1">Content of Tab 1</GlassTabsContent>
      <GlassTabsContent value="tab2">Content of Tab 2</GlassTabsContent>
      <GlassTabsContent value="tab3">Content of Tab 3</GlassTabsContent>
    </GlassTabs>
  )
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Default Tabs
            </h3>
            <GlassTabs defaultValue="tab1">
              <GlassTabsList>
                <GlassTabsTrigger value="tab1">Tab 1</GlassTabsTrigger>
                <GlassTabsTrigger value="tab2">Tab 2</GlassTabsTrigger>
                <GlassTabsTrigger value="tab3">Tab 3</GlassTabsTrigger>
              </GlassTabsList>
              <GlassTabsContent value="tab1">
                <p className="p-4 text-white">Content of Tab 1</p>
              </GlassTabsContent>
              <GlassTabsContent value="tab2">
                <p className="p-4 text-white">Content of Tab 2</p>
              </GlassTabsContent>
              <GlassTabsContent value="tab3">
                <p className="p-4 text-white">Content of Tab 3</p>
              </GlassTabsContent>
            </GlassTabs>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Tabs with Custom Styling
            </h3>
            <GlassTabs defaultValue="tab1">
              <GlassTabsList className="w-full">
                <GlassTabsTrigger value="tab1" className="w-full">
                  Profile
                </GlassTabsTrigger>
                <GlassTabsTrigger value="tab2" className="w-full">
                  Settings
                </GlassTabsTrigger>
              </GlassTabsList>
              <GlassTabsContent value="tab1">
                <div className="p-4 bg-white/5 rounded-md mt-2">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    User Profile
                  </h4>
                  <p className="text-white/80">
                    This is where user profile information would be displayed.
                  </p>
                </div>
              </GlassTabsContent>
              <GlassTabsContent value="tab2">
                <div className="p-4 bg-white/5 rounded-md mt-2">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    User Settings
                  </h4>
                  <p className="text-white/80">
                    This is where user settings would be configured.
                  </p>
                </div>
              </GlassTabsContent>
            </GlassTabs>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              Disabled Tab
            </h3>
            <GlassTabs defaultValue="tab1">
              <GlassTabsList>
                <GlassTabsTrigger value="tab1">Enabled</GlassTabsTrigger>
                <GlassTabsTrigger value="tab2" disabled>
                  Disabled
                </GlassTabsTrigger>
              </GlassTabsList>
              <GlassTabsContent value="tab1">
                <p className="p-4 text-white">
                  This tab is enabled and can be interacted with.
                </p>
              </GlassTabsContent>
              <GlassTabsContent value="tab2">
                <p className="p-4 text-white">
                  This content is not accessible due to the disabled tab.
                </p>
              </GlassTabsContent>
            </GlassTabs>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
