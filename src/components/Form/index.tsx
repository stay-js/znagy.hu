import { useState } from 'react';
import { TbUser, TbMail } from 'react-icons/tb';
import trpc from '@utils/trpc';
import Loading from './Loading';
import Popup from './Popup';

interface Props {
  name: string;
  email: string;
  msg: string;
}

interface Errors {
  name?: string;
  email?: string;
  msg?: string;
}

interface InputEvent {
  key: string;
  value: string;
}

const defaultValues: Props = {
  name: '',
  email: '',
  msg: '',
};

const validate = (values: Props): Errors => {
  const errors: Errors = {};

  if (!values.name) errors.name = 'Please specify a name!';
  if (!values.msg) errors.msg = 'Please specify a message!';

  if (!values.email) {
    errors.email = 'Please specify an e-mail address!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please provide a valid e-mail address!';
  }

  return errors;
};

const Form: React.FC = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState<Props>(defaultValues);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const { mutate, isLoading, isSuccess } = trpc.useMutation(['email.send'], {
    onSettled: () => setIsPopupOpen(true),
  });

  const handleChange = ({ key, value }: InputEvent) => setValues({ ...values, [key]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      mutate(values);
      setValues(defaultValues);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-lg flex-col gap-4 rounded-2xl bg-white p-8 text-sm shadow-2xl dark:bg-neutral-800 sm:p-12 md:px-20"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="w-fit font-medium dark:text-neutral-300">
          Name:
        </label>

        <div className="relative flex items-center">
          <TbUser size={18} className="pointer-events-none absolute left-3 text-neutral-400" />

          <input
            className="h-10 w-full rounded border border-neutral-300 pl-10 pr-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
            type="text"
            id="name"
            placeholder="Example Peter"
            value={values.name}
            onChange={(event) => handleChange({ key: 'name', value: event.currentTarget.value })}
          />
        </div>

        {errors.name && (
          <span className="text-xs text-red-500 dark:text-red-500">{errors.name}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="w-fit font-medium dark:text-neutral-300">
          E-mail:
        </label>

        <div className="relative flex items-center">
          <TbMail size={18} className="pointer-events-none absolute left-3 text-neutral-400" />

          <input
            className="h-10 w-full rounded border border-neutral-300 pl-10 pr-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
            type="text"
            id="email"
            placeholder="example@gmail.com"
            value={values.email}
            onChange={(event) => handleChange({ key: 'email', value: event.currentTarget.value })}
          />
        </div>

        {errors.email && (
          <span className="text-xs text-red-500 dark:text-red-500">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="msg" className="w-fit font-medium dark:text-neutral-300">
          Message:
        </label>

        <textarea
          className="w-full resize-none rounded border border-neutral-300 px-3 py-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
          id="msg"
          rows={6}
          placeholder="Please try to describe your question in as much detail as possible."
          value={values.msg}
          onChange={(event) => handleChange({ key: 'msg', value: event.currentTarget.value })}
        />

        {errors.msg && <span className="text-xs text-red-500 dark:text-red-500">{errors.msg}</span>}
      </div>

      <button
        type="submit"
        className="group flex w-full items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-[2px] font-medium text-gray-900 hover:from-green-400 hover:to-blue-600 hover:text-white dark:text-white"
      >
        <span className="flex w-full items-center justify-center rounded-md bg-white px-6 py-3 transition-all group-hover:bg-opacity-0 dark:bg-neutral-800">
          Send
        </span>
      </button>

      {isLoading && <Loading />}

      <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} isSuccess={isSuccess} />
    </form>
  );
};

export default Form;
