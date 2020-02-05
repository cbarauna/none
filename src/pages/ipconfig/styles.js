import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 55px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  align-self: center;
  margin-top: 20px;
`;

export const TextLabel = styled.Text`
  padding: 5px;
  font-size: 16px;
  color: #fff;
  align-content: center;
  align-items: center;
  text-align: center;
`;

export const TextLabelBold = styled.Text`
  padding: 5px;
  font-size: 18px;
  color: #fff;
  align-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
`;
export const Save = styled.TouchableOpacity`
  background-color: #4afa96;
  padding: 10px;
  width: 100px;
  border: 0.3px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;
export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;
export const Cancel = styled.TouchableOpacity`
  background-color: #f66c39;
  padding: 10px;
  width: 100px;

  border: 0.3px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;
export const ViewButton = styled.View`
  padding: 10px;
  background-color: #f4f6f6;
  border: 0.3px;
  border-color: #566573;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-top: 8px;
  border-radius: 10px;
`;

export const Button = styled.View`
  padding: 10px;
  top: 50px;
  border: 1px;
  border-color: #566573;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  border-radius: 10px;
`;
export const Input = styled.TextInput`
  font-size: 16px;
  font-weight: bold;
  width: 200px;
`;
