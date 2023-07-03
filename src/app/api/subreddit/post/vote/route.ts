import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { PostVoteValidator } from '@/lib/validators/vote';
import { z } from 'zod';

export async function PATCH(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('Unauthrized', { status: 401 });
    }

    const body = await req.json();
    const { postId, voteType } = PostVoteValidator.parse(body);

    const existingVote = await db.vote.findFirst({
      where: {
        postId,
        userId: session.user.id,
      },
    });

    const post = await db.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        votes: true,
        author: true,
      },
    });

    if (!post) {
      return new Response('Post not found', { status: 404 });
    }

    if (existingVote) {
      if (existingVote.type === voteType) {
        await db.vote.delete({
          where: {
            userId_postId: {
              userId: session.user.id,
              postId,
            },
          },
        });
      }

      await db.vote.update({
        where: {
          userId_postId: {
            userId: session.user.id,
            postId,
          },
        },
        data: {
          type: voteType,
        },
      });

      return new Response('OK');
    }

    await db.vote.create({
      data: {
        postId,
        type: voteType,
        userId: session.user.id,
      },
    });

    return new Response('OK');
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 });
    }

    return new Response('Could not register your vote', {
      status: 500,
    });
  }
}
