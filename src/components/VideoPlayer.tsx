import { Play } from "lucide-react";

type VideoPlayerProps = {
  videoId: string;
  title?: string;
};

export default function VideoPlayer({ videoId, title = "Video" }: VideoPlayerProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube`}
      className="group relative block rounded-2xl overflow-hidden shadow-2xl w-full"
      style={{ aspectRatio: "16 / 9" }}
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
    </a>
  );
}
