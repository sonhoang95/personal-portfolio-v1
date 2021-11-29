import React, { useEffect, useRef } from 'react';

export default function AvatarBackgroundGrid() {
  const gridContainerRef = useRef();
  //grab all the grid items using ref and convert it to array
  useEffect(() => {
    const gridItems = Array.from(gridContainerRef.current.children);
    //loop over grid items adn create a random duration + delay for each
    gridItems.forEach(item => {
      //calculate random number for delay
      const delay = getRandomInt(0, 5);
      //calculate random number for duration
      const duration = getRandomInt(3, 6);
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      //set both
      item.style.animationDelay = `${delay}s`;
      item.style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <div className="relative w-52 h-48 lg:mr-12">
      {/* <!--   grid background --> */}
      <div
        ref={gridContainerRef}
        className="absolute w-full h-full grid grid-cols-12 gap-2 transform -skew-y-6 scale-105 lg:scale-125"
      >
        {/* <!--     row 1 --> */}
        <div className="col-span-2 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className="col-span-5 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>
        <div className=" col-span-1 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className="col-span-4 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>

        {/* <!--     row 2 --> */}
        <div className="col-span-5 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>
        <div className="col-span-3 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className=" col-span-2 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>
        <div className="col-span-2 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>

        {/* <!--     row 3 --> */}
        <div className="col-span-4 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className="col-span-7 bg-gray-200 rounded-full p-2  dark:bg-gray-800 animate-pulse"></div>
        <div className=" col-span-1 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>

        {/* <!--     row 4 --> */}
        <div className="col-span-2 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className="col-span-4 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className=" col-span-6 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>

        {/* <!--     row 5 --> */}
        <div className="col-span-5 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>
        <div className="col-span-5 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className="col-span-2 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>

        {/* <!--     row 6 --> */}
        <div className="col-span-4 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
        <div className="col-span-7 bg-blue-300 rounded-full p-2 dark:bg-green-700 animate-pulse"></div>
        <div className=" col-span-1 bg-gray-200 rounded-full p-2 dark:bg-gray-800 animate-pulse"></div>
      </div>

      {/* <!--   content --> */}
    </div>
  );
}
