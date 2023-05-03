import Link from 'next/link';

type Variant = 'normal' | 'small' | 'wide';

const computeOuterClasses = (variant: Variant) => {
  const base =
    'group flex items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium text-gray-900 hover:from-green-400 hover:to-blue-600 hover:text-white dark:text-white';

  switch (variant) {
    case 'normal':
    case 'small':
      return `${base} w-fit`;
    case 'wide':
      return base;
  }
};

const computeInnerClasses = (variant: Variant) => {
  const base =
    'flex w-full items-center justify-center rounded-md transition-all group-hover:bg-opacity-0';

  switch (variant) {
    case 'normal':
      return `${base} bg-neutral-100 px-6 py-3 dark:bg-neutral-900`;
    case 'small':
      return `${base} bg-white px-4 py-2 text-sm dark:bg-neutral-900`;
    case 'wide':
      return `${base} bg-white p-3 dark:bg-neutral-800`;
  }
};

export const Button: React.FC<{
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}> = ({ onClick, href, variant = 'normal', type = 'button', children }) => {
  if (href) {
    return (
      <Link className={computeOuterClasses(variant)} href={href}>
        <span className={computeInnerClasses(variant)}>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={computeOuterClasses(variant)} onClick={onClick}>
      <span className={computeInnerClasses(variant)}>{children}</span>
    </button>
  );
};
