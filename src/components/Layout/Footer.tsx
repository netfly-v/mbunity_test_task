import React from 'react';
import {route} from '../../constants/route';
import {IconSvg} from '../../ui-kit/icons';
import {Typography} from '../../ui-kit/Typography/Text';
import {
  FooterContentWrapper,
  FooterWrapper,
  FooterBlock,
  FooterBlockTitle,
  FooterLine,
  StyledFooterLineText,
  StyledFooterLink,
  NewsLetterBlock,
  FooterInputWrapper,
  FooterInput,
  SubscribeButton,
} from './styles';

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <IconSvg type={'logo'} width="119" height="24" fillChildren="white" />
      <FooterContentWrapper>
        <FooterBlock>
          <FooterBlockTitle variant="h3">Reach us</FooterBlockTitle>
          <FooterLine>
            <IconSvg type="phone" width="24" height="24" />
            <StyledFooterLineText variant="h4">+1012 3456 789</StyledFooterLineText>
          </FooterLine>
          <FooterLine>
            <IconSvg type="email" width="24" height="24" />
            <StyledFooterLineText variant="h4">demo@gmail.com</StyledFooterLineText>
          </FooterLine>
          <FooterLine>
            <IconSvg type="location" width="24" height="24" />
            <StyledFooterLineText variant="h4">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </StyledFooterLineText>
          </FooterLine>
        </FooterBlock>

        <FooterBlock>
          <FooterBlockTitle variant="h3">Company</FooterBlockTitle>
          <StyledFooterLink to={route.about}>
            <Typography variant="h4">About</Typography>
          </StyledFooterLink>
          <StyledFooterLink to={route.contact}>
            <Typography variant="h4">Contact</Typography>
          </StyledFooterLink>
          <StyledFooterLink to={route.blog}>
            <Typography variant="h4">Blogs</Typography>
          </StyledFooterLink>
        </FooterBlock>

        <FooterBlock>
          <FooterBlockTitle variant="h3">Legal</FooterBlockTitle>
          <StyledFooterLink to={route.privacy}>
            <Typography variant="h4">Privacy Policy</Typography>
          </StyledFooterLink>
          <StyledFooterLink to={route.termsNServices}>
            <Typography variant="h4">Terms & Services</Typography>
          </StyledFooterLink>
          <StyledFooterLink to={route.termsOfUse}>
            <Typography variant="h4">Terms of Use</Typography>
          </StyledFooterLink>
          <StyledFooterLink to={route.refund}>
            <Typography variant="h4">Refund Policy</Typography>
          </StyledFooterLink>
        </FooterBlock>

        <FooterBlock>
          <FooterBlockTitle variant="h3">Quick Links</FooterBlockTitle>
          <StyledFooterLink to={route.keybox}>
            <Typography variant="h4">Techlabz Keybox</Typography>
          </StyledFooterLink>
          <StyledFooterLink to={route.downloads}>
            <Typography variant="h4">Downloads</Typography>
          </StyledFooterLink>
          <StyledFooterLink to={route.forum}>
            <Typography variant="h4">Forum</Typography>
          </StyledFooterLink>
        </FooterBlock>

        <NewsLetterBlock>
          <FooterBlockTitle variant="h3">Join Our Newsletter</FooterBlockTitle>
          <FooterInputWrapper>
            <FooterInput />
            <SubscribeButton>
              <Typography variant="h5">Subscribe</Typography>
            </SubscribeButton>
          </FooterInputWrapper>
          <Typography variant="note" color="graphite">
            * Will send you weekly updates for your better tool management.
          </Typography>
        </NewsLetterBlock>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};
