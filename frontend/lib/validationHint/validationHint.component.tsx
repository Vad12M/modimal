import React from 'react';
import Typography from "@/lib/typography/typography.component";

export interface ValidationHintProps {
  validationHint?: string;
  className?: string;
}

export const ValidationHint: React.FC<ValidationHintProps> = ({
  validationHint,
  className,
}) => {
  if (!validationHint) {
    return null;
  }

  return (
    <div className={`${className}`}>
      <Typography textType="bodySM" text={validationHint} color="danger"/>
    </div>
  );
};

export default ValidationHint;
