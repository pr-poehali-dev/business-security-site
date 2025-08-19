import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Автоматические пожарные системы (АПС)",
      description: "Комплексные решения для обнаружения и тушения пожаров",
      icon: "Flame",
      price: "от 850 ₽/точка",
      features: [
        "Дымовые и тепловые извещатели",
        "Приемно-контрольные приборы",
        "Системы оповещения и управления эвакуацией",
        "Автоматическое пожаротушение",
        "Интеграция с системами вентиляции",
        "Мониторинг 24/7"
      ],
      technologies: ["Болид", "Рубеж", "ИВС", "Argus Security"],
      projects: ["Торговые центры", "Производственные объекты", "Офисные здания", "Склады"]
    },
    {
      title: "Системы видеонаблюдения",
      description: "Интеллектуальные решения для видеомониторинга объектов",
      icon: "Camera",
      price: "от 12 000 ₽/камера",
      features: [
        "IP-камеры высокого разрешения (4K)",
        "Инфракрасная подсветка",
        "Видеоаналитика и распознавание лиц",
        "Облачное хранение данных",
        "Мобильные приложения для просмотра",
        "Интеграция с СКУД"
      ],
      technologies: ["Hikvision", "Dahua", "Axis", "Bosch"],
      projects: ["Офисы", "Производство", "Торговля", "Образование"]
    },
    {
      title: "Системы контроля доступа (СКУД)",
      description: "Управление доступом и учет рабочего времени",
      icon: "Lock",
      price: "от 18 000 ₽/точка",
      features: [
        "Биометрические считыватели",
        "Карточные системы доступа",
        "Контроллеры замков",
        "Турникеты и шлюзы",
        "Учет рабочего времени",
        "Интеграция с HR-системами"
      ],
      technologies: ["ZKTeco", "Parsec", "IronLogic", "Perco"],
      projects: ["Бизнес-центры", "Заводы", "Банки", "Государственные учреждения"]
    },
    {
      title: "Охранная сигнализация",
      description: "Защита периметра и помещений от проникновения",
      icon: "Shield",
      price: "от 5 500 ₽/зона",
      features: [
        "Датчики движения и разбития стекла",
        "Магнитоконтактные извещатели",
        "Тревожные кнопки",
        "GSM/IP модули связи",
        "Интеграция с ЧОП",
        "Мобильные уведомления"
      ],
      technologies: ["Ajax", "Jablotron", "DSC", "Paradox"],
      projects: ["Частные дома", "Офисы", "Магазины", "Склады"]
    },
    {
      title: "Системы оповещения",
      description: "Речевое и звуковое оповещение для эвакуации",
      icon: "Speaker",
      price: "от 3 200 ₽/зона",
      features: [
        "Речевые оповещатели",
        "Звуковые сирены",
        "Микрофонные станции",
        "Зональное управление",
        "Автоматические сценарии",
        "Дублирование сигналов"
      ],
      technologies: ["TOA", "Bosch", "Inter-M", "ITC"],
      projects: ["ТРЦ", "Школы", "Больницы", "Аэропорты"]
    },
    {
      title: "Интеграция систем",
      description: "Объединение всех систем безопасности в единую платформу",
      icon: "Network",
      price: "от 45 000 ₽/объект",
      features: [
        "Единый центр управления",
        "Автоматические сценарии реагирования",
        "Централизованный мониторинг",
        "Интеграция с BMS",
        "Облачные решения",
        "API для внешних систем"
      ],
      technologies: ["C-Cure", "Lenel", "Genetec", "Milestone"],
      projects: ["Умные здания", "Кампусы", "Промышленные комплексы", "Логистические центры"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Консультация",
      description: "Бесплатный выезд инженера на объект для оценки задач"
    },
    {
      step: "02", 
      title: "Проектирование",
      description: "Разработка технических решений и сметной документации"
    },
    {
      step: "03",
      title: "Согласование",
      description: "Согласование проекта в контролирующих органах"
    },
    {
      step: "04",
      title: "Монтаж",
      description: "Поставка оборудования и профессиональный монтаж"
    },
    {
      step: "05",
      title: "Пусконаладка",
      description: "Настройка систем и проведение приемо-сдаточных испытаний"
    },
    {
      step: "06",
      title: "Обслуживание",
      description: "Техническое обслуживание и поддержка 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SecurityTech</h1>
                <p className="text-sm text-gray-600">Системы безопасности</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/services" className="text-primary font-medium">Услуги</Link>
              <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors">Проекты</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">О нас</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Наши <span className="text-primary">услуги</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Полный спектр услуг по проектированию, монтажу и обслуживанию систем безопасности
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon} className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Возможности системы:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Используемые технологии:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Типы объектов:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.projects.map((project, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    <Icon name="Phone" className="mr-2 h-4 w-4" />
                    Получить расчет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Этапы работы</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Прозрачный процесс от консультации до сдачи объекта в эксплуатацию
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Наши инженеры проведут бесплатную консультацию и подготовят техническое предложение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-white text-secondary hover:bg-gray-100">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (495) 123-45-67
            </Button>
            <Link to="/contact">
              <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90">
                <Icon name="Mail" className="mr-2 h-5 w-5" />
                Оставить заявку
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;