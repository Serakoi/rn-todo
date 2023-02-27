import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface ITodoItem {
  id: number;
  title: string;
}

export interface IPdpPageProps {
  navigation: NativeStackNavigationProp<any>;
}
