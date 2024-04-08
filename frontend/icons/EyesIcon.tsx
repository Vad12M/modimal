import React from "react";
import { IconProps } from "./icon.props";
import { sizes } from "@/lib/utilities/sizes";

interface IProps extends IconProps {
  notShow?: boolean;
}

export const EyesIcon: React.FC<IProps> = ({
  size = sizes.icon,
  fill = "text-black",
  notShow,
}) => {
  if (!notShow) {
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
          d="M12 5.97505C15.79 5.97505 19.17 8.10505 20.82 11.475C20.23 12.695 19.4 13.745 18.41 14.595L19.82 16.005C21.21 14.775 22.31 13.235 23 11.475C21.27 7.08505 17 3.97505 12 3.97505C10.73 3.97505 9.51 4.17505 8.36 4.54505L10.01 6.19505C10.66 6.06505 11.32 5.97505 12 5.97505ZM10.93 7.11505L13 9.18505C13.57 9.43505 14.03 9.89505 14.28 10.465L16.35 12.535C16.43 12.195 16.49 11.835 16.49 11.465C16.5 8.98505 14.48 6.97505 12 6.97505C11.63 6.97505 11.28 7.02505 10.93 7.11505ZM2.01 3.84505L4.69 6.52505C3.06 7.80505 1.77 9.50505 1 11.475C2.73 15.865 7 18.975 12 18.975C13.52 18.975 14.98 18.685 16.32 18.155L19.74 21.575L21.15 20.165L3.42 2.42505L2.01 3.84505ZM9.51 11.345L12.12 13.955C12.08 13.965 12.04 13.975 12 13.975C10.62 13.975 9.5 12.855 9.5 11.475C9.5 11.425 9.51 11.395 9.51 11.345ZM6.11 7.94505L7.86 9.69505C7.63 10.245 7.5 10.845 7.5 11.475C7.5 13.955 9.52 15.975 12 15.975C12.63 15.975 13.23 15.845 13.77 15.615L14.75 16.595C13.87 16.835 12.95 16.975 12 16.975C8.21 16.975 4.83 14.845 3.18 11.475C3.88 10.045 4.9 8.86505 6.11 7.94505Z"
          fill="#0C0C0C"/>
      </svg>
    );
  } else {
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
          d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.79 17.5 12 17.5C8.21 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
          fill="#0C0C0C"/>
      </svg>
    )
  }
};
export default EyesIcon;