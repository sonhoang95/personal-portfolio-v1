import React from 'react';
import { BiCodeAlt, BiBrushAlt } from 'react-icons/bi';
import { DiJavascript1 } from 'react-icons/di';
import Dots from './Dots';

export default function Interests() {
  return (
    <div className=" mt-16 lg:mt-32">
      <div className="flex flex-col lg:flex-row gap-4 items-center mb-8 lg:mb-12 text-center justify-center">
        <Dots />
        <p className="uppercase tracking-widest font-black text-lg lg:text-xl border-b-4 text-gray-600  dark:border-gray-400 dark:text-gray-200">
          {`<Things I Love />`}
        </p>
        <div className="flex items-center gap-2">
          <Dots />
        </div>
      </div>
      {/* Cards grid */}
      <div className="lg:grid grid-cols-3 gap-10 space-y-12 lg:space-y-0">
        <div className="flex flex-col items-center bg-secondary text-primary rounded-xl shadow hover:shadow-xl transform hover:translate-x-1 hover:-translate-y-1 transition-all duration-400">
          <div className="bg-gradient-to-br from-red-400 to-red-600  w-full p-4 flex items-center justify-center rounded-t-xl ">
            <BiCodeAlt className=" w-8 h-8 lg:w-12 lg:h-12 text-red-100" />
          </div>
          <div className="p-4 space-y-4 text-center">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-200">
              Front-end
            </h2>
            <p className=" text-sm leading-relaxed text-gray-800 dark:text-gray-300">
              My{' '}
              <strong className="italic text-red-400">
                passion has always been for front-end development
              </strong>{' '}
              because it satisfies my need for creativity. It enabled me to
              easily put my ideas into digital form and get results back
              immediately.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center bg-secondary text-primary rounded-xl shadow hover:shadow-xl transform hover:translate-x-1 hover:-translate-y-1 transition-all duration-400">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600  w-full p-4 flex items-center justify-center rounded-t-xl ">
              <DiJavascript1 className=" w-8 h-8 lg:w-12 lg:h-12 text-yellow-100" />
            </div>
            <div className="p-4 space-y-4 text-center">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-200">
                JavaScript
              </h2>
              <p className=" text-sm leading-relaxed text-gray-800 dark:text-gray-300">
                <strong className="italic text-yellow-500 dark:text-yellow-400">
                  I extremely love JavaScript.
                </strong>{' '}
                The feeling of learning something once and being able to use it
                on different platforms is liberating. That is especially helpful
                as being able to put things out in the real world is what
                matters.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center bg-secondary text-primary rounded-xl shadow hover:shadow-xl transform hover:translate-x-1 hover:-translate-y-1 transition-all duration-400">
            <div className="bg-gradient-to-br from-green-400 to-green-600  w-full p-4 flex items-center justify-center rounded-t-xl ">
              <BiBrushAlt className=" w-8 h-8 lg:w-12 lg:h-12 text-green-100" />
            </div>
            <div className="p-4 space-y-4 text-center">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-200">
                Creative Coding
              </h2>
              <p className=" text-sm leading-relaxed text-gray-800 dark:text-gray-300">
                I remember the first time I created an HTML page and opened it
                in the browser.
                <strong className="italic text-teal-500 dark:text-teal-400">
                  {' '}
                  A whole new world of possibilities and creativity appeared
                  before my eyes
                </strong>
                . That was the moment I fell in love with creative coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
