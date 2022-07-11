import type { AxiosResponse } from 'axios';
import { TextInput, Textarea } from '@mantine/core';
import { Mail, User } from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import { Error, Loading, Success } from './Status';
import style from './Form.module.scss';
import axios from 'axios';
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
    <div className={style['form-container']}>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextInput
          className={style.input}
          label="Name:"
          icon={<User size={18} />}
          id="name"
          placeholder="Example Peter"
          value={values.name}
          onChange={(event) => handleChange({ key: 'name', value: event.currentTarget.value })}
          error={errors.name}
        />

        <TextInput
          className={style.input}
          label="E-mail:"
          icon={<Mail size={18} />}
          id="email"
          placeholder="example@gmail.com"
          value={values.email}
          onChange={(event) => handleChange({ key: 'email', value: event.currentTarget.value })}
          error={errors.email}
        />

        <Textarea
          className={style.input}
          label="Message:"
          placeholder="Please try to describe your question in as much detail as possible."
          minRows={5}
          value={values.msg}
          onChange={(event) => handleChange({ key: 'msg', value: event.currentTarget.value })}
          error={errors.msg}
        />

        <input type="submit" value="Submit" className={style.button} />

        {isSubmitted && isProcessing && <Loading />}
        {isSubmitted && !isProcessing && isSuccessful && <Success />}
        {isSubmitted && !isProcessing && !isSuccessful && <Error />}
      </form>
    </div>
  );
};

export default Form;
