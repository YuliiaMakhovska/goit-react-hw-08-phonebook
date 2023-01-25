import styled from '@emotion/styled';

export const FormStyled = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 5px;
  border: 1px solid #030e1845;
  box-shadow: 1px 1px 3px 1px;
  background-color: #ffdee9;
  background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%);
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
  height: 25px;
  width: 220px;
  border: 1px solid #030e1845;
  border-radius: 3px;
  box-shadow: 0 0 3px 1px;
`;

export const RegisterBtn = styled.button`
  margin-bottom: 20px;
  color: #fff;
  padding: 10px 10px;
  border-radius: 100px;
  background-color: #4c43cd;
  background-image: radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%
    ),
    radial-gradient(
      66% 87% at 26% 20%,
      rgba(255, 255, 255, 0.41) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 2px 19px 31px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0.15, 0.15);
  }
`;
