function BiayaKuliah() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Biaya Kuliah</div>
      <div className="text-gray-400 mb-3">Info Biaya Kuliah</div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" class="pl-6 py-4">
                No.
              </th>
              <th scope="col" class="px-6 py-4">
                Item Pembayaran
              </th>
              <th scope="col" class="px-6 py-4">
                No. Virtual Account (BNI)
              </th>
              <th scope="col" class="px-6 py-4">
                Nominal
              </th>
              <th scope="col" class="px-6 py-4">
                Keterangan
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
              <td class="px-6 py-4">SPP Tetap</td>
              <td class="px-6 py-4">009 01 00 23129999</td>
              <td class="px-6 py-4">Rp 2.000.000</td>
              <td class="px-6 py-4">Belum Lunas</td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">SPP Variabel</td>
              <td class="px-6 py-4">009 02 00 23129999</td>
              <td class="px-6 py-4">Rp 140.000</td>
              <td class="px-6 py-4">
                Tagihan per sks (Optional, pembayaran sesuai kebutuhan)
              </td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">Dana Pengembangan</td>
              <td class="px-6 py-4">009 03 00 23129999</td>
              <td class="px-6 py-4">Rp 0</td>
              <td class="px-6 py-4">Lunas</td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">Biaya Kuliah Perbaikan</td>
              <td class="px-6 py-4">009 04 00 23129999</td>
              <td class="px-6 py-4">Rp 100.000</td>
              <td class="px-6 py-4">PEMBAYARAN BELUM DIBUKA</td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">Herregistrasi Tinggal Yudisium</td>
              <td class="px-6 py-4">009 05 00 23129999</td>
              <td class="px-6 py-4">Rp 140.000</td>
              <td class="px-6 py-4">Optional, pembayaran sesuai kebutuhan</td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">Cuti</td>
              <td class="px-6 py-4">009 06 00 23129999</td>
              <td class="px-6 py-4">Rp 130.000</td>
              <td class="px-6 py-4">PEMBAYARAN BELUM DIBUKA</td>
            </tr>
            <tr class="bg-blue-500 border-b border-blue-500">
              <th
                scope="row"
                class="pl-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                1
              </th>
              <td class="px-6 py-4">Biaya Wisuda</td>
              <td class="px-6 py-4">009 07 00 23129999</td>
              <td class="px-6 py-4">Rp 1.900.000</td>
              <td class="px-6 py-4">Optional, pembayaran sesuai kebutuhan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BiayaKuliah;
