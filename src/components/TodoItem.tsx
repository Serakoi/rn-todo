import {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import {todoListState} from '../recoil/atoms';
import {ITodoItem} from '../typing/interfaces';

export default function TodoItem(props: ITodoItem): JSX.Element {
  const [todos, setTodos] = useRecoilState(todoListState);

  const removeItem = useCallback(() => {
    setTodos(todos.filter(todo => todo.id !== props.id));
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={removeItem}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              padding: 5,
            }}>
            ✅
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
}
