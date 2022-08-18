import Lottie from 'react-lottie';
import successJson from './success.json';

const FormSuccess: React.FC = () => (
  <div className="mt-4 flex flex-col items-center gap-2">
    <Lottie
      options={{ loop: false, autoplay: true, animationData: successJson }}
      height={80}
      width={80}
    />
    Message sent successfully!
  </div>
);

export default FormSuccess;
