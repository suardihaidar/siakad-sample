function Panduan() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Panduan</div>
      <div className="text-gray-400 mb-3">List Video Panduan</div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" class="pl-6 py-4">
                No.
              </th>
              <th scope="col" class="px-6 py-4">
                Nama Panduan
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
