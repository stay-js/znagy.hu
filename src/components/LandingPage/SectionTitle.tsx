const SectionTitle: React.FC<{ title: string; number: number }> = ({ title, number }) => (
  <h2 className="relative mb-4 text-2xl font-semibold w-fit after:w-full after:h-[2px] after:left-0 after:top-[50%] after:translate-y-[-50%] after:bg-green-500 after:block">
    <span className="mr-3 text-green-500">{number}.</span>
    {title}
  </h2>
);

export default SectionTitle;
