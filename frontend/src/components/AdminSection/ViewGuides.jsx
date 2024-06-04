import React from "react";
import { Desertation } from '../../utils/Desertation';

function ViewGuides() {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-14 my-[15px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            List of all Guides
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
          <tr >
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                University
              </th>
              <th scope="col" className="px-6 py-3">
                Specialization
              </th>
              <th scope="col" className="px-6 py-3">
                Researcher
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Guide
              </th> */}
              {/* <th scope="col" className="px-6 py-3">
                Abstract
              </th> */}
              {/* <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {Desertation.map((data, index) => (
              <tr key={index} className="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-500 hover:text-white">
                <td className="px-6 py-4">{data.Researcher}</td>
                <td className="px-6 py-4">{data.Department}</td>
                <td className="px-6 py-4">{data.University}</td>
                <td className="px-6 py-4">{data.Keyword}</td>
                <td className="px-6 py-4">{data["Guide(s)"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewGuides;
