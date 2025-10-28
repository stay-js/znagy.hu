import { cn } from '~/lib/utils';

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => {
  return (
    <h2 className={cn('text-foreground text-3xl font-bold md:text-4xl', className)} {...props} />
  );
};
