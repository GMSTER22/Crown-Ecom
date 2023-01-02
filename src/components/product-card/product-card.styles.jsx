
import Button from "../button/button.component";

import styled from "styled-components";

export const ProductCardButton = styled(Button)`
  min-width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    min-height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${ProductCardButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
}
`;
