import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const maintenanceServices = [
  {
    id: 1,
    title: "Сервисное обслуживание",
    description: "Регулярное техническое обслуживание всех инженерных систем для поддержания их в рабочем состоянии и предотвращения аварийных ситуаций.",
    icon: "Wrench",
    image: "/img/911ceeb1-50e7-4325-a671-352bd3b1642c.jpg",
    features: [
      "Плановое обслуживание систем",
      "Диагностика и устранение неисправностей", 
      "Замена расходных материалов",
      "Ведение технической документации"
    ],
    benefits: [
      "Продление срока службы оборудования",
      "Снижение риска аварий",
      "Экономия на ремонте",
      "Гарантия работоспособности"
    ]
  },
  {
    id: 2,
    title: "Комплексное обслуживание объекта",
    description: "Полное техническое сопровождение объекта, включая все инженерные системы, с единой точкой ответственности.",
    icon: "Building",
    image: "/img/eb586c03-2c25-42a0-b28b-cd380341db08.jpg",
    features: [
      "Обслуживание всех систем объекта",
      "Круглосуточная техподдержка",
      "Аварийное реагирование",
      "Управление подрядчиками"
    ],
    benefits: [
      "Единый договор на все услуги",
      "Оптимизация расходов",
      "Комплексный подход",
      "Полная отчетность"
    ]
  }
];

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Техническое Обслуживание
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Профессиональное обслуживание инженерных систем для их бесперебойной работы
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Phone" className="mr-2" />
              Заказать обслуживание
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {maintenanceServices.map((service) => (
              <div key={service.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-xl">
                        <Icon name={service.icon} className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center">
                          <Icon name="Settings" className="h-5 w-5 mr-2 text-purple-600" />
                          Что включает
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-slate-600 dark:text-slate-400">
                              <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Benefits */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center">
                          <Icon name="TrendingUp" className="h-5 w-5 mr-2 text-purple-600" />
                          Преимущества
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-slate-600 dark:text-slate-400">
                              <Icon name="Star" className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                        <Icon name="FileText" className="mr-2" />
                        Узнать стоимость
                      </Button>
                      <Button size="lg" variant="outline">
                        <Icon name="Info" className="mr-2" />
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Clock", title: "24/7 Поддержка", desc: "Круглосуточная техническая поддержка" },
              { icon: "Shield", title: "Гарантия", desc: "Гарантия на все виды работ" },
              { icon: "Users", title: "Опыт", desc: "Более 10 лет на рынке" },
              { icon: "Award", title: "Качество", desc: "Сертифицированные специалисты" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                  <Icon name={item.icon} className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Закажите техническое обслуживание</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Доверьте обслуживание ваших систем профессионалам и забудьте о технических проблемах
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                <Icon name="MessageCircle" className="mr-2" />
                Оставить заявку
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20">
                <Icon name="ArrowLeft" className="mr-2" />
                Все услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Maintenance;