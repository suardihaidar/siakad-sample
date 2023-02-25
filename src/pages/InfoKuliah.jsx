function InfoKuliah() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Info Perkuliahan</div>
      <div className="text-gray-400 mb-3">Info Perkuliahan dari Dosen</div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" class="pl-6 py-4">
                No.
              </th>
              <th scope="col" class="px-6 py-4">
                Tanggal
              </th>
              <th scope="col" class="px-6 py-4">
                Info Kuliah
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
              <td class="px-6 py-4">12 Februari 2022</td>
              <td class="px-6 py-4">
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
