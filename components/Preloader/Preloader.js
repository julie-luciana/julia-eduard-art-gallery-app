import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Preloader = () => (
  <PreloaderContainer>
    <Loader />
  </PreloaderContainer>
);

export default Preloader;
