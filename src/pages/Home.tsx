import {FlatList, View, Button, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import FooterButton from '../components/FooterButton';
import TodoItem from '../components/TodoItem';
import {todoListState} from '../recoil/atoms';
import {IPdpPageProps} from '../typing/interfaces';

export default function Home({navigation}: IPdpPageProps): JSX.Element {
  const [todos] = useRecoilState(todoListState);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        style={{flex: 1}}
        data={todos}
        renderItem={({item}) => (
          <TodoItem id={item.id} title={item.title} key={item.id} />
        )}
        ListEmptyComponent={() => (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 20,
            }}>
            No items
          </Text>
        )}
      />
      <FooterButton
        title="Add Item"
        onPress={() => {
          navigation.navigate('AddItem');
        }}
      />
    </View>
  );
}
