export const Title: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <h1 className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-4xl font-bold text-transparent">
      {title}
    </h1>
    <div className="max-w-prose">{children}</div>
  </div>
);
