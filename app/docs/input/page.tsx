import { GlassInput } from "@/components/ui/GlassInput";
import { GlassCard } from "@/components/ui/GlassCard";

export default function InputPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Input</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { GlassInput } from '@/components/ui/GlassInput'

export default function MyComponent() {
  return <GlassInput placeholder="Enter text..." />
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="space-y-4">
          <GlassInput placeholder="Default input" />
          <GlassInput placeholder="Disabled input" disabled />
          <GlassInput placeholder="With label" label="Username" />
          <GlassInput placeholder="With error" error="This field is required" />
        </div>
      </GlassCard>
    </div>
  );
}
