import { useState } from 'react';
import { TbUser, TbMail } from 'react-icons/tb';
import trpc from '@utils/trpc';
import { Error, Loading, Success } from './Status';

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

  const { mutate, isSuccess, isLoading, isError } = trpc.useMutation(['email.send']);

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
      autoComplete="off" // disable autocomplete until I fix the highlighting issue
      className="sm:max-w-lg max-w-[90%] flex flex-col gap-4 mx-auto mt-5 text-sm p-8 dark:bg-neutral-800 bg-white shadow-2xl sm:p-12 md:px-20 rounded-2xl"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="dark:text-neutral-300 font-medium text-sm">
          Name:
        </label>

        <div className="flex gap-2 items-center dark:bg-[#25262b] h-10 rounded border-neutral-300 dark:border-[#373A40] border pl-3 font-bold focus:outline-teal-500">
          <TbUser size={18} className="text-neutral-400" />

          <input
            className="w-full h-full text-black dark:text-white dark:bg-[#25262b] font-normal outline-none"
            type="text"
            id="name"
            placeholder="Example Peter"
            value={values.name}
            onChange={(event) => handleChange({ key: 'name', value: event.currentTarget.value })}
          />
        </div>

        {errors.name && (
          <p className="text-xs text-red-500 dark:text-red-500 mb-0">{errors.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="dark:text-neutral-300 font-medium text-sm">
          E-mail:
        </label>

        <div className="flex gap-2 items-center dark:bg-[#25262b] h-10 rounded border-neutral-300 dark:border-[#373A40] border pl-3 font-bold">
          <TbMail size={18} className="text-neutral-400" />

          <input
            className="w-full h-full text-black dark:text-white dark:bg-[#25262b] font-normal outline-none"
            type="text"
            id="email"
            placeholder="example@gmail.com"
            value={values.email}
            onChange={(event) => handleChange({ key: 'email', value: event.currentTarget.value })}
          />
        </div>

        {errors.email && (
          <p className="text-xs dark:text-red-500 text-red-500 mb-0">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="msg" className="dark:text-neutral-300 font-medium text-sm">
          Message:
        </label>

        <textarea
          className="w-full text-black dark:text-white font-normal outline-none dark:bg-[#25262b] rounded border-neutral-300 dark:border-[#373A40] border px-3 py-2 resize-none"
          id="msg"
          rows={6}
          placeholder="Please try to describe your question in as much detail as possible."
          value={values.msg}
          onChange={(event) => handleChange({ key: 'msg', value: event.currentTarget.value })}
        />

        {errors.msg && <p className="text-xs text-red-500 dark:text-red-500 mb-0">{errors.msg}</p>}
      </div>

      <input
        className="h-9 w-full text-green-500 rounded outline outline-1 hover:outline-0 outline-green-500 transition-colors duration-500 hover:text-neutral-100 dark:hover:text-slate-900 hover:bg-gradient-to-r from-teal-400 to-green-500 cursor-pointer"
        type="submit"
        value="Send"
      />

      {isLoading && <Loading />}
      {isSuccess && <Success />}
      {isError && <Error />}
    </form>
  );
};

export default Form;
