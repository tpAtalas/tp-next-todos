import { DisableButton } from '@buttons/disableButton';
import { optionsButtonLabelModalUpdateLabel } from '@data/dataOptions';
import { Types } from '@lib/types';
import { KeysWithLabelModalEffect } from '@states/keybinds/KeysWithLabelModalEffect';
import { useLabelUpdateItem } from '@states/labels/hooks';
import { useConditionCompareLabelItemsEqual } from '@states/utils/hooks';
import { Fragment } from 'react';
import { LabelModal } from '.';

export const ItemLabelModal = ({ label }: Pick<Types, 'label'>) => {
  const updateLabel = useLabelUpdateItem(label._id);
  const condition = useConditionCompareLabelItemsEqual(label._id);

  return (
    <Fragment>
      <LabelModal
        label={label}
        headerContents='Update label'
        footerButtons={
          <DisableButton
            options={optionsButtonLabelModalUpdateLabel}
            isConditionalRendering={condition}
            onClick={() => updateLabel()}>
            Update
          </DisableButton>
        }>
        <KeysWithLabelModalEffect label={label} />
      </LabelModal>
    </Fragment>
  );
};
