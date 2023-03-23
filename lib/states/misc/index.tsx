import { PATHNAME_IMAGE } from '@constAssertions/data';
import { BREAKPOINT, SPINNER } from '@constAssertions/ui';
import { mediaQueryEffect, networkStatusEffect } from '@lib/stateLogics/effects/atomEffects/atomEffects';
import { atom, atomFamily, selector } from 'recoil';

/*
 * Atoms
 * */

// Media Queries
export const atomMediaQuery = atomFamily<boolean, BREAKPOINT>({
  key: 'atomMediaQuery',
  default: false,
  effects: (breakpoint) => [
    mediaQueryEffect({
      breakpoint: breakpoint,
      isStateOverBreakpoint: true,
      isStateUnderBreakpoint: false,
    }),
  ],
});

// Network
export const atomNetworkStatusEffect = atom({
  key: 'atomNetworkStatusEffect',
  default: true,
  effects: [networkStatusEffect],
});

//  Dropdown
export const atomActiveMenuItemId = atom<string | null>({
  key: 'atomActiveMenuitemId',
  default: null,
});

export const atomActiveMenuItem = atomFamily<boolean, string | null>({
  key: 'atomActiveMenuItem',
  default: false,
  effects: (atomActiveMenuItemId) => [
    ({ setSelf }) => {
      atomActiveMenuItemId !== null && setSelf(true);
    },
  ],
});

export const atomHtmlTitleTag = atom<string>({
  key: 'atomHtmlTitleTag',
  default: '',
});

export const atomPathnameImage = atom<PATHNAME_IMAGE>({
  key: 'atomPathnameImage',
  default: PATHNAME_IMAGE['app'],
});

export const atomLoadingSpinner = atomFamily<boolean, SPINNER>({
  key: 'atomLoadingSpinner',
  default: false,
});

/**
 * selector
 * */
export const selectorActiveMenuItem = selector({
  key: 'selectorActiveMenuItem',
  get: ({ get }) => {
    return get(atomActiveMenuItem(get(atomActiveMenuItemId)));
  },
});
