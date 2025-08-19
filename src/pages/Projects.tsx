import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Торговый центр 'Авангард'",
      category: "АПС + Видеонаблюдение",
      area: "15,000 м²",
      year: "2023",
      location: "г. Москва",
      image: "/img/1c5bf0a1-6b5f-4be8-bcb0-a5f60e6147c0.jpg",
      description: "Комплексная система безопасности включающая 240 точек АПС, 85 камер видеонаблюдения и интегрированную систему оповещения",
      systems: ["АПС", "Видеонаблюдение", "Оповещение", "СКУД"],
      features: [
        "240 датчиков дыма и тепла",
        "85 IP-камер 4K разрешения", 
        "Система речевого оповещения",
        "20 точек контроля доступа",
        "Диспетчерская с видеостеной"
      ]
    },
    {
      title: "Производственный комплекс 'ТехноСтрой'",
      category: "Комплексная безопасность",
      area: "8,500 м²",
      year: "2023",
      location: "Московская область",
      image: "/img/ee5c6325-f2b3-4cb0-b78e-250efb5191af.jpg",
      description: "Полный комплекс систем безопасности для производственного предприятия с особыми требованиями",
      systems: ["АПС", "Видеонаблюдение", "СКУД", "Охранная сигнализация", "Периметр"],
      features: [
        "180 точек пожарной сигнализации",
        "65 камер наружного наблюдения",
        "15 точек биометрического доступа", 
        "Охрана периметра 800м",
        "Интеграция с ERP системой"
      ]
    },
    {
      title: "Офисный центр 'Технопарк'",
      category: "СКУД + Мониторинг",
      area: "12,000 м²",
      year: "2022",
      location: "г. Санкт-Петербург",
      image: "/img/3894bb50-4f2b-4340-be02-033bfe02e512.jpg",
      description: "Современная система контроля доступа и видеомониторинга для бизнес-центра класса А",
      systems: ["СКУД", "Видеонаблюдение", "Мониторинг"],
      features: [
        "45 точек контроля доступа",
        "120 IP-камер внутри здания",
        "Система учета рабочего времени",
        "Мобильное приложение для арендаторов",
        "Интеграция с лифтовым оборудованием"
      ]
    },
    {
      title: "Логистический центр 'Карго Плюс'",
      category: "Периметр + Видеонаблюдение",
      area: "25,000 м²",
      year: "2023",
      location: "г. Екатеринбург",
      image: "/img/fe620cbe-946c-43cf-a7d7-ada03676a850.jpg",
      description: "Система безопасности складского комплекса с автоматизированной системой контроля",
      systems: ["Видеонаблюдение", "Периметр", "СКУД", "Аналитика"],
      features: [
        "95 камер высокого разрешения",
        "Система распознавания номеров",
        "Периметральная сигнализация",
        "Весовые комплексы с видеофиксацией",
        "AI-аналитика движения транспорта"
      ]
    },
    {
      title: "Медицинский центр 'Здоровье'",
      category: "АПС + СКУД",
      area: "4,200 м²", 
      year: "2022",
      location: "г. Нижний Новгород",
      image: "/img/1c5bf0a1-6b5f-4be8-bcb0-a5f60e6147c0.jpg",
      description: "Специализированные системы безопасности для медицинского учреждения",
      systems: ["АПС", "СКУД", "Оповещение"],
      features: [
        "85 адресных извещателей",
        "Система контроля доступа врачей",
        "Речевое оповещение по зонам",
        "Тревожная сигнализация",
        "Дублирование на пост охраны"
      ]
    },
    {
      title: "Образовательный комплекс 'Перспектива'",
      category: "Комплексная безопасность",
      area: "18,000 м²",
      year: "2023",
      location: "г. Казань",
      image: "/img/ee5c6325-f2b3-4cb0-b78e-250efb5191af.jpg",
      description: "Полная система безопасности школьного комплекса с учетом специфики образовательного учреждения",
      systems: ["АПС", "Видеонаблюдение", "СКУД", "Оповещение", "Тревожная сигнализация"],
      features: [
        "320 точек пожарной сигнализации",
        "150 камер видеонаблюдения",
        "Система пропускного режима",
        "Тревожная кнопка в каждом классе",
        "Интеграция с системой учета учащихся"
      ]
    }
  ];

  const stats = [
    { number: "200+", label: "Реализованных проектов" },
    { number: "50,000+", label: "Установленных устройств" },
    { number: "15", label: "Лет опыта работы" },
    { number: "98%", label: "Довольных клиентов" }
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
              <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">Услуги</Link>
              <Link to="/projects" className="text-primary font-medium">Проекты</Link>
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
            Наши <span className="text-primary">проекты</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Реализованные решения в области систем безопасности для различных типов объектов
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-white">{project.category}</Badge>
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm mb-2">
                      <Icon name="MapPin" className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Square" className="h-4 w-4 mr-1" />
                      {project.area}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Установленные системы:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.systems.map((system, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {system}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Основные компоненты:</h4>
                    <div className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    <Icon name="FileText" className="mr-2 h-4 w-4" />
                    Подробнее о проекте
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональный подход и качественная реализация проектов любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Качество</h3>
                <p className="text-gray-600 text-sm">
                  Используем только сертифицированное оборудование ведущих производителей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Сроки</h3>
                <p className="text-gray-600 text-sm">
                  Соблюдаем установленные сроки и предоставляем гарантию на все работы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Команда</h3>
                <p className="text-gray-600 text-sm">
                  Квалифицированные инженеры с многолетним опытом работы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Хотите реализовать похожий проект?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения технических требований и получения коммерческого предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-white text-secondary hover:bg-gray-100">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (495) 123-45-67
            </Button>
            <Link to="/contact">
              <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Техническое задание
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;