import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Footer from "../components/Footer";
import { ProgressBar } from "react-native-paper";

const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;
  background: #1a1a1a;
`;

const Card = styled.View`
  background: #323232;
  padding: 10px 10px;
  border-radius: 20px;
  width: 90%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px auto;
  overflow: hidden;
`;
const CardContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;
const Tagline = styled.Text`
  color: gray;
  font-size: 12px;
  margin: 10px 0 20px;
`;
const ProfileInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 10px 30px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
  align-items: center;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin: 20px;
`;
const NameView = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;
const Name = styled.Text`
  font-size: 22px;
  margin: 5px;
  color: #fff;
`;
const TypeButton = styled.TouchableOpacity`
  padding: 10px;
  title-align: center;
  width: 40%;
  border-radius: 40px;
`;
const TypeTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

const AppStatus = ({ navigation }) => {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Container>
      <Header>
        <ButtonContainer>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/search.jpeg")}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              style={{ width: 45, height: 45 }}
              source={require("../icons/profile.jpeg")}
            />
          </TouchableOpacity>
        </ButtonContainer>
      </Header>
      <ProfileInfo>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../icons/settings.jpeg")}
        />
        <NameView>
          <Name>Hello</Name>
          <Name>Erlich Bachman</Name>
        </NameView>
      </ProfileInfo>
      <ButtonContainer>
        <TypeButton
          onPress={() => handleClick()}
          style={{
            backgroundColor: active ? "#1C90FF" : "transparent",
          }}
        >
          <TypeTitle style={{ color: active ? "white" : "gray" }}>
            Applications
          </TypeTitle>
        </TypeButton>
        <TypeButton
          onPress={() => handleClick()}
          style={{
            backgroundColor: active ? "transparent" : "#1C90FF",
          }}
        >
          <TypeTitle  style={{ color: active ? "gray" : "white" }}>Results</TypeTitle >
        </TypeButton>
      </ButtonContainer>
      <CardContainer>
        <Card>
          <Title>Stony Brook Univ</Title>
          <Tagline>waiting for result</Tagline>
          <Title>90%</Title>
          <ProgressBar style={{ margin: 10 }} progress={0.9} color="#1C90FF" />
        </Card>
        <Card>
          <Title>Stony Brook Univ</Title>
          <Tagline>Upload SOP,LORs</Tagline>
          <Title>30%</Title>
          <ProgressBar style={{ margin: 10 }} progress={0.3} color="#1C90FF" />
        </Card>
        <Card>
          <Title>San jose State Univ</Title>
          <Tagline>waiting for result</Tagline>
          <Title>76%</Title>
          <ProgressBar style={{ margin: 10 }} progress={0.76} color="#1C90FF" />
        </Card>
      </CardContainer>
      <Footer navigation={navigation} style={{margin:10}} />
    </Container>
  );
};

export default AppStatus;
