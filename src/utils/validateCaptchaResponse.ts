import { env } from 'src/env.mjs';
import { z } from 'zod';

const responseSchema = z.object({ success: z.boolean() });

export const validateCaptchaResponse = async (token: string) => {
  const url = new URL('https://www.google.com/recaptcha/api/siteverify');
  url.searchParams.set('secret', env.RECAPTCHA_SECRET_KEY);
  url.searchParams.set('response', token);

  try {
    const res = await fetch(url, { method: 'POST' });
    if (!res.ok) throw new Error(await res.text());

    const data = responseSchema.parse(await res.json());
    return data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};
