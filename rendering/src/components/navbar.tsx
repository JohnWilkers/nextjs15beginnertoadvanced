import { NavLinks } from "./navlink";
import { NavSearch } from "./navsearch";

export const Navbar = () => {
  console.log(`Navbar rendered`);

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};