// use-toast.jsx
import { toast as reactToast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function useToast() {
  const toast = ({ title, description }) => {
    reactToast(`${title}: ${description}`);
  };

  return { toast };
}
