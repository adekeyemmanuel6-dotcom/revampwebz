import Image from "next/image";
import { cn } from "@/lib/utils";
import { photoUrl } from "@/lib/images";

export default function MockBrowser({
  variant = "after",
  title,
  seed,
  className,
}: {
  variant?: "before" | "after";
  title?: string;
  seed?: string;
  className?: string;
}) {
  const isAfter = variant === "after";
  const photoSeed = `${seed || title || "revamp-webz"}-${variant}`;

  return (
    <div className={cn("relative flex h-full w-full flex-col overflow-hidden", isAfter ? "bg-navy" : "bg-[#e9e9e4]", className)}>
      <div
        className={cn(
          "z-10 flex items-center gap-1.5 border-b px-3 py-2",
          isAfter ? "border-white/10 bg-navy-deep" : "border-black/10 bg-[#d8d8d2]"
        )}
      >
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
        {title && (
          <span className={cn("ml-2 truncate text-[10px] uppercase tracking-widest", isAfter ? "text-muted" : "text-black/40")}>
            {title}
          </span>
        )}
      </div>

      <div className="relative flex-1">
        <Image
          src={photoUrl(photoSeed, 960, 720)}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn("object-cover", !isAfter && "grayscale-[40%] contrast-90 sepia-[0.08]")}
        />
        {isAfter ? (
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
        ) : (
          <div className="absolute inset-0 bg-black/10" />
        )}
      </div>
    </div>
  );
}
