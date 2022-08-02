import { TbAlertCircle } from 'react-icons/tb';

const FormError: React.FC = () => (
  <div className="flex flex-col items-center gap-2 mt-4">
    <TbAlertCircle size={48} color="red" className="animate-bounce" />
    Somethnig went wrong, Please try again later!
  </div>
);

export default FormError;
