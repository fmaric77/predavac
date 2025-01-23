import Head from 'next/head';
import { FaEnvelope, FaPhone, FaCross } from "react-icons/fa"; // Import FaCross or any other suitable icon

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-red-100 text-black font-sans">
      <Head>
        <title>Филип Марич - Преподаватель хорватского языка</title>
        <meta name="description" content="Я Филип Марич, преподаватель хорватского языка с многолетним опытом. Моя цель - сделать изучение языка интересным и доступным для всех." />
        <meta
  name="keywords"
  content="Филип Марич, преподаватель хорватского языка, изучение хорватского языка,выучить хорватский, уроки хорватского языка, онлайн курсы хорватского языка, разговорный хорватский, хорватская грамматика, Skype уроки, Zoom уроки"
/>
        <meta name="author" content="Филип Марич" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Филип Марич - Преподаватель хорватского языка" />
        <meta property="og:description" content="Я Филип Марич, преподаватель хорватского языка с многолетним опытом. Моя цель - сделать изучение языка интересным и доступным для всех." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">Филип Марич</h1>
          <nav className="flex gap-4">
            <a href="#about" className="hover:underline" aria-label="About Me">Обо мне</a>
            <a href="#pricing" className="hover:underline" aria-label="Pricing">Цены</a>
            <a href="#contact" className="hover:underline" aria-label="Contact">Контакты</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-8 sm:p-20">
        <section className="text-center py-20 bg-white shadow-lg rounded-lg mb-16">
          <h2 className="text-5xl font-bold mb-4">Преподаватель хорватского языка</h2>
          <p className="text-xl mb-8">Добро пожаловать! Я помогаю изучать хорватский язык эффективно и увлекательно.</p>
          <div className="flex justify-center gap-4">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="mailto:fmaric77@gmail.com"
              aria-label="Contact via Email"
            >
              <FaEnvelope />
              Связаться по email
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-gray-200 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="tel:+385913008431"
              aria-label="Call"
            >
              <FaPhone />
              Позвонить: +385 91 300 8431
            </a>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-3xl font-semibold mb-4">Обо мне</h3>
          <p className="text-lg">
            Я Филип Марич, преподаватель хорватского языка с многолетним опытом. Моя цель - сделать изучение языка интересным и доступным для всех.
          </p>
          <p className="text-lg">
            В своей работе я использую современные методики и технологии, чтобы помочь студентам достичь своих целей. Я верю, что каждый может выучить новый язык, если у него есть правильные инструменты и поддержка.
          </p>
          <p className="text-lg">
            Присоединяйтесь ко мне на этом увлекательном пути изучения хорватского языка!
          </p>
        </section>

        <section id="pricing" className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Цены</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold mb-4">Индивидуальные занятия</h4>
              <p className="text-lg mb-4">15 евро/час</p>
              <p className="text-sm text-gray-600">Индивидуальный подход к каждому ученику.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold mb-4">Групповые занятия</h4>
              <p className="text-lg mb-4">10 евро/час</p>
              <p className="text-sm text-gray-600">Учитесь в группе и делитесь опытом.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold mb-4">Онлайн занятия</h4>
              <p className="text-lg mb-4">12 евро/час</p>
              <p className="text-sm text-gray-600">Занимайтесь из любой точки мира.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center mt-8">
            <h4 className="text-2xl font-bold mb-4">Специальное предложение для беженцев из Украины</h4>
            <p className="text-lg mb-4 flex items-center justify-center gap-2">
              <FaCross className="text-red-600" /> Скидка 50% на все занятия
            </p>
            <p className="text-sm text-gray-600">Пожалуйста, свяжитесь со мной для получения дополнительной информации.</p>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white py-6 shadow-md">
        <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:fmaric77@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
            Email: fmaric77@gmail.com
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="tel:+385913008431"
            aria-label="Phone"
          >
            <FaPhone />
            Телефон: +385 91 300 8431
          </a>
        </div>
      </footer>
    </div>
  );
}