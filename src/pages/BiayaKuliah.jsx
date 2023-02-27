function BiayaKuliah() {
  const items = [
    {
      name: "SPP Tetap",
      bank_account: "009 01 00 23129999",
      amount: "2.000.000",
      info: "Belum Lunas",
    },
    {
      name: "SPP Variabel",
      bank_account: "009 02 00 23129999",
      amount: "140.000",
      info: "Tagihan per sks (Optional, pembayaran sesuai kebutuhan)",
    },
    {
      name: "Dana Pengembangan",
      bank_account: "009 03 00 23129999",
      amount: "0",
      info: "Lunas",
    },
    {
      name: "Biaya Kuliah Perbaikan",
      bank_account: "009 04 00 23129999",
      amount: "100.000",
      info: "PEMBAYARAN BELUM DIBUKA",
    },
    {
      name: "Herregistrasi Tinggal Yudisium",
      bank_account: "009 05 00 23129999",
      amount: "140.000",
      info: "Optional, pembayaran sesuai kebutuhan",
    },
    {
      name: "Cuti",
      bank_account: "009 06 00 23129999",
      amount: "130.000",
      info: "PEMBAYARAN BELUM DIBUKA",
    },
    {
      name: "Biaya Wisuda",
      bank_account: "009 07 00 23129999",
      amount: "1.900.000",
      info: "Optional, pembayaran sesuai kebutuhan",
    },
  ];

  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Biaya Kuliah</div>
      <div className="text-gray-400 mb-3">Info Biaya Kuliah</div>
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
                Item Pembayaran
              </th>
              <th scope="col" className="px-6 py-4">
                No. Virtual Account (BNI)
              </th>
              <th scope="col" className="px-6 py-4">
                Nominal
              </th>
              <th scope="col" className="px-6 py-4">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((val, idx) => (
              <tr
                className="border-b text-black"
                style={{ backgroundColor: "#D2EBFF", borderColor: "#689DEA" }}
                key={idx}
              >
                <th
                  scope="row"
                  className="pl-6 py-4 font-medium whitespace-nowrap"
                >
                  {idx + 1}
                </th>
                <td className="px-6 py-4">{val.name}</td>
                <td className="px-6 py-4">{val.bank_account}</td>
                <td className="px-6 py-4">Rp {val.amount}</td>
                <td className="px-6 py-4">{val.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BiayaKuliah;
