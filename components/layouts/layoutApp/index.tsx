import { WindowBeforeunloadEffect } from '@effects/windowBeforeunloadEffect';
import { Types } from '@lib/types';
import dynamic from 'next/dynamic';
import {
  Fragment as FooterFragment,
  Fragment as HeaderFragment,
  Fragment as LayoutAppFragment,
  Fragment as ModalActionsFragment,
} from 'react';
import { Layout } from './layout';
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

type Props = Pick<Types, 'children'>;

export const LayoutApp = ({ children }: Props) => {
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
          <LabelModal />
        </ModalActionsFragment>
      </FooterFragment>
    </LayoutAppFragment>
  );
};
