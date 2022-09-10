import { Default } from '@layouts/Default';
import { Jobs, Hero } from '@parts/careers';

const Careers = (): JSX.Element => {
  return (
    <Default>
      <Hero />
      <Jobs />
    </Default>
  );
};

export default Careers;
