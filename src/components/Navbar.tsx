import classNames from "classnames";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="gap-10 border-b border-gray-400 flex justify-center w-full uppercase pb-2">
      <MyNavLink to="/" label="Home" />
      <MyNavLink to="/schedule" label="Schedule" />
      <MyNavLink to="/wedding_party" label="Wedding Part" />
      <MyNavLink to="/rsvp" label="RSVP" />
    </nav>
  );
}

function MyNavLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames("hover:underline underline-offset-4", {
          "font-semibold": isActive,
        })
      }
      to={to}
    >
      {label}
    </NavLink>
  );
}
