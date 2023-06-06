import { LayoutHome } from '@layout/home';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

const UnderConstruction = dynamic(() =>
  import('@components/sections/underConstruction').then((mod) => mod.UnderConstruction),
);

const Pricing = () => {
  return (
    <>
      <UnderConstruction />
    </>
  );
};

Pricing.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export default Pricing;
