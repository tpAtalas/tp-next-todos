import { BREAKPOINT } from '@constAssertions/ui';
import { TypesLayout } from '@layouts/layout.types';
import { atom, atomFamily, selector } from 'recoil';
import { atomEffectMediaQuery } from './atomEffects/misc';

/**
 * Atoms
 **/
export const atomNavigationOpen = atomFamily<boolean, TypesLayout['path']>({
  key: 'atomNavigationOpen',
  default: false,
});

export const atomSearchInput = atom({
  key: 'atomSearchInput',
  default: '',
});

export const atomLayoutType = atom<TypesLayout['path']>({
  key: 'atomLayoutType',
  default: 'app',
});

/**
 * Selector
 **/
export const selectorNavigationOpen = selector({
  key: 'selectorNavigationOpen',
  get: ({ get }) => {
    const layoutType = get(atomLayoutType);
    return get(atomNavigationOpen(layoutType));
  },
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent',
  },
});

export const selectorNavigationOpenOnMobile = selector({
  key: 'selectorNavigationOpenOnMobile',
  get: ({ get }) => {
    const layoutType = get(atomLayoutType);
    const breakpointMedium =
      layoutType === 'app'
        ? get(atomEffectMediaQuery(BREAKPOINT['md']))
        : get(atomEffectMediaQuery(BREAKPOINT['ml']));

    return !breakpointMedium && get(atomNavigationOpen(layoutType));
  },
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent',
  },
});
