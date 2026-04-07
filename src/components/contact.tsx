'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import sendEmail from '~/app/contact/actions';
import { FormInput, FormTextarea } from '~/components/form';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { H2 } from '~/components/ui/h2';
import { Spinner } from '~/components/ui/spinner';
import { env } from '~/env.js';

const formSchema = z.object({
  email: z.email({ error: 'Invalid email address!' }),
  message: z.string().min(1, { error: 'Message is required!' }),
  name: z.string().min(1, { error: 'Name is required!' }),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues = {
  email: '',
  message: '',
  name: '',
} satisfies FormSchema;

export function Contact() {
  const captchaRef = useRef<ReCAPTCHA>(null);

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormSchema>({ defaultValues, resolver: zodResolver(formSchema) });

  const handleFormSubmit = useCallback(
    (e: React.SubmitEvent<HTMLFormElement>) => {
      async function onSubmit(data: FormSchema) {
        const token = await captchaRef.current?.executeAsync().catch(() => null);
        captchaRef.current?.reset();

        if (!token) return;

        try {
          await sendEmail({ ...data, token });

          toast.success('Message sent successfully! I will get back to you as soon as possible.');
          reset(defaultValues);
        } catch {
          toast.error('Something went wrong. Please try again later.');
        }
      }

      void handleSubmit(onSubmit)(e);
    },
    [handleSubmit, reset],
  );

  return (
    <section className="dark:bg-muted/30 bg-input/30 scroll-m-8 py-24" id="contact">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <H2>Get In Touch</H2>
          <p className="text-muted-foreground leading-relaxed">
            Got something you would like to say? Or have a question? Feel free to send me a message
            using the form below. I&apos;m just a few clicks away...
          </p>
        </div>

        <Card>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <FormInput control={control} label="Name" name="name" placeholder="John Doe" />

              <FormInput
                control={control}
                label="Email"
                name="email"
                placeholder="example@domain.com"
              />

              <FormTextarea
                className="min-h-30"
                control={control}
                label="Message"
                name="message"
                placeholder="Please try to describe your message in detail..."
              />

              <ReCAPTCHA
                ref={captchaRef}
                sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
              />

              <Button className="sm:w-fit sm:self-end" disabled={isSubmitting} type="submit">
                {isSubmitting && <Spinner />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
