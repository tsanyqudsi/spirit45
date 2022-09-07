import { Default } from '@layouts/Default';
import { Hero, About, FlyingFeathers } from '@parts/home';

const Home = (): JSX.Element => {
  return (
    <Default>
      <Hero />
      <About />
      <FlyingFeathers />
    </Default>
  );
};

export default Home;
