export interface FormProps {
  name: string;
  email: string;
  msg: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  msg?: string;
}
