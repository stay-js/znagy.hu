import { env } from '@env/server.mjs';

export const validateCaptchaResponse = async (token?: string | null) => {
  if (!token) return false;

  const url = new URL('https://www.google.com/recaptcha/api/siteverify');
  url.searchParams.set('secret', env.RECAPTCHA_SECRET_KEY);
  url.searchParams.set('response', token);

  try {
    const res = await fetch(url, { method: 'POST' });
    if (!res.ok) return false;
    const data = await res.json();
    return data?.success;
  } catch {
    return false;
  }
};
