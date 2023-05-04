'use client';

import Logo from '@/components/navbar/Logo';
import { Button, Navbar } from '@nextui-org/react';

const Header = () => {
  return (
    <Navbar variant='sticky' className='max-w-7xl'>
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <Navbar.Content></Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button flat color='primary' auto>
            Login
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button light color='primary' auto>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
export default Header;
