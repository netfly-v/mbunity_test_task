import {TextBaseProps} from './types';
import styled, {css} from 'styled-components';
import {defaultTheme as theme} from '../theme/theme';
import {Media} from '../theme/breakpoints';

const color = ({color}: TextBaseProps) => {
  return color ? theme.palette.text[color] : theme.palette.text.white;
};

export const fontSize = ({size}: Partial<TextBaseProps>) => {
  if (typeof size === 'number') {
    return size + 'px';
  }
  switch (size) {
    case 'extra-huge':
      return '40px';
    case 'huge':
      return '28px';
    case 'large':
      return '18px';
    case 'big':
      return '16px';
    case 'medium':
      return '14px';
    case 'small':
      return '12px';
    default:
      return '12px';
  }
};

export const lineHeight = ({size}: Partial<TextBaseProps>) => {
  if (typeof size === 'number') {
    return size + 'px';
  }
  switch (size) {
    case 'extra-huge':
      return '60px';
    case 'huge':
      return '42px';
    case 'large':
      return '26px';
    case 'big':
      return '24px';
    case 'medium':
      return '20px';
    case 'small':
      return '18px';
    default:
      return '18px';
  }
};

const fontWeight = ({weight}: TextBaseProps) => {
  if (weight) {
    switch (weight) {
      case 'bold':
        return 700;
      case 'semi-bold':
        return 600;
      case 'medium':
        return 500;
      case 'regular':
        return 400;
      case 'light':
        return 300;
      default:
        return 400;
    }
  }
};

const fontCase = ({case: _case}: TextBaseProps) => {
  return _case ? {textTransform: _case} : {};
};

const textDecoration = ({decoration}: TextBaseProps) => {
  return decoration ? decoration : 'none';
};

const styles = css`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  text-decoration: ${textDecoration};
  line-height: ${lineHeight};
  ${fontCase};
`;

export const StyledText = styled.span<TextBaseProps>`
  ${styles};
  color: ${color};
`;

export const StyledH1 = styled.h1`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  line-height: 60px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
  ${Media.down.l} {
    font-size: 24px;
    line-height: 36px;
  }
`;
export const StyledH2 = styled.h2`
  font-family: Poppins;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  line-height: 42px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
  ${Media.down.l} {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const StyledH3 = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  line-height: 26px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
`;
export const StyledSubTitle1 = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  line-height: 27px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
  ${Media.down.xs} {
    font-size: 14px;
    line-height: 21px;
  }
`;
export const StyledSubTitle2 = styled.h4`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  line-height: 20px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
`;
export const StyledH4 = styled.h4`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  line-height: 24px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
  ${Media.down.l} {
    font-size: 12px;
    line-height: 18px;
  }
`;
export const StyledH5 = styled.h5`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  line-height: 20px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
`;
export const StyledH6 = styled.h6`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  line-height: 20px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
`;
export const StyledMenu = styled.h4`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  line-height: 19px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
  ${Media.down.l} {
    font-size: 14px;
    line-height: 16px;
  }
`;
export const StyledNote = styled.p`
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  line-height: 18px;
  margin: 0;
  color: ${color};
  font-weight: ${fontWeight};
`;
