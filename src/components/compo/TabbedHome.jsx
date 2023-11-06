import React from "react";
import styled from "styled-components";
import MovieTabs from "../TabbedComp/Movietab"
import Seriestabs from "../TabbedComp/Seriestab"
import Animetabs from "../TabbedComp/Animetab"
const Tabs = styled.div`
  background: transparent;
  width: 100vw; /* Set the width to 100vw */
  height: 140vh;
  padding: 1em;
  margin-left: auto;
  margin-right: 20px;
  border-top: 1px solid white;
  background: linear-gradient(to top, #000000 50%, #12104a 100%);

 
`;


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  color: white;
  
 
`;

const TabsNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: white;

   @media (max-width: 640px) {
    margin-top:5%;
   margin-right:25%;
  }
`;

const TabsNavButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 1em 2em;
  text-align: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s, color 0.3s;
  height: 70px;
  font-size: 20px;
  margin: 10% 0; /* Margin values: top and bottom */

  &:hover {
    background-color: #212016;
    color: #fff;
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 10%; /* Margin only for the last tab on the right side */
    
  }

  & + & {
    margin-left: -1px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    height: 50px;
    margin-left:-30%;
    margin:-5%;
  }
  }
`;



// Create a component for Movies content
class MoviesContent extends React.Component {
  render() {
    return (
      <MovieTabs />
    );
  }
}

// Create a component for Series content
class SeriesContent extends React.Component {
  render() {
    return (
     <Seriestabs />
    );
  }
}

// Create a component for Anime content
class AnimeContent extends React.Component {
  render() {
    return (
      <Animetabs />
    );
  }
}

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Movies",
          content: <MoviesContent />,
        },
        {
          name: "Series",
          content: <SeriesContent />,
        },
        {
          name: "Anime",
          content: <AnimeContent />,
        },
      ],
      activeTab: 0,
    };
  }

  handleClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { items, activeTab } = this.state;

    const buttons = items.map((item, i) => (
      <TabsNavButton
        key={i}
        onClick={() => this.handleClick(i)}
        style={activeTab === i ? { color: "deepskyblue" } : {}}
      >
        {item.name}
      </TabsNavButton>
    ));

    return (
      <section>
        <Tabs>
          <HeaderContainer>
            <TabsNav>{buttons}</TabsNav>
          </HeaderContainer>
          <div>{items[activeTab].content}</div>
        </Tabs>
      </section>
    );
  }
}

export default TabsComponent;
