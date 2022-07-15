import { Loader } from '@mantine/core';

const FormLoading: React.FC = () => (
  <div className="flex flex-col items-center gap-2 mt-4 text-black">
    <Loader className="mx-auto" />
    Please wait, processing...
  </div>
);

export default FormLoading;
