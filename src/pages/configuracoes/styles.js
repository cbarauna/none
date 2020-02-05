import styled from 'styled-components/native';

export const ContainerItem = styled.TouchableOpacity`
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

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const TextInfo = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #ccd1d1;
  margin-top: 4px;
  text-align: center;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const ListConfig = styled.View`
  margin-top: 70px;
  padding: 0 20px;
`;

export const Container = styled.View`
  flex: 1;
`;
