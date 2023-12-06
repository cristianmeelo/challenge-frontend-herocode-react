import { atom } from "recoil";

const selectedSidebarOptionState = atom<string|null>({
    key: 'selectedSidebarOptionState', 
    default: null, 
  });

  export default selectedSidebarOptionState

