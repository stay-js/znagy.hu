import style from './Status.module.scss';

const FormLoading: React.FC = () => (
  <div>
    <div className={style.loading}>
      <span className={style.loader} />
    </div>
    <p className="text-center">Please wait, processing...</p>
  </div>
);

export default FormLoading;
