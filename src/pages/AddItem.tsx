import {useState} from 'react';
import {View, Button, Text, ScrollView, TextInput} from 'react-native';
import {useRecoilState} from 'recoil';
import FooterButton from '../components/FooterButton';
import {todoListState} from '../recoil/atoms';
import {IPdpPageProps} from '../typing/interfaces';

export default function AddItem({navigation}: IPdpPageProps): JSX.Element {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [itemName, setItemName] = useState<string>('');

  // Add item to the list
  const addItem = () => {
    let latestItem = todos[todos.length - 1];
    let id = latestItem ? latestItem.id + 1 : 1;
    setTodos([{id, title: itemName}, ...todos]);

    setItemName('');

    navigation.navigate('Home');
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 20,
            }}>
            New Item
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
            }}
            multiline
            value={itemName}
            placeholder="Item Name"
            onChangeText={text => setItemName(text)}
          />
        </View>
      </ScrollView>
      <FooterButton title="Create Item" onPress={addItem} />
    </View>
  );
}
