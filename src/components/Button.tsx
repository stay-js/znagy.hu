import Link from 'next/link';

type Variant = 'normal' | 'small' | 'wide-light-bg';

const computeOuterClasses = (variant: Variant) => {
  const base =
    'group flex items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium hover:from-green-400 hover:to-blue-600 hover:text-white dark:text-white';

  switch (variant) {
    case 'normal':
      return `${base} w-fit text-gray-900`;
    case 'small':
      return `${base} w-fit text-gray-900`;
    case 'wide-light-bg':
      return `${base} text-gray-800`;
  }
};

const computeInnerClasses = (variant: Variant) => {
  const base =
    'flex w-full items-center justify-center rounded-md bg-neutral-100 transition-all group-hover:bg-opacity-0';

  switch (variant) {
    case 'normal':
      return `${base} px-6 py-3 dark:bg-neutral-900`;
    case 'small':
      return `${base} px-4 py-2 dark:bg-neutral-900`;
    case 'wide-light-bg':
      return `${base} p-3 dark:bg-neutral-800`;
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
