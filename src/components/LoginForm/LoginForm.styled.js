import styled from '@emotion/styled';

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid #e0b9b9;
  border-radius: 5px;
  background: #ffefef;
  box-shadow: 1px 1px 3px 1px;
`;

export const LogInLabel = styled.label`
  padding: 15px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const LoginField = styled.input`
  margin-top: 10px;
  height: 25px;
  width: 300px;
  border: 3px solid #4c43cd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 3px 1px;
`;

export const LogInFormBtn = styled.button`
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
