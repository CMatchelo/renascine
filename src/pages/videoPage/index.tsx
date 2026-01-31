import { useParams, Navigate } from "react-router-dom";
import { videoPages } from "../../data/videoPages";
import { useEffect } from "react";
import { NavigateBtn } from "../../components/navigateBtn";
import { VideoEmbed } from "../../components/videoEmbeded";

export default function VideoPage() {
  const { slug } = useParams<{ slug: string }>();

  const slugs = Object.keys(videoPages);
  const currentIndex = slug ? slugs.indexOf(slug) : -1;

  const page = slug ? videoPages[slug] : null;

  if (!page || currentIndex === -1) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const prevSlug = slugs[(currentIndex - 1 + slugs.length) % slugs.length];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl text-red-500 mb-6">{page.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {page.videos.map((video, index) => (
          <div key={index} className="flex flex-col">
            <VideoEmbed url={video.link} title={video.title} />
            <h3 className="text-md font-bold mt-4">{video.title}</h3>
            <h4 className="text-sm">{video.subTitle}</h4>
            <span className="text-xs text-gray-500 mb-4">{video.role}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <NavigateBtn linkTo={prevSlug} btnText="← Previous" ariaLabel="Go to previous video category" />
        <NavigateBtn linkTo={nextSlug} btnText="Next →" ariaLabel="Go to next video category" />
      </div>
    </main>
  );
}
