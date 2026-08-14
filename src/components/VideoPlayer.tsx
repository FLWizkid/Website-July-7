import { useState } from "react";
import { Play } from "lucide-react";

type VideoPlayerProps = {
  videoId: string;
  title?: string;
};

export default function VideoPlayer({ videoId, title = "Video" }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
      style={{ aspectRatio: "16 / 9" }}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.includes("maxresdefault")) {
                img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <span className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
              <Play size={32} className="text-gray-900 ml-1" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
