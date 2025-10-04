import { Darkmode } from "./Darkmode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./Search";
import Signout from "./Signout";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between
      py-8 sm:flex-row sm:items-center gap-4
      ">
        {/* {logo} */}
        <Logo />
        {/* {search} */}
        <Search />
        {/* {darkmod & profile} */}
        <div className="flex gap-4">
        <Darkmode />
        <DropdownListMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
