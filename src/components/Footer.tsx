import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Shield" className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">ЭнергоАльянс-Крым</span>
            </div>
            <p className="text-sm text-slate-400">
              Профессиональные решения в области электроснабжения и инженерных систем
            </p>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/installation" className="hover:text-blue-400 transition-colors">
                  Монтажные работы
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="hover:text-blue-400 transition-colors">
                  Техническое обслуживание
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="hover:text-blue-400 transition-colors">
                  Проектирование
                </Link>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4 text-blue-400" />
                <span>г. Симферополь, ул. Комунальная, 20</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4 text-blue-400" />
                <a href="tel:+79789107710" className="hover:text-blue-400 transition-colors">
                  +7 978 910-77-10
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4 text-blue-400" />
                <a href="mailto:crimea-alliance@list.ru" className="hover:text-blue-400 transition-colors">
                  crimea-alliance@list.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p className="text-slate-400">
            © {currentYear} ЭнергоАльянс-Крым. Все права защищены.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link to="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">
              Политика конфиденциальности
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/legal" className="text-slate-400 hover:text-blue-400 transition-colors">
              Правовая информация
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;