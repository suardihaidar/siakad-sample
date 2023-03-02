import React from "react";

function ModalAddKRS() {
  return (
    <div
      id="addKRSModal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-3xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Tambah Mata Kuliah
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="addKRSModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 rounded-lg">
                <thead
                  className="text-xs text-white uppercase dark:text-white"
                  style={{ backgroundColor: "#689DEA" }}
                >
                  <tr>
                    <th scope="col" className="pl-6 py-4">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Kelas
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Kode
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Mata Kuliah
                    </th>
                    <th scope="col" className="px-6 py-4">
                      SKS
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Jadwal Kuliah
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="border-b text-black"
                    style={{
                      backgroundColor: "#D2EBFF",
                      borderColor: "#689DEA",
                    }}
                  >
                    <th scope="row" className="pl-6 py-4 font-medium flex">
                      <div className="flex items-center mr-3">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                      <p>1</p>
                    </th>
                    <td className="px-6 py-4">A</td>
                    <td className="px-6 py-4">1335620</td>
                    <td className="px-6 py-4">Statistika</td>
                    <td className="px-8 py-4">2</td>
                    <td className="px-6 py-4">Selasa, Jam 15.30 - 17.00</td>
                  </tr>
                  <tr
                    className="border-b text-black"
                    style={{
                      backgroundColor: "#D2EBFF",
                      borderColor: "#689DEA",
                    }}
                  >
                    <th scope="row" className="pl-6 py-4 font-medium flex">
                      <div className="flex items-center mr-3">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                      <p>2</p>
                    </th>
                    <td className="px-6 py-4">B</td>
                    <td className="px-6 py-4">1335820</td>
                    <td className="px-6 py-4">Bahasa Inggris</td>
                    <td className="px-8 py-4">2</td>
                    <td className="px-6 py-4">Selasa, Jam 07.00 - 08.30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              data-modal-hide="addKRSModal"
              className="text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2 text-center"
            >
              Batal
            </button>
            <button
              data-modal-hide="addKRSModal"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddKRS;
