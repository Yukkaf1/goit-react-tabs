import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  border: 1px solid grey;
  padding: 8px;
`;

export const Button = styled.button`
  margin-top: 18px;
  padding: 8px 14px;
  font-size: 16px;
  color: white;
  background: darkblue;
  gap: 20px;
  border-radius: 10px;
  border: none;
  text-align: center;
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: teal;
  width: 400px;
  color: white;
`;
