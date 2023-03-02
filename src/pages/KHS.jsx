import * as Ic from "../assets/icons";

function KHS() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Kartu Hasil Studi</div>
      <div
        className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <Ic.InfoCircle />
        <div>
          Berikut ini Kartu Hasil Studi tiap Semester dan Tahun Ajaran, Untuk
          nilai yang belum keluar Defaultnya E atau kosong.
        </div>
      </div>

      <div className="flex items-center w-full py-5 ">
        <div>
          <label
            for="default"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Semester
          </label>
          <select
            id="default"
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>-Pilih Semester-</option>
            <option value="US">Ganjil</option>
            <option value="CA">Genap</option>
            <option value="FR">Remidial Ganjil</option>
            <option value="DE">Remidial Genap</option>
          </select>
        </div>
        <div className="mx-3">
          <label
            for="default"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tahun Akademik
          </label>
          <select
            id="default"
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>-Pilih Tahun-</option>
            <option value="FR">2019/2020</option>
            <option value="DE">2020/2021</option>
            <option value="US">2021/2022</option>
            <option value="US">2022/2023</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            onClick={() => alert("KHS ditampilkan!")}
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-1 text-center"
          >
            Tampilkan KHS
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead
            className="text-xs text-white uppercase dark:text-white"
            style={{ backgroundColor: "#689DEA" }}
          >
            <tr>
              <th scope="col" className="pl-6 py-4">
                No.
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
                Nilai
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b text-black"
              style={{ backgroundColor: "#D2EBFF", borderColor: "#689DEA" }}
            >
              <th
                scope="row"
                className="pl-6 py-4 font-medium whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4">SI066</td>
              <td className="px-6 py-4">AKUNTANSI</td>
              <td className="px-8 py-4">2</td>
              <td className="px-8 py-4">A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KHS;
