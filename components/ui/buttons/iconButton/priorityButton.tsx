import { IconButton } from '@buttons/iconButton';
import { SvgIcon } from '@components/icons/svgIcon';
import { PRIORITY_LEVEL } from '@data/dataTypesObjects';
import { ICON_FLAG, ICON_FLAG_FILL, ICON_LABEL_IMPORTANT, ICON_LABEL_IMPORTANT_FILL } from '@data/materialSymbols';
import { Types } from '@lib/types';
import { TypesOptionsPriority } from '@lib/types/typesOptions';
import { atomTodoNew, atomSelectorTodoItem } from '@states/todos';
import { atomQueryTodoItem } from '@states/todos/atomQueries';
import { classNames } from '@states/utils';
import { Fragment, Fragment as TodoPriorityFragment } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

type Props = { options: TypesOptionsPriority } & Partial<Pick<Types, 'todo'>> & Pick<Types, 'onClick'>;

export const PriorityButton = ({ todo, options, onClick }: Props) => {
  const todoItem =
    typeof todo === 'undefined' ? useRecoilValue(atomTodoNew) : useRecoilValue(atomSelectorTodoItem(todo._id));
  const priorityImportant = todoItem.priorityLevel === PRIORITY_LEVEL['important'];
  const priorityUrgent = todoItem.priorityLevel === PRIORITY_LEVEL['urgent'];
  const levelImportant = options.priorityLevel === PRIORITY_LEVEL['important'];
  const levelUrgent = options.priorityLevel === PRIORITY_LEVEL['urgent'];
  const conditionalPath = classNames(
    levelImportant && !priorityImportant && ICON_LABEL_IMPORTANT,
    levelImportant && priorityImportant && ICON_LABEL_IMPORTANT_FILL,
    levelUrgent && !priorityUrgent && ICON_FLAG,
    levelUrgent && priorityUrgent && ICON_FLAG_FILL,
  );
  const conditionalFill = classNames(
    !priorityImportant && !priorityUrgent && 'fill-gray-500 [.group-button:hover_&]:fill-gray-700',
    levelImportant && priorityImportant && 'fill-yellow-500 [.group-button:hover_&]:fill-yellow-600',
    levelUrgent && priorityUrgent && 'fill-red-600 [.group-button:hover_&]:fill-red-700',
  );
  const conditionalHeaderContent = classNames(
    levelImportant && !priorityImportant && options.priorityNormal,
    levelImportant && priorityImportant && options.priorityImportant,
    levelUrgent && !priorityUrgent && options.priorityNormal,
    levelUrgent && priorityUrgent && options.priorityUrgent,
  );

  const isTodoCompleted = useRecoilCallback(({ snapshot }) => () => {
    return typeof todo !== 'undefined' && snapshot.getLoadable(atomQueryTodoItem(todo?._id)).getValue().completed;
  });

  return (
    <TodoPriorityFragment>
      {isTodoCompleted() ? (
        <div
          className={classNames(
            'flex flex-row rounded-md focus-visible:rounded-md',
            options.padding ?? 'p-2',
            options.container,
          )}>
          <SvgIcon
            options={{
              path: conditionalPath,
              className: classNames(conditionalFill, options.size ?? 'h-5 w-5', options.color ?? 'fill-gray-500'),
            }}
          />
          <Fragment>{options.isInitiallyVisible && <div className='px-3'> {conditionalHeaderContent}</div>}</Fragment>
        </div>
      ) : (
        <IconButton
          options={{
            path: conditionalPath,
            tooltip: classNames(
              levelImportant && !priorityImportant && 'Not important',
              levelImportant && priorityImportant && 'Important',
              levelUrgent && !priorityUrgent && 'Not urgent',
              levelUrgent && priorityUrgent && 'Urgent',
            ),
            color: conditionalFill,
            borderRadius: 'rounded-md focus-visible:rounded-md',
            margin: 'ml-0',
            hoverBg: 'hover:bg-transparent',
            display: options.display,
            width: options.width,
            container: options.container,
            padding: options.padding,
          }}
          headerContents={options.isInitiallyVisible && conditionalHeaderContent}
          onClick={onClick}
        />
      )}
    </TodoPriorityFragment>
  );
};
