import { useEffect } from "react";
import { X } from "lucide-react";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

const VIDEO_ID = "aAeJr9tXrGg";

export default function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative w-[25vw] min-w-[320px] aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close demo video"
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors p-2"
        >
          <X size={24} />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
          title="Encountive Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
