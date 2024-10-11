import Link from "next/link";
import { GlassButton, GlassCard } from "@/components/ui";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden -mt-16">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-6xl font-bold text-slate-800 dark:text-white mb-6">
          Glassmorphic UI Library
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          A modern, beautiful, and accessible UI library with a frosted glass
          design. Create stunning interfaces with ease.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="/docs">
            <GlassButton size="lg" className="flex items-center gap-2">
              Explore Components <ArrowRight className="w-4 h-4" />
            </GlassButton>
          </Link>
          <Link
            href="https://github.com/yourusername/glassmorphic-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlassButton
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              View on GitHub <Code className="w-4 h-4" />
            </GlassButton>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="p-6 flex flex-col items-center text-center">
            <Zap className="w-12 h-12 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">
              Lightning Fast
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Optimized for performance, ensuring smooth interactions and quick
              load times.
            </p>
          </GlassCard>
          <GlassCard className="p-6 flex flex-col items-center text-center">
            <Palette className="w-12 h-12 text-purple-500 mb-4" />
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">
              Customizable
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Easily adapt the components to match your brand's unique style and
              color scheme.
            </p>
          </GlassCard>
          <GlassCard className="p-6 flex flex-col items-center text-center">
            <Code className="w-12 h-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">
              Developer Friendly
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Built with React and TypeScript, offering a smooth development
              experience.
            </p>
          </GlassCard>
        </div>
      </div>
      <footer className="mt-16 text-slate-600 dark:text-slate-400 text-sm">
        © 2023 Glassmorphic UI. All rights reserved.
      </footer>
    </div>
  );
}
