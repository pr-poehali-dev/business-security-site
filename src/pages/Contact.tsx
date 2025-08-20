import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      title: "Главный офис",
      address: "г. Москва, ул. Профсоюзная, 78, офис 405",
      phone: "+7 (495) 123-45-67",
      email: "info@securitytech.ru",
      hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
      icon: "MapPin"
    },
    {
      title: "Отдел продаж",
      address: "г. Москва, ул. Профсоюзная, 78, офис 410",
      phone: "+7 (495) 123-45-68",
      email: "sales@securitytech.ru",
      hours: "Пн-Пт: 9:00-19:00, Сб: 10:00-17:00",
      icon: "Phone"
    },
    {
      title: "Техническая поддержка",
      address: "Круглосуточно",
      phone: "+7 (495) 123-45-69",
      email: "support@securitytech.ru", 
      hours: "24/7 без выходных",
      icon: "Headphones"
    }
  ];

  const services = [
    {
      title: "Консультация инженера",
      description: "Бесплатный выезд специалиста на объект",
      duration: "1-2 дня",
      icon: "User"
    },
    {
      title: "Техническое предложение",
      description: "Разработка технического решения и сметы",
      duration: "3-5 дней",
      icon: "FileText"
    },
    {
      title: "Проектирование",
      description: "Создание проектной документации",
      duration: "10-20 дней",
      icon: "Drafting"
    },
    {
      title: "Аварийный выезд",
      description: "Устранение неисправностей систем безопасности",
      duration: "В течение 2 часов",
      icon: "Zap"
    }
  ];

  const regions = [
    "Москва и Московская область",
    "Санкт-Петербург и Ленинградская область", 
    "Республика Татарстан",
    "Нижегородская область",
    "Свердловская область",
    "Краснодарский край",
    "Ростовская область",
    "Самарская область"
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
                <h1 className="text-xl font-bold text-gray-900">ЭнергоАльянс-Крым</h1>
                <p className="text-sm text-gray-600">Системы безопасности</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">Услуги</Link>
              <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors">Проекты</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">О нас</Link>
              <Link to="/contact" className="text-primary font-medium">Контакты</Link>
            </nav>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Контакты</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом для получения консультации или технической поддержки
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center text-gray-600">
                    <Icon name="MapPin" className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{info.address}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Icon name="Phone" className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{info.phone}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Icon name="Mail" className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{info.email}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Icon name="Clock" className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{info.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Получить консультацию</CardTitle>
                <CardDescription>
                  Заполните форму и наш специалист свяжется с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Ваше имя *</label>
                      <Input placeholder="Иван Петров" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Компания</label>
                      <Input placeholder="ООО 'Название'" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" type="tel" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email</label>
                      <Input placeholder="ivan@company.ru" type="email" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Тип объекта</label>
                    <Input placeholder="Офис, склад, производство..." />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Площадь объекта (м²)</label>
                    <Input placeholder="1000" type="number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Описание задач *</label>
                    <Textarea 
                      placeholder="Опишите какие системы безопасности нужны: АПС, видеонаблюдение, СКУД и т.д."
                      rows={4} 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Желаемый бюджет</label>
                    <Input placeholder="от 500 000 рублей" />
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    * Обязательные поля. Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Service Requests */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">Экспресс-заявки</CardTitle>
                  <CardDescription>
                    Быстрые заявки на популярные услуги
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={service.icon} className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {service.duration}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          Заказать
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-red-50 border-red-200">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl text-red-800">Аварийная служба</CardTitle>
                  <CardDescription className="text-red-600">
                    Круглосуточная техническая поддержка
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-red-800">Телефон:</span>
                      <span className="text-lg font-bold text-red-600">+7 (495) 123-45-69</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-red-800">Время реагирования:</span>
                      <span className="text-red-600">до 2 часов</span>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Icon name="Phone" className="mr-2 h-4 w-4" />
                      Вызвать аварийную службу
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Regions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Как нас найти</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Icon name="MapPin" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Интерактивная карта</p>
                  <p className="text-sm text-gray-500">г. Москва, ул. Профсоюзная, 78</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Car" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">На автомобиле</h4>
                    <p className="text-sm text-gray-600">Парковка во дворе здания. Въезд с ул. Профсоюзная</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Train" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">На общественном транспорте</h4>
                    <p className="text-sm text-gray-600">Метро 'Новые Черемушки', далее 5 минут пешком</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regions */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">География работы</h3>
              <p className="text-gray-600 mb-6">
                Мы выполняем проекты в следующих регионах России:
              </p>
              <div className="grid gap-3">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="MapPin" className="h-4 w-4 text-primary" />
                    <span className="text-sm">{region}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Работаем в других регионах?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Готовы рассмотреть проекты в других регионах России. 
                  Свяжитесь с нами для обсуждения условий.
                </p>
                <Button variant="outline" size="sm">
                  Обсудить проект
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Есть вопросы?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Наши специалисты ответят на любые вопросы по системам безопасности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-white text-secondary hover:bg-gray-100">
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Онлайн-чат
            </Button>
            <Button size="lg" className="px-8 py-3 bg-primary hover:bg-primary/90">
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Записаться на встречу
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;