interface Props {}

const FormLoading: React.FC<Props> = (props) => {
  return (
    <div className="center">
      <div className="form-loading">
        <span className="loader loader-circles"></span>
      </div>
      <p>Please wait, processing...</p>
    </div>
  );
};

export default FormLoading;
