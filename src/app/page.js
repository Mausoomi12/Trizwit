"use client";
import { useEffect, useState } from "react";
import SearchIcon from "../../public/SearchIcon";
import ArrowIcon from "../../public/ArrowIcon";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("i was called");
    fetch("https://trizwit-3y93k20de-mausoomi12.vercel.app/api/syllabus")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
    console.log("api completed");
  }, []);

  return (
    <div className="relative h-screen overflow-x-hidden">

      {/*NAVBAR*/}
      <div className="border-t-2 border-b-2 text-black py-4 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between sm:p-0 p-2">

          {/* Left Section */}
          <div className="flex items-center gap-3 md:w-auto w-full">
            <div className="mr-4">{/* Input field for search */}</div>

            {/* left item */}
            <div className="mr-4 text-blue-500 font-semibold md:block hidden">
              Courses
            </div>
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search"
                className="sm:flex bg-gray-100 sm:px-3 py-2 pl-10 rounded focus:outline-none focus:bg-gray-200 placeholder-blue-500 font-semibold sm:w-full hidden"
              />

              {/* SVG Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Middle Section (Logo) */}
          <div className="absolute sm:relative flex items-center sm:justify-center justify-start md:w-auto w-full">
            <div className="text-xl font-bold">Logo here</div>
          </div>

          {/* Right Section */}
          <div className="sm:flex items-center text-blue-500 font-semibold md:w-auto hidden">
            <div className="mr-4">Donate</div>
            <div className="mr-4">Log In</div>
            <div className="mr-4">Sign Up</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center sm:justify-center sm:p-6">
        <div className="flex flex-col sm:flex-row justify-center items-center p-2 relative">
          <div className="sm:mr-4">
            <img
              className="sm:h-96 sm:w-auto ml-20 h-64 w-auto"
              src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_2x.png"
              alt="Student collage"
            />
          </div>

          <div className="text-xl text-left sm:text-left absolute pl-2 sm:relative sm:ml-0 sm:w-1/2">
            <h1 className="sm:text-3xl font-caslon font-bold text-gray-800">
              <span className="bg-white">
                For every student,
                <br />
              </span>
              <span className="bg-white">
                every classroom.
                <br />
              </span>
              <span className="border-b-[3px] border-green-200 bg-white">
                Real results.
              </span>
            </h1>

            <p className="text-sm font-normal mt-3 mb-6 leading-loose">
              <span className="bg-white">
                We’re a nonprofit with the mission to provide a free,
                world-class education for anyone, anywhere.
              </span>
            </p>

            <div className="flex justify-center sm:justify-start sm:mt-5">
              <button className="bg-blue-600 font-caslon text-lg text-white rounded px-4 py-2 mr-2 w-full sm:w-auto">
                Start here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*API*/}

      <div className="mt-20 sm:mt-8 bg-gray-100 flex justify-center w-80 sm:w-4/5 mx-auto rounded-md">
        <ul className="border-b border-gray-400 sm:w-full sm:p-4">
          {data.map((syllabus, i) => (
            <li
              key={i}
              className="flex items-center justify-between border-b border-gray-400 py-2 text-black font-medium"
            >
              <div className="flex items-center">
                <img
                  src={syllabus.imageUrl}
                  alt={syllabus.name}
                  className="h-10 w-10 mr-2 rounded-3xl"
                />
                <span>{syllabus.name}</span>
              </div>
              <ArrowIcon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
