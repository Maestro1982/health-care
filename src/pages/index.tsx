import Jumbotron from '@/components/jumbotron/Jumbotron';
import Header from '@/components/navbar/Header';
import { Container } from '@nextui-org/react';

export default function Home() {
  return (
    <Container>
      <Header />
      <Jumbotron />
    </Container>
  );
}
