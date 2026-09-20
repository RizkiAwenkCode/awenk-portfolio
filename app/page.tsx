const colors = [
  { name: "Navy", token: "--color-navy", className: "bg-navy" },
  { name: "Yellow", token: "--color-yellow", className: "bg-yellow" },
  { name: "Canvas", token: "--color-canvas", className: "bg-canvas" },
  { name: "Surface", token: "--color-surface", className: "bg-surface" },
];

const spacing = ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"];

export default function FoundationPreview() {
  return (
    <main className="min-h-screen bg-canvas text-navy">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-16">
        <header className="grid gap-6 border-b border-navy/15 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.08em] text-navy/65">
              Foundation preview / 01
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight lg:text-7xl">
              Complexity Simplified
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/75">
              A temporary review surface for Awenk&apos;s approved visual language. Portfolio
              sections are intentionally not implemented yet.
            </p>
          </div>
          <span className="rounded-button inline-flex min-h-12 items-center justify-center bg-yellow px-5 font-semibold text-navy">
            Awenk
          </span>
        </header>

        <section aria-labelledby="colors-heading" className="grid gap-6">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.08em] text-navy/65">Tokens</p>
            <h2 id="colors-heading" className="mt-2 text-3xl font-semibold">
              Color and surface
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((color) => (
              <article key={color.name} className="overflow-hidden rounded-card border border-navy/15 bg-surface">
                <div className={`h-24 ${color.className}`} aria-hidden="true" />
                <div className="grid gap-1 p-4">
                  <h3 className="text-lg font-semibold">{color.name}</h3>
                  <code className="font-mono text-sm text-navy/65">{color.token}</code>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="type-heading" className="grid gap-6 border-t border-navy/15 pt-12">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.08em] text-navy/65">Type scale</p>
            <h2 id="type-heading" className="mt-2 text-3xl font-semibold">
              Inter with technical notes
            </h2>
          </div>
          <div className="grid gap-5 rounded-card border border-navy/15 bg-surface p-6 lg:grid-cols-2">
            <p className="text-5xl font-semibold">Frontend Engineering</p>
            <div className="grid gap-4 text-lg leading-8 text-navy/75">
              <p>Responsive, accessible interfaces and performance.</p>
              <p className="font-mono text-base text-navy/65">IBM Plex Mono / technical label</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="spacing-heading" className="grid gap-6 border-t border-navy/15 pt-12">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.08em] text-navy/65">Rhythm</p>
            <h2 id="spacing-heading" className="mt-2 text-3xl font-semibold">
              Spacing scale
            </h2>
          </div>
          <div className="grid gap-3">
            {spacing.map((value) => (
              <div key={value} className="grid grid-cols-[80px_1fr] items-center gap-4">
                <code className="font-mono text-sm text-navy/65">{value}</code>
                <div className="h-4 rounded-sm bg-yellow" style={{ width: value }} aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="controls-heading" className="grid gap-6 border-t border-navy/15 pt-12">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.08em] text-navy/65">Controls</p>
            <h2 id="controls-heading" className="mt-2 text-3xl font-semibold">
              Accessible starting points
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-card border border-navy/15 bg-surface p-6">
            <button type="button" className="rounded-button min-h-12 bg-navy px-6 font-semibold text-canvas">
              Primary action
            </button>
            <button type="button" className="rounded-button min-h-12 border-2 border-navy px-6 font-semibold text-navy">
              Secondary action
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}