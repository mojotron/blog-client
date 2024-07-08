import { COPYRIGHT_LINK } from "../constants/general";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="space-x-1">
        <span>created by</span>
        <a href={COPYRIGHT_LINK} target="_blank" rel="noopener noreferrer">
          @mojotron
        </a>
      </div>
    </footer>
  );
};

export default Footer;
