import { Default } from '@layouts/Default';
import { Hero, About, FlyingFeathers, Career } from '@parts/home';

const Home = (): JSX.Element => {
  return (
    <Default>
      <Hero />
      <About />
      <FlyingFeathers />
      <Career />
    </Default>
  );
};

export default Home;
