import styled from 'styled-components';
import {IconSvg} from '../../ui-kit/icons';
import {Typography} from '../../ui-kit/Typography/Text';
import ellipses from '../../ui-kit/assets/ellipses.svg';
import check from '../../ui-kit/assets/check.svg';
import sendArrow from '../../ui-kit/assets/sendArrow.svg';
import {Media} from '../../ui-kit/theme/breakpoints';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 73px 122px 50px;
  ${Media.down.l} {
    padding: 30px 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Media.down.l} {
    width: 70%;
  }
`;

export const StyledContactSubTitle = styled(Typography)`
  margin-top: 10px;
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.palette.background.white};
  ${Media.down.l} {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${ellipses});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-color: ${({theme}) => theme.palette.background.black};
  border-radius: 10px;
  border-bottom-right-radius: 0;
  width: 40%;
  padding: 40px 114px 40px 40px;
  ${Media.down.l} {
    padding: 15px 51px 25px;
    width: auto;
    align-items: center;
  }
`;

export const FormDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-image: url(${sendArrow});
  background-position: right 120px bottom -30px;
  background-repeat: no-repeat;
  ${Media.down.l} {
    width: 100%;
    background-position: right 350px bottom -50px;
    background-size: 20%;
  }
  ${Media.down.m} {
    background-size: 50%;
    background-position: right 160px bottom -60px;
  }
`;

export const StyledContactInfoSubTitle = styled(Typography)`
  margin-top: 6px;
  ${Media.down.l} {
    font-size: 11px;
    line-height: 17px;
  }
`;

export const ContactInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 111px;
  ${Media.down.l} {
    margin-top: 12px;
    align-items: center;
  }
`;

export const ContactLine = styled.div`
  display: flex;
  margin-bottom: 50px;
  ${Media.down.l} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const StyledContactSvgIcon = styled(IconSvg)`
  flex-shrink: 0;
`;

export const StyledContactLineText = styled(Typography)`
  margin-left: 25px;
  ${Media.down.l} {
    margin-left: 0;
    margin-top: 10px;
    text-align: center;
  }
`;

export const SocialNetworksBlock = styled.div`
  display: flex;
  margin-top: 159px;
  ${Media.down.l} {
    justify-content: space-evenly;
    margin-top: 48px;
    width: 100%;
  }
`;

export const StyledIcon = styled(IconSvg)`
  margin-right: 24px;
  ${Media.down.l} {
    margin: 0;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  padding: 15px 40px 0 50px;
  ${Media.down.l} {
    padding: 30px 21px 64px;
  }
`;

export const FieldSet = styled.fieldset`
  border: none;
  width: 100%;
  padding: 0;
`;

export const Label = styled.label`
  margin-top: 45px;
  :active,
  :focus,
  :hover {
    color: ${({theme}) => theme.palette.common.black};
  }
  ${Media.down.l} {
    margin-top: 20px;
  }
`;

export const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const StyledElementTitle = styled(Typography)`
  :active,
  :focus,
  :hover {
    color: inherit;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.palette.common.suvaGray};
  font-family: Poppins;
  :active,
  :focus,
  :hover {
    border-color: black;
  }
`;

export const FormElementWrapper = styled.div<{$isLeft?: boolean; $isRight?: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${({$isLeft}) => $isLeft && '20px'};
  margin-left: ${({$isRight}) => $isRight && '20px'};
  ${Media.down.l} {
    margin: 0;
  }
`;

export const FormLineWrapper = styled.div`
  display: flex;
  ${Media.down.l} {
    flex-direction: column;
  }
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  ${Media.down.l} {
    flex-wrap: wrap;
  }
`;

export const RadioOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const StyledRadioInput = styled.input`
  margin-right: 10px;
  appearance: none;
  cursor: pointer;
  width: 13px;
  height: 13px;
  border: none;
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.background.shadowGray};
  :checked {
    background-image: url(${check});
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 45px;
  ${Media.down.l} {
    margin-top: 25px;
  }
`;

export const StyledSubmitButton = styled.input`
  cursor: pointer;
  border: none;
  padding: 15px 48px;
  background-color: ${({theme}) => theme.palette.background.black};
  color: ${({theme}) => theme.palette.common.white};
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
  ${Media.down.l} {
    width: 100%;
  }
`;
