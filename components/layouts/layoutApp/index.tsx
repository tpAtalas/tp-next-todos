import { CATCH_MODAL } from '@data/stateObjects';
import { Types } from '@lib/types';
import { atomCatch } from '@states/utils/states';
import dynamic from 'next/dynamic';
import {
  Fragment as FooterFragment,
  Fragment as HeaderFragment,
  Fragment as LayoutAppFragment,
  Fragment as ModalActionsFragment,
} from 'react';
import { useRecoilValue } from 'recoil';
const CreateTodoModal = dynamic(() =>
  import('@modals/todoModals/todoModal').then((mod) => mod.TodoModal),
);
const MinimizedModal = dynamic(() =>
  import('@modals/minimizedModal').then((mod) => mod.MinimizedModal),
);
const DiscardConfirmModal = dynamic(() =>
  import('@modals/confirmModal/discardConfirmModal').then((mod) => mod.DiscardConfirmModal),
);
const Notification = dynamic(() =>
  import('components/notifications/notification').then((mod) => mod.Notification),
);
const LabelModal = dynamic(() =>
  import('@modals/labelModals/labelModal').then((mod) => mod.LabelModal),
);
const WindowBeforeunloadEffect = dynamic(() =>
  import('@states/misc/windowBeforeunloadEffect').then((mod) => mod.WindowBeforeunloadEffect),
);
const Layout = dynamic(() => import('./layout').then((mod) => mod.Layout));

type Props = Pick<Types, 'children'>;

export const LayoutApp = ({ children }: Props) => {
  const catchTodoModal = useRecoilValue(atomCatch(CATCH_MODAL.todoModal));

  return (
    <LayoutAppFragment>
      <HeaderFragment>
        <Layout>{children}</Layout>
      </HeaderFragment>
      <FooterFragment>
        <Notification />
        <WindowBeforeunloadEffect />
        <ModalActionsFragment>
          <CreateTodoModal />
          <DiscardConfirmModal />
          <MinimizedModal />
          {!catchTodoModal && <LabelModal />}
        </ModalActionsFragment>
      </FooterFragment>
    </LayoutAppFragment>
  );
};
