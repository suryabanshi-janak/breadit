import { Button } from './ui/Button';

interface SubscribeLeaveToggleProps {
  isSubscribed: boolean;
  subredditId: string;
}

const SubscribeLeaveToggle = ({
  isSubscribed,
  subredditId,
}: SubscribeLeaveToggleProps) => {
  const subscribed = false;

  return subscribed ? (
    <Button className='w-full mt-1 mb-4'>Leave the community</Button>
  ) : (
    <Button className='w-full mt-1 mb-4'>Join to post</Button>
  );
};

export default SubscribeLeaveToggle;
