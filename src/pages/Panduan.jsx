function Panduan() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Panduan</div>
      <div className="text-gray-400 mb-3">List Video Panduan</div>
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
                Nama Panduan
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
                <a
                  href="https://www.youtube.com/watch?v=T6MAN2OInks"
                  className="capitalize hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tutorial belajar corel draw untuk pemula
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Panduan;
