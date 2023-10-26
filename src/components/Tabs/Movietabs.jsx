import React, { useState } from 'react';
import styled from 'styled-components';

const TabButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the tab buttons horizontally */
`;

const TabButton = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${props => props.active ? '#fff' : '#f1f1f1'};
  border: 1px solid black;
  border-radius: 0px;
  height: 50px;
  width:60%;
   /* Add margin to separate buttons */
`;

const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

function TabbedInterface() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* Tab buttons */}
      <TabButtonContainer>
        <TabButton
          active={activeTab === 'tab1'}
          onClick={() => handleTabClick('tab1')}
        >
          Tab 1
        </TabButton>
        <TabButton
          active={activeTab === 'tab2'}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </TabButton>
        <TabButton
          active={activeTab === 'tab3'}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </TabButton>
        <TabButton
          active={activeTab === 'tab4'}
          onClick={() => handleTabClick('tab4')}
        >
          Tab 4
        </TabButton>
        <TabButton
          active={activeTab === 'tab5'}
          onClick={() => handleTabClick('tab5')}
        >
          Tab 5
        </TabButton>
        <TabButton
          active={activeTab === 'tab6'}
          onClick={() => handleTabClick('tab6')}
        >
          Tab 6
        </TabButton>
      </TabButtonContainer>

      {/* Tab content */}
      <div className="tab-container">
        <TabContent active={activeTab === 'tab1'}>
          <h2>Tab 1 Content</h2>
          <p>This is the content of Tab 1.</p>
        </TabContent>
        <TabContent active={activeTab === 'tab2'}>
          <h2>Tab 2 Content</h2>
          <p>This is the content of Tab 2.</p>
        </TabContent>
        <TabContent active={activeTab === 'tab3'}>
          <h2>Tab 3 Content</h2>
          <p>This is the content of Tab 3.</p>
        </TabContent>
        <TabContent active={activeTab === 'tab4'}>
          <h2>Tab 4 Content</h2>
          <p>This is the content of Tab 4.</p>
        </TabContent>
        <TabContent active={activeTab === 'tab5'}>
          <h2>Tab 5 Content</h2>
          <p>This is the content of Tab 5.</p>
        </TabContent>
        <TabContent active={activeTab === 'tab6'}>
          <h2>Tab 6 Content</h2>
          <p>This is the content of Tab 6.</p>
        </TabContent>
      </div>
    </div>
  );
}

export default TabbedInterface;
