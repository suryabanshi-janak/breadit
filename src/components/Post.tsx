import { formatTimeToNow } from '@/lib/utils';
import { Post, User, Vote } from '@prisma/client';
import { MessageSquare } from 'lucide-react';
import { useRef } from 'react';
import EditorOutput from './EditorOutput';

interface PostProps {
  subredditName: string;
  post: Post & {
    author: User;
    votes: Vote[];
  };
  commentAmt: number;
}

const Post = ({ subredditName, post, commentAmt }: PostProps) => {
  const postRef = useRef<HTMLDivElement>(null);
  return (
    <div className='bg-white rounded-md shadow'>
      <div className='flex justify-between px-6 py-4'>
        {/* TODO */}

        <div className='flex-1 w-0'>
          <div className='mt-1 text-xs text-gray-500 max-h-40'>
            {subredditName ? (
              <>
                <a
                  className='text-sm underline text-zinc-900 underline-offset-2'
                  href={`/r/${subredditName}`}
                >
                  r/{subredditName}
                </a>
              </>
            ) : null}
            <span className='px-1'>&#x2022;</span>
            <span>Posted by u/{post.author.name}</span>{' '}
            {formatTimeToNow(new Date(post.createdAt))}
          </div>

          <a href={`/r/${subredditName}/post/${post.id}`}>
            <h1 className='py-2 text-lg font-semibold leading-6 text-gray-900'>
              {post.title}
            </h1>
          </a>

          <div
            className='relative text-sm max-h-40 overflow-clip'
            ref={postRef}
          >
            <EditorOutput content={post.content} />
            {postRef.current?.clientHeight === 160 ? (
              <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent' />
            ) : null}
          </div>
        </div>
      </div>

      <div className='z-20 p-4 text-sm bg-gray-50 sm:px-6'>
        <a
          className='flex gap-2 w-fit flex-items'
          href={`/r/${subredditName}/post/${post.id}`}
        >
          <MessageSquare /> {commentAmt} comments
        </a>
      </div>
    </div>
  );
};

export default Post;
