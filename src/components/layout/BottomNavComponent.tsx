import LogoComponent from "../common/LogoComponent";
import { footerLinks, socialIcons } from "../../data/navData";

const BottomNavComponent = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-gray-400">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-10 px-4 md:px-14 lg:px-14 bg-gray-800 gap-6">
        {/* Footer Links and Logo */}
        <div className="flex flex-1 gap-[36px] flex-col justify-between">
          <div className="flex justify-start">
            <LogoComponent half={true} />
          </div>

          <div className="flex justify-start py-4">
            {socialIcons.map((iconData, index) => {
              const IconComponent = iconData.icon;
              return (
                <a
                  key={index}
                  href={iconData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-iconColor-1 text-sm hover:text-yellow-400"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Example Footer Columns */}
        {footerLinks.map((column, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <h4 className="font-bold text-gold-1 text-xl pb-2">
              {column.title}
            </h4>
            {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.href}
                className="text-iconColor-1 hover:text-yellow-400 text-sm md:text-sm lg:text-sm font-thin"
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Footer Bottom Text */}
      <div className="flex justify-center md:justify-end lg:justify-end items-center text-white text-xs md:text-sm lg:text-sm py-4">
        <p className="px-0 md:px-16 lg:px-16">
          © 2024 Hive | Designed by CubeZoo
        </p>
      </div>
    </div>
  );
};

export default BottomNavComponent;
