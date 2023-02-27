import { HiCash, HiDatabase, HiStar } from "react-icons/hi";

function Dashboard() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Dashboard Mahasiswa</div>
      <div
        className="p-4 text-base text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        Semester - Genap TA. 2022/2023
      </div>
      <div className="my-3 flex flex-row">
        <div
          className="block w-full p-5 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
          style={{ backgroundColor: "#8EC1F4" }}
        >
          <div className="border-b flex flex-row items-center pb-2">
            <HiStar color="white" />
            <p className="text-xl text-white font-bold ml-1">IPK</p>
          </div>
          <p className="font-bold text-3xl my-3 text-white">3.5</p>
          <p className="text-sm text-white">Tetap dari semester lalu</p>
        </div>
        <div
          className="block w-full mx-5 p-5 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
          style={{ backgroundColor: "#A8A8E5" }}
        >
          <div className="border-b flex flex-row items-center pb-2">
            <HiCash color="white" />
            <p className="text-xl text-white font-bold ml-1">Tagihan</p>
          </div>
          <p className="font-bold text-3xl my-3 text-white">Rp 5.000.000</p>
          <p className="text-sm text-white">Total tunggakan terakhir</p>
        </div>
        <div
          className="block w-full p-5 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
          style={{ backgroundColor: "#EAB46C" }}
        >
          <div className="border-b flex flex-row items-center pb-2">
            <HiDatabase color="white" />
            <p className="text-xl text-white font-bold ml-1">Semester</p>
          </div>
          <p className="font-bold text-3xl my-3 text-white">6</p>
          <p className="text-sm text-white">Batas studi: 14 semester</p>
        </div>
      </div>

      {/* Jadwal Kuliah */}
      <div className="text-gray-400 mb-3">Jadwal Kuliah</div>
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
                Hari&nbsp;|&nbsp;Jam&nbsp;|&nbsp;Ruang
              </th>
              <th scope="col" className="px-6 py-4">
                Mata Kuliah
              </th>
              <th scope="col" className="px-6 py-4">
                Dosen Pengampu
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
              <td className="px-6 py-4">
                Senin&nbsp;|&nbsp;09.30&nbsp;|&nbsp;4.2.1
              </td>
              <td className="px-6 py-4">Statistika</td>
              <td className="px-6 py-4">Jhon Doe</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Jadwal Ujian */}
      <div className="text-gray-400 my-3">Jadwal Ujian</div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead
            className="text-xs text-white uppercase"
            style={{ backgroundColor: "#9591E8" }}
          >
            <tr>
              <th scope="col" className="pl-6 py-4">
                No.
              </th>
              <th scope="col" className="px-6 py-4">
                Tanggal Ujian
              </th>
              <th scope="col" className="px-6 py-4">
                Jenis Ujian
              </th>
              <th scope="col" className="px-6 py-4">
                Jam
              </th>
              <th scope="col" className="px-6 py-4">
                Ruang
              </th>
              <th scope="col" className="px-6 py-4">
                Mata Kuliah
              </th>
              <th scope="col" className="px-6 py-4">
                Kursi
              </th>
              <th scope="col" className="px-6 py-4">
                Hadir?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b text-black"
              style={{ backgroundColor: "#E6E6FF", borderColor: "#9591E8" }}
            >
              <th
                scope="row"
                className="pl-6 py-4 font-medium whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4">12 April 2022</td>
              <td className="px-6 py-4">Teori</td>
              <td className="px-6 py-4">08.00</td>
              <td className="px-6 py-4">4.3.3</td>
              <td className="px-6 py-4">Statistika</td>
              <td className="px-6 py-4">25</td>
              <td className="px-6 py-4">Hadir</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
