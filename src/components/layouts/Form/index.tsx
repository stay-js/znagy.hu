import useForm from '../../../utils/hooks/useForm';
import FormLoading from './FormLoading';
import FormSuccess from './FormSuccess';
import FormError from './FormError';

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
    <form onSubmit={handleSubmit} className="center">
      <div className="input">
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div className="input">
        <label>E-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="input">
        <label>Message:</label>
        <textarea
          id="msg"
          name="msg"
          value={values.msg}
          onChange={handleChange}
        />
        {errors.msg && <p>{errors.msg}</p>}
      </div>

      <input type="submit" value="Submit" className="button" />

      {isSubmitted &&
        (isProcessing ? (
          <FormLoading />
        ) : isSuccessful ? (
          <FormSuccess />
        ) : (
          <FormError />
        ))}
    </form>
  );
};

export default Form;
