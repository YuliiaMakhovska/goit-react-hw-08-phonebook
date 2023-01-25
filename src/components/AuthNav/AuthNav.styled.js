import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  padding: 10px 15px;
  min-width: 100px;
  border-radius: 2px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  font-weight: 700;
  &.active {
    color: blue;
    background-color: #f8d800;
  }
`;

export const AuthList = styled.div`
  display: flex;
  gap: 15px;
`;
