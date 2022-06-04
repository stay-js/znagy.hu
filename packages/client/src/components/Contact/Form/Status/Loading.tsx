import style from './Status.module.scss';

interface Props {}

const FormLoading: React.FC<Props> = (props) => {
  return (
    <div className='center'>
      <div className={style.loading}>
        <span className={style.loader} />
      </div>
      <p className='text-center'>Please wait, processing...</p>
    </div>
  );
};

export default FormLoading;
