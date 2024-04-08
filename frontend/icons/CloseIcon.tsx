import React from "react";
import { sizes } from "@/lib/utilities/sizes";
import { IconProps } from "./icon.props";

export const CloseIcon: React.FC<IconProps> = ({
  size = sizes.icon,
  fill = "text-black"
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={`fill-current ${fill}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="#0C0C0C"/>
    </svg>
  );
};
export default CloseIcon;
