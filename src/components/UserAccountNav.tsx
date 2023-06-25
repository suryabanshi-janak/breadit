import { User } from 'next-auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';
import UserAvatar from './UserAvatar';
import Link from 'next/link';

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const UserAccountNav: React.FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className='w-8 h-8'
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-white' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user?.name && <span className='font-medium'>{user.name}</span>}
            {user?.email && (
              <span className='w-[200px] truncate text-zinc-700 text-sm'>
                {user.email}
              </span>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href='/'>Feed</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href='/r/create'>Create community</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href='/settings'>Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='cursor-pointer'>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;