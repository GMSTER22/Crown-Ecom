
import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, BackgroundImage, Body } from "./directory-item.styles";

const DirectoryItem  = ({category}) => {

  const { imageUrl, title, route } = category;

  const navigate = useNavigate(route);

  return (
      <DirectoryItemContainer onClick={() => navigate(route)}>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
  )
}

export default DirectoryItem;