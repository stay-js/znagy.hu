import { env } from 'src/env.mjs';

export const validateCaptchaResponse = async (token?: string | null) => {
  if (!token) return false;

  const url = new URL('https://www.google.com/recaptcha/api/siteverify');
  url.searchParams.set('secret', env.RECAPTCHA_SECRET_KEY);
  url.searchParams.set('response', token);

  try {
    const res = await fetch(url, { method: 'POST' });
    if (!res.ok) throw res;
    const data: unknown = await res.json();
    if (data && typeof data === 'object' && 'success' in data) return data.success;
    throw new Error('Invalid response');
  } catch (error) {
    console.error(error);
    return false;
  }
};
