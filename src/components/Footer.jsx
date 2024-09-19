import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 bg-opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-bold mb-4">Get In Touch</h2>
        {/* <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
          I am actively seeking new career opportunities, and my inbox is always
          open. Whether you have a job opportunity or if you just want to
          connect, feel free to reach out.
        </p> */}
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:deveshtuteja17@gmail.com"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/devesh-tuteja/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/deveshtuteja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.instagram.com/devesh_tuteja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Devesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
