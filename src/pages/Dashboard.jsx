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
        <div className="block w-72 p-5 bg-purple-400 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="border-b flex flex-row items-center pb-2">
            <HiStar color="white" />
            <p className="text-xl text-white font-bold ml-1">IPK</p>
          </div>
          <p className="font-bold text-3xl my-3 text-white text-center">3.5</p>
          <p className="text-sm text-white">Tetap dari semester lalu</p>
        </div>
        <div className="block w-72 mx-5 p-5 bg-blue-400 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="border-b flex flex-row items-center pb-2">
            <HiCash color="white" />
            <p className="text-xl text-white font-bold ml-1">Tagihan</p>
          </div>
          <p className="font-bold text-3xl my-3 text-white">Rp 5.000.000</p>
          <p className="text-sm text-white">Total tunggakan terakhir</p>
        </div>
        <div className="block w-72 p-5 bg-orange-400 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="border-b flex flex-row items-center pb-2">
            <HiDatabase color="white" />
            <p className="text-xl text-white font-bold ml-1">Semester</p>
          </div>
          <p className="font-bold text-3xl my-3 text-white text-center">6</p>
          <p className="text-sm text-white">Batas studi: 14 semester</p>
        </div>
      </div>

      {/* Jadwal Kuliah */}
      <div className="text-gray-400 mb-3">Jadwal Kuliah</div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" class="pl-6 py-4">
                No.
              </th>
              <th scope="col" class="px-6 py-4">
                Hari&nbsp;|&nbsp;Jam&nbsp;|&nbsp;Ruang
              </th>
              <th scope="col" class="px-6 py-4">
                Mata Kuliah
              </th>
              <th scope="col" class="px-6 py-4">
                Dosen Pengampu
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-blue-500 border-b border-blue-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">
                Senin&nbsp;|&nbsp;09.30&nbsp;|&nbsp;4.2.1
              </td>
              <td class="px-6 py-4">Statistika</td>
              <td class="px-6 py-4">Jhon Doe</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Jadwal Ujian */}
      <div className="text-gray-400 my-3">Jadwal Ujian</div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-purple-600 dark:text-white">
            <tr>
              <th scope="col" class="pl-6 py-4">
                No.
              </th>
              <th scope="col" class="px-6 py-4">
                Tanggal Ujian
              </th>
              <th scope="col" class="px-6 py-4">
                Jenis Ujian
              </th>
              <th scope="col" class="px-6 py-4">
                Jam
              </th>
              <th scope="col" class="px-6 py-4">
                Ruang
              </th>
              <th scope="col" class="px-6 py-4">
                Mata Kuliah
              </th>
              <th scope="col" class="px-6 py-4">
                Kursi
              </th>
              <th scope="col" class="px-6 py-4">
                Hadir?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-purple-500 border-b border-purple-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-purple-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">12 April 2022</td>
              <td class="px-6 py-4">Teori</td>
              <td class="px-6 py-4">08.00</td>
              <td class="px-6 py-4">4.3.3</td>
              <td class="px-6 py-4">Statistika</td>
              <td class="px-6 py-4">25</td>
              <td class="px-6 py-4">Hadir</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
