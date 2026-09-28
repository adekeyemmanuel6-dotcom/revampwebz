import { cn } from "@/lib/utils";

export default function MockBrowser({
  variant = "after",
  title,
  className,
}: {
  variant?: "before" | "after";
  title?: string;
  className?: string;
}) {
  const isAfter = variant === "after";
  return (
    <div className={cn("flex h-full w-full flex-col", isAfter ? "bg-navy" : "bg-[#e9e9e4]", className)}>
      <div
        className={cn(
          "flex items-center gap-1.5 border-b px-3 py-2",
          isAfter ? "border-white/10 bg-navy-deep" : "border-black/10 bg-[#d8d8d2]"
        )}
      >
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        {isAfter ? (
          <>
            <div className="h-2 w-24 rounded-full bg-yellow-electric/70" />
            <div className="h-6 w-3/4 max-w-xs rounded-md bg-off/90" />
            <div className="h-3 w-1/2 max-w-[200px] rounded-md bg-off/40" />
            <div className="mt-4 h-9 w-32 rounded-full bg-yellow-electric" />
          </>
        ) : (
          <>
            <div className="h-2 w-24 rounded-full bg-black/20" />
            <div className="h-6 w-3/4 max-w-xs rounded-md bg-black/30" />
            <div className="h-3 w-1/2 max-w-[200px] rounded-md bg-black/15" />
            <div className="mt-4 h-9 w-32 rounded-md bg-black/25" />
          </>
        )}
        {title && (
          <p className={cn("mt-2 text-xs uppercase tracking-widest", isAfter ? "text-muted" : "text-black/40")}>
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
