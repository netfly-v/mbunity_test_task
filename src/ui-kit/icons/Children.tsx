import React from 'react';
import {StyledSvgIconProps} from './types';
import {
  BurgerMenu,
  Cart,
  Discord,
  Email,
  Location,
  Instagram,
  Logo,
  Phone,
  Twitter,
  User,
  ArrowDown,
  Close,
} from './paths';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type, fillChildren}) => {
  if (type === 'logo') {
    return <Logo fillChildren={fillChildren} />;
  }
  if (type === 'user') {
    return <User fillChildren={fillChildren} />;
  }
  if (type === 'cart') {
    return <Cart fillChildren={fillChildren} />;
  }
  if (type === 'phone') {
    return <Phone />;
  }
  if (type === 'email') {
    return <Email />;
  }
  if (type === 'location') {
    return <Location />;
  }
  if (type === 'twitter') {
    return <Twitter fillChildren={fillChildren} />;
  }
  if (type === 'instagram') {
    return <Instagram fillChildren={fillChildren} />;
  }
  if (type === 'discord') {
    return <Discord fillChildren={fillChildren} />;
  }
  if (type === 'burger') {
    return <BurgerMenu />;
  }
  if (type === 'arrowDown') {
    return <ArrowDown fillChildren={fillChildren} />;
  }
  if (type === 'close') {
    return <Close />;
  }
  return null;
};
