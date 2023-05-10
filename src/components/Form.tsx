'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useState, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, Transition } from '@headlessui/react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbUser, TbMail } from 'react-icons/tb';
import { Button } from '@components/Button';
import { env } from 'src/env.mjs';

export const formSchema = z.object({
  name: z.string().min(1, 'Please specify a name!'),
  email: z.string().email('Please provide a valid e-mail address!'),
  message: z.string().min(1, 'Please specify a message!'),
});

type FormSchema = z.infer<typeof formSchema>;

type Data = FormSchema & {
  token: string;
};

const defaultValues: FormSchema = {
  name: '',
  email: '',
  message: '',
};

export const Form: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const captchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { mutate, isLoading } = useMutation(
    async (data: Data) => {
      return fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      });
    },
    {
      onSuccess: () => setIsSuccess(true),
      onError: () => setIsSuccess(false),
      onSettled: () => setIsPopupOpen(true),
    },
  );

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    const token = await captchaRef.current?.executeAsync().catch(() => null);
    captchaRef.current?.reset();

    if (!token) {
      setIsSuccess(false);
      setIsPopupOpen(true);
      return;
    }

    mutate({ ...data, token });
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset(defaultValues);
  }, [isSubmitSuccessful, reset]);

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
                        . If you sent more then 3 messages per minute and you are being rate
                        limited. Please wait a minute and try again.
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
        onSubmit={handleSubmit(onSubmit)}
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
              {...register('name')}
            />
          </div>

          {errors.name && (
            <span className="text-xs text-red-500 dark:text-red-500">{errors.name.message}</span>
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
              {...register('email')}
            />
          </div>

          {errors.email && (
            <span className="text-xs text-red-500 dark:text-red-500">{errors.email.message}</span>
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
            {...register('message')}
          />

          {errors.message && (
            <span className="text-xs text-red-500 dark:text-red-500">{errors.message.message}</span>
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
          {isLoading && (
            <svg className="h-5 w-5 animate-spin fill-none" viewBox="0 0 24 24">
              <circle
                className="stroke-neutral-800 stroke-[4] opacity-25 group-hover:stroke-neutral-200 dark:stroke-neutral-200"
                cx="12"
                cy="12"
                r="10"
              />
              <path
                className="fill-neutral-800 group-hover:fill-neutral-200 dark:fill-neutral-200"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {isLoading ? 'Sending...' : 'Send'}
        </Button>

        <ReCAPTCHA ref={captchaRef} sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" />
      </form>
    </>
  );
};
