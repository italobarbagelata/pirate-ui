import sidebarReducer from '@/store/menu/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;