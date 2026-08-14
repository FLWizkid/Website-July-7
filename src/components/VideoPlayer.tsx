import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

type VideoPlayerProps = {
  videoId: string;
  title?: string;
};

export default function VideoPlayer({ videoId, title = "Video" }: VideoPlayerProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const embedSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
        style={{ aspectRatio: "16 / 9" }}
      >
        {loaded && !error ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedSrc}
            title={title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onError={() => setError(true)}
          />
        ) : error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900 text-white p-8">
            <p className="text-center text-sm text-gray-300">
              The video could not be loaded here.
            </p>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors"
            >
              Watch on YouTube <ExternalLink size={16} />
            </a>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
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

      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-end text-xs text-gray-400 hover:text-brand-cyan transition-colors"
      >
        Watch on YouTube <ExternalLink size={12} />
      </a>
    </div>
  );
}
