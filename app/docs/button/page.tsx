import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ButtonPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Button</h1>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Usage</h2>
        <pre className="bg-black/50 p-4 rounded-md text-white">
          {`import { GlassButton } from '@/components/ui/GlassButton'

export default function MyComponent() {
  return <GlassButton>Click me</GlassButton>
}`}
        </pre>
      </GlassCard>
      <GlassCard>
        <h2 className="text-xl font-semibold mb-2 text-white">Examples</h2>
        <div className="flex flex-wrap gap-4">
          <GlassButton>Default</GlassButton>
          <GlassButton variant="destructive">Destructive</GlassButton>
          <GlassButton variant="outline">Outline</GlassButton>
          <GlassButton variant="secondary">Secondary</GlassButton>
          <GlassButton variant="ghost">Ghost</GlassButton>
          <GlassButton variant="link">Link</GlassButton>
        </div>
      </GlassCard>
    </div>
  );
}
