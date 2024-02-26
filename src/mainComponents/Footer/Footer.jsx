/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div class="footer">
      <div className="footer__inner">
        <p class="footer__copyright">
          <FontAwesomeIcon icon={faCopyright} />
          Food App 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
