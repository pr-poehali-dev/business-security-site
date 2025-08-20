import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

const Legal = () => {
  const sections = [
    {
      title: "Авторские права",
      content: [
        "Все материалы сайта, включая тексты, изображения, логотипы, дизайн, защищены авторским правом.",
        "Изображения на сайте получены из открытых источников и используются в демонстрационных целях.",
        "При коммерческом использовании изображений требуется получение лицензий от правообладателей.",
        "© 2024 ООО «ЭнергоАльянс-Крым». Все права защищены."
      ]
    },
    {
      title: "Использование контента",
      content: [
        "Копирование и распространение материалов сайта без письменного согласия запрещено.",
        "Допускается цитирование с обязательным указанием источника.",
        "Использование логотипа и фирменного стиля компании третьими лицами запрещено.",
        "Нарушение авторских прав преследуется по закону РФ."
      ]
    },
    {
      title: "Изображения и медиаматериалы",
      content: [
        "Изображения энергетического оборудования используются в ознакомительных целях.",
        "Фотографии объектов могут не соответствовать реальным проектам компании.",
        "При необходимости использования изображений обращайтесь к правообладателям:",
        "• Промышленные фото: Unsplash.com, Pexels.com (лицензия CC0)",
        "• Техническая документация: собственные материалы компании"
      ]
    },
    {
      title: "Торговые марки",
      content: [
        "«ЭнергоАльянс-Крым» является торговым наименованием ООО «ЭнергоАльянс-Крым».",
        "Упоминаемые торговые марки (ABB, Schneider Electric, IEK, KEAZ) принадлежат их владельцам.",
        "Использование чужих торговых марок носит информационный характер.",
        "Мы не претендуем на права собственности на упоминаемые торговые марки."
      ]
    },
    {
      title: "Отказ от ответственности",
      content: [
        "Информация на сайте носит справочный характер.",
        "Компания не несет ответственности за использование третьими лицами материалов сайта.",
        "Все данные о проектах и достижениях соответствуют действительности на момент публикации.",
        "За актуальной информацией обращайтесь к официальным представителям компании."
      ]
    },
    {
      title: "Контактная информация",
      content: [
        "По вопросам авторских прав обращайтесь:",
        "Телефон: +7 (978) 713-39-59",
        "Email: info@energoalliance-crimea.ru",
        "Почтовый адрес: г. Симферополь, Республика Крым"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Правовая информация
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Информация об авторских правах и использовании материалов сайта в соответствии с законодательством РФ
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <Icon name="Scale" className="h-6 w-6 text-primary" />
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.content.map((item, idx) => (
                      <p key={idx} className="text-gray-600">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <div className="flex items-start space-x-3">
              <Icon name="AlertTriangle" className="h-6 w-6 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Важное уведомление</h3>
                <p className="text-yellow-700 text-sm">
                  Данный сайт создан в демонстрационных целях. При коммерческом использовании необходимо:
                  получить лицензии на все изображения, заменить демонстрационный контент на реальный,
                  провести юридическую экспертизу всех материалов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;