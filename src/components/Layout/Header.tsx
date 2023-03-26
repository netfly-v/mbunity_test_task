import React, {useState} from 'react';
import {route} from '../../constants/route';
import {IconSvg} from '../../ui-kit/icons';
import {
  HeaderWrapper,
  MobileHeaderWrapper,
  MenuWrapper,
  StyledLink,
  StyledArrow,
  MenuItemName,
  BurgerMenuButton,
  SvgIconsWrapper,
} from './styles';
import {isMobile} from 'react-device-detect';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onMobileMenuClick = () => setIsMobileMenuOpen((prev) => !prev);
  return (
    <HeaderWrapper>
      {isMobile ? (
        <>
          <MobileHeaderWrapper $isMobileMenuOpen={isMobileMenuOpen}>
            <StyledLink to={route.home}>
              <IconSvg type={'logo'} width="119" height="24" fillChildren={isMobileMenuOpen ? 'white' : undefined} />
            </StyledLink>

            <BurgerMenuButton onClick={onMobileMenuClick}>
              {isMobileMenuOpen ? (
                <IconSvg type={'close'} width="24" height="24" />
              ) : (
                <IconSvg type={'burger'} width="24" height="24" />
              )}
            </BurgerMenuButton>
          </MobileHeaderWrapper>
          {isMobileMenuOpen && <Menu />}
        </>
      ) : (
        <>
          <StyledLink to={route.home}>
            <IconSvg type={'logo'} width="119" height="24" />
          </StyledLink>
          <Menu />
        </>
      )}
    </HeaderWrapper>
  );
};

const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <StyledLink to={route.home}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Home
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.features}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Features
        </MenuItemName>
        <StyledArrow type={'arrowDown'} width="12" height="7" fillChildren={isMobile ? 'white' : undefined} />
      </StyledLink>
      <StyledLink to={route.blog}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Blog
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.shop}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Shop
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.about}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          About
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.contact}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Contact
        </MenuItemName>
      </StyledLink>
      <SvgIconsWrapper>
        <StyledLink to={route.user}>
          <IconSvg type="user" width="31" height="32" fillChildren={isMobile ? 'white' : undefined} />
        </StyledLink>
        <StyledLink to={route.cart} $isLast>
          <IconSvg type="cart" width="31" height="32" fillChildren={isMobile ? 'white' : undefined} />
        </StyledLink>
      </SvgIconsWrapper>
    </MenuWrapper>
  );
};
