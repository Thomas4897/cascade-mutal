import { Outlet, Link } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <div className="App-NavBar">
      <div className="cascadeLogo">Logo</div>
      <nav className="NavBar-Links">
        <Link className="link" to="about">
          ABOUT US
        </Link>
        <Link className="link" to="policies">
          POLICIES
        </Link>
        <Link className="link" to="packages">
          PACAKAGES
        </Link>
        <Link className="link" to="claims">
          CLAIMS
        </Link>
        <Link className="link" to="makePayment">
          MAKE PAYMENT
        </Link>
      </nav>
      <div className="NavBar-LoginContact">
        <Link className="agentLogIn" to="agentLogIn">
          AGENT LOG IN
        </Link>{" "}
        <Link className="contactUs" to="contactUs">
          CONTACT US
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
