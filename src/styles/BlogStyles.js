import styled from "styled-components";

export const BlogWraperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

export const BlogHeadingStyled = styled.h2`
  align-self: stretch;
  background-color: #ec6f75;
  color: #ffffff;
  text-align: center;
  padding: 1rem 0;
  font-size: 34px;
`;

export const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%;
`;

export const ListItemStyled = styled.li`
  background-color: #556e79;
  color: #ffffff;
  padding: 1rem;
  margin: 1rem 0;
  h3 {
    letter-spacing: 1px;
    font-size: 24px;
    line-height: 22px;
  }
  p {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1px;
  }
`;
