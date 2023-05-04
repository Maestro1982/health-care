'use client';

import { Text } from '@nextui-org/react';

const Footer = () => {
  return (
    <div className='flex justify-center mt-20'>
      <Text
        h4
        size={15}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight='bold'
      >
        &copy; 2023. All Rights Reserved. Created by Kris Toté
      </Text>
    </div>
  );
};
export default Footer;
