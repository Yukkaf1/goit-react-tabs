import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;

  padding: 8px;
`;

export const CounterValue = styled.span`
  paddig: 8px;
  font-size: 20px;

  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
  background-color: ${p => {
    return p.active ? p.theme.colors.accent : p.theme.colors.white;
  }};
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
