import { useEffect, useState } from "react";

interface VideoEmbedProps {
  url: string;
  title: string;
}

export function VideoEmbed({ url, title }: VideoEmbedProps) {
  const [play, setPlay] = useState(false);

  const getYoutubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([^?&]+)/);
    return match?.[1];
  };

  useEffect(() => {
    setPlay(false);
  }, [url]);

  const videoId = getYoutubeId(url);

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden group">
      {!play ? (
        <button
          onClick={() => setPlay(true)}
          className="relative w-full h-full"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
              ▶
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`${url}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}
