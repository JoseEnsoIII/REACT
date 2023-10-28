import React ,{useEffect} from 'react';
import Navbar from '../../components/Header/navbar1';
import Footer from '../../components/Footer/footer';
import styled from 'styled-components';
import Ads from "../../components/Ads/bottom-ads";
import PopUpAds from "../../components/Ads/popup-ads";

const PageContainer = styled.div`
  background-color: #212016;
 
`;

const ContentContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
   height:100vh;
`;

const Title = styled.h1`
  color: #fff;
`;

const Paragraph = styled.p`
  color: #fff;
  line-height: 1.6;
  font-size:10px;;
`;

const TermsOfServicePage = () => {
  useEffect(() => {
    document.title = "ReactFlix | Terms";
  }, []);
  return (
    <PageContainer>
      <Navbar />
      <ContentContainer>
        <Title>Terms of Service</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          neque ac erat varius euismod. Fusce vitae tincidunt leo. Praesent in
          urna sit amet elit consectetur faucibus. Proin ullamcorper odio ut
          nisl rhoncus, ut cursus eros hendrerit. In varius gravida nunc eu
          commodo. Vestibulum eu imperdiet nisl.
        </Paragraph>
        <Paragraph>
          Sed quis enim id ipsum dictum bibendum. Aliquam blandit leo et velit
          feugiat, et rhoncus purus iaculis. Etiam nec aliquet massa, nec
          laoreet velit. Cras vestibulum, dui ut suscipit feugiat, augue elit
          dictum tellus, sed tincidunt purus justo ut erat. Sed sit amet tellus
          ullamcorper, facilisis purus a, laoreet odio. Quisque tincidunt auctor
          metus, eget lacinia orci hendrerit quis. Ut et facilisis sem, at
          volutpat libero. Integer et finibus libero. Vestibulum ac elit sed
          odio convallis facilisis. Nulla facilisi.
        </Paragraph>
        <Paragraph>
          Sed quis enim id ipsum dictum bibendum. Aliquam blandit leo et velit
          feugiat, et rhoncus purus iaculis. Etiam nec aliquet massa, nec
          laoreet velit. Cras vestibulum, dui ut suscipit feugiat, augue elit
          dictum tellus, sed tincidunt purus justo ut erat. Sed sit amet tellus
          ullamcorper, facilisis purus a, laoreet odio. Quisque tincidunt auctor
          metus, eget lacinia orci hendrerit quis. Ut et facilisis sem, at
          volutpat libero. Integer et finibus libero. Vestibulum ac elit sed
          odio convallis facilisis. Nulla facilisi.
        </Paragraph>
        <Paragraph>
          Sed quis enim id ipsum dictum bibendum. Aliquam blandit leo et velit
          feugiat, et rhoncus purus iaculis. Etiam nec aliquet massa, nec
          laoreet velit. Cras vestibulum, dui ut suscipit feugiat, augue elit
          dictum tellus, sed tincidunt purus justo ut erat. Sed sit amet tellus
          ullamcorper, facilisis purus a, laoreet odio. Quisque tincidunt auctor
          metus, eget lacinia orci hendrerit quis. Ut et facilisis sem, at
          volutpat libero. Integer et finibus libero. Vestibulum ac elit sed
          odio convallis facilisis. Nulla facilisi.
        </Paragraph>
      </ContentContainer>
      <PopUpAds />
      <Ads />
      <Footer />
    </PageContainer>
  );
};

export default TermsOfServicePage;
