import { COPYRIGHT_LINK } from "../constants/general";

const Copyright = () => {
  return (
    <div className="space-x-1">
      <span>created by</span>
      <a href={COPYRIGHT_LINK} target="_blank" rel="noopener noreferrer">
        @mojotron
      </a>
    </div>
  );
};

export default Copyright;
