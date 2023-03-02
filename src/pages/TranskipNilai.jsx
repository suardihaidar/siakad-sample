import * as Ic from "../assets/icons";

function TranskipNilai() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Transkip Nilai</div>
      <div
        className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <Ic.InfoCircle />
        <div>Berikut adalah daftar salinan nilai kumulatif</div>
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
                Sifat
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
              <td className="px-6 py-4">Wajib</td>
              <td className="px-8 py-4">2</td>
              <td className="px-8 py-4">A</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* jumlah sks */}
      <div className="text-gray-400 mb-3 mt-7 text-center">Jumlah SKS</div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-center text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-black uppercase dark:text-white">
            <tr>
              <th scope="col" className="pl-6 py-4">
                Wajib
              </th>
              <th scope="col" className="px-6 py-4">
                Pilihan
              </th>
              <th scope="col" className="px-6 py-4">
                Konsentrasi
              </th>
              <th scope="col" className="px-6 py-4">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black">
              <th className="pl-6 py-4 font-normal">2</th>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <p className="text-gray-400">Indeks Prestasi Komulatif :</p>
        <p className="font-medium text-xl">4</p>
      </div>
      {/* <div className="flex items-center justify-center md:order-2 mt-5">
        <button
          type="button"
          onClick={console.log("printed!")}
          className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
        >
          Print Transkip
        </button>
      </div> */}
    </div>
  );
}

export default TranskipNilai;
