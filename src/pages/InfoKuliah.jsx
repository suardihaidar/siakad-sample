import * as Ic from "../assets/icons";

function InfoKuliah() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Info Perkuliahan</div>
      <div
        className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <Ic.InfoCircle />
        <div>Info Perkuliahan dari Dosen</div>
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
                Tanggal
              </th>
              <th scope="col" className="px-6 py-4">
                Info Kuliah
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
              <td className="px-6 py-4">12 Februari 2022</td>
              <td className="px-6 py-4">
                Hari senin, mata kuliah statistika jam 09.30 diganti ke jam
                14.00 ruangan 4.2.2
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoKuliah;
