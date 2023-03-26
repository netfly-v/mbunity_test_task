export type icon = (typeof iconOptions)[number];

export const iconOptions = <const>[
  'logo',
  'user',
  'cart',
  'phone',
  'email',
  'location',
  'twitter',
  'instagram',
  'discord',
  'burger',
  'arrowDown',
  'close',
];

export interface StyledSvgIconProps {
  className?: string;
  type?: icon;
  width?: string;
  height?: string;
  fillChildren?: string | 'none';
  strokeWidth?: number;
}
