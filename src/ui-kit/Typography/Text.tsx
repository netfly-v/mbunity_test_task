import React, {PropsWithChildren} from 'react';
import {
  StyledText,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledSubTitle1,
  StyledSubTitle2,
  StyledMenu,
  StyledNote,
} from './styles';
import {TextBaseProps, TypographyProps} from './types';

export type TextProps = TextBaseProps & {as?: keyof JSX.IntrinsicElements};

export const Text: React.FC<TextProps> = StyledText;

export const Typography: React.FC<TypographyProps & PropsWithChildren> = ({variant, children, ...props}) => {
  if (variant === 'h1') return <StyledH1 {...props}>{children}</StyledH1>;
  if (variant === 'h2') return <StyledH2 {...props}>{children}</StyledH2>;
  if (variant === 'h3') return <StyledH3 {...props}>{children}</StyledH3>;
  if (variant === 'h4') return <StyledH4 {...props}>{children}</StyledH4>;
  if (variant === 'h5') return <StyledH5 {...props}>{children}</StyledH5>;
  if (variant === 'h6') return <StyledH6 {...props}>{children}</StyledH6>;
  if (variant === 'subTitle1') return <StyledSubTitle1 {...props}>{children}</StyledSubTitle1>;
  if (variant === 'subTitle2') return <StyledSubTitle2 {...props}>{children}</StyledSubTitle2>;
  if (variant === 'menu') return <StyledMenu {...props}>{children}</StyledMenu>;
  if (variant === 'note') return <StyledNote {...props}>{children}</StyledNote>;
  return <Text>{children}</Text>;
};
