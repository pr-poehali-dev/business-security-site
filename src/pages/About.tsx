import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Владимир Кузьмин",
      position: "Генеральный директор",
      experience: "15 лет",
      specialization: "Энергетические системы",
      achievements: ["MBA в энергетике", "Эксперт по возобновляемым источникам", "300+ проектов"]
    },
    {
      name: "Елена Петрова", 
      position: "Технический директор",
      experience: "12 лет",
      specialization: "Солнечная энергетика",
      achievements: ["Партнер Suntech", "Специалист по фотовольтаике", "200+ установок"]
    },
    {
      name: "Александр Сидоров",
      position: "Главный инженер",
      experience: "10 лет", 
      specialization: "Электротехническое проектирование",
      achievements: ["Сертификат ПУЭ", "Промышленная автоматизация", "150+ проектов"]
    },
    {
      name: "Ольга Иванова",
      position: "Проект-менеджер",
      experience: "8 лет",
      specialization: "Управление энергопроектами",
      achievements: ["PMP сертификат", "Agile методология", "100+ проектов"]
    }
  ];

  const certificates = [
    {
      title: "Лицензия Ростехнадзора",
      number: "№ ЭТ-15-025467 от 20.03.2023",
      description: "Деятельность по проектированию, монтажу и эксплуатации энергетических установок",
      icon: "Zap"
    },
    {
      title: "ISO 14001:2015",
      number: "Сертификат № RU22/5678",
      description: "Система экологического менеджмента в области возобновляемой энергетики",
      icon: "Leaf"
    },
    {
      title: "Допуск СРО",
      number: "№ 244-2023-7740180480",
      description: "Проектирование энергетических объектов I и II категорий сложности",
      icon: "FileText"
    },
    {
      title: "Партнерские сертификаты",
      number: "JinkoSolar, Huawei, ABB, Schneider",
      description: "Официальные партнерские соглашения с ведущими производителями энергооборудования",
      icon: "Handshake"
    }
  ];

  const advantages = [
    {
      title: "Собственный проектный отдел",
      description: "Штатные проектировщики с допусками и многолетним опытом",
      icon: "Drafting"
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
      description: "Предоставляем расширенную гарантию до 25 лет на солнечные панели",
      icon: "CheckCircle"
    },
    {
      title: "Обучение персонала",
      description: "Проводим обучение эксплуатационного персонала заказчика",
      icon: "GraduationCap"
    },
    {
      title: "Энергоаудит",
      description: "Комплексная оценка энергоэффективности объектов",
      icon: "TrendingUp"
    }
  ];

  const milestones = [
    { year: "2010", event: "Основание компании", description: "Начало деятельности в области энергетики" },
    { year: "2013", event: "Первая солнечная электростанция", description: "Реализация пилотного проекта 100 кВт" },
    { year: "2016", event: "Партнерство с JinkoSolar", description: "Статус авторизованного дистрибьютора" },
    { year: "2019", event: "Сертификация ISO 14001", description: "Внедрение экологического менеджмента" },
    { year: "2021", event: "Расширение в Крыму", description: "Открытие регионального представительства" },
    { year: "2024", event: "300+ проектов", description: "Достижение нового рубежа" }
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
            className="w-full h-full object-cover opacity-20 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 animate-slide-up text-white">О компании</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              ЭнергоАльянс-Крым
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Надёжный партнёр</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              Более 15 лет создаем эффективные энергетические решения для бизнеса и промышленности. 
              Полный цикл от проектирования до обслуживания.
            </p>
            
            {/* Статистика */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 animate-slide-up">
              <div className="text-center hover-scale">
                <div className="text-4xl font-bold text-blue-300 mb-2 animate-pulse-slow">300+</div>
                <div className="text-lg text-gray-300">Реализованных проектов</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-4xl font-bold text-blue-300 mb-2 animate-pulse-slow">15</div>
                <div className="text-lg text-gray-300">Лет на рынке</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-4xl font-bold text-blue-300 mb-2 animate-pulse-slow">24/7</div>
                <div className="text-lg text-gray-300">Техподдержка</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Фоновые элементы */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* О компании */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Компания ЭнергоАльянс-Крым была основана в 2010 году группой инженеров-энергетиков 
                  с многолетним опытом работы в области возобновляемых источников энергии.
                </p>
                <p>
                  За годы работы мы реализовали более 300 проектов различной сложности - 
                  от небольших солнечных электростанций для частных домов до крупных промышленных комплексов.
                </p>
                <p>
                  Наша миссия - способствовать энергетической независимости и экологической 
                  безопасности через внедрение современных возобновляемых технологий.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src="/img/40dc4d51-e213-4707-bcc4-fe5071228f33.jpg" 
                alt="Энергоаудит и консалтинг"
                className="w-full h-80 object-cover rounded-lg image-glow hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* История развития */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">История развития</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ключевые вехи в развитии нашей компании
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2 animate-pulse-slow">{milestone.year}</div>
                  <h3 className="font-semibold text-lg mb-2">{milestone.event}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональные инженеры с многолетним опытом в энергетике
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
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

      {/* Преимущества */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Что делает нас надежным партнером в области энергетических решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 animate-float">
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

      {/* Лицензии и сертификаты */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Лицензии и сертификаты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Все необходимые разрешительные документы для работы в энергетической сфере
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/ba8acdc6-6289-4879-ac92-6873b1db705b.jpg" 
            alt="Промышленное оборудование" 
            className="w-full h-full object-cover animate-pulse-slow"
          />
        </div>
        <div className="container mx-auto text-center relative z-10 animate-slide-up">
          <h2 className="text-4xl font-bold mb-6 text-white">Готовы к сотрудничеству?</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего энергетического проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 hover-scale">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (978) 713-39-59
            </Button>
            <Link to="/contact">
              <Button size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 hover-scale">
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