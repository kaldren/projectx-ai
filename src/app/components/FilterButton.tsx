"use client";
import React, { FC, useState } from "react";

export const FilterButton: FC<FilterButtonProps> = ({
  text,
  iconSrc,
  onClick,
}) => {
  const [isClicked, setClicked] = useState(false);

  return (
    <button
      type="button"
      className={`flex flex-col items-center m-2 w-20 h-20 p-1 active:animate-ping ${
        isClicked ? "bg-violet-600" : ""
      }`}
      onClick={() => {
        isClicked == true ? setClicked(false) : setClicked(true);
        if (onClick) onClick();
      }}
    >
      <img src={iconSrc} />
      <span>{text}</span>
    </button>
  );
};
