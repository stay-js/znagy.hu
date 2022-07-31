import Lottie from 'react-lottie';
import successJson from './success.json';

const FormSuccess: React.FC = () => (
  <div className="flex flex-col items-center gap-2 mt-4">
    <Lottie
      options={{ loop: false, autoplay: true, animationData: successJson }}
      height={80}
      width={80}
    />
    Message sent successfully!
  </div>
);

export default FormSuccess;
