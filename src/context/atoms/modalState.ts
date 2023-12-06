import { atom } from "recoil";

const modalState = atom<boolean>({
    key: 'modalState', 
    default: true, 
  });

  export default modalState