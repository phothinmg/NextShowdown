import ReactIcon from "lwe8-icons-react";
import { socialLinks } from "@/config";
import { siteName } from "@/config";
const YEAR = new Date().getFullYear();
const SocialLinks = () => {
  return (
    <div className="flex text-base gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      {socialLinks.map((i) => (
        <ReactIcon key={i.name} name={i.name} href={i.link} size={18} />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 lg:mt-10 rounded-btn ">
      <aside>
        <ReactIcon name="tailwind-css" />
        <p>
          {siteName}
          <br />© {YEAR} - All right reserved
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <ReactIcon name="github" />
          <ReactIcon name="twitter-X" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
