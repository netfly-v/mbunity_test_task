export type TextBaseProps = {
  type?: TextType;
  variant?: 'primary' | 'secondary';
  weight?: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
  size?: number | SizeType;
  height?: number | HeightType;
  decoration?: 'underline' | 'none';
  case?: 'uppercase' | 'lowercase' | 'capitalize';
  color?: TextColor;
  children: React.ReactNode;
  onClick?: () => void;
};

export type TypographyProps = {
  variant?: TypographyVariants;
  color?: TextColor;
  weight?: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
  size?: number | SizeType;
};

export type TextType = 'small' | 'medium' | 'big' | 'large' | 'huge' | 'extra-huge';
export type SizeType = TextType;
export type HeightType = TextType;
export type TextColor = 'white' | 'black' | 'lightBlack' | 'gray' | 'lightGray' | 'suvaGray' | 'graphite';
export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subTitle1' | 'subTitle2' | 'menu' | 'note';
