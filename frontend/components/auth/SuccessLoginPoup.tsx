import Typography from "@/lib/typography/typography.component";
import Button from "@/lib/button/button.component";
import Dialog from "@/lib/dialog/dialog.component";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
}

export default function SuccessLoginPopup({ isOpen, onClose, onAccept }: IProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onRequestClose={onClose}
      className={'py-20 px-40'}
    >
      <div className="flex flex-col items-center justify-center space-y-10">
        <Typography textType={'heading3'} text={'Welcome To Modimal'}/>
        <Typography textType={'captionMD'} text={'Is It Your First Experience On Modimall?'}/>
        <Button label={'Create Your Own Style'} onClick={onAccept}/>
      </div>
    </Dialog>
  );
}
