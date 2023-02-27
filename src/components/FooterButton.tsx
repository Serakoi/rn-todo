import {Text, TouchableOpacity} from 'react-native';

interface IFooterButton {
  title: string;
  onPress: () => void;
}

export default function FooterButton(props: IFooterButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={{
        backgroundColor: '#be00ff',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 20,
          paddingHorizontal: 10,
          paddingVertical: 20,
          fontWeight: 'bold',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
