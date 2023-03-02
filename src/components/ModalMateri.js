import React from "react";

function ModalMateri() {
  return (
    <div
      id="materiModal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-6xl md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Materi dan Nilai Teori/Praktikum
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="materiModal"
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
          <div className="p-6 flex w-full">
            {/* Teori */}
            <div className="mr-3 flex flex-col w-full">
              <p className="font-medium mb-1">Teori</p>
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
                        Modul Teori
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
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
                      <th scope="row" className="pl-6 py-4 font-medium">
                        1
                      </th>
                      <td className="px-6 py-4">
                        <p
                          className="font-bold text-blue-500 cursor-pointer"
                          onClick={() =>
                            alert(
                              "Kisi-kisi Ujian Remidi Bahasa Inggris IV downloaded!"
                            )
                          }
                        >
                          Kisi-kisi Ujian Remidi Bahasa Inggris IV
                        </p>
                        <p className="italic">
                          Kisi-kisi Ujian Remidi Bahasa Inggris IV
                        </p>
                        <p className="text-red-500">
                          12 Januari 2023 10:17 oleh Sarah Johnson, SE, M.Hum
                        </p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">Materi</td>
                    </tr>
                    <tr
                      className="border-b text-black"
                      style={{
                        backgroundColor: "#D2EBFF",
                        borderColor: "#689DEA",
                      }}
                    >
                      <th scope="row" className="pl-6 py-4 font-medium">
                        2
                      </th>
                      <td className="px-6 py-4">
                        <p
                          className="font-bold text-blue-500 cursor-pointer"
                          onClick={() =>
                            alert("Nilai 19-S1A-07_2022/2023 downloaded!")
                          }
                        >
                          Nilai 19-S1A-07_2022/2023
                        </p>
                        <p className="italic">
                          <br />
                        </p>
                        <p className="text-red-500">
                          12 Januari 2023 10:17 oleh Sarah Johnson, SE, M.Hum
                        </p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">Nilai</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Praktikum */}
            <div className="ml-3 flex flex-col w-full">
              <p className="font-medium mb-1">Praktikum</p>
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
                        Modul Praktikum
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
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
                      <th scope="row" className="pl-6 py-4 font-medium">
                        1
                      </th>
                      <td className="px-6 py-4">
                        <p
                          className="font-bold text-blue-500 cursor-pointer"
                          onClick={() =>
                            alert("Nilai 19-S1A-07_2022/2023 downloaded!")
                          }
                        >
                          Nilai 19-S1A-07_2022/2023
                        </p>
                        <p className="italic">
                          <br></br>
                        </p>
                        <p className="text-red-500">
                          20 Januari 2023 10:17 oleh Jonh Sena, M.Kom
                        </p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">Nilai</td>
                    </tr>
                    <tr
                      className="border-b text-black"
                      style={{
                        backgroundColor: "#D2EBFF",
                        borderColor: "#689DEA",
                      }}
                    >
                      <th scope="row" className="pl-6 py-4 font-medium">
                        2
                      </th>
                      <td className="px-6 py-4">
                        <p
                          className="font-bold text-blue-500 cursor-pointer"
                          onClick={() =>
                            alert("Kisi-kisi remidial downloaded!")
                          }
                        >
                          Kisi-kisi Remidial
                        </p>
                        <p className="italic">
                          Kisi-kisi Remidial Remidial Komputer Grafis
                        </p>
                        <p className="text-red-500">
                          20 Januari 2023 10:17 oleh Jonh Sena, M.Kom
                        </p>
                      </td>
                      <td className="px-6 py-4 text-gray-500">Materi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMateri;
