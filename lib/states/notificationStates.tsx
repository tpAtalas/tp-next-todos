import { DATA_NOTIFICATION } from '@data/stateArrayObjects';
import { NOTIFICATION } from '@data/stateObjects';
import { TypesNotification } from '@lib/types';
import { atom, atomFamily, selectorFamily, selector, useRecoilCallback } from 'recoil';

/**
 * Atoms
 */
export const atomNotificationOpen = atom({
  key: 'atomNotificationOpen',
  default: false,
});

export const atomNotificationCounter = atom({
  key: 'atomNotificationCounter',
  default: 0,
});

export const atomNotificationID = atom<TypesNotification['_id']>({
  key: 'atomNotificationID',
  default: undefined,
});

export const atomNotificationData = atom<TypesNotification[]>({
  key: 'atomNotificationData',
  default: DATA_NOTIFICATION,
});

export const atomNotificationDataItem = atomFamily({
  key: 'atomNotificationDataItem',
  default: selectorFamily({
    key: 'selectorAtomNOtificationData',
    get:
      (_id) =>
      ({ get }) =>
        get(atomNotificationData).find((notification) => notification._id === _id)! || {},
    cachePolicy_UNSTABLE: {
      eviction: 'most-recent',
    },
  }),
});

/* Selector */
export const selectorNotificationState = selector<TypesNotification>({
  key: 'selectorNotificationState',
  get: ({ get }) => get(atomNotificationDataItem(get(atomNotificationID))),
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent',
  },
});

/*
 * Hooks
 * */

export const useNotificationState = () => {
  const notification = useRecoilCallback(({ set, snapshot }) => (NotificationID: NOTIFICATION) => {
    const counter = snapshot.getLoadable(atomNotificationCounter).getValue();

    set(atomNotificationID, NotificationID);
    set(atomNotificationCounter, counter + 1);
    set(atomNotificationOpen, true);
  });
  return notification;
};
