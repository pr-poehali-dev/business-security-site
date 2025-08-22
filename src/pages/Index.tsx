import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const services = [
    {
      title: "Насосные станции",
      description: "Проектирование, монтаж и обслуживание насосных станций",
      icon: "Waves",
      image: "/img/b7b720c7-554f-45aa-8c67-ccaf7e6723c4.jpg",
      features: ["Промышленные насосы", "Системы управления", "Автоматизация процессов"]
    },
    {
      title: "Подготовка проектной документации",
      description: "Полный комплект технической документации для объектов",
      icon: "FileText",
      image: "/img/5f087d7d-2bff-4a21-ba73-8e8e72e99564.jpg",
      features: ["Рабочие чертежи", "Сметная документация", "Согласование в инстанциях"]
    },
    {
      title: "Промышленная автоматизация",
      description: "Системы управления и контроля (услуга в разработке!)",
      icon: "Settings",
      image: "/img/ba8acdc6-6289-4879-ac92-6873b1db705b.jpg",
      features: ["АСУТП", "Диспетчеризация", "Автоматическое управление"]
    },
    {
      title: "Электромонтажные работы",
      description: "Профессиональный монтаж электрооборудования",
      icon: "Zap",
      image: "/img/463ab5d4-6201-462a-aa9f-a2d52d103122.jpg",
      features: ["Силовые кабели", "Электрощитовое оборудование", "Заземление"]
    },
    {
      title: "Обслуживание и ремонт",
      description: "Техническое обслуживание оборудования",
      icon: "Wrench",
      image: "/img/690dd835-afef-4567-80a7-a18bfa2eabe5.jpg",
      features: ["Плановое ТО", "Аварийный ремонт", "Модернизация"]
    },
    {
      title: "Системы резервного питания",
      description: "ИБП и дизель-генераторы",
      icon: "Battery",
      image: "/img/463ab5d4-6201-462a-aa9f-a2d52d103122.jpg",
      features: ["Источники бесперебойного питания", "Дизельные генераторы", "АВР системы"]
    },
    {
      title: "Молниезащита и заземление",
      description: "Защита объектов от перенапряжений",
      icon: "Zap",
      image: "/img/40dc4d51-e213-4707-bcc4-fe5071228f33.jpg",
      features: ["Проектирование молниезащиты", "Контур заземления", "Измерения сопротивления"]
    }
  ];

  const projects = [
    {
      title: "Крымский академический русский драматический театр им. М. Горького",
      category: "Полный комплекс электромонтажных работ",
      area: "7,200 м²",
      image: "/img/671d727d-c71d-4ee4-b301-6318affdf663.jpg"
    },
    {
      title: "Производственный комплекс",
      category: "Комплексная безопасность", 
      area: "8,500 м²",
      image: "/img/ee5c6325-f2b3-4cb0-b78e-250efb5191af.jpg"
    },
    {
      title: "Государственный академический музыкальный театр Республики Крым",
      category: "Системы электроснабжения и освещения",
      area: "9,800 м²", 
      image: "/img/f05d96d9-12c3-4bda-bbbb-5c4290378b62.jpg"
    }
  ];

  const certificates = [
    {
      title: "Лицензия МЧС",
      number: "№ 3/02570 от 15.04.2023",
      description: "Деятельность по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности"
    },
    {
      title: "ISO 9001:2015",
      number: "Сертификат № RU22/3456",
      description: "Система менеджмента качества в области проектирования систем безопасности"
    },
    {
      title: "Допуск СРО",
      number: "№ 177-2023-5570180370",
      description: "Проектирование зданий и сооружений I и II уровней ответственности"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      {/* Hero секция */}
      <section className="relative min-h-screen py-32 px-4 overflow-hidden">
        {/* Главное изображение */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/29078f5b-88b4-48d3-a6be-d0859550505d.jpg" 
            alt="Энергетическая инфраструктура" 
            className="w-full h-full object-cover opacity-30 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 animate-slide-up text-white">Энергетика будущего</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Электричество
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">под ключ</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              Проектируем, монтируем и обслуживаем энергетические системы любой сложности. 
              Более 10 лет опыта работы с коммерческими и промышленными объектами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 hover-scale">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                className="px-8 projects-button text-white font-bold relative overflow-hidden group transition-all duration-300"
              >
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <Icon name="Rocket" className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                <span className="relative z-10">🚀 НАШИ ПРОЕКТЫ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Фоновые элементы */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Стрелка вниз */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <Icon name="ChevronDown" className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный спектр услуг в области электроэнергетики и инженерных систем
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-slide-up hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover image-glow transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 rounded-lg bg-blue-600/80 backdrop-blur animate-float">
                    <Icon name={service.icon} className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <Icon name="Check" className="h-4 w-4 text-primary mr-2 flex-shrink-0 animate-pulse-slow" />
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium mb-3">{cert.number}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
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
                Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <div className="font-semibold">+7 978 910-77-10</div>
                    <div className="text-sm opacity-75">Круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <div className="font-semibold">crimea-alliance@list.ru</div>
                    <div className="text-sm opacity-75">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <div className="font-semibold">г.Симферополь, ул. Комунальная, 20</div>
                    <div className="text-sm opacity-75">Офис открыт с 9:00 до 18:00</div>
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
                <CardContent className="px-0 pb-0">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" type="tel" />
                    </div>
                    <div>
                      <Input placeholder="Email" type="email" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите ваш объект и требования к системе безопасности" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" className="mr-2 h-5 w-5" />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
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
                <span className="font-bold">ЭнергоАльянс-Крым</span>
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
                <div>+7 978 910-77-10</div>
                <div>crimea-alliance@list.ru</div>
                <div>г.Симферополь, ул. Комунальная, 20</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400 space-y-2">
            <div>© 2024 ООО «ЭнергоАльянс-Крым». Все права защищены.</div>
            <div className="text-xs">
              Изображения получены из открытых источников и используются в демонстрационных целях.
              <br />
              При коммерческом использовании требуется замена на лицензионные изображения.
            </div>
            <div className="text-xs space-x-4">
              <a href="/legal" className="hover:text-white transition-colors">Правовая информация</a>
              <a href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;