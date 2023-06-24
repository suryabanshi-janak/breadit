'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/Button';
import { useState } from 'react';
import { Icons } from './Icons';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button size='sm' className='w-full'>
        {isLoading ? null : <Icons.google className='w-4 h-4 mr-2' />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
