export default function SectionLabel({
  children,
  className,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-dark/60" : "text-muted"
      } ${className || ""}`}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-rust" />
      {children}
    </div>
  );
}
