import { css } from "styled-components";
import styled from "styled-components";

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Loading = styled.p`
  width: 100%;
  height: 100px;
  background-color: #eaeef6;
  margin: 0 auto;
  padding: 0 30px;
`;
