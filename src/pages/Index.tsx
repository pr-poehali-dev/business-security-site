import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Системы АПС",
      description: "Проектирование и монтаж автоматических пожарных сигнализаций",
      icon: "Flame",
      features: ["Дымовые детекторы", "Тепловые извещатели", "Панели управления"]
    },
    {
      title: "Видеонаблюдение",
      description: "Современные системы IP-видеонаблюдения и аналитики",
      icon: "Camera",
      features: ["HD камеры", "Облачное хранение", "Мобильный доступ"]
    },
    {
      title: "Контроль доступа",
      description: "СКУД для защиты периметра и контроля проходов",
      icon: "Shield",
      features: ["Биометрия", "Карточные системы", "Турникеты"]
    },
    {
      title: "Мониторинг",
      description: "24/7 диспетчеризация и удаленное наблюдение",
      icon: "Monitor",
      features: ["ПЦН интеграция", "SMS уведомления", "Web-мониторинг"]
    }
  ];

  const projects = [
    {
      title: "Торговый центр 'Авангард'",
      category: "АПС + Видеонаблюдение",
      area: "15,000 м²",
      image: "/img/1c5bf0a1-6b5f-4be8-bcb0-a5f60e6147c0.jpg"
    },
    {
      title: "Производственный комплекс",
      category: "Комплексная безопасность", 
      area: "8,500 м²",
      image: "/img/ee5c6325-f2b3-4cb0-b78e-250efb5191af.jpg"
    },
    {
      title: "Офисный центр 'Технопарк'",
      category: "СКУД + Мониторинг",
      area: "12,000 м²", 
      image: "/img/3894bb50-4f2b-4340-be02-033bfe02e512.jpg"
    }
  ];

  const certificates = [
    "Лицензия МЧС России",
    "ISO 9001:2015", 
    "Партнер Болид",
    "Сертификат Hikvision"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Навигация */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-secondary">SecurityTech</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#projects" className="text-slate-600 hover:text-primary transition-colors">Проекты</a>
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">О компании</a>
              <a href="#certificates" className="text-slate-600 hover:text-primary transition-colors">Сертификаты</a>
              <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:block">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero секция */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Профессиональные решения
              <br />
              <span className="text-primary">в области безопасности</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Проектирование, монтаж и обслуживание систем АПС, видеонаблюдения и контроля доступа. 
              Полный цикл работ с демонстрацией технической документации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Техническое задание
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 opacity-10">
          <Icon name="Camera" className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute top-40 right-16 opacity-10">
          <Icon name="Shield" className="h-12 w-12 text-primary" />
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Комплексные решения для обеспечения безопасности объектов любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <Icon name="Check" className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="projects" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши проекты</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Реализованные объекты с полной технической документацией
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center text-slate-600">
                    <Icon name="MapPin" className="h-4 w-4 mr-1" />
                    <span className="text-sm">Площадь: {project.area}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="FileText" className="mr-2 h-4 w-4" />
                    Техническая документация
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg text-slate-600 mb-6">
                Более 10 лет специализируемся на создании комплексных решений в области 
                технических средств безопасности. Наша команда инженеров обеспечивает 
                полный цикл работ от проектирования до сервисного обслуживания.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-slate-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-slate-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Icon name="Users" className="h-24 w-24 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Сертификаты */}
      <section id="certificates" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Сертификаты и лицензии</h2>
            <p className="text-xl text-slate-600">
              Подтвержденная квалификация для работы с системами безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Award" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium">{cert}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg mb-8 opacity-90">
                Получите консультацию по техническим решениям и расчет стоимости проекта
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-sm opacity-75">Круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <div className="font-semibold">info@securitytech.ru</div>
                    <div className="text-sm opacity-75">Техническая поддержка</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <div className="font-semibold">г. Москва, ул. Технологическая, 15</div>
                    <div className="text-sm opacity-75">Офис и склад</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Запросить консультацию</CardTitle>
                  <CardDescription>
                    Оставьте заявку, и мы подготовим техническое предложение
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Имя</label>
                      <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Телефон</label>
                      <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Объект</label>
                    <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Тип объекта или адрес" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Описание задач</label>
                    <textarea className="w-full mt-1 px-3 py-2 border rounded-md h-20" placeholder="Какие системы безопасности нужны?"></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" className="h-6 w-6 text-primary" />
                <span className="font-bold">SecurityTech</span>
              </div>
              <p className="text-slate-400 text-sm">
                Профессиональные решения в области технических средств безопасности
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Системы АПС</div>
                <div>Видеонаблюдение</div>
                <div>Контроль доступа</div>
                <div>Мониторинг</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div>О нас</div>
                <div>Проекты</div>
                <div>Сертификаты</div>
                <div>Карьера</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@securitytech.ru</div>
                <div>Москва, ул. Технологическая, 15</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 SecurityTech. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;