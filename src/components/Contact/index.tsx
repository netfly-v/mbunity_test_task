import React from 'react';
import {Typography} from '../../ui-kit/Typography/Text';
import {ContactForm} from './Form';
import {ContactWrapper, TitleWrapper, StyledContactSubTitle} from './styles';

export const ContactPage: React.FC = () => {
  return (
    <ContactWrapper>
      <TitleWrapper>
        <Typography variant="h1" color="black">
          Contact Us
        </Typography>
        <StyledContactSubTitle variant="subTitle1" color="gray">
          Any question or remarks? Just write us a message!
        </StyledContactSubTitle>
      </TitleWrapper>
      <ContactForm />
    </ContactWrapper>
  );
};
