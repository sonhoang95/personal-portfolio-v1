import React from "react"

export default function Quotes() {
  return (
    <>
      {/* Card Grids */}
      <div className="grid grid-cols-6 gap-4 lg:gap-8 mb-16">
        <div className="flex flex-col text-sm bg-secondary rounded-lg  shadow hover:shadow-lg col-span-3 lg:col-span-2 transition-all duration-400">
          <p className="p-4">
            "Every great dream begins with a dreamer. Always remember, you have
            within you the strength, the patience, and the passion to reach for
            the stars to change the world."
          </p>
          <p className="p-4 self-end italic text-xs">- Harriet Tubman</p>
        </div>
        <div className="flex flex-col text-sm bg-secondary rounded-lg shadow hover:shadow-lg col-span-3 lg:col-span-2 justify-between transition-all duration-400">
          <p className="p-4">
            "Successful people do what unsuccessful people are not willing to
            do. Don't wish it were easier; wish you were better."
          </p>
          <p className="p-4 self-end italic text-xs">- Jim Rohn</p>
        </div>
        <div className="flex flex-col text-sm bg-secondary rounded-lg shadow hover:shadow-lg col-span-6 lg:col-span-2 justify-between transition-all duration-400">
          <p className="p-4">
            "Creativity is inventing, experimenting, growing, taking risks,
            breaking rules, making mistakes, and having fun."
          </p>
          <p className="p-4 self-end italic text-xs">- Mary Lou Cook</p>
        </div>
      </div>
    </>
  )
}
