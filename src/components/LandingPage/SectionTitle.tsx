const SectionTitle: React.FC<{ title: string; number: number }> = ({ title, number }) => (
  <h2 className="relative mb-4 w-fit text-2xl font-semibold after:left-0 after:top-[50%] after:block after:h-[2px] after:w-full after:translate-y-[-50%] after:bg-green-500">
    <span className="mr-3 text-green-500">{number}.</span>
    {title}
  </h2>
);

export default SectionTitle;
