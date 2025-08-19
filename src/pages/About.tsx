import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Александр Петров",
      position: "Технический директор",
      experience: "15 лет",
      specialization: "Проектирование АПС",
      achievements: ["Сертификат МЧС", "Эксперт по пожарной безопасности", "200+ проектов"]
    },
    {
      name: "Елена Сидорова", 
      position: "Ведущий инженер",
      experience: "12 лет",
      specialization: "Системы видеонаблюдения",
      achievements: ["Партнер Hikvision", "Специалист по IP-технологиям", "150+ объектов"]
    },
    {
      name: "Михаил Иванов",
      position: "Инженер СКУД",
      experience: "8 лет", 
      specialization: "Контроль доступа",
      achievements: ["Сертификат ZKTeco", "Биометрические системы", "100+ установок"]
    },
    {
      name: "Ольга Козлова",
      position: "Проект-менеджер",
      experience: "10 лет",
      specialization: "Управление проектами",
      achievements: ["PMP сертификат", "Agile методология", "300+ проектов"]
    }
  ];

  const certificates = [
    {
      title: "Лицензия МЧС России",
      number: "№ 3/02570 от 15.04.2023",
      description: "Деятельность по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности зданий и сооружений",
      icon: "Shield"
    },
    {
      title: "ISO 9001:2015",
      number: "Сертификат № RU22/3456",
      description: "Система менеджмента качества в области проектирования, монтажа и обслуживания систем безопасности",
      icon: "Award"
    },
    {
      title: "Допуск СРО",
      number: "№ 177-2023-5570180370",
      description: "Проектирование зданий и сооружений I и II уровней ответственности в области пожарной безопасности",
      icon: "FileText"
    },
    {
      title: "Партнерские сертификаты",
      number: "Hikvision, Dahua, Bolid, Ajax",
      description: "Официальные партнерские соглашения с ведущими производителями оборудования систем безопасности",
      icon: "Handshake"
    }
  ];

  const advantages = [
    {
      title: "Собственное производство",
      description: "Производим щиты управления и специализированные решения под конкретные задачи",
      icon: "Factory"
    },
    {
      title: "Склад оборудования",
      description: "Поддерживаем запас основного оборудования для оперативного выполнения заказов",
      icon: "Package"
    },
    {
      title: "Сервисная служба 24/7",
      description: "Круглосуточная техническая поддержка и аварийное обслуживание",
      icon: "Clock"
    },
    {
      title: "Гарантийное обслуживание",
      description: "Предоставляем расширенную гарантию на все виды выполненных работ",
      icon: "CheckCircle"
    },
    {
      title: "Обучение персонала",
      description: "Проводим обучение эксплуатационного персонала заказчика",
      icon: "GraduationCap"
    },
    {
      title: "Проектный отдел",
      description: "Штатные проектировщики с допусками и лицензиями",
      icon: "Drafting"
    }
  ];

  const milestones = [
    { year: "2009", event: "Основание компании", description: "Начало деятельности в области систем безопасности" },
    { year: "2012", event: "Получение лицензии МЧС", description: "Право на работы по пожарной безопасности" },
    { year: "2015", event: "Партнерство с Hikvision", description: "Статус золотого партнера" },
    { year: "2018", event: "Сертификация ISO 9001", description: "Внедрение системы менеджмента качества" },
    { year: "2020", event: "Расширение географии", description: "Работа в 15 регионах России" },
    { year: "2023", event: "200-й проект", description: "Реализация юбилейного проекта" }
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
              <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors">Проекты</Link>
              <Link to="/about" className="text-primary font-medium">О нас</Link>
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
            О <span className="text-primary">компании</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Более 15 лет создаем надежные системы безопасности для объектов любой сложности
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">SecurityTech</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Компания SecurityTech была основана в 2009 году группой инженеров с многолетним опытом 
                  работы в области систем безопасности. За годы работы мы реализовали более 200 проектов 
                  различной сложности - от небольших офисов до крупных промышленных комплексов.
                </p>
                <p>
                  Наша миссия - обеспечить максимальный уровень безопасности объектов наших клиентов 
                  с помощью современных технологических решений и профессионального подхода к каждому проекту.
                </p>
                <p>
                  Мы предоставляем полный спектр услуг: от разработки проектной документации 
                  до пуско-наладочных работ и дальнейшего технического обслуживания систем.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-gray-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-gray-600">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Техподдержка</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Наши принципы</h3>
              <div className="space-y-4">
                {[
                  "Качество превыше скорости",
                  "Индивидуальный подход к каждому клиенту", 
                  "Использование проверенных технологий",
                  "Прозрачность в работе и ценообразовании",
                  "Постоянное развитие и обучение",
                  "Ответственность за результат"
                ].map((principle, idx) => (
                  <div key={idx} className="flex items-center">
                    <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">История развития</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ключевые вехи в развитии нашей компании
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="font-semibold text-lg mb-2">{milestone.event}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональные инженеры с многолетним опытом работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <Badge variant="outline" className="mb-3">{member.experience}</Badge>
                  <p className="text-sm text-gray-600 mb-3">{member.specialization}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-xs text-gray-500">
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Что делает нас надежным партнером в области систем безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Лицензии и сертификаты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Все необходимые разрешительные документы для работы в сфере безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={cert.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <p className="text-primary font-medium text-sm mt-1">{cert.number}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы стать нашим партнером?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения возможностей сотрудничества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-white text-secondary hover:bg-gray-100">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (495) 123-45-67
            </Button>
            <Link to="/contact">
              <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90">
                <Icon name="Mail" className="mr-2 h-5 w-5" />
                Написать нам
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;