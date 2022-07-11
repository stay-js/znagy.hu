import type { AxiosResponse } from 'axios';
import { TextInput, Textarea } from '@mantine/core';
import { Mail, User } from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Error, Loading, Success } from './Status';
import validate from '../../utils/validate';

import type InputEvent from '../../interfaces/InputEvent.interface';
import type { FormProps, FormErrors } from '../../interfaces/Form.interface';

const defaultValues: FormProps = {
  name: '',
  email: '',
  msg: '',
};

const Form: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState<FormProps>(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState<Boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<Boolean | null>(null);
  const [isSuccessful, setIsSuccessful] = useState<Boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState<Boolean | null>(null);

  const handleChange = ({ key, value }: InputEvent) => setValues({ ...values, [key]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    const submitForm = async () => {
      setIsSubmitted(true);
      setIsProcessing(true);

      axios
        .post('/api/send-email/', values)
        .then((res: AxiosResponse) => {
          setIsProcessing(false);

          if (res.status === 200) setIsSuccessful(true);
          else setIsSuccessful(false);
        })
        .catch(() => {
          setIsProcessing(false);
          setIsSuccessful(false);
        });
    };

    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
      setValues(defaultValues);
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
    }
  }, [isSubmitting, errors, values]);

  return (
    <div className="md:max-w-lg max-w-[90%] mx-auto mt-5">
      <form onSubmit={handleSubmit} className="p-12 bg-white shadow-2xl sm:px-20 rounded-2xl">
        <TextInput
          className="mb-4"
          label="Name:"
          icon={<User size={18} />}
          id="name"
          placeholder="Example Peter"
          value={values.name}
          onChange={(event) => handleChange({ key: 'name', value: event.currentTarget.value })}
          error={errors.name}
        />

        <TextInput
          className="mb-4"
          label="E-mail:"
          icon={<Mail size={18} />}
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
          className="w-full text-white transition-colors duration-150 bg-green-500 rounded appearance-none cursor-pointer h-9 hover:bg-gray-600"
          type="submit"
          value="Elküldöm"
        />

        {isSubmitted && isProcessing && <Loading />}
        {isSubmitted && !isProcessing && isSuccessful && <Success />}
        {isSubmitted && !isProcessing && !isSuccessful && <Error />}
      </form>
    </div>
  );
};

export default Form;
