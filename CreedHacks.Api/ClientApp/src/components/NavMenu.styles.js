import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const Logo = styled.div`
  height: 40px;
  img{
    border-radius: 10px;
    height: 40px;
    }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
