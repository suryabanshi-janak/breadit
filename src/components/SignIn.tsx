import Link from 'next/link';
import { Icons } from './Icons';

const SignIn = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center w-full space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='w-6 h-6 mx-auto' />
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='max-w-xs mx-auto text-sm'>
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>

        {/* sign-in form */}

        <p className='text-sm text-zinc-700'>
          New to Breadit?{' '}
          <Link
            href='/sign-up'
            className='underline hover:text-zinc-800 underline-offset-4'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
