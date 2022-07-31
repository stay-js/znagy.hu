import type { FormProps as Props, FormErrors as Errors } from '../../interfaces/Form.interface';
import type InputEvent from '../../interfaces/InputEvent.interface';
import { TextInput, Textarea } from '@mantine/core';
import { useState } from 'react';
import { TbUser, TbMail } from 'react-icons/tb';
import trpc from '../../utils/trpc';
import validate from '../../utils/validate';
import { Error, Loading, Success } from './Status';

const defaultValues: Props = {
  name: '',
  email: '',
  msg: '',
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
      className="md:max-w-lg max-w-[90%] mx-auto mt-5 text-sm p-8 dark:bg-neutral-800 bg-white shadow-2xl sm:p-12 md:px-20 rounded-2xl"
    >
      <TextInput
        className="mb-4"
        label="Name:"
        icon={<TbUser size={18} />}
        id="name"
        placeholder="Example Peter"
        value={values.name}
        onChange={(event) => handleChange({ key: 'name', value: event.currentTarget.value })}
        error={errors.name}
      />

      <TextInput
        className="mb-4"
        label="E-mail:"
        icon={<TbMail size={18} />}
        id="email"
        placeholder="example@gmail.com"
        value={values.email}
        onChange={(event) => handleChange({ key: 'email', value: event.currentTarget.value })}
        error={errors.email}
      />

      <Textarea
        className="mb-4"
        label="Message:"
        placeholder="Please try to describe your question in as much detail as possible."
        minRows={5}
        value={values.msg}
        onChange={(event) => handleChange({ key: 'msg', value: event.currentTarget.value })}
        error={errors.msg}
      />

      <input
        className="h-9 w-full text-green-500 rounded outline outline-1 hover:outline-0 outline-green-500 transition-colors duration-500 hover:text-neutral-100 dark:hover:text-slate-900 hover:bg-gradient-to-r from-teal-400 to-green-500 cursor-pointer"
        type="submit"
        value="Elküldöm"
      />

      {isLoading && <Loading />}
      {isSuccess && <Success />}
      {isError && <Error />}
    </form>
  );
};

export default Form;
