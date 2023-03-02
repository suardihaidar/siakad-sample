import * as Ic from "../assets/icons";
import ModalAddKRS from "../components/ModalAddKRS";

function KRS() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">KRS</div>
      <div className="flex my-5 font-semibold">
        <div className="block w-full p-5 border rounded-lg dark:border-gray-700 text-center mr-5 bg-blue-50">
          <p className="text-gray-400">Program Studi</p>
          <span className="text-vintage-blue">Statistika</span>
        </div>
        <div className="block w-full p-5 border rounded-lg dark:border-gray-700 text-center mr-5 bg-orange-50">
          <p className="text-gray-400">Semester</p>
          <span className="text-vintage-blue">Gasal 2022/2023</span>
        </div>
        <div className="block w-full p-5 border rounded-lg dark:border-gray-700 text-center mr-5 bg-green-50">
          <p className="text-gray-400">SKS Maksimum</p>
          <span className="text-vintage-blue">24</span>
        </div>
        <div className="block w-full p-5 border rounded-lg dark:border-gray-700 text-center bg-red-50">
          <p className="text-gray-400">Dosen PA/Wali</p>
          <span className="text-vintage-blue">Robert Downey S.E M.Si</span>
        </div>
      </div>

      <div
        className="p-4 my-5 font-medium text-white rounded-lg bg-orange-400 dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        PERHATIAN! belum waktunya untuk giliran anda mengambil KRS,
        <br />
        Jadwal pengambilan KRS Anda mulai 2023-02-16 00:00:00 dan selesai
        2023-02-24 23:59:59.
      </div>

      <div
        className="p-4 font-medium my-5 text-white rounded-lg bg-orange-400 dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        Anda belum mengambil KRS
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
                Tanggal KRS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b text-black"
              style={{ backgroundColor: "#D2EBFF", borderColor: "#689DEA" }}
            >
              <th scope="row" className="pl-6 py-4 font-medium flex">
                <div className="flex items-center mr-3">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
                <p>1</p>
              </th>
              <td className="px-6 py-4">A</td>
              <td className="px-6 py-4">1335620</td>
              <td className="px-6 py-4">Statistika</td>
              <td className="px-8 py-4">2</td>
              <td className="px-8 py-4">20 Maret 2023 15:30</td>
            </tr>
            <tr
              className="border-b text-black"
              style={{ backgroundColor: "#D2EBFF", borderColor: "#689DEA" }}
            >
              <th scope="row" className="pl-6 py-4 font-medium flex">
                <div className="flex items-center mr-3">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
                <p>2</p>
              </th>
              <td className="px-6 py-4">B</td>
              <td className="px-6 py-4">1335820</td>
              <td className="px-6 py-4">Bahasa Inggris</td>
              <td className="px-8 py-4">2</td>
              <td className="px-8 py-4">21 Maret 2023 15:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center mt-5">
        <button
          type="button"
          data-modal-target="addKRSModal"
          data-modal-toggle="addKRSModal"
          className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
        >
          Tambah
        </button>
        <button
          type="button"
          onClick={() => alert("selected MK is deleted!")}
          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
        >
          Hapus
        </button>
        <button
          type="button"
          onClick={() => alert("the KRS is printed!")}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex"
        >
          <Ic.Printer className="w-5 h-5 text-white mr-3" />
          Cetak
        </button>
      </div>

      <ModalAddKRS />
    </div>
  );
}

export default KRS;
