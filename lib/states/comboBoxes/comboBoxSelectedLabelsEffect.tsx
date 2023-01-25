import { CATCH } from '@data/dataTypesObjects';
import { Types } from '@lib/types';
import { useLabelUpdateDataItem } from '@states/labels/hooks';
import { atomCatch } from '@states/utils';
import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { atomFilterSelected } from '.';

type Props = Partial<Pick<Types, 'todo'>>;

export const ComboBoxSelectedLabelsEffect = ({ todo }: Props) => {
  const resetFilter = useResetRecoilState(atomFilterSelected(todo?._id));
  const updateLabelDataUnmount = useLabelUpdateDataItem();
  const setCatchComboBox = useSetRecoilState(atomCatch(CATCH['comboBox']));
  const resetCatchComboBox = useResetRecoilState(atomCatch(CATCH['comboBox']));
  const isTodoModalOpen = useRecoilValue(atomCatch(CATCH['todoModal']));

  useEffect(() => {
    resetFilter();
    setCatchComboBox(true);
    return () => {
      resetCatchComboBox();
      if (isTodoModalOpen) return;
      updateLabelDataUnmount();
    };
    // The updateLabelDataOnMount must not be included within the useEffect's
    // dependencies to run only on unmount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetFilter]);

  return null;
};
