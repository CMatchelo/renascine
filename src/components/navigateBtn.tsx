import { useNavigate } from "react-router-dom";

interface NavigateBtnProps {
  linkTo: string;
  btnText: string;
}

export const NavigateBtn = ({ linkTo, btnText }: NavigateBtnProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/${linkTo}`)}
      className="px-4 py-2 w-30 sm:w-40 
      text-xs sm:text-md font-bold
      bg-red-600 hover:bg-red-800 rounded-md transition"
    >
      {btnText}
    </button>
  );
};
