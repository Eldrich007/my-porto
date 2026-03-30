import React from 'react';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';
import { Button } from './button';
import Image from 'next/image';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader className='h-32.45 relative bg-gradient-to-br from-[#0093DD] to-[#46AEE2] md:h-42'>
          <Image
            src={
              variant === 'success'
                ? '/icons/icon-form-message-success.svg'
                : '/icons/icon-form-message-error.svg'
            }
            alt={variant === 'success' ? 'succes' : 'error'}
            width={220}
            height={242}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 md:scale-160'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === 'success'
              ? 'Your Message has been sent!'
              : 'Oops! Your message couldn’t be sent '}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank for contacting us. We’ll respond to you shortly'
              : 'Please Try Again  later or Check your internet connection'}
          </DialogDescription>
          <DialogClose asChild>
            <Button>{loading ? 'Loading...' : 'Back to Home'}</Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
export default FormStatusDialog;
