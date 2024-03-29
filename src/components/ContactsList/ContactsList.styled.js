import styled from '@emotion/styled';

export const ListDelBtn = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
      width: 100px;
  height: 22px;
      font-size: 16px;
    margin: 5px;
    margin-left: 20px;
    color: #fff;
    background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
    border: 1px solid #030e1845;
    border-radius: 3px;
    &:hover {
      box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
        0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
        0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const List = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
