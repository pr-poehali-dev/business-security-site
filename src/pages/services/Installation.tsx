import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const installationServices = [
  {
    id: 1,
    title: "Автоматическая пожарная сигнализация (АПС) и СОУЭ",
    description: "Проектирование и монтаж систем пожарной сигнализации и систем оповещения и управления эвакуацией для обеспечения безопасности объектов.",
    icon: "Flame",
    image: "/img/b9bcf360-30ac-485a-be2e-dec0365a56cd.jpg",
    features: ["Раннее обнаружение пожара", "Автоматическое оповещение", "Интеграция с системами безопасности"]
  },
  {
    id: 2,
    title: "Автоматическая установка пожаротушения (АУПТ)",
    description: "Установка современных систем автоматического пожаротушения для защиты объектов от пожара.",
    icon: "Shield",
    image: "/img/1e796181-fcf6-42ad-b5fb-3ae05b4e86a3.jpg",
    features: ["Водяное тушение", "Газовое тушение", "Пенное тушение"]
  },
  {
    id: 3,
    title: "Система ДымоУдаления (СДУ)",
    description: "Монтаж систем дымоудаления для обеспечения безопасной эвакуации людей при пожаре.",
    icon: "Wind",
    image: "/img/c44ca569-d84c-4c78-b2d6-b89ff93fd907.jpg",
    features: ["Автоматическое управление", "Приточная вентиляция", "Дымовые клапаны"]
  },
  {
    id: 4,
    title: "Система ОВиК",
    description: "Комплексный монтаж систем отопления, вентиляции и кондиционирования воздуха.",
    icon: "Thermometer",
    image: "/img/7ad82bc6-c26e-4dab-9b0a-64ea654726f3.jpg",
    features: ["Климат-контроль", "Энергоэффективность", "Автоматизация"]
  },
  {
    id: 5,
    title: "Системы Видео Наблюдения (СВН)",
    description: "Установка современных систем видеонаблюдения для обеспечения безопасности объектов.",
    icon: "Camera",
    image: "/img/a41789b1-cb60-4701-81d4-2da8e84b43df.jpg",
    features: ["HD/4K камеры", "Ночное видение", "Удаленный доступ"]
  },
  {
    id: 6,
    title: "Комплексное проектирование",
    description: "Полный цикл проектирования инженерных систем с учетом всех требований и норм.",
    icon: "FileText",
    image: "/img/b53ee4b8-f1b1-43dd-91fb-a2d7a5f24351.jpg",
    features: ["Все виды систем", "Согласование", "Авторский надзор"]
  },
  {
    id: 7,
    title: "ОСИПС",
    description: "Обучаемая специализированная информационно-поисковая система для автоматизации процессов.",
    icon: "Brain",
    image: "/img/c606f1f2-b0ed-4258-8095-a8fe885a3d8b.jpg",
    features: ["Искусственный интеллект", "Автоматизация", "Аналитика"]
  },
  {
    id: 8,
    title: "ЭлектроМонтажные работы",
    description: "Профессиональный монтаж электрических систем любой сложности.",
    icon: "Zap",
    image: "/img/889e6563-d26d-4808-b8f3-bc1edd9fd97e.jpg",
    features: ["Силовые сети", "Освещение", "Заземление"]
  }
];

const Installation = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Монтажные работы
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Профессиональный монтаж инженерных систем с гарантией качества
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен профессиональный монтаж?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Наши специалисты готовы выполнить монтажные работы любой сложности с соблюдением всех норм и стандартов
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="MessageCircle" className="mr-2" />
                Оставить заявку
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                <Icon name="ArrowLeft" className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Installation;