import React from 'react';
import { quotes } from '../data';

export default function Quotes() {
  return (
    <div className="grid grid-cols-6 gap-4 lg:gap-8 mb-16">
      {quotes.map(quote => {
        const { id, content, author } = quote;
        return (
          <div
            key={id}
            className="flex flex-col text-sm bg-secondary rounded-lg  shadow hover:shadow-lg col-span-3 lg:col-span-2 transition-all duration-400"
          >
            <p className="p-4">{content}</p>
            <p className="p-4 self-end italic text-xs">{author}</p>
          </div>
        );
      })}
    </div>
  );
}
