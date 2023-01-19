import { BREAKPOINT, CATCH_MODAL } from '@data/stateObjects';
import { atomMediaQuery } from '@states/misc';
import { atomCatch } from '@states/utils';
import { useEffect } from 'react';
import { RecoilValue, useRecoilCallback, useRecoilValue } from 'recoil';
import { atomSidebarOpenMobile } from '.';

export const SidebarMobileResetEffect = () => {
  const isTodoModalOpen = useRecoilValue(
    atomCatch(CATCH_MODAL['todoModal']) || CATCH_MODAL['confirmModal'],
  );
  const resetSidebarOnMobileMediaQueries = useRecoilCallback(({ snapshot, reset }) => () => {
    const get = <T,>(p: RecoilValue<T>) => snapshot.getLoadable(p).getValue();
    isTodoModalOpen && reset(atomSidebarOpenMobile);
    if (!get(atomMediaQuery(BREAKPOINT['md']))) return;
    reset(atomSidebarOpenMobile);
  });

  useEffect(() => {
    resetSidebarOnMobileMediaQueries();
  }, [resetSidebarOnMobileMediaQueries]);

  return null;
};
