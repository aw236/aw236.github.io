
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Andy Developer
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating beautiful, functional digital experiences with modern technologies and thoughtful design.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Andy Developer. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
