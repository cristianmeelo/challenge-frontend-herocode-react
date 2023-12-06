import { atom } from 'recoil';

const sidebarState = atom<boolean>({
  key: 'SidebarState',
  default: true,
});

export default sidebarState;
