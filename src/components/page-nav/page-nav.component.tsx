import { NavLink } from "react-router";

const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `page-nav__item${isActive ? " page-nav__item--active" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

const PageNav = () => {
  return (
    <nav className="page-nav">
      <div className="page-nav__container">
        <NavItem to="/">Dashboard</NavItem>
        <NavItem to="/tasks">Tasks</NavItem>
        <NavItem to="/todos">Todos</NavItem>
      </div>
    </nav>
  );
};

export default PageNav;
