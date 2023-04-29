export const SectionTitle: React.FC<{ title: string; number: number }> = ({ title, number }) => (
  <h2 className="relative flex w-fit gap-3 text-2xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-green-500">
    <span className="text-green-500">{number}.</span>
    {title}
  </h2>
);
