import React from 'react'
import { Image } from "react-native";
import styled from "styled-components";

const SignButton = styled.TouchableOpacity`
  padding: 15px 15px;
  background: #1C90FF;
  title-align: center;
  margin: 10px auto;
  width: 90%;
  border-radius: 50px;
`;
const SocialButton = styled.TouchableOpacity`
  padding: 15px 15px;
  background: #262626;
  title-align: center;
  margin: 10px auto;
  border-radius: 50px;
  width: 45%;
  border: 1px solid gray;
`;
const Title = styled.Text`
  color: #fff;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
`;

const BottomText = styled.Text`
  flex: 1;
  color: gray;
  text-align: center;
  font-size: 14px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;
const MainView = styled.View`
  flex: 3;
  justify-content: center;
  padding:20px;
`;
const MainImageView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const ButtonView = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`;
const MainTitle = styled.Text`
  color: #fff;
  font-weight: 600;
  text-align: left;
  font-size: 40px;
`;
const Tagline = styled.Text`
  color: #fff;
  font-weight: 600;
  text-align: right;
  font-size: 30px;
`;

const Container = styled.View`
  flex:1;
  padding: 10px;
  background: #262626;
`;
const LandingPage = ({navigation}) => {

    const NavigateHome = ()=>{
        navigation.navigate('Home')
    }
  return (
   <Container>
          <MainImageView>
        <Image
          style={{ width: 120, height: 120 }}
          source={require("../icons/logo.jpeg")}
        />
      </MainImageView>
      <MainView>
        <MainTitle>College Root</MainTitle>
        <Tagline>The only stop for .....</Tagline>
      </MainView>
      <ButtonView>
        <SignButton onPress={()=> NavigateHome()}>
          <Title>Sign In</Title>
        </SignButton>
        <SignButton>
          <Title>Register with email</Title>
        </SignButton>
      </ButtonView>
      <ButtonContainer>
        <SocialButton>
          <Title>Google</Title>
        </SocialButton>
        <SocialButton>
          <Title>Apple ID</Title>
        </SocialButton>
      </ButtonContainer>
      <BottomText>
        By Continuing you agree to the Terms and Conditions
      </BottomText>
   </Container>
  )
}

export default LandingPage