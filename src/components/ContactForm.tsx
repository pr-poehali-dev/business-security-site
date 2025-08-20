import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  title?: string;
  description?: string;
}

const ContactForm = ({ title = "Оставить заявку", description }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', description: '' });

  // Telegram username или ID чата (замените на ваш)
  const TELEGRAM_USERNAME = 'energoalliance_krym'; // Замените на ваш username без @
  
  // VK ID пользователя или сообщества (замените на ваш)
  const VK_USER_ID = '123456789'; // Замените на ваш VK ID

  const formatMessage = () => {
    const date = new Date().toLocaleString('ru-RU');
    return `🔔 *Новая заявка с сайта*

📅 Дата: ${date}
👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
📧 Email: ${formData.email}
💬 Сообщение: ${formData.message}

#заявка #энергоальянскрым`;
  };

  const sendToTelegram = () => {
    const message = encodeURIComponent(formatMessage());
    const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${message}`;
    window.open(telegramUrl, '_blank');
  };

  const sendToVK = () => {
    const message = encodeURIComponent(formatMessage());
    const vkUrl = `https://vk.me/id${VK_USER_ID}?text=${message}`;
    window.open(vkUrl, '_blank');
  };

  const sendToWhatsApp = () => {
    // Номер WhatsApp в международном формате без +
    const whatsappNumber = '79787133959'; // Ваш номер
    const message = encodeURIComponent(formatMessage());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const sendToEmail = () => {
    const subject = encodeURIComponent('Новая заявка с сайта ЭнергоАльянс-Крым');
    const body = encodeURIComponent(formatMessage().replace(/\*/g, ''));
    const mailtoUrl = `mailto:info@energoalliance-crimea.ru?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.name || !formData.phone) {
      setDialogContent({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните обязательные поля: Имя и Телефон'
      });
      setShowDialog(true);
      return;
    }

    // Показываем диалог с опциями отправки
    setDialogContent({
      title: 'Заявка готова к отправке!',
      description: 'Выберите удобный способ отправки заявки:'
    });
    setShowDialog(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
          {description && (
            <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input 
                name="name"
                placeholder="Ваше имя *" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Input 
                name="phone"
                placeholder="Телефон *" 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Input 
                name="email"
                placeholder="Email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Textarea 
                name="message"
                placeholder="Опишите ваш вопрос или проект" 
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Отправить заявку
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogContent.title}</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <span>{dialogContent.description}</span>
              
              {dialogContent.title === 'Заявка готова к отправке!' && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button 
                    onClick={sendToTelegram}
                    className="bg-[#0088cc] hover:bg-[#0077b5] flex items-center justify-center gap-2"
                  >
                    <Icon name="Send" className="h-4 w-4" />
                    Telegram
                  </Button>
                  
                  <Button 
                    onClick={sendToVK}
                    className="bg-[#4376A6] hover:bg-[#3a6694] flex items-center justify-center gap-2"
                  >
                    <Icon name="MessageCircle" className="h-4 w-4" />
                    ВКонтакте
                  </Button>
                  
                  <Button 
                    onClick={sendToWhatsApp}
                    className="bg-[#25D366] hover:bg-[#20BA59] flex items-center justify-center gap-2"
                  >
                    <Icon name="Phone" className="h-4 w-4" />
                    WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={sendToEmail}
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                  >
                    <Icon name="Mail" className="h-4 w-4" />
                    Email
                  </Button>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => {
              if (dialogContent.title === 'Заявка готова к отправке!') {
                // Очищаем форму после отправки
                setFormData({ name: '', phone: '', email: '', message: '' });
              }
            }}>
              Закрыть
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ContactForm;