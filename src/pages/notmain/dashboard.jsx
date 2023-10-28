import React, { useState } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaCloudUploadAlt,
  FaBullhorn,
  FaCog,
  FaUsers,
  FaComment,
  FaSignOutAlt,
} from "react-icons/fa";
import UserStatsContent from '../DashboardContent/Userstats';
import UploadContent from '../DashboardContent/Upload';
import AdsContent from '../DashboardContent/Ads';
import SettingsContent from '../DashboardContent/Settings';
import Roles from '../DashboardContent/Roles';
import LogoutContent from '../DashboardContent/Log-Out';
import Feedback from '../DashboardContent/Feedback';
import profileImage from '/images/lou.jpg'; // Import your profile image

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Navbar = styled.div`
  width: 200px;
  background-color: #212016;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabItem = styled.div`
color:white;
  padding: 10px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center; /* Center the icon and text vertically */

  ${(props) =>
    props.active &&
    `
    background-color: white;
width:100%;
    color: #000;
  `}
`;

const IconWrapper = styled.div`
  margin-right: 10px; /* Add spacing between icon and text */
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black; /* Add a 1px solid black border */
`;


const ProfileButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TabbedMenu = () => {
  const [activeTab, setActiveTab] = useState("user-stats");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleUploadClick = () => {
    // Implement your upload logic here
  };

  return (
    <section>
      <Container>
        <Navbar>
          <ProfileImage src={profileImage} alt="Profile" />
          <ProfileButton>Profile</ProfileButton>
          <TabMenu>
            <TabItem
              active={activeTab === "user-stats"}
              onClick={() => handleTabClick("user-stats")}
            >
              <IconWrapper>
                <FaUser />
              </IconWrapper>
              User Statistics
            </TabItem>
            <TabItem
              active={activeTab === "upload"}
              onClick={() => handleTabClick("upload")}
            >
              <IconWrapper>
                <FaCloudUploadAlt />
              </IconWrapper>
              Upload
            </TabItem>
            <TabItem
              active={activeTab === "ads"}
              onClick={() => handleTabClick("ads")}
            >
              <IconWrapper>
                <FaBullhorn />
              </IconWrapper>
              Ads
            </TabItem>
            <TabItem
              active={activeTab === "settings"}
              onClick={() => handleTabClick("settings")}
            >
              <IconWrapper>
                <FaCog />
              </IconWrapper>
              Settings
            </TabItem>
            <TabItem
              active={activeTab === "roles"}
              onClick={() => handleTabClick("roles")}
            >
              <IconWrapper>
                <FaUsers />
              </IconWrapper>
              Roles
            </TabItem>
            <TabItem
              active={activeTab === "feedback"}
              onClick={() => handleTabClick("feedback")}
            >
              <IconWrapper>
                <FaComment />
              </IconWrapper>
              Feedback
            </TabItem>
            <TabItem
              active={activeTab === "log-out"}
              onClick={() => handleTabClick("log-out")}
            >
              <IconWrapper>
                <FaSignOutAlt />
              </IconWrapper>
              Log-Out
            </TabItem>
          </TabMenu>
        </Navbar>

        <Content>
          {activeTab === "user-stats" && <UserStatsContent />}
          {activeTab === "upload" && <UploadContent handleUploadClick={handleUploadClick} />}
          {activeTab === "ads" && <AdsContent />}
          {activeTab === "settings" && <SettingsContent />}
          {activeTab === "roles" && <Roles />}
          {activeTab === "feedback" && <Feedback />}
          {activeTab === "log-out" && <LogoutContent />}
        </Content>
      </Container>
    </section>
  );
};

export default TabbedMenu;
