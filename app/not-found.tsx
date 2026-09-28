import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-off px-4 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-dark">404</p>
      <h1 className="mt-6 max-w-lg text-balance font-display text-4xl font-semibold tracking-tight text-dark md:text-6xl">
        This page didn&apos;t make the cut.
      </h1>
      <p className="mt-6 max-w-sm text-base text-muted-dark">
        Let&apos;s get you back to something worth looking at.
      </p>
      <div className="mt-10">
        <Button href="/">Back to Home →</Button>
      </div>
    </section>
  );
}
