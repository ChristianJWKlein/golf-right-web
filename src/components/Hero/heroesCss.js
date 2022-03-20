import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  background: #0c0c0c;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 815px;
  position: relative;
  z-index: 1;
  :before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    // background: linear-gradient(
    //     180deg,
    //     rgba(0, 0, 0, 0.2) 0%,
    //     rgba(0, 0, 0, 0) 100%
    //   ),
    //   linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex: column;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  color: #409e58;
  font-size: 45px;
  padding-top: 20rem;
  text-align: center;
  @media screen and (max-width: 950px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const HeroP = styled.p`
  margin-top: 16px;
  color: #409e58;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 950px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
