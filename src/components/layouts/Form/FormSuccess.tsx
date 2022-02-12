interface Props {}

const FormSuccess: React.FC<Props> = () => {
  return (
    <div className="center">
      <div className="form-success">
        <svg className="checkmark" viewBox="0 0 52 52">
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <p>Message sent successfully!</p>
    </div>
  );
};

export default FormSuccess;
