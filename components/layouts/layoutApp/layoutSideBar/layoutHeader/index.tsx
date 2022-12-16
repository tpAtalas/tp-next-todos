import { IconButton } from '@buttons/iconButton';
import { SvgIcon } from '@components/icons/svgIcon';
import { ICON_MENU, ICON_SEARCH } from '@data/materialSymbols';
import { STYLE_BUTTON_KEY_ONLY_RING } from '@data/stylePreset';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '@lib/utils';
import { useSidebarOpen } from '@states/sidebarStates';
import Image from 'next/image';
import {
  Fragment,
  Fragment as LayoutHeaderFragment,
  Fragment as LeftSideFragment,
  Fragment as LogoFragment,
  Fragment as RightSidebarFragment,
  Fragment as SidebarButtonFragment,
} from 'react';
import { LayoutLogo } from '../../layoutLogo';

const userNavigation = [
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export const LayoutHeader = () => {
  const setSidebarOpen = useSidebarOpen();

  return (
    <LayoutHeaderFragment>
      <div className='sticky top-1 z-10 mb-2 flex max-h-[4rem] min-h-[4rem] flex-row items-center justify-between bg-transparent'>
        <LeftSideFragment>
          <div className='flex flex-row items-center justify-between pl-3 md:w-full md:max-w-3xs'>
            <SidebarButtonFragment>
              <IconButton
                data={{
                  path: ICON_MENU,
                  size: 'h-6 w-6',
                  hoverBg:
                    'hover:enabled:bg-gray-200 hover:enabled:bg-opacity-70',
                }}
                onClick={() => setSidebarOpen()}
              />
              <span className='sr-only'>Open sidebar</span>
            </SidebarButtonFragment>
            <LogoFragment>
              <div className='hidden w-full flex-row justify-start pl-4 md:flex'>
                <LayoutLogo />
              </div>
            </LogoFragment>
          </div>
        </LeftSideFragment>
        <RightSidebarFragment>
          <div className='flex flex-1 px-3'>
            <div className='flex flex-1 '>
              <form
                className='flex w-full md:ml-0'
                action='#'
                method='GET'>
                <label
                  htmlFor='search-field'
                  className='sr-only'>
                  Search
                </label>
                <div className='relative w-full max-w-2xl rounded-md bg-blue-100 bg-opacity-80 text-gray-400  drop-shadow-sm focus-within:text-gray-600'>
                  <div className='pointer-events-none absolute inset-y-0 left-4 flex items-center'>
                    <SvgIcon
                      data={{
                        path: ICON_SEARCH,
                        className: 'h-6 w-6 fill-gray-500',
                      }}
                    />
                  </div>
                  <input
                    id='search-field'
                    className='block h-12 w-full max-w-lg border-transparent bg-transparent pl-12 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0'
                    placeholder='Search'
                    type='search'
                    name='search'
                  />
                </div>
              </form>
            </div>
            <div className='ml-4 flex items-center md:ml-6'>
              {/* Profile dropdown */}
              <Menu
                as='div'
                className='relative ml-3'>
                <div>
                  <Menu.Button
                    className={classNames(
                      'flex max-w-xs items-center rounded-full bg-transparent text-sm outline-none transition-all duration-300 hover:ring-4 hover:ring-gray-200 hover:transition-all focus:ring-0 focus:ring-offset-0',
                      STYLE_BUTTON_KEY_ONLY_RING,
                    )}>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      width={40}
                      height={40}
                      className='rounded-full drop-shadow-md'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}>
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </RightSidebarFragment>
      </div>
    </LayoutHeaderFragment>
  );
};
