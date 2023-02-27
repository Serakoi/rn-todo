import {atom} from 'recoil';
import {ITodoItem} from '../typing/interfaces';

export const todoListState = atom({
  key: 'todoListState',
  default: [] as ITodoItem[],
});
