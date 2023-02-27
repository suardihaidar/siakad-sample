function Profile() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Data Lengkap Mahasiswa</div>
      <div>
        <div className="block border rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="border-b flex flex-row items-center bg-gray-200 rounded-t-lg p-3">
            <p className="text-xl ml-1">Biodata Mahasiswa</p>
          </div>

          <form className="p-5">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nim"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nomor Induk Mahasiswa
                </label>
                <input
                  id="nim"
                  type="text"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="23129999"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="nik"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NIK (No. KTP)
                </label>
                <input
                  type="text"
                  id="nik"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="9999999999999999"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Ahmad Danial"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Jenis Kelamin
                </label>
                <input
                  type="text"
                  id="gender"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="L"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Program Studi
                </label>
                <input
                  type="text"
                  id="department"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Sistem Informasi"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="home_professor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dosen Wali
                </label>
                <input
                  type="text"
                  id="home_professor"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Jhon Doe"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="religion"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Agama
                </label>
                <input
                  type="text"
                  id="religion"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Islam"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="nationality"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kewarganegaraan
                </label>
                <input
                  type="text"
                  id="nationality"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Indonesia"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="birth_place"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  id="birth_place"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Bima"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="birth_date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="text"
                  id="birth_date"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="01-01-2000"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  No HP
                </label>
                <input
                  type="text"
                  id="phone"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="087123123123"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Pribadi
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="ahmad.danial.20@mail.com"
                  required
                  disabled
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
