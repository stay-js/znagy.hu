import { env } from '@env/server.mjs';

export const validateCaptchaResponse = async (token?: string | null) => {
  if (!token) return false;

  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
    },
  );

  if (!res.ok) return false;
  const data = await res.json();
  return data?.success;
};
