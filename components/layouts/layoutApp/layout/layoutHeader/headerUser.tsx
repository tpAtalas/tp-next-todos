import { Button } from '@buttons/button';
import { STORAGE_KEY } from '@constAssertions/storage';
import { STYLE_BUTTON_NORMAL_BLUE } from '@data/stylePreset';
import { UserDropdown } from '@dropdowns/v2/userDropdown';
import { UserSessionResetEffect } from '@lib/stateLogics/effects/data/userSessionResetEffect';
import { atomUserSession } from '@states/users';
import { classNames, getSessionStorage } from '@states/utils';
import { signIn } from 'next-auth/react';
import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';

export const HeaderUser = () => {
  const isSession = useRecoilValue(atomUserSession);
  const session = getSessionStorage(STORAGE_KEY['offSession']);

  return (
    <Fragment>
      <UserSessionResetEffect />
      {!session && isSession ? (
        <UserDropdown />
      ) : (
        <Button
          options={{
            className: classNames(STYLE_BUTTON_NORMAL_BLUE),
            tooltip: 'Sign in',
          }}
          onClick={() => signIn()}>
          Sign in
        </Button>
      )}
    </Fragment>
  );
};
