import styles from "../style";
import { logo, bell } from "../assets";

const Header = () => {
  return (
    <nav className="bg-primary relative  flex w-full justify-between items-center">
      {/* Left-aligned items */}
      <div className="flex relative left-[20px] md:max-xl:left-[120px] items-center space-x-3 ">
        {/* Logo */}
        <img src={logo} alt="Soccerlive" className="w-[30px] h-[30px]" />
        {/* Logo Text */}
        <span className={`${styles.heading}`}>Soccerlive</span>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center  ">
        <div className="relative  text-white container mx-auto ">
          <button type="submit" className="absolute left-0 top-0 mt-3 ml-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5439 27.3252L22.1484 19.8992C24.0499 17.7169 25.0917 14.971 25.0917 12.1125C25.0917 5.43377 19.4635 0 12.5459 0C5.62818 0 0 5.43377 0 12.1125C0 18.7912 5.62818 24.225 12.5459 24.225C15.1429 24.225 17.6177 23.4687 19.7336 22.0331L27.1852 29.5155C27.4967 29.8278 27.9156 30 28.3646 30C28.7895 30 29.1926 29.8436 29.4986 29.5592C30.1488 28.9552 30.1695 27.9535 29.5439 27.3252ZM12.5459 3.15978C17.6591 3.15978 21.8189 7.17586 21.8189 12.1125C21.8189 17.0491 17.6591 21.0652 12.5459 21.0652C7.43261 21.0652 3.27283 17.0491 3.27283 12.1125C3.27283 7.17586 7.43261 3.15978 12.5459 3.15978Z"
                fill="#F3F3F3"
              />
            </svg>
          </button>
          <input
            type="text"
            className="bg-primarydim h-10 xl:w-[350px] w-[250px]  md:w-[450px] pl-12 rounded-lg text-md focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Right-aligned Notification Button */}
      <div className="relative right-[20px] md:max-xl:right-[120px]  flex items-center">
        <button
          className={`py-2 px-6 font-poppins flex font-medium text-[18px] text-white bg-primarydim hover:bg-[#353B72] rounded-full outline-none `}
        >
          <img src={bell} alt="Bell Icon" className="w-5 h-5 mt-[3px] mr-3" />

          {/* Notification Text */}
          <span className="font-light font-sans-pro">Notification</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
