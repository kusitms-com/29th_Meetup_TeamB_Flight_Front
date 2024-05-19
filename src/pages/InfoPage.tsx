import React from "react";
import styled from "styled-components";
import filghtImage_2 from "../assets/images/img_flight_info(2).png";
import overview from "../assets/images/image_info_overview.png";
import banner from "../assets/images/image_info_banner.png";
import Footer from "../components/common/Footer";

const InfoPage = () => {
  return (
    <StyledContainer className="page">
      <div>service Info</div>
      <MainContainer>
        <div className="subtext">작년에는 뭘 했더라? 올해는?</div>
        <div className="maintext">나를 알아가는 경험 정리의 시작,</div>
        <img src={filghtImage_2} alt="frame" className="image" />
      </MainContainer>
      <div>
        <img src={overview} alt="overview" className="overview" />
      </div>
      <Footer />
    </StyledContainer>
  );
};

export default InfoPage;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  .overview{
    width: 100vw;
    height: auto;
  }
`;

const MainContainer = styled.div`
    text-align: center;
    .subtext{
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        opacity: 0.4;
        color: ${(props) => props.theme.colors.neutral700};
    }
    .maintext{
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 800;
        background: linear-gradient(89deg, #6167FF -10.58%, #7D82FF 47.56%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .image{
        width: 80rem;
        margin-top: 7rem;
    }
`;
