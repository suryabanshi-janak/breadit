'use client';

import { useEffect, useState } from 'react';
import { VoteType } from '@prisma/client';
import { usePrevious } from '@mantine/hooks';
import { useCustomToast } from '@/hooks/use-custom-toast';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';

interface PostVoteClientProps {
  postId: string;
  initialVotesAmt: number;
  initialVote?: VoteType | null;
}

const PostVoteClient = ({
  postId,
  initialVotesAmt,
  initialVote,
}: PostVoteClientProps) => {
  const { loginToast } = useCustomToast();
  const [votesAmt, setVotesAmt] = useState(initialVotesAmt);
  const [currentVote, setCurrentVote] = useState(initialVote);
  const prevVote = usePrevious(initialVote);

  useEffect(() => {
    setCurrentVote(initialVote);
  }, [initialVote]);
  return (
    <div className='flex sm:flex-col pr-6 pb-4 sm:pb-0 gap-4 sm:gap-0 sm:w-20'>
      <Button size='sm' variant='ghost' aria-label='upvote'>
        <ArrowBigUp
          className={cn('h-5 w-5 text-zinc-700', {
            'text-emerald-500 fill-emerald-500': currentVote === 'UP',
          })}
        />
      </Button>

      <p className='text-sm text-center py-2 font-medium text-zinc-900'>
        {votesAmt}
      </p>

      <Button size='sm' variant='ghost' aria-label='downvote'>
        <ArrowBigDown
          className={cn('h-5 w-5 text-zinc-700', {
            'text-red-500 fill-red-500': currentVote === 'DOWN',
          })}
        />
      </Button>
    </div>
  );
};

export default PostVoteClient;
