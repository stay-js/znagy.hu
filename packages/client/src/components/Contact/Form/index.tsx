import { Checkbox, TextInput, Textarea, NativeSelect } from '@mantine/core';
import { Mail, Phone, ClipboardList, User } from 'tabler-icons-react';
import useForm from '../../../utils/hooks/useForm';
import { Error, Loading, Success } from './Status';
import style from './Form.module.scss';

interface Props {}

const Form: React.FC<Props> = (props) => {
  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    isSubmitted,
    isProcessing,
    isSuccessful,
  }: Record<string, any> = useForm();

  return (
    <div className={style['form-container']}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.input}>
          <TextInput
            label='Name:'
            icon={<User size={18} />}
            id='name'
            placeholder='Example Peter'
            value={values.name}
            onChange={(event) =>
              handleChange({ key: 'name', value: event.currentTarget.value })
            }
            error={errors.name}
          />
        </div>

        <div className={style.input}>
          <TextInput
            label='E-mail:'
            icon={<Mail size={18} />}
            id='email'
            placeholder='example@gmail.com'
            value={values.email}
            onChange={(event) =>
              handleChange({ key: 'email', value: event.currentTarget.value })
            }
            error={errors.email}
          />
        </div>

        <div className={style.input}>
          <Textarea
            label='Message:'
            placeholder='Please try to describe your question in as much detail as possible.'
            minRows={5}
            value={values.msg}
            onChange={(event) =>
              handleChange({ key: 'msg', value: event.currentTarget.value })
            }
            error={errors.msg}
          />
        </div>

        <input type='submit' value='Submit' className={style.button} />

        {isSubmitted &&
          (isProcessing ? <Loading /> : isSuccessful ? <Success /> : <Error />)}
      </form>
    </div>
  );
};

export default Form;
