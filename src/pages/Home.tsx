import { Default } from '@layouts/Default';
import { Contact, Jobs, Shoutout } from '@parts/careers';
import { Hero, About, FlyingFeathers } from '@parts/home';

const Home = (): JSX.Element => {
  return (
    <Default>
      <Hero />
      <About />
      <FlyingFeathers />
      <Shoutout />
      <Jobs />
      <Contact />
    </Default>
  );
};

export default Home;
