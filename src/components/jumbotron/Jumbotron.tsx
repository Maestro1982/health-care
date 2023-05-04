'use client';

import Image from 'next/image';
import { Text } from '@nextui-org/react';

const Jumbotron = () => {
  return (
    <div className='mt-20 grid justify-items-center'>
      <Image
        alt='Background Image'
        src='/assets/health-jumbotron.jpg'
        height={360}
        width={625}
      />
      <div className='flex mt-4'>
        <Text
          h1
          size={30}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
        >
          Medical
        </Text>
        <Text
          h1
          size={30}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight='bold'
        >
          {' '}
          -{' '}
        </Text>
        <Text
          h1
          size={30}
          css={{
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
          }}
          weight='bold'
        >
          Web Application
        </Text>
      </div>
    </div>
  );
};
export default Jumbotron;
