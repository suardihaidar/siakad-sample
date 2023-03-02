import { useAuth } from "../hooks/useAuth";
import { useSessionStorage } from "../hooks/useSessionStorage";
import * as Ic from "../assets/icons";
import { routes } from "../routes/sidebar";

function Navbar({ children }) {
  const [isSelected, setIsSelected] = useSessionStorage(
    "isSelected",
    "Dashboard"
  );
  const [isCollapse, setIsCollapse] = useSessionStorage("isCollapse", "");

  const { logout } = useAuth();

  const handleSelectedMenu = (ev, title) => {
    if (isSelected !== title) {
      setIsSelected(title);
    }
  };

  const handleCollapse = (title) => {
    if (isCollapse !== title) {
      setIsCollapse(title);
    } else {
      setIsCollapse("");
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <Ic.Menu className="w-7 h-7" />
              </button>
              <a href="/dashboard" className="flex ml-2 md:mr-24">
                <Ic.AcademicCap className="mr-2 w-8 h-8 self-center" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Universitas Amir Hamzah
                </span>
              </a>
            </div>

            <div className="flex items-center md:order-2">
              <button
                type="button"
                onClick={logout}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-30 w-72 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center pb-5 border-b mb-3 border-gray-200">
            <Ic.UserCircle className="w-24 h-24" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Ahmad Danial
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              23129999
            </span>
          </div>
          {/* menu */}
          <ul className="space-y-2">
            {routes.map((val, idx) =>
              val.isMultiLevel ? (
                <li key={`${idx}- ${val.title}`}>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    onClick={() => handleCollapse(val.title)}
                  >
                    {val.icon}
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                      {val.title}
                    </span>
                    {isCollapse === val.title ? (
                      <Ic.ChevronUp className="w-3 h-3" />
                    ) : (
                      <Ic.ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  <ul
                    className="py-2 space-y-2"
                    hidden={isCollapse !== val.title}
                  >
                    {val.child.map((item) => (
                      <li
                        key={`${idx}- ${item.title}`}
                        className={`${
                          isSelected === item.title && "bg-gray-200 rounded-lg"
                        }`}
                        onClick={(ev) => handleSelectedMenu(ev, item.title)}
                      >
                        <a
                          href={item.path}
                          className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <span className="ml-2">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={`${idx}- ${val.title}`}
                  className={`${
                    isSelected === val.title && "bg-gray-200 rounded-lg"
                  }`}
                  onClick={(ev) => handleSelectedMenu(ev, val.title)}
                >
                  <a
                    href={val.path}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {val.icon}
                    <span className="ml-3">{val.title}</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </aside>

      {/* content */}
      <div className="p-4 sm:ml-72">
        <div className="p-4 border border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-16">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
