import { AppWindow, AudioLines, BotMessageSquare, Captions } from "lucide-react";

export const services = [
  {
    id: 'agents',
    icon: <BotMessageSquare size={45} stroke='white' strokeWidth={1}/>,
    title: 'agents.title',
    subtitle: 'agents.subtitle',
    img_url: null,
    video_text: 'agents.video_text',
    video_url: 'https://www.youtube.com/watch?v=0O2aH4XLbto',
    btn_text: 'agents.btn_text',
    btn_link: '#',
    features: {
      img: '/assets/images/home-four/features-thumb.webp',
      title: 'agents.features.title',
      list: [
        {
          id: 1,
          title: 'agents.features.1.title',
          description:
            'agents.features.1.description'
        }
      ]
    },
    faqs: [
      {
        id: 1,
        question: 'agents.faqs.1.question',
        answer:
          'agents.faqs.1.answer'
      },
      {
        id: 2,
        question: 'agents.faqs.2.question',
        answer:
          'agents.faqs.2.answer'
      }
    ]
  },
  {
    id: 'custom_soft',
    icon: <AppWindow size={45} stroke='white' strokeWidth={1}/>,
    title: 'custom_soft.title',
    subtitle: 'custom_soft.subtitle',
    img_url: null,
    video_text: 'Ver demo',
    video_url: 'https://www.youtube.com/watch?v=0O2aH4XLbto',
    btn_text: 'Más información',
    btn_link: '#',
    features: {
      img: '/assets/images/home-four/features-thumb.webp',
      title: 'Automatización de procesos',
      list: [
        {
          id: 1,
          title: 'Automatización de procesos',
          description:
            'Automatiza los procesos de tu agencia y ahorra tiempo y dinero.'
        }
      ]
    },
    faqs: [
      {
        id: 1,
        question: '¿Qué es un CRM?',
        answer:
          'Un CRM es un software que te permite gestionar las relaciones con tus clientes.'
      },
      {
        id: 2,
        question: '¿Qué es un CRM?',
        answer:
          'Un CRM es un software que te permite gestionar las relaciones con tus clientes.'
      },
      {
        id: 3,
        question: '¿Qué es un CRM?',
        answer:
          'Un CRM es un software que te permite gestionar las relaciones con tus clientes.'
      }
    ]
  },
  {
    id: 'transcripcion',
    icon: <Captions size={45} stroke='white' strokeWidth={1}/>,
    title: 'transcripcion.title',
    subtitle: 'transcripcion.subtitle',
    img_url: null,
    video_text: 'Ver demo',
    video_url: 'https://www.youtube.com/watch?v=0O2aH4XLbto',
    btn_text: 'Más información',
    btn_link: '#',
    features: {
      img: '/assets/images/home-four/features-thumb.webp',
      title: 'Automatización de procesos',
      list: [
        {
          id: 1,
          title: 'Automatización de procesos',
          description:
            'Automatiza los procesos de tu agencia y ahorra tiempo y dinero.'
        }
      ]
    },
    faqs: [
      {
        id: 1,
        question: '¿Qué es un CRM?',
        answer:
          'Un CRM es un software que te permite gestionar las relaciones con tus clientes.'
      }
    ],
  },
  {
    id: 'voiceprint',
    icon: <AudioLines size={45} stroke='white' strokeWidth={1}/>,
    title: 'voiceprint.title',
    subtitle: 'voiceprint.subtitle',
    img_url: null,
    video_text: 'Ver demo',
    video_url: 'https://www.youtube.com/watch?v=0O2aH4XLbto',
    btn_text: 'Más información',
    btn_link: '#',
    features: {
      img: '/assets/images/home-four/features-thumb.webp',
      title: 'Automatización de procesos',
      list: [
        {
          id: 1,
          title: 'Automatización de procesos',
          description:  'Automatiza los procesos de tu agencia y ahorra tiempo y dinero.'
        }
      ],
    },
    faqs: [
      {
        id: 1,
        question: '¿Qué es un CRM?',
        answer: 'Un CRM es un software que te permite gestionar las relaciones con tus clientes.',
      }
    ],
  }
];
