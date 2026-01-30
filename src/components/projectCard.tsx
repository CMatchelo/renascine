import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  coverUrl: string;
  linkTo: string;
}

export const ProjectCard = ({ title, coverUrl, linkTo }: ProjectCardProps) => {
  return (
    <Link
      to={linkTo}
      style={{ backgroundImage: `url(${coverUrl})` }}
      className={`flex-1 group relative h-100 rounded-4xl overflow-hidden cursor-pointer
      bg-cover bg-center
      filter grayscale transition-all duration-200
      hover:grayscale-0`}
    >
      <span
        className="block mt-10 font-bold text-4xl text-left px-4 tracking-[-1px] text-white
        transform transition-transform duration-300 group-hover:scale-110"
      >
        {title}
      </span>
    </Link>
  );
};
