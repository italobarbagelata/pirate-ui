import { Action } from 'redux';

interface SidebarState {
  isSidebarVisible: boolean;
}

const initialState: SidebarState = {
  isSidebarVisible: false,
};

interface ShowSidebarAction extends Action {
  type: 'SHOW_SIDEBAR';
}

interface HideSidebarAction extends Action {
  type: 'HIDE_SIDEBAR';
}

type SidebarActions = ShowSidebarAction | HideSidebarAction;

function sidebarReducer(state = initialState, action: SidebarActions): SidebarState {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return { ...state, isSidebarVisible: true };
    case 'HIDE_SIDEBAR':
      return { ...state, isSidebarVisible: false };
    default:
      return state;
  }
}

export default sidebarReducer;