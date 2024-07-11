import { COPYRIGHT_LINK } from "../constants/general";
import {
  FaGithub as IconGithub,
  FaInstagram as IconInstagram,
  FaLinkedin as IconLinkedin,
} from "react-icons/fa";
// components
import OutLink from "../ui/OutLink";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="space-x-1">
        <span>created by</span>
        <OutLink to={COPYRIGHT_LINK}>@mojotron</OutLink>

        <div>
          <h4>Contacts</h4>
          <div className="text-xl flex">
            <OutLink to="#">
              <IconGithub />
            </OutLink>
            <OutLink to="#">
              <IconLinkedin />
            </OutLink>
            <OutLink to="#">
              <IconInstagram />
            </OutLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
