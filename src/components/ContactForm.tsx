import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import emailjs from '@emailjs/browser';
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

// EmailJS настройки - ТРЕБУЕТСЯ НАСТРОЙКА!
// Для настройки EmailJS:
// 1. Зарегистрируйтесь на https://www.emailjs.com/
// 2. Создайте сервис и шаблон
// 3. Замените значения ниже на ваши
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Получите на emailjs.com
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Создайте шаблон на emailjs.com  
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Ваш публичный ключ

// Проверка настроек EmailJS
const isEmailJSConfigured = EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
                           EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
                           EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

const ContactForm = ({ title = "Оставить заявку", description }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ 
    title: '', 
    description: '',
    type: 'success' as 'success' | 'error'
  });

  const formatMessage = () => {
    const date = new Date().toLocaleString('ru-RU');
    return `
🔔 НОВАЯ ЗАЯВКА С САЙТА

📅 Дата: ${date}
👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
📧 Email: ${formData.email || 'Не указан'}
💬 Сообщение: ${formData.message || 'Не указано'}

#заявка #энергоальянскрым`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.name || !formData.phone) {
      setDialogContent({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните обязательные поля: Имя и Телефон',
        type: 'error'
      });
      setShowDialog(true);
      return;
    }

    setIsLoading(true);

    try {
      // Проверка настройки EmailJS
      if (!isEmailJSConfigured) {
        // Показываем предупреждение, если EmailJS не настроен
        console.warn('EmailJS не настроен! Для отправки форм настройте EmailJS в файле ContactForm.tsx');
        setDialogContent({
          title: 'Внимание',
          description: 'Функция отправки временно недоступна. Пожалуйста, свяжитесь с нами по телефону +7 (978) 777-77-77',
          type: 'error'
        });
        setShowDialog(true);
        setIsLoading(false);
        return;
      }
      
      // Попытка отправить через EmailJS
      if (isEmailJSConfigured) {
        // Инициализация EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY);
        
        const emailResult = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_email: 'crimea-alliance@list.ru',
            from_name: formData.name,
            from_email: formData.email || 'не указан',
            phone: formData.phone,
            message: formData.message || 'не указано',
            date: new Date().toLocaleString('ru-RU'),
            formatted_message: formatMessage()
          }
        );

        if (emailResult.status === 200) {
          setDialogContent({
            title: '✅ Заявка отправлена!',
            description: 'Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время!',
            type: 'success'
          });
          // Очищаем форму
          setFormData({ name: '', phone: '', email: '', message: '' });
        }
      } else {
        // Если EmailJS не настроен, показываем инструкции
        setDialogContent({
          title: '⚠️ Требуется настройка',
          description: `Для автоматической отправки заявок необходимо:
          
1. Зарегистрироваться на emailjs.com
2. Создать email сервис и шаблон
3. Заменить в коде ContactForm.tsx:
   - EMAILJS_SERVICE_ID
   - EMAILJS_TEMPLATE_ID
   - EMAILJS_PUBLIC_KEY

А пока вы можете связаться с нами:
📱 Телефон: +7 978 910-77-10
📧 Email: crimea-alliance@list.ru`,
          type: 'error'
        });
      }

    } catch (error) {
      console.error('Ошибка отправки:', error);
      setDialogContent({
        title: '❌ Ошибка отправки',
        description: `Не удалось отправить заявку автоматически.
        
Пожалуйста, свяжитесь с нами напрямую:
📱 Телефон: +7 978 910-77-10
📧 Email: crimea-alliance@list.ru`,
        type: 'error'
      });
    } finally {
      setIsLoading(false);
      setShowDialog(true);
    }
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>
            <div>
              <Input 
                name="email"
                placeholder="Email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <Textarea 
                name="message"
                placeholder="Опишите ваш вопрос или проект" 
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </>
              )}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className={dialogContent.type === 'error' ? 'max-w-lg' : 'max-w-md'}>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogContent.title}</AlertDialogTitle>
            <AlertDialogDescription className="whitespace-pre-line">
              {dialogContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Понятно</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ContactForm;