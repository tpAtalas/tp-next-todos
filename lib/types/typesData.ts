import { Types, TypesElement, TypesStyleAttributes, TypesSvgIconAttributes } from '.';

export type TypesDataDivContainer = Partial<Pick<Types, 'className' | 'tabIndex'>>;

export type TypesDataSvg = Partial<
  Pick<TypesSvgIconAttributes, 'height' | 'width' | 'viewBox' | 'path' | 'isAriaHidden'> &
    Pick<Types, 'className'>
>;

export type TypesDataButton = Partial<
  Pick<
    Types,
    'className' | 'isDisabled' | 'path' | 'name' | 'tooltip' | 'offset' | 'kbd' | 'placement'
  > & {
    type: Extract<TypesElement['type'], 'button' | 'submit' | 'reset'>;
  } & Pick<
      TypesStyleAttributes,
      'padding' | 'margin' | 'display' | 'width' | 'size' | 'color' | 'container' | 'hoverBg'
    >
>;

export type TypesDataPseudoButton = Partial<
  Pick<Types, 'className' | 'path' | 'name' | 'tooltip' | 'offset' | 'kbd' | 'placement'> &
    Pick<
      TypesStyleAttributes,
      'padding' | 'margin' | 'display' | 'width' | 'size' | 'color' | 'container' | 'hoverBg'
    >
>;

export type TypesDataPriority = Partial<
  Pick<Types, 'isInitiallyVisible' | 'priorityImportant' | 'priorityNormal' | 'priorityUrgent'> &
    Pick<TypesStyleAttributes, 'margin' | 'display' | 'width' | 'container' | 'padding'>
> &
  Pick<Types, 'priorityLevel'>;

export type TypesDataDropdown = Partial<
  Pick<
    Types,
    | 'placement'
    | 'tooltip'
    | 'kbd'
    | 'hasDivider'
    | 'path'
    | 'isInitiallyVisible'
    | 'hasDropdownBoardStyle'
    | 'isPortal'
  > &
    Pick<
      TypesStyleAttributes,
      | 'group'
      | 'padding'
      | 'borderRadius'
      | 'menuWidth'
      | 'size'
      | 'color'
      | 'text'
      | 'contentWidth'
      | 'hoverBg'
    >
>;

export type TypesDataMinimizedModalTransition = Partial<
  Pick<Types, 'positionX' | 'positionY' | 'minimizedModalPadding'>
>;

export type TypesDataLoadingState = Partial<Pick<Types, 'delay'>> &
  Pick<Types, 'loadingSkeleton' | 'repeatingCount' | 'margin' | 'space'>;
