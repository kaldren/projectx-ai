import { FC } from "react";

export const FilterButton: FC<FilterButtonProps> = ({ text, iconSrc }) => {
  return (
    <button
      type="button"
      className="flex flex-col items-center m-2 w-20 h-20 p-1 active:animate-ping"
    >
      <img src={iconSrc} />
      <span>{text}</span>
    </button>
  );
};
