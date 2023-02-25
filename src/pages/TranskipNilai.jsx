function TranskipNilai() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Transkip Nilai</div>
      <div className="text-gray-400 mb-3">
        Berikut adalah daftar salinan nilai kumulatif
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" class="pl-6 py-4">
                No.
              </th>
              <th scope="col" class="px-6 py-4">
                Kode
              </th>
              <th scope="col" class="px-6 py-4">
                Mata Kuliah
              </th>
              <th scope="col" class="px-6 py-4">
                Sifat
              </th>
              <th scope="col" class="px-6 py-4">
                SKS
              </th>
              <th scope="col" class="px-6 py-4">
                Nilai
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
              <td class="px-6 py-4">SI066</td>
              <td class="px-6 py-4">AKUNTANSI</td>
              <td class="px-6 py-4">Wajib</td>
              <td class="px-8 py-4">2</td>
              <td class="px-8 py-4">A</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* jumlah sks */}
      <div className="text-gray-400 mb-3 mt-7 text-center">Jumlah SKS</div>
      <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="w-full text-sm text-center text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-black uppercase dark:text-white">
            <tr>
              <th scope="col" class="pl-6 py-4">
                Wajib
              </th>
              <th scope="col" class="px-6 py-4">
                Pilihan
              </th>
              <th scope="col" class="px-6 py-4">
                Konsentrasi
              </th>
              <th scope="col" class="px-6 py-4">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-black">
              <th class="pl-6 py-4 font-normal">2</th>
              <td class="px-6 py-4">0</td>
              <td class="px-6 py-4">0</td>
              <td class="px-6 py-4">2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <p className="text-gray-400">Indeks Prestasi Komulatif :</p>
        <p className="font-medium text-xl">4</p>
      </div>
    </div>
  );
}

export default TranskipNilai;
