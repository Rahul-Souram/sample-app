import React, { useState } from "react";
import { Button, Image, Text, View, Alert } from "react-native";
import { Switch } from "react-native-paper";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #262626;
`;

const ProfilePicture = styled.View`
flex:1;
justify-content: center;
align-items: center;
`;
const ProfileWrapper = styled.View`
flex:2.8;
justify-content: center;
align-items: center;
margin: 80px 0 0;
`;
const EditButton = styled.TouchableOpacity`
  padding: 10px 35px;
  background: #1c90ff;
  title-align: center;
  margin: 10px auto;
  width: 70%;
  border-radius: 50px;
`;
const InviteButton = styled.TouchableOpacity`
  padding: 10px 15px;
  background: #1c90ff;
  title-align: center;
  margin: 10px auto;
  width: 30%;
  border-radius: 50px;
`;
const EditText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const ListContainer = styled.View`
  background: #323232;
  padding: 5px 10px;
  border-radius: 20px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px auto 20px;
`;
const ProfileDetails = styled.View`
flex:1
justify-content: center;
align-items: center;
`;

const Title = styled.Text`
  font-size: 43px;
  font-weight: 600;
  color: #fff;
`;
const Mail = styled.Text`
  color: gray;
  font-size: 15px;
  text-decoration: underline;
`;
const HomeFooter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const ListTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;
const ListTitleHead = styled.Text`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin-left: 25px;
  margin-top: 8px;
`;

const LogOut = styled.TouchableOpacity`
  background: #262626;
  margin: 20px auto;
  `;
  const LogoutHead = styled.Text`
  text-align: center;
  color: gray;
  font-weight:600;
`;
const NotifyContainer = styled.View`
  margin: 20px 0;
  flex: 2;
`;
const Profile = () => {
  const [switchOn, setSwitchOn] = useState(false);
  return (
    <Container>
        <ProfileWrapper>
      <ProfilePicture>
        <Image
          style={{ width: 120, height: 120 }}
          source={require("../icons/profile.jpeg")}
        />
      </ProfilePicture>
      <ProfileDetails>
        <Title>Erlich Bachman</Title>
        <Mail
          onPress={() => Linking.openURL("http://erlichbachman@piedpiper.com")}
        >
          erlichbachman@piedpiper.com
        </Mail>
        <EditButton>
          <EditText>Edit Profile</EditText>
        </EditButton>
      </ProfileDetails>
      </ProfileWrapper>
      <NotifyContainer>
        <View>
          <ListTitleHead>Notifications</ListTitleHead>
          <ListContainer>
            <ListTitle>Turn on Notifications</ListTitle>
            <Switch
              value={switchOn}
              onValueChange={() => {
                setSwitchOn(!switchOn);
                Alert.alert("Notifications on : " + !switchOn);
              }}
            />
          </ListContainer>
        </View>
        <View>
          <ListTitleHead>Invite Link</ListTitleHead>

          <ListContainer>
            <ListTitle>Invite people</ListTitle>
            <InviteButton>
              <EditText>Invite</EditText>
            </InviteButton>
          </ListContainer>
        </View>
      </NotifyContainer>

      <LogOut>
        <LogoutHead>Log out</LogoutHead>
      </LogOut>
      <HomeFooter>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../icons/home.jpeg")}
        />

        <Image
          style={{ width: 50, height: 50 }}
          source={require("../icons/plus.jpeg")}
        />
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../icons/paste.jpeg")}
        />
      </HomeFooter>
    </Container>
  );
};

export default Profile;
