import styles from "./input.module.css";
import Typography from "@/lib/typography/typography.component";

interface IProps {
  placeholder?: string;
  value?: string | number;
  onUpdate?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  type?: string;
}

export default function Input({
  placeholder,
  value,
  onUpdate,
  className,
  disabled,
  required,
  invalid,
  type,
}: IProps) {
  return <div className={`flex flex-col space-y-1 ${className} ${disabled && 'opacity-60'}`}>
    <div className={'relative'}>
      {required && <Typography
        textType={'bodyXS'}
        color={'danger'}
        text={'*'}
        className={'absolute top-1/2 -translate-y-1/2 left-1'}
      />}
      <input
        value={value}
        onChange={onUpdate}
        placeholder={placeholder}
        disabled={disabled}
        onClick={(e) => e.preventDefault()}
        className={`${styles.inputContainer} ${required && styles.required} ${invalid && styles.invalid}`}
        type={type || 'text'}
      />
    </div>
  </div>
}
