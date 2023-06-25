'use client';

import { Input } from '@/components/ui/Input';
import { useState } from 'react';

const Page = () => {
  const [input, setInput] = useState<string>('');

  return (
    <div className='container flex items-center h-full max-w-3xl mx-auto'>
      <div className='relative w-full p-4 space-y-6 bg-white rounded-lg h-fit'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold'>Create a community</h1>
        </div>

        <hr className='h-px bg-zin-500' />

        <div>
          <p className='text-lg font-medium'>Name</p>
          <p className='pb-2 text-xs'>
            Community names including capitalization cannot be changed.
          </p>

          <div className='relative'>
            <p className='absolute inset-y-0 left-0 grid w-8 text-sm place-items-center text-zinc-400'>
              /r
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='pl-6'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
