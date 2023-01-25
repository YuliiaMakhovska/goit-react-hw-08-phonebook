import styled from '@emotion/styled';

export const FormStyled = styled.form`
  width: 400px;
  margin: 20px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #030e1845;
  box-shadow: 1px 1px 3px 1px;
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
`;
export const Lable = styled.label`
  padding: 15px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 16px;
`;

export const FieldStyled = styled.input`
  margin-top: 10px;
  padding: 10px;
  height: 25px;
  width: 250px;
  border: 1px solid #030e1845;
  border-radius: 3px;
  box-shadow: 0 0 3px 1px;
`;

export const RegisterBtn = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 36px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  font-size: 18px;
  &:hover,
  &:focus {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }
`;
