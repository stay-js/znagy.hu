const Title: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h1 className="my-4 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-center text-5xl font-bold text-transparent">
      {title}
    </h1>
    <div className="mx-auto max-w-[75ch] text-center">{children}</div>
  </div>
);

export default Title;
