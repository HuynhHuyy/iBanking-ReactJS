import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../Logo/Logo";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import submitLogout from "../../utils/submitLogout";
import { notifyError, notifySuccess } from "../../utils/toast";

const navigation = [
  {
    title: "Dashboard",
    href: "/user/dashboard",
    icon: "bi bi-file-person",
  },
  {
    title: "Transfers",
    href: "/user/transfers",
    icon: "bi bi-coin",

  },
  {
    title: "Change Password ",
    href: "/user/changepassword",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "User Profile",
    href: "/user/profile",
    icon: "bi bi-person-vcard",
  },

];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const { logout } = useAuth();
  let location = useLocation();

  const handleLogout = () => {
    submitLogout().then(res => {
      // do nothing
    }).catch(error => {
      notifyError(error.message);;
    });
    logout();
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button className="btn" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
