const Breadcrumb = ({ path }) => {
  return (
    <nav className="bg-gray-200 p-2">
      <div className="relative xs:left-[90px] md:left-[120px] max-w-screen-xl mx-auto">
        <ul className="flex space-x-2 items-center">
          <li>
            <a href="/">
              <i className="fas fa-home text-[#372546] text-lg"></i>
            </a>
            <span className="text-[#372546] ml-2">&gt;</span>
          </li>
          {path.map((folder, index) => (
            <li key={index}>
              <a href={folder.link}>
                <span
                  className={`${
                    index === path.length - 1
                      ? "font-normal text-sm text-gray-400"
                      : `font-semibold text-sm text-[#372546]`
                  } text-lg`}
                >
                  {folder.name}
                </span>
              </a>
              {index < path.length - 1 && (
                <span className="text-[#372546] ml-2">&gt;</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
