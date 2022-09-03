import * as React from 'react';
import { Default } from '@layouts/Default';
import { Hero, Proclamation, FlyingFeathers } from '@parts/home';

const Index = (): JSX.Element => {
  return (
    <Default>
      <Hero />
      <Proclamation />
      <FlyingFeathers />
    </Default>
  );
};

export default Index;
