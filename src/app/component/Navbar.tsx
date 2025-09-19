import Link from "next/link";

export default function Navbar() {
return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
              className="h-8"
              alt="Computer Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Praktikum 2
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blog/1"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}