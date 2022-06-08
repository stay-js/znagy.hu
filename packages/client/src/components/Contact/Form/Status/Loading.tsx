import style from './Status.module.scss';

interface Props {}

const FormLoading: React.FC<Props> = (props) => (
  <div>
    <div className={style.loading}>
      <span className={style.loader} />
    </div>
    <p style={{ textAlign: 'center' }}>Please wait, processing...</p>
  </div>
);

export default FormLoading;
