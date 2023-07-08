"use client";
import React, { FC, useState } from "react";

export const FancyButton: FC<FancyButtonProps> = ({
  text,
  iconSrc,
  className,
  onClick,
}) => {
  const [isClicked, setClicked] = useState(false);

  return (
    <button
      type="button"
      className={`${
        className ??
        `flex flex-col items-center m-2 w-20 h-20 p-1 active:animate-ping`
      }`}
      onClick={() => {
        isClicked == true ? setClicked(false) : setClicked(true);
        if (onClick) onClick();
      }}
    >
      <img src={iconSrc} />
      <span
        className={`${isClicked ? "block border-b-4 border-b-red-400" : ""}`}
      >
        {text}
      </span>
    </button>
  );
};
