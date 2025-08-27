import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Design = () => {
  const designServices = [
    {
      id: "aps-soue",
      title: "АПС и СОУЭ",
      fullTitle: "Автоматическая пожарная сигнализация и система оповещения и управления эвакуацией",
      description: "Комплексное проектирование систем обнаружения пожара и управления эвакуацией людей",
      icon: "Flame",
      image: "/img/b9bcf360-30ac-485a-be2e-dec0365a56cd.jpg",
      features: [
        "Расчет зон обнаружения и оповещения",
        "Подбор датчиков и оповещателей", 
        "3D моделирование размещения",
        "Интеграция с системами пожаротушения"
      ]
    },
    {
      id: "aupt",
      title: "АУПТ",
      fullTitle: "Автоматическая установка пожаротушения",
      description: "Проектирование автоматических систем тушения пожара различных типов",
      icon: "Droplets",
      image: "/img/1e796181-fcf6-42ad-b5fb-3ae05b4e86a3.jpg",
      features: [
        "Гидравлический расчет",
        "Выбор типа огнетушащего вещества",
        "Расчет запаса огнетушащих веществ",
        "Автоматизация управления"
      ]
    },
    {
      id: "sdu",
      title: "СДУ",
      fullTitle: "Система ДымоУдаления",
      description: "Проектирование систем противодымной защиты зданий и сооружений",
      icon: "Wind",
      image: "/img/c44ca569-d84c-4c78-b2d6-b89ff93fd907.jpg",
      features: [
        "Аэродинамический расчет",
        "Зонирование дымоудаления",
        "Компенсация приточного воздуха",
        "Автоматическое управление"
      ]
    },
    {
      id: "ovik",
      title: "Система ОВиК",
      fullTitle: "Отопление, вентиляция и кондиционирование",
      description: "Проектирование климатических систем для создания комфортных условий",
      icon: "Thermometer",
      image: "/img/7ad82bc6-c26e-4dab-9b0a-64ea654726f3.jpg",
      features: [
        "Теплотехнический расчет",
        "Подбор оборудования",
        "Энергоэффективные решения",
        "Автоматизация климат-контроля"
      ]
    },
    {
      id: "svn",
      title: "СВН",
      fullTitle: "Системы Видео Наблюдения",
      description: "Проектирование современных систем видеонаблюдения с аналитикой",
      icon: "Camera",
      image: "/img/a41789b1-cb60-4701-81d4-2da8e84b43df.jpg",
      features: [
        "Зонирование территории",
        "Расчет углов обзора",
        "Видеоаналитика и AI",
        "Интеграция с СКУД"
      ]
    },
    {
      id: "complex",
      title: "Комплексное проектирование",
      fullTitle: "Комплексное проектирование инженерных систем",
      description: "Разработка всех разделов проекта с увязкой всех инженерных систем",
      icon: "FileStack",
      image: "/img/b53ee4b8-f1b1-43dd-91fb-a2d7a5f24351.jpg",
      features: [
        "Все виды инженерных систем",
        "BIM-моделирование",
        "Согласование разделов",
        "Единая проектная документация"
      ]
    },
    {
      id: "osips",
      title: "ОСИПС", 
      fullTitle: "Обучаемая специализированная информационно-поисковая система",
      description: "Проектирование интеллектуальных систем управления и мониторинга",
      icon: "Brain",
      image: "/img/c606f1f2-b0ed-4258-8095-a8fe885a3d8b.jpg",
      features: [
        "Системы с искусственным интеллектом",
        "Интеграция всех подсистем",
        "Предиктивная аналитика",
        "Автоматизация процессов"
      ]
    },
    {
      id: "electrical",
      title: "Электроснабжение и Электроосвещение",
      fullTitle: "Системы электроснабжения и освещения",
      description: "Проектирование надежных систем электроснабжения и энергоэффективного освещения",
      icon: "Zap",
      image: "/img/1d633396-f4a4-41f6-b936-0b31298dd813.jpg",
      features: [
        "Расчет электрических нагрузок",
        "Выбор и расстановка оборудования",
        "Аварийное и эвакуационное освещение",
        "Молниезащита и заземление"
      ]
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Техническое задание",
      description: "Анализ требований заказчика и нормативных документов",
      duration: "3-5 дней"
    },
    {
      step: "02", 
      title: "Предпроектные работы",
      description: "Обследование объекта и техническое обоснование",
      duration: "5-10 дней"
    },
    {
      step: "03",
      title: "Проектирование",
      description: "Разработка проектной и рабочей документации",
      duration: "15-30 дней"
    },
    {
      step: "04",
      title: "Экспертиза и согласование",
      description: "Прохождение государственной экспертизы",
      duration: "10-20 дней"
    }
  ];

  const standards = [
    "СП 484.1311500.2020 - Системы пожарной сигнализации",
    "СП 325.1325800.2017 - Системы безопасности",
    "ГОСТ Р 50775-95 - Системы тревожной сигнализации",
    "СП 5.13130.2009 - Системы противопожарной защиты",
    "РД 25.953-90 - Системы автоматические пожаротушения"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />

      {/* Заголовок */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Icon name="PenTool" className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Проектирование систем безопасности
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Профессиональное проектирование инженерных систем безопасности 
              с применением современных технологий и соблюдением всех нормативов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Лицензия МЧС
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Допуск СРО
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                BIM-проектирование
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги проектирования */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Услуги проектирования
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Комплексное проектирование всех видов систем безопасности 
              от технического задания до рабочей документации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Icon name={service.icon} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {service.fullTitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс проектирования */}
      <section className="py-20 bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Этапы проектирования
            </h2>
            <p className="text-lg text-muted-foreground">
              Структурированный подход к разработке проектной документации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <Badge variant="secondary">{phase.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Нормативная база */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Нормативная база
              </h2>
              <p className="text-lg text-muted-foreground">
                Проектирование в соответствии с действующими стандартами и нормами
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BookOpen" className="h-6 w-6 mr-2 text-primary" />
                  Применяемые стандарты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {standards.map((standard, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="FileCheck" className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы начать проектирование?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Получите техническое предложение и стоимость проектирования 
            для вашего объекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Calculator" className="mr-2 h-5 w-5" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Консультация
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Design;