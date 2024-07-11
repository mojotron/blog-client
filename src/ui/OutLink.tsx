import { ReactNode } from "react";

const OutLink = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <a
      className="no-underline hover:underline hover:text-error"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default OutLink;
