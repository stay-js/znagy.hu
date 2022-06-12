import { useState, useEffect } from 'react';
import axios from 'axios';
import validate from '../providers/validate';

import InputEvent from '../../interfaces/InputEvent.interface';
import { FormProps, FormErrors } from '../../interfaces/Form.interface';

const defaultValues: FormProps = {
  name: '',
  email: '',
  msg: '',
};

const useForm = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState<FormProps>(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState<Boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<Boolean | null>(null);
  const [isSuccessful, setIsSuccessful] = useState<Boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState<Boolean | null>(null);

  const handleChange = ({ key, value }: InputEvent) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

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
        .post('https://api.stayy.xyz/send-email/', values)
        .then((res) => {
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

  return {
    handleChange,
    handleSubmit,
    errors,
    values,
    isSubmitted,
    isProcessing,
    isSuccessful,
  };
};

export default useForm;
