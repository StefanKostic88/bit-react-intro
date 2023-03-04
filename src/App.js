import { useState } from "react";
import styled from "styled-components";

import "./App.css";
import BlogContainer from "./components/BlogContainer";
import Modal from "./components/Modal";

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const openModalWindo = (item) => {
    setModalInfo((prev) => item);
    setIsOpened(() => true);
  };

  const closeModal = () => {
    setIsOpened(() => false);
  };

  return (
    <AppStyled>
      <BlogContainer openModal={openModalWindo} />
      {isOpened && <Modal {...modalInfo} onCloseModal={closeModal} />}
    </AppStyled>
  );
}

export default App;
