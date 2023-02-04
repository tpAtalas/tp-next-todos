import { Button } from '@buttons/button';
import { IconButton } from '@buttons/iconButton';
import {
  optionsButtonCalendarResetDate,
  optionsButtonCalendarCancel,
  optionsButtonCalendarConfirm,
} from '@data/dataOptions';
import { ICON_EVENT_AVAILABLE, ICON_EVENT_AVAILABLE_FILL } from '@data/materialSymbols';
import { Menu } from '@headlessui/react';
import { TypesOptionsDropdown } from '@lib/types/typesOptions';
import { useCalResetDateAll, useCalResetDateItemOnly, useCalResetDayUpdater } from '@states/calendars/hooks';
import { atomSelectorTodoItem, atomTodoNew } from '@states/todos';
import { classNames } from '@states/utils';
import { Calendar } from '@ui/calendars/calendar';
import { format } from 'date-fns';
import { Types } from 'lib/types';
import { Fragment as HeaderContentsFragment } from 'react';
import { useRecoilValue } from 'recoil';
import { Dropdown } from './dropdown';

type Props = { options: TypesOptionsDropdown } & Partial<Pick<Types, 'todo'>> & Pick<Types, 'onClickConfirm'>;

export const CalendarDropdown = ({ todo, onClickConfirm, options }: Props) => {
  const resetCalendar = useCalResetDayUpdater(todo?._id);
  const resetDateItemOnly = useCalResetDateItemOnly(todo?._id);
  const resetDateAll = useCalResetDateAll(todo?._id);
  const todoItem =
    typeof todo === 'undefined' ? useRecoilValue(atomTodoNew) : useRecoilValue(atomSelectorTodoItem(todo._id));
  const noDaySelected = todoItem.dueDate == null;

  return (
    <Dropdown
      options={{
        tooltip: options.tooltip,
        padding: options.padding ?? 'px-2 sm:px-3 py-2',
        borderRadius: options.borderRadius,
        color: noDaySelected
          ? 'fill-gray-500 [.group-calendarDropdown:hover_&]:fill-gray-700'
          : 'fill-blue-500 [.group-calendarDropdown:hover_&]:fill-blue-700',
        path: noDaySelected ? ICON_EVENT_AVAILABLE : ICON_EVENT_AVAILABLE_FILL,
        group: 'group-calendarDropdown',
        contentWidth: 'w-[21rem]',
        menuWidth: 'sm:w-full',
        hoverBg: options.hoverBg,
        text: classNames('[.group-calendarDropdown:hover_&]:text-gray-700'),
      }}
      headerContents={
        <HeaderContentsFragment>
          {noDaySelected ? 'Due date' : format(new Date(todoItem.dueDate as Date), 'MMM dd, yy')}
        </HeaderContentsFragment>
      }>
      <div className='p-2'>
        <Calendar todo={todo} />
        <div className='flex flex-row items-center justify-between px-4 pb-4 pt-5'>
          <IconButton
            options={optionsButtonCalendarResetDate}
            onClick={() => resetDateAll()}
          />
          <div className='flex flex-row justify-end'>
            <Menu.Item>
              <Button
                options={optionsButtonCalendarCancel}
                onClick={() => {
                  resetCalendar();
                  resetDateItemOnly();
                }}>
                Cancel
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                options={optionsButtonCalendarConfirm}
                onClick={onClickConfirm}>
                Ok
              </Button>
            </Menu.Item>
          </div>
        </div>
      </div>
    </Dropdown>
  );
};
