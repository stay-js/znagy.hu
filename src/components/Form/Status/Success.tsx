import style from './Status.module.scss';

const FormSuccess: React.FC = () => (
  <div>
    <div className={style.success}>
      <svg className={style.checkmark} viewBox="0 0 52 52">
        <circle className={style.circle} cx="26" cy="26" r="25" fill="none" />
        <path className={style.check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </div>
    <p className="text-center">Message sent successfully!</p>
  </div>
);

export default FormSuccess;
