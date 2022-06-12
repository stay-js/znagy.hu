import { useState, useEffect } from 'react';
import axios from 'axios';
import validate from '../providers/validate';

interface InputEvent {
  key: string;
  value: string;
}

const defaultValues = {
  name: '',
  email: '',
  msg: '',
};

const useForm = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(Boolean);
  const [isProcessing, setIsProcessing] = useState(true);

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
