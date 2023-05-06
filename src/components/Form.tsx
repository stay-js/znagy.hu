'use client';

import { useState, useRef, Fragment } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { Dialog, Transition } from '@headlessui/react';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbUser, TbMail } from 'react-icons/tb';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Button } from '@components/Button';
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

  const { mutate, isSuccess, isLoading } = useMutation(
    async (data: Props) => {
      return fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      });
    },
    {
      onSettled: () => setIsPopupOpen(true),
    },
  );

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
    <>
      <Transition appear show={isPopupOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsPopupOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-50" />
          </Transition.Child>

          <div className="content fixed inset-0 grid place-items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900">
                <div className="flex flex-col gap-2">
                  <Dialog.Title className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                    {isSuccess ? ' Message Sent Successfully' : 'Something went wrong'}
                  </Dialog.Title>

                  <Dialog.Description className="mb-0 text-sm text-neutral-500 dark:text-neutral-200">
                    {isSuccess ? (
                      'Thank you for sending me a message. I will get back to you as soon as possible.'
                    ) : (
                      <>
                        Something went wrong, please try again later! If the problem persists,
                        please contact me at{' '}
                        <Link
                          className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent"
                          href="mailto:znagy@znagy.hu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          znagy@znagy.hu
                        </Link>
                        .
                      </>
                    )}
                  </Dialog.Description>
                </div>

                <Button variant="small" onClick={() => setIsPopupOpen(false)}>
                  Got it!
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

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

        <Button type="submit" disabled={isLoading} variant="wide">
          {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
          {isLoading ? 'Sending...' : 'Send'}
        </Button>

        <ReCAPTCHA ref={captchaRef} sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" />
      </form>
    </>
  );
};
