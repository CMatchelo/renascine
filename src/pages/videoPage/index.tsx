import { useParams, Navigate } from "react-router-dom";
import { videoPages } from "../../data/videoPages";

export default function VideoPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? videoPages[slug] : null;

  if (!page) {
    return <Navigate to="/" />;
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl text-red-500 mb-6">{page.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {page.videos.map((video, index) => (
          <>
            <iframe
              loading="lazy"
              key={index}
              src={video.link}
              className="w-full aspect-video rounded-lg"
              allowFullScreen
            />
          </>
        ))}
      </div>
    </section>
  );
}
