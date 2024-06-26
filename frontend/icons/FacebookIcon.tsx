import React from "react";
import { sizes } from "@/lib/utilities/sizes";
import { IconProps } from "./icon.props";

export const FacebookIcon: React.FC<IconProps> = ({
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
      <rect width="24" height="24" rx="12" fill="white"/>
      <path
        d="M17.2031 12L16.6711 15.4688H13.875V23.8547C13.2633 23.9508 12.6375 24 12 24C11.3625 24 10.7367 23.9508 10.125 23.8547V15.4688H7.07812V12H10.125V9.35625C10.125 6.34922 11.9156 4.6875 14.6578 4.6875C15.9703 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8297C14.3391 7.875 13.875 8.80078 13.875 9.75V12H17.2031Z"
        fill="#404040"/>
    </svg>

  );
};
export default FacebookIcon;
