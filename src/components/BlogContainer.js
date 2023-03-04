import BlogItem from "./BlogItem";
import {
  BlogWraperStyled,
  BlogHeadingStyled,
  ListStyled,
} from "../styles/BlogStyles.js";

import { dataArr } from "../data/blogData.js";

const BlogContainer = ({ openModal }) => {
  const getId = (id) => {
    const card = dataArr.find((item) => item.id === id);
    openModal(card);
  };
  return (
    <BlogWraperStyled>
      <BlogHeadingStyled>My React Blog</BlogHeadingStyled>
      <ListStyled>
        {dataArr.map((item, index) => (
          <BlogItem key={index} {...item} getCardId={getId} />
        ))}
      </ListStyled>
    </BlogWraperStyled>
  );
};

export default BlogContainer;
