interface Props {
  name: string;
  email: string;
  msg: string;
}

const validateInfo = (values: Props) => {
  let errors: Record<string, string> = {};

  if (!values.name) {
    errors.name = 'Please specify a name!';
  }

  if (!values.email) {
    errors.email = 'Please specify an e-mail address!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please provide a valid e-mail address!';
  }

  if (!values.msg) {
    errors.msg = 'Please specify a message!';
  }

  return errors;
};

export default validateInfo;
