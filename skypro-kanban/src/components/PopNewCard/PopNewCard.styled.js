import styled from "styled-components";
import { hover01 } from "../../styles/Common.styled";
import { topicStyles } from "../../lib/topic";
import { TopicText } from "../Card/Card.styled";

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  //display: block;
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  input[type="radio"] {
    display: none;
  }
`;

export const CategoriesTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};
`;

export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  ${hover01}
`;

export const Orange = styled.p`
  background-color: #ffe4c2;
  color: #ff6d00;
`;
export const Green = styled.p`
  background-color: #b4fdd1;
  color: #06b16e;
`;
export const Purple = styled.p`
  background-color: #e9d4ff;
  color: #9a48f1;
`;
