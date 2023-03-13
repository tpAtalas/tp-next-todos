import { STORAGE_KEY } from '@data/dataTypesConst';
import { sessionStorageEffect } from '@effects/atomEffects';
import { Users } from '@lib/types';
import { atom } from 'recoil';

export const atomUser = atom<Users>({
  key: 'atomUser',
  default: { email: '', password: '' } as Users,
});

export const atomIDBUserSession = atom<boolean>({
  key: 'atomIDBUserSession',
  default: false,
  effects: [
    sessionStorageEffect({
      queryKey: STORAGE_KEY['session'],
    }),
  ],
});

export const atomUserErrorMessage = atom<string>({
  key: 'atomUserErrorMessage',
  default: '',
});

export const atomUserVerificationRequest = atom({
  key: 'atomUserVerificationRequest',
  default: false,
});
