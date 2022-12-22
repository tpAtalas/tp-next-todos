import { SvgIcon } from '@components/icons/svgIcon';
import { Menu } from '@headlessui/react';
import { Types } from '@lib/types';
import { classNames } from '@lib/utils';
import { selectorActiveMenuItem } from '@states/miscStates';
import { Tooltip } from '@tooltips/tooltips';
import { useRecoilValue } from 'recoil';

type Props = Partial<
  Pick<
    Types,
    'tooltip' | 'kbd' | 'onClick' | 'children' | 'disableCloseOnClick' | 'path' | 'padding' | 'size' | 'color'
  >
>;

export const DropdownMenuItem = ({
  tooltip,
  kbd,
  onClick,
  disableCloseOnClick,
  padding,
  path,
  size,
  color,
  children,
}: Props) => {
  const isActive = useRecoilValue(selectorActiveMenuItem);

  return (
    <span>
      <Tooltip
        tooltip={tooltip}
        kbd={kbd}>
        <Menu.Item>
          {({ active }) => (
            <div
              onClick={(event) => {
                onClick && onClick(event);
                disableCloseOnClick && event.preventDefault();
              }}
              className={classNames(
                'group-1 block w-full cursor-pointer text-left text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700',
                padding || 'px-4 py-2',
                active && isActive && 'bg-gray-100',
              )}>
              <div className='flex flex-row'>
                {typeof path !== 'undefined' && (
                  <SvgIcon
                    data={{
                      path: path,
                      className: classNames(
                        'mr-3',
                        size || 'h-5 w-5',
                        color || 'fill-gray-500 [.group-1:hover_&]:fill-gray-700',
                      ),
                    }}
                  />
                )}
                {typeof children !== 'undefined' && children}
              </div>
            </div>
          )}
        </Menu.Item>
      </Tooltip>
    </span>
  );
};
