
import { Volume2 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Volume2 className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-semibold">SoundSpace</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-purple-500 transition-colors">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-purple-500 transition-colors">
              Features
            </a>
            <a href="#specs" className="text-gray-700 hover:text-purple-500 transition-colors">
              Specs
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
