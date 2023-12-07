import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToastNotifications = (): UseToastNotifications => {
  const notifyError = (message: string) => {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const notifySuccess = (message: string) => {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return { notifyError, notifySuccess };
};

export default useToastNotifications;
