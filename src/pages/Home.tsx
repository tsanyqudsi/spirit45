import { Default } from '@layouts/Default';
import { Jobs, Shoutout } from '@parts/careers';
import { Hero, About, FlyingFeathers } from '@parts/home';

const Home = (): JSX.Element => {
  return (
    <Default>
      <Hero />
      <About />
      <FlyingFeathers />
      <Shoutout />
      <Jobs />
    </Default>
  );
};

export default Home;
