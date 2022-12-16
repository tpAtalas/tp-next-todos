import { CATCH_MODAL } from '@data/stateObjects';
import { CustomEditor } from '@lib/types/typesSlate';
import { atomCatch } from '@states/utilsStates';
import { Types } from 'lib/types';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Editor, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';

export const EditorAutoFocusEffect = ({
  autoFocus,
  editor,
}: {
  autoFocus: Types['autoFocus'];
  editor: CustomEditor;
}) => {
  const isCatchConfirmModal = useRecoilValue(
    atomCatch(CATCH_MODAL.confirmModal)
  );

  useEffect(() => {
    if (!autoFocus || isCatchConfirmModal) return;

    ReactEditor.focus(editor);
    Transforms.select(editor, Editor.end(editor, []));
  }, [autoFocus, editor, isCatchConfirmModal]);

  return null;
};
