import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';


const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const CardsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const CardItem = styled.li`
  border: 2px solid #490A3D;
  border-radius: 5px;
  background-color: #212016;
  color: #fff;
  flex: 1 1 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%; /* Adjust the width as needed */
  height: 110px; /* Adjust the height as needed */
  margin-top: 0px;
`;

const CardTitle = styled.h2`
  background-color: transparent;
  margin: 0;
  padding: 10px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 5px; /* Add a gap of 5px between the child elements */
`;

const CardList = () => {
  return (
    <Wrapper>
      <CardsList className="flex cards">
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 1 Image" />
          <CardTitle>Card 1</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 2 Image" />
          <CardTitle>Card 2</CardTitle>
          <CardContent>
            <div className="rating-button">Rating</div>
      <div className="hd-button">HD</div>
      <div className="duration">2:15:0 </div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 3 Image" />
          <CardTitle>Card 3</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 4 Image" />
          <CardTitle>Card 4</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 5 Image" />
          <CardTitle>Card 5</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 5 Image" />
          <CardTitle>Card 5</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 5 Image" />
          <CardTitle>Card 5</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 5 Image" />
          <CardTitle>Card 5</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 5 Image" />
          <CardTitle>Card 5</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
        <CardItem>
          <CardImage src="/images/spidey.jpg" alt="Card 5 Image" />
          <CardTitle>Card 5</CardTitle>
          <CardContent>
            <div className="rating-button">
              <i className="fa fa-star"></i> Rating
            </div>
            <div className="hd-button">HD</div>
            <div className="duration">2:15:0 minutes</div>
          </CardContent>
        </CardItem>
      
       
        
       
       
      </CardsList>
    </Wrapper>
  );
};

export default CardList;
