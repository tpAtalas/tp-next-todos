import {
  IconButton as CloseIconButton,
  IconButton as MaxIconButton,
  IconButton as OpenFullIconButton,
} from '@buttons/iconButton';
import {
  dataButtonGlobalClose,
  dataButtonMiniModalMaximize,
  dataButtonMiniModalOpenFull,
  dataMinimizedModal,
} from '@data/dataObjects';
import { ModalStateOnBreakpointEffect } from '@effects/modalStateOnBreakpointEffect';
import {
  atomTodoModalMini,
  useModalStateClose,
  useModalStateMaximize,
  useModalStateExitMinimize,
} from '@states/modalStates';
import { atomTodoNew } from '@states/todoStates';
import { TypesTodo } from 'lib/types';
import { useRecoilValue } from 'recoil';
import { MinimizeModalTransition } from './modal/modalTransition/minimizeModalTransition';

type Props = Partial<Pick<TypesTodo, 'todo'>>;

export const MinimizedModal = ({ todo }: Props) => {
  const isTodoModalMiniOpen = useRecoilValue(atomTodoModalMini(todo?._id));
  const closeModal = useModalStateClose(todo?._id);
  const maximizeModal = useModalStateMaximize(todo?._id);
  const exitMinimizeModal = useModalStateExitMinimize(todo?._id);
  const newTodo = useRecoilValue(atomTodoNew);

  return (
    <MinimizeModalTransition
      show={isTodoModalMiniOpen}
      data={dataMinimizedModal}>
      <div className=' flex flex-shrink-0 flex-row items-center justify-between'>
        <div className='flex flex-1 flex-col justify-center'>
          <p className='w-44 break-words text-sm font-medium text-gray-500 line-clamp-1'>
            {newTodo.title}
          </p>
        </div>
        <div className='flex h-fit flex-row'>
          <MaxIconButton
            data={dataButtonMiniModalMaximize}
            onClick={() => exitMinimizeModal()}
          />
          <OpenFullIconButton
            data={dataButtonMiniModalOpenFull}
            onClick={() => maximizeModal()}
          />
          <CloseIconButton
            data={dataButtonGlobalClose}
            onClick={() => closeModal()}
          />
        </div>
      </div>
      <div>
        <p className='w-64 break-words text-sm text-gray-400 line-clamp-3'>{newTodo.note}</p>
      </div>
      <ModalStateOnBreakpointEffect />
    </MinimizeModalTransition>
  );
};
