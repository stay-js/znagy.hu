import { TbAlertCircle } from 'react-icons/tb';

const FormError: React.FC = () => (
  <div className="mt-4 flex flex-col items-center gap-2">
    <TbAlertCircle size={48} color="red" className="animate-bounce" />
    Somethnig went wrong, Please try again later!
  </div>
);

export default FormError;
