import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #888;
  font-weight: bold;
  align-self: center;
  margin-top: 20px;
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 10},
})`
  margin-top: 0px;
  padding: 0 20px;
`;
