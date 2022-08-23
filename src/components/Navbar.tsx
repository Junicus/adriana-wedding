import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  setIsOpen: (isOpen: boolean) => void;
}

export function Navbar({ setIsOpen }: NavbarProps) {
  return (
    <nav className="gap-10 sm:border-b border-gray-400 flex flex-col sm:flex-row justify-center w-full uppercase pb-2 pt-10 sm:pt-0">
      <MyNavLink to="/" label="Home" setIsOpen={setIsOpen} />
      <MyNavLink to="/schedule" label="Schedule" setIsOpen={setIsOpen} />
      <MyNavLink
        to="/wedding_party"
        label="Wedding Party"
        setIsOpen={setIsOpen}
      />
      <MyNavLink to="/rsvp" label="RSVP" setIsOpen={setIsOpen} />
    </nav>
  );
}

function MyNavLink({
  to,
  label,
  setIsOpen,
}: {
  to: string;
  label: string;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames("hover:underline underline-offset-4", {
          "font-semibold": isActive,
        })
      }
      to={to}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </NavLink>
  );
}
