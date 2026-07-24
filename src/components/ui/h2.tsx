import { cn } from '~/lib/utils';

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('text-foreground text-3xl font-bold md:text-4xl', className)} {...props} />
  );
}
