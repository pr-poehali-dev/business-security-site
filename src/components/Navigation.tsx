import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { 
      path: '/services', 
      label: 'Услуги', 
      icon: 'Zap',
      subItems: [
        { path: '/design', label: 'Проектирование', icon: 'PenTool' },
        { path: '/services/installation', label: 'Монтаж', icon: 'Wrench' },
        { path: '/services/maintenance', label: 'Обслуживание', icon: 'Shield' }
      ]
    },
    { path: '/projects', label: 'Проекты', icon: 'Briefcase' },
    { path: '/about', label: 'О компании', icon: 'Building2' },
    { path: '/contact', label: 'Контакты', icon: 'Phone' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleDropdownToggle = (path: string) => {
    setOpenDropdown(openDropdown === path ? null : path);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!e.target || !(e.target as HTMLElement).closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' 
        : 'bg-background/60 backdrop-blur-md'
      }
    `}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3' : 'py-4'}`}>
          {/* Логотип */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon name="Zap" className="h-7 w-7 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ЭнергоАльянс
              </span>
              <span className="text-xs text-muted-foreground tracking-wider">КРЫМ</span>
            </div>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.path} className="relative dropdown-container">
                  {'subItems' in item ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.path)}
                        className={`
                          relative px-5 py-2.5 rounded-xl text-sm font-medium
                          transition-all duration-300 flex items-center group
                          ${location.pathname.includes('/services') || location.pathname === '/design'
                            ? 'text-white' 
                            : 'text-foreground/80 hover:text-foreground'
                          }
                        `}
                      >
                        {location.pathname.includes('/services') || location.pathname === '/design' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl"></div>
                        )}
                        <div className="relative flex items-center">
                          <Icon name={item.icon} className="h-4 w-4 mr-2" />
                          <span>{item.label}</span>
                          <Icon 
                            name="ChevronDown" 
                            className={`h-3 w-3 ml-1.5 transition-transform duration-300 ${
                              openDropdown === item.path ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        {!(location.pathname.includes('/services') || location.pathname === '/design') && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}
                      </button>
                      
                      {/* Mega Menu Dropdown */}
                      <div className={`
                        absolute top-full mt-2 w-72 p-2 bg-background/95 backdrop-blur-xl
                        rounded-2xl shadow-2xl border border-border
                        transition-all duration-300 transform origin-top-left
                        ${openDropdown === item.path 
                          ? 'opacity-100 scale-100 translate-y-0 visible' 
                          : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                        }
                      `}>
                        <div className="space-y-1">
                          {item.subItems.map((subItem, index) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setOpenDropdown(null)}
                              className={`
                                group flex items-center space-x-3 px-4 py-3 rounded-xl
                                transition-all duration-300 relative overflow-hidden
                                ${isActive(subItem.path)
                                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                                  : 'hover:bg-accent text-foreground/80 hover:text-foreground'
                                }
                              `}
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className={`
                                p-2 rounded-lg transition-all duration-300
                                ${isActive(subItem.path) 
                                  ? 'bg-white/20' 
                                  : 'bg-accent group-hover:bg-blue-600/10'
                                }
                              `}>
                                <Icon name={subItem.icon} className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{subItem.label}</p>
                                <p className={`text-xs mt-0.5 ${
                                  isActive(subItem.path) ? 'text-white/80' : 'text-muted-foreground'
                                }`}>
                                  {subItem.path === '/design' && 'АПС, АУПТ, СДУ и другие'}
                                  {subItem.path === '/services/installation' && 'Профессиональный монтаж'}
                                  {subItem.path === '/services/maintenance' && 'Сервис и обслуживание'}
                                </p>
                              </div>
                              {!isActive(subItem.path) && (
                                <Icon name="ArrowRight" className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`
                        relative px-5 py-2.5 rounded-xl text-sm font-medium
                        transition-all duration-300 flex items-center group
                        ${isActive(item.path) 
                          ? 'text-white' 
                          : 'text-foreground/80 hover:text-foreground'
                        }
                      `}
                    >
                      {isActive(item.path) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl"></div>
                      )}
                      <div className="relative flex items-center">
                        <Icon name={item.icon} className="h-4 w-4 mr-2" />
                        <span>{item.label}</span>
                      </div>
                      {!isActive(item.path) && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA и действия */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <div className="h-8 w-px bg-border"></div>
            <Button 
              size="sm"
              className="relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 px-5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-md opacity-50"></div>
              <div className="relative flex items-center">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                <span>Заказать звонок</span>
              </div>
            </Button>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                relative p-2.5 rounded-xl transition-all duration-300
                ${isMenuOpen 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                  : 'bg-accent hover:bg-accent/80 text-foreground'
                }
              `}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={`
                  absolute h-0.5 w-5 bg-current transform transition-all duration-300
                  ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}
                `}></span>
                <span className={`
                  absolute h-0.5 w-5 bg-current transition-all duration-300
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                `}></span>
                <span className={`
                  absolute h-0.5 w-5 bg-current transform transition-all duration-300
                  ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}
                `}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Мобильная навигация */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}
        `}>
          <nav className="mt-2 bg-background/50 backdrop-blur-xl rounded-2xl border border-border p-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  {'subItems' in item ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.path)}
                        className={`
                          w-full flex items-center justify-between px-4 py-3 rounded-xl
                          text-sm font-medium transition-all duration-300
                          ${location.pathname.includes('/services') || location.pathname === '/design'
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                            : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                          }
                        `}
                      >
                        <div className="flex items-center">
                          <Icon name={item.icon} className="h-5 w-5 mr-3" />
                          <span>{item.label}</span>
                        </div>
                        <Icon 
                          name="ChevronDown" 
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openDropdown === item.path ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <div className={`
                        mt-2 ml-4 space-y-1 overflow-hidden transition-all duration-300
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
                            className={`
                              flex items-center px-4 py-2.5 rounded-lg text-sm
                              transition-all duration-300
                              ${isActive(subItem.path)
                                ? 'bg-blue-600/20 text-blue-600 dark:text-blue-400 font-medium'
                                : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                              }
                            `}
                          >
                            <Icon name={subItem.icon} className="h-4 w-4 mr-2.5" />
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        flex items-center px-4 py-3 rounded-xl text-sm font-medium
                        transition-all duration-300
                        ${isActive(item.path)
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                          : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                        }
                      `}
                    >
                      <Icon name={item.icon} className="h-5 w-5 mr-3" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-border">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                Заказать звонок
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;