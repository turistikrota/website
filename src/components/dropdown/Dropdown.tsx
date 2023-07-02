const Dropdown = () => {
  return (
    <div className="relative">
      <button
        type="button"
        className="peer group inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-transparent focus:ring-0 focus-visible:outline-none focus:outline-none"
      >
        Dropdown
        <i className="bx bxs-chevron-down text-gray-500 ml-2 transition-transform duration-200 group-focus:rotate-180"></i>
      </button>

      <div className="origin-top-right absolute mt-2 right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-opacity">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
