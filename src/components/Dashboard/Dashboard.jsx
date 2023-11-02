import React, { useState } from 'react';
import '../../App.css';
import Sidebar from '../Dashboard/SideBarSection/Sidebar';
import Body from './BodySection/Body'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="dashboard flex">
      <div className="dashboardContainer flex">
        <Sidebar setActiveTab={setActiveTab} />
        {activeTab === 'dashboard' && <Body />}
        {activeTab === 'roles' && <RolesContent/>}
        {activeTab === 'ads' && <AdsContent />}
        {activeTab === 'upload' && <UploadContent handleUploadClick={handleUploadClick} />}
        {activeTab === 'settings' && <SettingsContent />}
      </div>
    </div>
  );
};

export default Dashboard;
