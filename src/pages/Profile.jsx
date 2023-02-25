function Profile() {
  return (
    <div>
      <div className="uppercase text-gray-400 mb-3">Data Lengkap Mahasiswa</div>
      <div>
        <div className="block border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="border-b flex flex-row items-center bg-gray-200 rounded-t-lg p-3">
            <p className="text-xl ml-1">Biodata Mahasiswa</p>
          </div>

          <form className="p-5">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="nim"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nomor Induk Mahasiswa
                </label>
                <input
                  id="nim"
                  type="text"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="23129999"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="nik"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NIK (No. KTP)
                </label>
                <input
                  type="text"
                  id="nik"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="9999999999999999"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="full_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="full_name"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Ahmad Danial"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Jenis Kelamin
                </label>
                <input
                  type="text"
                  id="gender"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="L"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="department"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Program Studi
                </label>
                <input
                  type="text"
                  id="department"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Sistem Informasi"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="home_professor"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dosen Wali
                </label>
                <input
                  type="text"
                  id="home_professor"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Jhon Doe"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="religion"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Agama
                </label>
                <input
                  type="text"
                  id="religion"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Islam"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="nationality"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kewarganegaraan
                </label>
                <input
                  type="text"
                  id="nationality"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Indonesia"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="birth_place"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  id="birth_place"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Bima"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="birth_date"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="text"
                  id="birth_date"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="01-01-2000"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  No HP
                </label>
                <input
                  type="text"
                  id="phone"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="087123123123"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Pribadi
                </label>
                <input
                  type="text"
                  id="email"
                  class="bg-gray-50 border cursor-not-allowed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
