import { LayoutHome } from '@layouts/home';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

const UnderConstruction = dynamic(() =>
  import('@components/sections/underConstruction').then((mod) => mod.UnderConstruction),
);

const Implementations = () => {
  return (
    <>
      <UnderConstruction />
    </>
  );
};

Implementations.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHome>{page}</LayoutHome>;
};

export default Implementations;
