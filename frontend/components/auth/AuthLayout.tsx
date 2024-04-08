import Typography from "@/lib/typography/typography.component";
import Button from "@/lib/button/button.component";
import Link from "next/link";

interface IProps {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  buttonLabel: string;
  additionalData?: {
    text: string;
    link: string;
    linkText: string;
  }
}

export default function AuthLayout({
  label,
  children,
  onClick,
  buttonLabel,
  additionalData
}: IProps) {
  return (
    <div className="flex items-center justify-between h-screen w-full m-container mt-20">
      <div className="w-1/2">
        <img src={'/images/LoginImage.png'} alt={'Login Image'} className="w-[600px] h-[830px]"/>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <Typography textType={'heading3'} text={label} className="mb-10"/>
        {children}
        <Button label={buttonLabel} className={"w-[360px] mb-6"} onClick={onClick}/>
        <Typography textType={'bodyLG'} text={'Or'} className={'mb-6'}/>
        <div className="flex items-center space-x-1">
          <Typography textType={'bodyMD'} text={additionalData?.text}/>
          <Link href={additionalData?.link || ''}>
            <Typography textType={'bodyMD'} text={additionalData?.linkText} color={'primary'}/>
          </Link>
        </div>
      </div>
    </div>
  )
}
