'use client';

import { useRouter } from 'next/navigation';
import { Text } from '@nextui-org/react';

const Logo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/')} className='cursor-pointer flex'>
      <Text
        h1
        size={25}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight='bold'
      >
        Health
      </Text>
      <Text
        h1
        size={25}
        css={{
          textGradient: '45deg, $purple600 -20%, $pink600 100%',
        }}
        weight='bold'
      >
        Care
      </Text>
    </div>
  );
};

export default Logo;
