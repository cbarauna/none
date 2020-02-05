import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background-color: #f4f6f6;
  border: 0.3px;
  border-color: #566573;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Info = styled.View`
  margin-left: 15px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
