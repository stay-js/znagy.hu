import React from 'react';

const Title: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h1 className="my-4 font-bold text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
      {title}
    </h1>
    <div className="max-w-[75ch] mx-auto text-center">{children}</div>
  </div>
);

export default Title;
