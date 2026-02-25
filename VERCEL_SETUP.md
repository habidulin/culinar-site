# Настройка переменных окружения на Vercel

## Важно! После деплоя на Vercel нужно добавить переменную окружения:

### Шаги:

1. Откройте ваш проект на Vercel: https://vercel.com/dashboard

2. Перейдите в **Settings** → **Environment Variables**

3. Добавьте новую переменную:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_LJ59AmSE_6xx1ZDjVtT6CmiFfjnbiDCXb`
   - **Environment:** Выберите все (Production, Preview, Development)

4. Нажмите **Save**

5. **Важно!** После добавления переменной нужно сделать **Redeploy**:
   - Перейдите в **Deployments**
   - Найдите последний деплой
   - Нажмите три точки (⋯) → **Redeploy**

## Готово! 

Теперь формы будут отправлять письма на culinar.potsdam@gmx.de

---

## Альтернатива: Использовать .env в Vercel CLI

Если используете Vercel CLI, можно добавить переменную командой:

```bash
vercel env add RESEND_API_KEY
```

Затем введите значение: `re_LJ59AmSE_6xx1ZDjVtT6CmiFfjnbiDCXb`
