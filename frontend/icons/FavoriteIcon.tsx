import React from "react";
import { sizes } from "@/lib/utilities/sizes";
import { IconProps } from "./icon.props";

export const FavoriteIcon: React.FC<IconProps> = ({
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
        d="M11.2232 19.1147L11.2217 19.1134C8.62662 16.7602 6.55384 14.878 5.1178 13.1223C3.69324 11.3807 3 9.88574 3 8.32422C3 5.7965 4.97228 3.82422 7.5 3.82422C8.93721 3.82422 10.3322 4.49815 11.2386 5.56256L12 6.45662L12.7614 5.56256C13.6678 4.49815 15.0628 3.82422 16.5 3.82422C19.0277 3.82422 21 5.7965 21 8.32422C21 9.88575 20.3068 11.3807 18.882 13.1239C17.4459 14.8808 15.3734 16.7651 12.7786 19.1232C12.7782 19.1235 12.7778 19.1238 12.7775 19.1241L12.0026 19.8242L11.2232 19.1147Z"
        fill="white" stroke="#202020" strokeWidth="2"/>
    </svg>
  );
};
export default FavoriteIcon;
