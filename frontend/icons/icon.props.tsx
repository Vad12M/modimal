export interface IconProps {
  gtmInteractionDetail?: string;
  size?: number;
  fill?: string;
  onClick?: () => void;
}

export interface IconWithStrokeProps extends IconProps {
  strokeWidth?: number;
}

export interface IconActiveProps extends IconProps {
  active?: boolean;
}
