import { Play } from "lucide-react";

type VideoPlayerProps = {
  videoId: string;
  title?: string;
};

export default function VideoPlayer({ videoId, title = "Video" }: VideoPlayerProps) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
      style={{ aspectRatio: "16 / 9" }}
    >
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Play ${title} on YouTube`}
        className="group absolute inset-0 w-full h-full cursor-pointer block"
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
          <span className="w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
            <Play size={32} className="text-white ml-1" fill="white" />
          </span>
        </span>
      </a>
    </div>
  );
}
