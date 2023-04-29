import { useState, useRef } from 'react';
import Link from 'next/link';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbUser, TbMail } from 'react-icons/tb';
import { trpc } from '@utils/trpc';
import { Popup } from './Popup';
import { env } from 'src/env.mjs';

export const FormSchema = z.object({
  name: z.string().min(1, 'Please specify a name!'),
  email: z.string().email('Please provide a valid e-mail address!'),
  message: z.string().min(1, 'Please specify a message!'),
  token: z.nullable(z.string().optional()),
});

type Props = z.infer<typeof FormSchema>;

const defaultValues: Props = {
  name: '',
  email: '',
  message: '',
};

export const Form: React.FC = () => {
  const [errors, setErrors] = useState<Partial<Props>>({});
  const [values, setValues] = useState<Props>(defaultValues);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const { mutate, isLoading, isSuccess } = trpc.email.send.useMutation({
    onSettled: () => setIsPopupOpen(true),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const results = FormSchema.safeParse(values);

    if (!results.success) {
      const errors = results.error.flatten().fieldErrors;

      setErrors({
        name: errors.name?.join(', '),
        email: errors.email?.join(', '),
        message: errors.message?.join(', '),
      });

      return;
    }

    const token = await captchaRef.current?.executeAsync();
    captchaRef.current?.reset();

    setErrors({});
    setValues(defaultValues);
    mutate({ ...values, token });
  };

  return (
    <form
      onSubmit={(e) => void handleSubmit(e)}
      className="flex w-full max-w-lg flex-col gap-4 rounded-2xl bg-white p-8 text-sm shadow-2xl dark:bg-neutral-800 sm:p-12 md:px-20"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="w-fit font-medium dark:text-neutral-300">
          Name:
        </label>

        <div className="relative flex items-center">
          <TbUser size={18} className="pointer-events-none absolute left-3 text-neutral-400" />

          <input
            className="h-10 w-full rounded border border-neutral-300 pl-10 pr-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
            type="text"
            id="name"
            placeholder="Example Peter"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>

        {errors.name && (
          <span className="text-xs text-red-500 dark:text-red-500">{errors.name}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="w-fit font-medium dark:text-neutral-300">
          E-mail:
        </label>

        <div className="relative flex items-center">
          <TbMail size={18} className="pointer-events-none absolute left-3 text-neutral-400" />

          <input
            className="h-10 w-full rounded border border-neutral-300 pl-10 pr-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
            type="text"
            id="email"
            placeholder="example@gmail.com"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>

        {errors.email && (
          <span className="text-xs text-red-500 dark:text-red-500">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="w-fit font-medium dark:text-neutral-300">
          Message:
        </label>

        <textarea
          className="w-full resize-none rounded border border-neutral-300 px-3 py-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
          id="message"
          rows={6}
          placeholder="Please try to describe your question in as much detail as possible."
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />

        {errors.message && (
          <span className="text-xs text-red-500 dark:text-red-500">{errors.message}</span>
        )}
      </div>

      <div>
        This site is protected by reCAPTCHA and the Google{' '}
        <Link
          className="text-[#1a73e8]"
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link
          className="text-[#1a73e8]"
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </Link>{' '}
        apply.
      </div>

      <button
        type="submit"
        className="group flex w-full items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium text-gray-900 hover:from-green-400 hover:to-blue-600 hover:text-white dark:text-white"
      >
        <span className="flex w-full items-center justify-center rounded-md bg-white px-6 py-3 transition-all group-hover:bg-opacity-0 dark:bg-neutral-800">
          Send
        </span>
      </button>

      {isLoading && (
        <div className="flex flex-col items-center gap-2 ">
          <svg className="h-8 w-8 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="stroke-green-500 opacity-25"
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
            />
            <path
              className="fill-green-500"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Please wait, processing...
        </div>
      )}

      <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} isSuccess={isSuccess} />

      <ReCAPTCHA ref={captchaRef} sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" />
    </form>
  );
};
