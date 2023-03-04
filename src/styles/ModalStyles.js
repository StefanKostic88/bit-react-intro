import styled from "styled-components";

export const OverlayStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  with: 100%;
  height: 100%;
  z-index: 10;
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 15;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 1rem;
  min-height: 20rem;
  min-width: 15rem;
  max-width: 15rem;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 32px;
  }
  p {
    color: #fff;
  }
  button {
    background-color: transparent;
    color: #fff;
    border: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    margin-top: auto;
  }
`;
