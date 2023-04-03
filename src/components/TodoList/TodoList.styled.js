import styled from 'styled-components';

export const TodoSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
`;

export const TodoTitle = styled.h2`
  display: flex;
  text-align: center;
  margin-bottom: 15px;
  font-size: 32px;
  margin: 20px;
`;

export const TodoCheck = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TodoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TodoText = styled.p`
  margin-top: 5px;
  font-size: 24px;
`;

export const TodoButton = styled.button`
  margin-left: 20px;
  padding: 8px 14px;
  font-size: 16px;
  color: white;
  background: darkblue;
  gap: 20px;
  border-radius: 10px;
  border: none;
  text-align: center;
`;
