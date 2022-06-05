interface Props {}

const FormError: React.FC<Props> = (props) => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        <i style={{ marginRight: '0.5rem' }} className='fas fa-times-circle' />
        Somethnig went wrong, Please try again later!
      </p>
    </div>
  );
};

export default FormError;
