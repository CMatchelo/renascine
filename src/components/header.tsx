import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <header className="flex flex-col">
      <div className="flex flex-row py-4 justify-between">
        <Link
          to={"/"}
          className="cursor-pointer text-white hover:text-gray-300 transition-colors duration-200"
        >
          HOME
        </Link>
        <span className="text-white">renascine@gmail.com</span>
      </div>
      <div className="m-auto w-2/5 flex flex-col items-center">
        <img src="./renasLogo.png" />
        {!slug && (
          <span className="text-red-500">
            film editor | editor assist. | color grading
          </span>
        )}
      </div>
    </header>
  );
}
