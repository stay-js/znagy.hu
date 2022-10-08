const SectionTitle: React.FC<{ title: string; number: number }> = ({ title, number }) => (
  <h2 className="relative flex w-fit gap-3 text-2xl font-semibold after:absolute after:left-0 after:bottom-0 after:block after:h-[2px] after:w-full after:bg-green-500">
    <span className="text-green-500">{number}.</span>
    {title}
  </h2>
);

export default SectionTitle;
