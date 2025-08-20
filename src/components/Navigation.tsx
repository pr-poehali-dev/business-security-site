import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/services', label: 'Услуги', icon: 'Settings' },
    { path: '/design', label: 'Проектирование', icon: 'PenTool' },
    { path: '/projects', label: 'Проекты', icon: 'Briefcase' },
    { path: '/about', label: 'О компании', icon: 'Users' },
    { path: '/contact', label: 'Контакты', icon: 'Phone' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700/50 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
              <div className="relative bg-slate-900 p-2 rounded-lg">
                <Icon name="Shield" className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">ЭнергоАльянс-Крым</span>
              <span className="text-xs text-slate-400 font-medium">Системы безопасности</span>
            </div>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                  group hover:scale-105 hover:shadow-lg
                  ${isActive(item.path) 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }
                `}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={item.icon} className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                
                {/* Анимированная подсветка */}
                {!isActive(item.path) && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA кнопка */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
              Консультация
            </Button>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Мобильная навигация */}
        <div className={`
          lg:hidden transition-all duration-500 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}>
          <nav className="bg-slate-800/50 rounded-xl p-4 backdrop-blur-sm border border-slate-700/50">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                    ${isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }
                  `}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Консультация
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;