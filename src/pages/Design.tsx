import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Design = () => {
  const designServices = [
    {
      title: "Проектирование АПС",
      description: "Автоматические пожарные системы любой сложности",
      icon: "Flame",
      price: "от 45 ₽/м²",
      features: [
        "Расчет зон обнаружения",
        "Подбор датчиков и оборудования", 
        "3D моделирование размещения",
        "Интеграция с системами пожаротушения"
      ],
      deliverables: [
        "Техническое задание",
        "Проектная документация",
        "Спецификация оборудования",
        "Монтажные схемы"
      ]
    },
    {
      title: "Проектирование видеонаблюдения",
      description: "Системы видеомониторинга с аналитикой",
      icon: "Camera",
      price: "от 35 ₽/м²",
      features: [
        "Зонирование объекта",
        "Расчет углов обзора камер",
        "Планирование сетевой инфраструктуры",
        "Интеграция с системами ИИ"
      ],
      deliverables: [
        "Схема расстановки камер",
        "Техническое решение",
        "Расчет пропускной способности",
        "План кабельных трасс"
      ]
    },
    {
      title: "Проектирование СКУД",
      description: "Системы контроля и управления доступом",
      icon: "Lock",
      price: "от 28 ₽/м²",
      features: [
        "Логическое зонирование",
        "Матрица доступа персонала",
        "Интеграция с HR-системами",
        "Биометрические технологии"
      ],
      deliverables: [
        "Схема контролируемых зон",
        "Алгоритмы управления",
        "Техзадание на ПО",
        "План размещения считывателей"
      ]
    },
    {
      title: "Проектирование ОПС",
      description: "Охранно-пожарная сигнализация",
      icon: "Shield",
      price: "от 40 ₽/м²",
      features: [
        "Комплексный подход безопасности",
        "Интеграция всех подсистем",
        "Централизованное управление",
        "Резервирование критичных узлов"
      ],
      deliverables: [
        "Общесистемное решение",
        "Алгоритмы взаимодействия",
        "Техническое задание",
        "Схемы интеграции"
      ]
    },
    {
      title: "Проектирование СОУЭ",
      description: "Системы оповещения и управления эвакуацией",
      icon: "Speaker",
      price: "от 32 ₽/м²",
      features: [
        "Расчет звукового покрытия",
        "Зональное управление",
        "Речевые сообщения",
        "Световые табло эвакуации"
      ],
      deliverables: [
        "Акустический расчет",
        "Схема зонирования",
        "Алгоритмы оповещения",
        "План эвакуации"
      ]
    },
    {
      title: "BIM-проектирование",
      description: "3D моделирование инженерных систем",
      icon: "Layers",
      price: "от 65 ₽/м²",
      features: [
        "Информационное моделирование",
        "Коллизионный анализ",
        "4D планирование",
        "Жизненный цикл объекта"
      ],
      deliverables: [
        "BIM модель объекта",
        "Отчет о коллизиях",
        "Календарный план",
        "Техническая документация"
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
              <Link to="/" className="text-slate-600 hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="text-slate-600 hover:text-primary transition-colors">Услуги</Link>
              <Link to="/design" className="text-primary font-semibold">Проектирование</Link>
              <Link to="/projects" className="text-slate-600 hover:text-primary transition-colors">Проекты</Link>
              <Link to="/about" className="text-slate-600 hover:text-primary transition-colors">О компании</Link>
              <Link to="/contact" className="text-slate-600 hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <Button className="hidden md:block">
              Консультация
            </Button>
          </div>
        </div>
      </header>

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
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Услуги проектирования
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Комплексное проектирование всех видов систем безопасности 
              от технического задания до рабочей документации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={service.icon} className="h-10 w-10 text-primary" />
                    <Badge variant="outline" className="font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Возможности:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Результат:</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Icon name="FileText" className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс проектирования */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">
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
    </div>
  );
};

export default Design;