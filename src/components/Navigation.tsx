import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { 
      path: '/services', 
      label: 'Услуги', 
      icon: 'Settings',
      subItems: [
        { path: '/services/installation', label: 'Монтаж', icon: 'Wrench' },
        { path: '/services/maintenance', label: 'Техническое Обслуживание (ТО)', icon: 'Shield' }
      ]
    },
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
              <div key={item.path} className="relative group">
                {'subItems' in item ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                      className={`
                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                        group hover:scale-105 hover:shadow-lg flex items-center
                        ${location.pathname.startsWith(item.path)
                          ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        }
                      `}
                    >
                      <Icon name={item.icon} className="h-4 w-4 mr-2" />
                      <span>{item.label}</span>
                      <Icon name="ChevronDown" className="h-3 w-3 ml-1" />
                    </button>
                    
                    {/* Dropdown */}
                    <div className={`
                      absolute top-full mt-2 w-64 bg-slate-900 rounded-lg shadow-xl border border-slate-700/50
                      transition-all duration-300 transform origin-top
                      ${openDropdown === item.path ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'}
                    `}>
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <Icon name={subItem.icon} className="h-4 w-4" />
                            <span>{subItem.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </nav>

          {/* CTA кнопка */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
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
                <div key={item.path}>
                  {'subItems' in item ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                        className={`
                          w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                          ${location.pathname.startsWith(item.path)
                            ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                          }
                        `}
                      >
                        <Icon name={item.icon} className="h-5 w-5" />
                        <span className="flex-1 text-left">{item.label}</span>
                        <Icon name="ChevronDown" className={`h-4 w-4 transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      <div className={`
                        mt-2 ml-8 space-y-1 overflow-hidden transition-all duration-300
                        ${openDropdown === item.path ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                      `}>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/30 rounded-lg transition-colors"
                          >
                            <Icon name={subItem.icon} className="h-4 w-4" />
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
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
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <div className="flex items-center justify-between gap-4">
                <ThemeToggle />
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg">
                  <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                  Консультация
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;