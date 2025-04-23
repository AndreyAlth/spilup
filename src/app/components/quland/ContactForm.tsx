import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import api from '../../components/requests/api';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [subject, setSubject] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !message || !subject || !name || !phone) {
      setLoading(false);
      toast.info('Form needs email, subject, message, name and phone', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
      return;
    }

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      setLoading(false);
      toast.info('Email invalid', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
      return;
    }

    const resp = await api.post('/api/email', {
      message,
      email,
      subject,
      name,
      phone
    });
    if (resp.status === 200) {
      setLoading(false);
      toast.success('Correo enviado', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    }
  };
  return (
    <div className="theme-container mx-auto">
      <div className="border border-purple/10 bg-white/5 rounded-[10px] p-4 md:p-[50px]">
        <h1 className="text-[30px] tracking-tight font-semibold text-white pb-6">
          {t('contact.title')}
        </h1>
        <p className="text-paragraph mb-[30px] text-white/50">
          {t('contact.form.warning')}
        </p>
        <form
          action={() => {
            setLoading(true);
            handleSubmit()
          }}
          className="grid grid-cols-6 md:grid-cols-12 gap-[30px]"
        >
          <input
            type="text"
            placeholder={t('contact.form.name')}
            className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent text-white"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={t('contact.form.email')}
            className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent text-white"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder={t('contact.form.phone')}
            className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent text-white"
            onChange={e => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder={t('contact.form.subject')}
            className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent text-white"
            onChange={e => setSubject(e.target.value)}
          />
          <textarea
            name=""
            placeholder={t('contact.form.message')}
            className="col-span-6 md:col-span-12 focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent text-white h-[83px]"
            onChange={e => setMessage(e.target.value)}
          ></textarea>

          <div className="col-span-6 md:col-span-12">
            <button
              role="submit"
              className={`home-two-btn-bg py-2.5 group bg-purple border-purple ${
                loading && 'cursor-not-allowed'
              }`}
              disabled={loading}
            >
              <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter">
                {loading ? (
                  <div className="flex flex-row items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  t('contact.form.submit')
                )}
              </span>
              <svg
                className="relative z-10"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 group-hover:stroke-purple"
                  d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
