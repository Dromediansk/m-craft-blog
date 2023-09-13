import { socialLinks } from "@/lib/socialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 py-6 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center align-top">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white mb-4">About</h4>
            <p className="text-lg mt-0 mb-2 text-gray-400">
              Sharing technical content about web development, software
              engineering and internet security. Feel free to leave feedback,
              what to improve and what are you interested in.
            </p>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3">
                <h4 className="text-3xl font-semibold text-white mb-4">
                  Get in touch
                </h4>
                <div className="flex justify-between">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      className="text-white p-2"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              © {new Date().getFullYear()} Miroslav Pillar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
