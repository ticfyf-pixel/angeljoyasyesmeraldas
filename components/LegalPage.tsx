export function LegalPage({ title, body }: { title: string; body: string[] }) {
  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-10">
        <h1 className="font-serif text-4xl tracking-wide2">{title}</h1>
        <div className="mt-10 space-y-5 text-sm leading-7 text-ink/80">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
