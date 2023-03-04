import { ListItemStyled } from "../styles/BlogStyles.js";

const BlogItem = ({ title, text, id, getCardId }) => {
  return (
    <ListItemStyled
      onClick={() => {
        getCardId(id);
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </ListItemStyled>
  );
};

export default BlogItem;
