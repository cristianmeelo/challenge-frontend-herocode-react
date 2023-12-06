
import { RecoilRoot } from 'recoil';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Modal from './components/Modal/Modal';
import DynamicContent from './components/DynamicContent/DynamicContent';

export default function App() {

  return (
    <RecoilRoot>
      <Header  />
      <Sidebar />
      <DynamicContent  />
      <Modal />
    </RecoilRoot>
  );
}
