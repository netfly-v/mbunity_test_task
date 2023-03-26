import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {IconSvg} from '../../ui-kit/icons';
import {Media} from '../../ui-kit/theme/breakpoints';
import {Typography} from '../../ui-kit/Typography/Text';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({theme}) => theme.palette.background.lightGray};
`;

export const Main = styled.main`
  flex-grow: 1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  ${Media.down.l} {
    flex-direction: column;
    padding: 0;
  }
`;

export const MobileHeaderWrapper = styled.div<{$isMobileMenuOpen: boolean}>`
  display: flex;
  justify-content: space-between;
  padding: 28px 20px;
  background-color: ${({theme, $isMobileMenuOpen}) => $isMobileMenuOpen && theme.palette.background.black};
`;

export const BurgerMenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  ${Media.down.l} {
    background-color: ${({theme}) => theme.palette.background.black};
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 23px;
  }
`;

export const StyledLink = styled(Link)<{$isLast?: boolean}>`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: ${({$isLast}) => ($isLast ? undefined : '47px')};
  ${Media.down.l} {
    align-items: baseline;
  }
`;

export const StyledArrow = styled(IconSvg)`
  margin-left: 8px;
`;

export const MenuItemName = styled(Typography)`
  ${Media.down.l} {
    margin-top: 30px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 80px 66px;
  background-color: ${({theme}) => theme.palette.background.black};
  ${Media.down.l} {
    padding: 19px 20px 35px;
  }
`;

export const FooterContentWrapper = styled.div`
  border-top: 1px solid ${({theme}) => theme.palette.common.white};
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  margin-top: 45px;
  width: 100%;
  ${Media.down.l} {
    margin-top: 20px;
    flex-wrap: wrap;
  }
`;

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  ${Media.down.l} {
    width: 40%;
  }
`;

export const FooterBlockTitle = styled(Typography)`
  margin-bottom: 20px;
`;

export const FooterLine = styled.div`
  display: flex;
  margin-bottom: 24px;
  ${Media.down.l} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledFooterLineText = styled(Typography)`
  margin-left: 25px;
  ${Media.down.l} {
    margin-left: 0;
    margin-top: 13px;
  }
`;

export const StyledFooterLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const NewsLetterBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 14px 20px;
  border-radius: 10px;
  max-width: 304px;
  background-color: ${({theme}) => theme.palette.background.lightBlack};
`;

export const FooterInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${({theme}) => theme.palette.background.graphiteGray};
  height: 39px;
  margin: 9px 0 19px;
`;

export const FooterInput = styled.input`
  border: none;
  background-color: transparent;
  height: 100%;
  color: ${({theme}) => theme.palette.text.graphite};
  font-family: Poppins;
`;

export const SubscribeButton = styled.button`
  border: none;
  background-color: ${({theme}) => theme.palette.background.black};
  height: 100%;
  padding: 10px 22px;
  cursor: pointer;
`;

export const SvgIconsWrapper = styled.div`
  display: flex;
  ${Media.down.l} {
    margin-top: 60px;
    width: 100%;
    justify-content: center;
  }
`;
