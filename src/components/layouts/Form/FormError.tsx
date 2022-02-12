interface Props {}

const FormError: React.FC<Props> = () => {
  return (
    <div className="center">
      <p>
        <i className="fas fa-times-circle" />
        Somethnig went wrong, pleas try again later!
      </p>
    </div>
  );
};

export default FormError;
