import { useRecoilState } from 'recoil';
import initialTaskState from '@/context/atoms/initialTaskState';

const useHandleColumns = (): UseHandleColumns => {
  const [columns, setColumns] = useRecoilState<Column[]>(initialTaskState);

  return { columns, setColumns };
};

export default useHandleColumns;
