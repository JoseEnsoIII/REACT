import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Define fade animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const Fade = styled(CSSTransition)`
  &.carouselContent-enter {
    opacity: 0;
    transform: translateX(100%); /* Start off-screen to the right */
  }

  &.carouselContent-enter-active {
    opacity: 1;
    transform: translateX(0); /* Move to the left, center position */
    transition: opacity ${(props) => props.timeout || 500}ms,
                transform ${(props) => props.timeout || 500}ms;
  }

  &.carouselContent-exit {
    opacity: 1;
    transform: translateX(0); /* Start from the center position */
  }

  &.carouselContent-exit-active {
    opacity: 0;
    transform: translateX(-100%); /* Move to the left, off-screen position */
    transition: opacity 0ms, transform ${(props) => props.timeout || 500}ms;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;

  @media screen and (max-width: 320px) {
    max-width: 100%;
    width: auto;
    
    height: 50vh; /* Adjust the height for screens up to 320px wide */
  }

  @media screen and (min-width: 321px) and (max-width: 640px) {
    max-width: 640px;
    width: 100%;
    height: 50%;
  }

  /* Media query for 768px */
  @media screen and (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 60vh; /* Adjust the height for screens between 641px and 768px wide */
  }

  /* Media query for 992px */
  @media screen and (min-width: 769px) and (max-width: 992px) {
    max-width: 992px;
    width: 100%;
    height: 70vh; /* Adjust the height for screens between 769px and 992px wide */
  }

  /* Media query for 1200px */
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    max-width: 1200px;
    width: 100%;
    height: 80vh; /* Adjust the height for screens between 993px and 1200px wide */
  }

  
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 320px) {
    height:100%
  }
`;

const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  height:50px;
  font-size:30px;
  color:white;
`;

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size:30px;
  color:white;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
    };
  }
  addCurrent = () => {
    const { images, loop } = this.props;
    const { currentId } = this.state;
    const nextId = currentId + 1;

    if (nextId < images.length) {
      this.setState({ currentId: nextId, key: Date.now() }); // Update key
    } else if (loop) {
      this.setState({ currentId: 0, key: Date.now() }); // Update key
    }
  };

  subCurrent = () => {
    const { images, loop } = this.props;
    const { currentId } = this.state;
    const prevId = currentId - 1;

    if (prevId >= 0) {
      this.setState({ currentId: prevId, key: Date.now() }); // Update key
    } else if (loop) {
      this.setState({ currentId: images.length - 1, key: Date.now() }); // Update key
    }
  };
  // Add your addCurrent and subCurrent methods here

  render() {
    let images = this.props.images || [];
    let cImage = images[this.state.currentId];

    // Check if cImage is undefined or null before rendering
    if (!cImage) {
      return null; // or a loading state, depending on your requirements
    }

    return (
      <CarouselContainer className="carousel">
        <div className="carousel-main" alt="">
          <TransitionGroup>
            <Fade key={this.state.currentId} timeout={500}>
              <MainImage src={cImage} alt={cImage} />
            </Fade>
          </TransitionGroup>
        </div>
        <PrevButton onClick={this.subCurrent}>
  <FaArrowLeft />
</PrevButton>
<NextButton onClick={this.addCurrent}>
  <FaArrowRight />
</NextButton>
      </CarouselContainer>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  thumb: PropTypes.bool,
  loop: PropTypes.bool,
  autoplay: PropTypes.number,
};

Carousel.defaultProps = {
  images: [],
  thumb: true,
  loop: true,
};

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default function App() {
  // Sample images array
  const images = [
    "https://img.sflix.to/xxrz/1200x600/224/a5/c1/a5c1674ed733c43933cd11e877f050b5/a5c1674ed733c43933cd11e877f050b5.jpg",
   "/images/bb.jpg",
    "/images/meg2.jpg"];

  return (
    <ErrorBoundary>
      {/* Your App component content */}
      <Carousel images={images} />
      {/* Additional components and content */}
    </ErrorBoundary>
  );
}
