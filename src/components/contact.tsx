'use client';

import { useEffect, useRef } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'sonner';
import sendEmail from '~/app/contact/actions';
import { Field, FieldError, FieldGroup, FieldLabel } from '~/components/ui/field';
import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { H2 } from '~/components/ui/h2';
import { env } from '~/env.js';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  email: z.email('Invalid email address!'),
  message: z.string().min(1, 'Message is required!'),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues: FormSchema = {
  name: '',
  email: '',
  message: '',
};

export const Contact: React.FC = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);

  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
    control,
    reset,
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema), defaultValues });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    const token = await captchaRef.current?.executeAsync().catch(() => null);
    captchaRef.current?.reset();

    if (!token) return;

    toast.promise(sendEmail({ ...data, token }), {
      loading: 'Sending message...',
      success: () => 'Message sent successfully! I will get back to you as soon as possible.',
      error: () => 'Something went wrong. Please try again later.',
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset(defaultValues);
  }, [isSubmitSuccessful, reset]);

  return (
    <section id="contact" className="bg-muted/30 scroll-m-8 py-24">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <H2>Get In Touch</H2>
          <p className="text-muted-foreground leading-relaxed">
            Got something you would like to say? Or have a question? Feel free to send me a message
            using the form below. I'm just a few clicks away...
          </p>
        </div>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <FieldGroup>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex flex-wrap justify-between gap-4">
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </div>

                      <Input
                        {...field}
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-background border-border text-foreground"
                        aria-invalid={fieldState.invalid}
                      />
                    </Field>
                  )}
                />
              </FieldGroup>

              <FieldGroup>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex flex-wrap justify-between gap-4">
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </div>

                      <Input
                        {...field}
                        id="email"
                        type="text"
                        placeholder="example@domain.com"
                        aria-invalid={fieldState.invalid}
                      />
                    </Field>
                  )}
                />
              </FieldGroup>

              <FieldGroup>
                <Controller
                  name="message"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex flex-wrap justify-between gap-4">
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </div>

                      <Textarea
                        {...field}
                        id="message"
                        rows={6}
                        placeholder="Please try to describe your message in detail..."
                        aria-invalid={fieldState.invalid}
                      />
                    </Field>
                  )}
                />
              </FieldGroup>

              <ReCAPTCHA
                ref={captchaRef}
                sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
              />

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
