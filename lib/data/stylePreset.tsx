import { classNames } from '@states/utils';

/**
 * Button
 */
// Base
export const STYLE_BUTTON_BASE =
  'inline-flex items-center justify-center rounded-md border text-sm font-medium leading-4 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
export const STYLE_BUTTON_WIDTH_NORMAL = 'py-2 px-6';
export const STYLE_BUTTON_WIDTH_WIDE = 'py-2 px-10';
// color
export const STYLE_BUTTON_COLOR_BLUE =
  'border-transparent bg-blue-600 text-white hover:enabled:bg-blue-700 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-70';
export const STYLE_BUTTON_COLOR_WHITE =
  'border-gray-300 bg-white text-gray-600 hover:enabled:bg-gray-100 hover:enabled:text-gray-800 focus-visible:ring-blue-500 disabled:opacity-70';
export const STYLE_BUTTON_COLOR_RED =
  'border-transparent bg-red-600 text-white hover:enabled:bg-red-700 focus-visible:ring-red-500 disabled:opacity-70';
export const STYLE_BUTTON_COLOR_GRAY =
  'border-transparent bg-gray-200 text-black hover:enabled:bg-gray-300 focus-visible:ring-gray-500 disabled:opacity-70';
// Composition
// white
export const STYLE_BUTTON_NORMAL_WHITE = classNames(
  STYLE_BUTTON_BASE,
  STYLE_BUTTON_WIDTH_NORMAL,
  STYLE_BUTTON_COLOR_WHITE,
);
// blue
export const STYLE_BUTTON_NORMAL_BLUE = classNames(
  STYLE_BUTTON_BASE,
  STYLE_BUTTON_WIDTH_NORMAL,
  STYLE_BUTTON_COLOR_BLUE,
);
export const STYLE_BUTTON_WIDE_BLUE = classNames(
  STYLE_BUTTON_BASE,
  STYLE_BUTTON_WIDTH_WIDE,
  STYLE_BUTTON_COLOR_BLUE,
);
// red
export const STYLE_BUTTON_NORMAL_RED = classNames(
  STYLE_BUTTON_BASE,
  STYLE_BUTTON_WIDTH_NORMAL,
  STYLE_BUTTON_COLOR_RED,
);
// gray
export const STYLE_BUTTON_NORMAL_GRAY = classNames(
  STYLE_BUTTON_BASE,
  STYLE_BUTTON_WIDTH_NORMAL,
  STYLE_BUTTON_COLOR_GRAY,
);

// misc
export const STYLE_BUTTON_ICON =
  'border-transparent bg-transparent text-gray-500 hover:enabled:bg-gray-700 hover:enabled:bg-opacity-10 hover:enabled:text-gray-700 focus-visible:ring-blue-500 ';
export const STYLE_BUTTON_NO_RING = 'focus:outline-none focus:ring-0 focus:ring-offset-0';
export const STYLE_BUTTON_KEY_ONLY_RING =
  'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

/**
 * Hover Effect
 **/
export const STYLE_HOVER_SLATE_DARK = 'hover:enabled:bg-slate-900 hover:enabled:bg-opacity-10';
export const STYLE_HOVER_SLATE_LIGHT = 'hover:enabled:bg-slate-600 hover:enabled:bg-opacity-10';
/**
 * Calendar
 */
export const STYLE_CALENDAR_COL_START = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];

/**
 * Color palette
 **/
// background color
export const STYLE_COLORS = [
  'bg-stone-400',
  'bg-orange-400',
  'bg-pink-400',
  'bg-amber-400',
  'bg-lime-400',
  'bg-green-400',
  'bg-teal-400',
  'bg-red-400',
  'bg-cyan-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
  'bg-rose-400',
];
