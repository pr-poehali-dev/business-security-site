import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      title: "Главный офис",
      address: "г.Симферополь, ул. Комунальная, 20",
      phone: "+7 978 910-77-10",
      email: "crimea-alliance@list.ru",
      hours: "Пн-Пт: 8:00-18:00, Сб: 9:00-15:00",
      icon: "MapPin"
    },
    {
      title: "Отдел продаж",
      address: "г.Симферополь, ул. Комунальная, 20",
      phone: "+7 978 910-77-10",
      email: "crimea-alliance@list.ru",
      hours: "Пн-Пт: 8:00-19:00, Сб: 9:00-16:00",
      icon: "Phone"
    },
    {
      title: "Техническая поддержка",
      address: "Круглосуточно по всему Крыму",
      phone: "+7 978 910-77-10",
      email: "crimea-alliance@list.ru", 
      hours: "24/7 без выходных",
      icon: "Headphones"
    }
  ];

  const services = [
    {
      title: "Энергоаудит объекта",
      description: "Бесплатная оценка энергопотребления",
      duration: "1-2 дня",
      icon: "TrendingUp"
    },
    {
      title: "Техническое предложение",
      description: "Расчет солнечной электростанции",
      duration: "3-5 дней",
      icon: "FileText"
    },
    {
      title: "Проектирование СЭС",
      description: "Создание проектной документации",
      duration: "7-14 дней",
      icon: "Sun"
    },
    {
      title: "Аварийный выезд",
      description: "Устранение неисправностей оборудования",
      duration: "В течение 4 часов",
      icon: "Zap"
    }
  ];

  const regions = [
    "г. Симферополь",
    "г. Севастополь", 
    "г. Керчь",
    "г. Евпатория",
    "г. Феодосия",
    "г. Ялта",
    "г. Бахчисарай",
    "Весь Крымский полуостров"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      {/* Hero секция */}
      <section className="relative min-h-screen py-32 px-4 overflow-hidden">
        {/* Главное изображение */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/40dc4d51-e213-4707-bcc4-fe5071228f33.jpg" 
            alt="Консультация и контакты" 
            className="w-full h-full object-cover opacity-20 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 animate-slide-up text-white">Свяжитесь с нами</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Контакты
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ЭнергоАльянс-Крым</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              Получите бесплатную консультацию по энергетическим решениям. 
              Наши специалисты ответят на все вопросы и подберут оптимальное решение.
            </p>
            
            {/* Быстрые контакты */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 animate-slide-up">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover-scale">
                <Icon name="Phone" className="h-8 w-8 text-blue-400 mx-auto mb-3 animate-pulse-slow" />
                <p className="text-gray-300 text-sm mb-2">Звоните прямо сейчас</p>
                <p className="text-xl font-bold text-white">+7 978 910-77-10</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover-scale">
                <Icon name="Mail" className="h-8 w-8 text-blue-400 mx-auto mb-3 animate-pulse-slow" />
                <p className="text-gray-300 text-sm mb-2">Напишите нам</p>
                <p className="text-xl font-bold text-white">crimea-alliance@list.ru</p>
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

      {/* Контактная информация */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши офисы</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите удобный способ связи или приезжайте к нам в офис
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
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

      {/* Формы обратной связи */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Основная форма */}
            <ContactForm 
              title="Получить консультацию"
              description="Заполните форму и наш специалист свяжется с вами в течение 30 минут"
            />

            {/* Экспресс-заявки */}
            <div className="space-y-6">
              <Card className="p-6 animate-slide-up hover-scale" style={{animationDelay: '0.1s'}}>
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
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
                          <Icon name={service.icon} className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {service.duration}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline" className="hover-scale">
                          Заказать
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Аварийная служба */}
              <Card className="p-6 bg-red-50 border-red-200 animate-slide-up hover-scale" style={{animationDelay: '0.2s'}}>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl text-red-800 flex items-center">
                    <Icon name="AlertTriangle" className="h-6 w-6 mr-2 animate-pulse" />
                    Аварийная служба
                  </CardTitle>
                  <CardDescription className="text-red-600">
                    Круглосуточная техническая поддержка по всему Крыму
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-red-800">Телефон:</span>
                      <span className="text-lg font-bold text-red-600">+7 978 910-77-10</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-red-800">Время реагирования:</span>
                      <span className="text-red-600">до 4 часов</span>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 hover-scale">
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

      {/* География работы */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Изображение */}
            <div className="animate-fade-in">
              <img 
                src="/img/463ab5d4-6201-462a-aa9f-a2d52d103122.jpg" 
                alt="Электромонтажные работы в Крыму"
                className="w-full h-80 object-cover rounded-lg image-glow hover-scale"
              />
              <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 mr-2 text-primary animate-pulse-slow" />
                  Как нас найти
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  г.Симферополь, ул. Комунальная, 20
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Icon name="Car" className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-gray-600">Парковка рядом с офисом</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Bus" className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-gray-600">Автобус № 12, 15 до остановки "Комунальная"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* География */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">География работы</h3>
              <p className="text-gray-600 mb-6">
                Мы выполняем проекты по всему Крымскому полуострову:
              </p>
              <div className="grid gap-3">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover-scale">
                    <Icon name="MapPin" className="h-4 w-4 text-primary animate-pulse-slow" />
                    <span className="text-sm">{region}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg hover-scale">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon name="Zap" className="h-5 w-5 mr-2 text-primary animate-pulse-slow" />
                  Выездные работы
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Готовы выехать в любую точку Крыма для оценки объекта и выполнения работ. 
                  Транспортные расходы обсуждаются индивидуально.
                </p>
                <Button variant="outline" size="sm" className="hover-scale">
                  Заказать выезд
                </Button>
              </div>
              
              {/* Яндекс Карта */}
              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Icon name="Map" className="h-5 w-5 mr-2 text-primary" />
                  Наш офис на карте
                </h4>
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae3b0f5fce5a7f5c8b0c5b5e5f5e5e5e&source=constructor"
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ position: 'relative' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/dee0c0fd-ef5e-49b5-9500-5b8b0706fb01.jpg" 
            alt="Солнечные панели" 
            className="w-full h-full object-cover animate-pulse-slow"
          />
        </div>
        <div className="container mx-auto text-center relative z-10 animate-slide-up">
          <h2 className="text-4xl font-bold mb-6 text-white">Готовы начать проект?</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами прямо сейчас и получите бесплатную консультацию по энергетическим решениям
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 hover-scale">
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Онлайн-чат
            </Button>
            <Button size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 hover-scale">
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