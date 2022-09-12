import { Default } from '@layouts/Default';
import { Jobs, Hero, Shoutout } from '@parts/careers';

const Careers = (): JSX.Element => {
  return (
    <Default>
      <Hero />
      <Shoutout />
      <Jobs />
    </Default>
  );
};

export default Careers;
