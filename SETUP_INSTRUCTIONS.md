# 📋 Инструкция по настройке автоматической отправки заявок

## 🎯 Цель
Настроить автоматическую отправку заявок с сайта сразу в:
- 📧 Email: kuzminv994@gmail.com
- 📱 Telegram: @Lux570lx
- 💬 VK: vk.com/f12.compet

## 📧 Вариант 1: EmailJS (Рекомендуется)

### Шаг 1: Регистрация на EmailJS
1. Перейдите на [emailjs.com](https://www.emailjs.com)
2. Зарегистрируйтесь (бесплатно до 200 писем в месяц)

### Шаг 2: Создание Email Service
1. В личном кабинете нажмите "Email Services"
2. Выберите "Gmail" или другой почтовый сервис
3. Следуйте инструкциям для подключения

### Шаг 3: Создание шаблона письма
1. Перейдите в "Email Templates"
2. Создайте новый шаблон
3. Используйте следующий шаблон:

```
Subject: Новая заявка с сайта ЭнергоАльянс-Крым

To: kuzminv994@gmail.com

Content:
{{formatted_message}}

---
Детали заявки:
Имя: {{from_name}}
Телефон: {{phone}}
Email: {{from_email}}
Сообщение: {{message}}
Дата: {{date}}
```

### Шаг 4: Получение ключей
1. В разделе "Integration" скопируйте:
   - Service ID
   - Template ID
   - Public Key

### Шаг 5: Обновление кода
В файле `src/components/ContactForm.tsx` замените:
```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Вставьте ваш Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Вставьте ваш Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Вставьте ваш Public Key
```

## 🤖 Вариант 2: Telegram Bot + VK Bot

### Для Telegram:
1. Создайте бота через @BotFather
2. Получите токен бота
3. Используйте сервис [n8n.io](https://n8n.io) или [make.com](https://make.com) для создания webhook

### Для VK:
1. Создайте сообщество VK
2. Включите сообщения сообщества
3. Получите токен доступа
4. Настройте webhook через n8n.io или make.com

## 🚀 Вариант 3: Собственный Backend

Для полноценной интеграции создайте простой backend:

```javascript
// server.js (Node.js + Express)
const express = require('express');
const nodemailer = require('nodemailer');
const TelegramBot = require('node-telegram-bot-api');
const { VK } = require('vk-io');

const app = express();
app.use(express.json());

// Настройки
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_ID = '@Lux570lx';
const VK_TOKEN = 'YOUR_VK_TOKEN';
const VK_USER_ID = 'YOUR_VK_USER_ID';

// Email транспорт
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

// Telegram бот
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

// VK
const vk = new VK({ token: VK_TOKEN });

app.post('/api/submit-form', async (req, res) => {
  const { name, phone, email, message } = req.body;
  const date = new Date().toLocaleString('ru-RU');
  
  const text = `
🔔 НОВАЯ ЗАЯВКА С САЙТА

📅 Дата: ${date}
👤 Имя: ${name}
📱 Телефон: ${phone}
📧 Email: ${email || 'Не указан'}
💬 Сообщение: ${message || 'Не указано'}

#заявка #энергоальянскрым
  `;

  try {
    // 1. Отправка на Email
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'kuzminv994@gmail.com',
      subject: 'Новая заявка с сайта ЭнергоАльянс-Крым',
      text: text
    });

    // 2. Отправка в Telegram
    await bot.sendMessage(TELEGRAM_CHAT_ID, text);

    // 3. Отправка в VK
    await vk.api.messages.send({
      user_id: VK_USER_ID,
      message: text,
      random_id: Date.now()
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## 📱 Временное решение (без backend)

Пока backend не настроен, заявки можно получать через:

1. **Форму обратной связи Google Forms**
   - Создайте форму на forms.google.com
   - Встройте её на сайт через iframe
   - Настройте уведомления на email

2. **Сервис Formspree**
   - Зарегистрируйтесь на [formspree.io](https://formspree.io)
   - Получите endpoint для формы
   - Обновите action в форме

3. **Прямые ссылки**
   - Telegram: t.me/Lux570lx
   - VK: vk.com/f12.compet
   - Email: kuzminv994@gmail.com

## ⚡ Быстрый старт

Самый простой способ - использовать EmailJS:
1. Регистрация занимает 2 минуты
2. Настройка - еще 5 минут
3. Работает без собственного сервера
4. Бесплатно до 200 писем в месяц

После настройки все заявки будут автоматически приходить на вашу почту!