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
            <StyledLink to={route.home.path}>
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
          <StyledLink to={route.home.path}>
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
      <StyledLink to={route.home.path}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Home
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.features.path}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Features
        </MenuItemName>
        <StyledArrow type={'arrowDown'} width="12" height="7" fillChildren={isMobile ? 'white' : undefined} />
      </StyledLink>
      <StyledLink to={route.blog.path}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Blog
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.shop.path}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          Shop
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.about.path}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'}>
          About
        </MenuItemName>
      </StyledLink>
      <StyledLink to={route.contact.path}>
        <MenuItemName variant="menu" color={isMobile ? 'white' : 'lightBlack'} weight="semi-bold">
          Contact
        </MenuItemName>
      </StyledLink>
      <SvgIconsWrapper>
        <StyledLink to={route.user.path}>
          <IconSvg type="user" width="31" height="32" fillChildren={isMobile ? 'white' : undefined} />
        </StyledLink>
        <StyledLink to={route.cart.path} $isLast>
          <IconSvg type="cart" width="31" height="32" fillChildren={isMobile ? 'white' : undefined} />
        </StyledLink>
      </SvgIconsWrapper>
    </MenuWrapper>
  );
};
