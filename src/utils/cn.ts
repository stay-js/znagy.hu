import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: clsx.ClassValue[]) => twMerge(clsx(classes));
