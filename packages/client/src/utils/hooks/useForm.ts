import { useState, useEffect } from 'react';
import axios from 'axios';
import validate from '../providers/validateInfo';

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

  const handleChange = (e: any) => {
    const { key, value } = e;
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    const submitForm = async () => {
      setIsSubmitted(true);

      axios
        .post('https://api.stayy.xyz/send-email/', values)
        .then((result) => {
          if (result.status !== 200) return setIsSuccessful(false);
          setIsSuccessful(true);
          setIsProcessing(false);
        })
        .catch((error) => {
          console.log(error);
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
