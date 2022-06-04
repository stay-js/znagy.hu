interface Props {}

const FormError: React.FC<Props> = (props) => {
  return (
    <div className='center'>
      <p className='text-center'>
        <i style={{ marginRight: '0.5rem' }} className='fas fa-times-circle' />
        Somethnig went wrong, pleas try again later!
      </p>
    </div>
  );
};

export default FormError;
