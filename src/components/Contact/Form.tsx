import React from 'react';
import {IconSvg} from '../../ui-kit/icons';
import {Typography} from '../../ui-kit/Typography/Text';
import {
  ContactFormWrapper,
  ContactInfoBlock,
  ContactInfoWrapper,
  FormDataWrapper,
  StyledContactInfoSubTitle,
  ContactLine,
  StyledContactLineText,
  SocialNetworksBlock,
  StyledIcon,
  StyledForm,
  FormLineWrapper,
  FormElementWrapper,
  FieldSet,
  Label,
  Input,
  StyledElementTitle,
  RadioButtonsWrapper,
  StyledRadioInput,
  RadioOptionWrapper,
  StyledSubmitButton,
  SubmitButtonWrapper,
} from './styles';

const ContactInfo: React.FC = () => {
  return (
    <ContactInfoWrapper>
      <Typography variant="h2">Contact Information</Typography>
      <StyledContactInfoSubTitle variant="subTitle1" weight="regular" color="lightGray">
        Say something to start a live chat!
      </StyledContactInfoSubTitle>
      <ContactInfoBlock>
        <ContactLine>
          <IconSvg type="phone" width="24" height="24" />
          <StyledContactLineText variant="h4">+1012 3456 789</StyledContactLineText>
        </ContactLine>
        <ContactLine>
          <IconSvg type="email" width="24" height="24" />
          <StyledContactLineText variant="h4">demo@gmail.com</StyledContactLineText>
        </ContactLine>
        <ContactLine>
          <IconSvg type="location" width="24" height="24" />
          <StyledContactLineText variant="h4">
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </StyledContactLineText>
        </ContactLine>
      </ContactInfoBlock>
      <SocialNetworksBlock>
        <StyledIcon type="twitter" width="30" height="30" />
        <StyledIcon type="instagram" width="30" height="30" fillChildren="black" />
        <StyledIcon type="discord" width="30" height="30" />
      </SocialNetworksBlock>
    </ContactInfoWrapper>
  );
};

const FormData: React.FC = () => {
  return (
    <FormDataWrapper>
      <StyledForm>
        <FieldSet>
          <FormLineWrapper>
            <FormElementWrapper $isLeft>
              <Label>
                <StyledElementTitle variant="h5" color="suvaGray">
                  First Name
                </StyledElementTitle>
                <Input name="firstName" />
              </Label>
              <Label>
                <StyledElementTitle variant="h5" color="suvaGray">
                  Email
                </StyledElementTitle>
                <Input name="email" />
              </Label>
            </FormElementWrapper>
            <FormElementWrapper $isRight>
              <Label>
                <StyledElementTitle variant="h5" color="suvaGray">
                  Last Name
                </StyledElementTitle>
                <Input name="lastName" />
              </Label>
              <Label>
                <StyledElementTitle variant="h5" color="suvaGray">
                  Phone Number
                </StyledElementTitle>
                <Input name="phone" />
              </Label>
            </FormElementWrapper>
          </FormLineWrapper>

          <FormElementWrapper>
            <Label>
              <Typography variant="subTitle2" color="black">
                Select Subject?
              </Typography>
              <RadioButtonsWrapper>
                <RadioOptionWrapper>
                  <StyledRadioInput type="radio" name="subject" value="value1" />
                  <Typography variant="h6" color="black">
                    General Inquiry
                  </Typography>
                </RadioOptionWrapper>

                <RadioOptionWrapper>
                  <StyledRadioInput type="radio" name="subject" value="value2" />
                  <Typography variant="h6" color="black">
                    General Inquiry
                  </Typography>
                </RadioOptionWrapper>

                <RadioOptionWrapper>
                  <StyledRadioInput type="radio" name="subject" value="value3" />
                  <Typography variant="h6" color="black">
                    General Inquiry
                  </Typography>
                </RadioOptionWrapper>

                <RadioOptionWrapper>
                  <StyledRadioInput type="radio" name="subject" value="value4" />
                  <Typography variant="h6" color="black">
                    General Inquiry
                  </Typography>
                </RadioOptionWrapper>
              </RadioButtonsWrapper>
            </Label>
          </FormElementWrapper>

          <FormElementWrapper>
            <Label>
              <StyledElementTitle variant="h5" color="suvaGray">
                Message
              </StyledElementTitle>
              <Input name="message" placeholder="Write your message.." />
            </Label>
          </FormElementWrapper>

          <SubmitButtonWrapper>
            <StyledSubmitButton type="submit" value="Send Message" onClick={(e) => e.preventDefault()} />
          </SubmitButtonWrapper>
        </FieldSet>
      </StyledForm>
    </FormDataWrapper>
  );
};

export const ContactForm: React.FC = () => {
  return (
    <ContactFormWrapper>
      <ContactInfo />
      <FormData />
    </ContactFormWrapper>
  );
};
