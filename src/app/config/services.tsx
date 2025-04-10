/* eslint-disable no-unused-vars */
import {
  AppWindow,
  AudioLines,
  BotMessageSquare,
  Captions,
  Workflow
} from 'lucide-react';
import { Service } from "../types/Services";
import { generateArray } from 'utils/Array';

export const services: Service[] = [
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
      list: generateArray(2, {
        id: 1,
        title: 'agents.features.namekey.title',
        description: 'agents.features.namekey.description'
      })
    },
    faqs: generateArray(6, {
      id: 1,
      question: 'agents.faqs.namekey.question',
      answer: 'agents.faqs.namekey.answer'
    })
  },
  {
    id: 'custom_soft',
    icon: <AppWindow size={45} stroke='white' strokeWidth={1}/>,
    title: 'custom_soft.title',
    subtitle: 'custom_soft.subtitle',
    img_url: null,
    video_text: 'custom_soft.video_text',
    video_url: 'https://www.youtube.com/watch?v=0O2aH4XLbto',
    btn_text: 'custom_soft.btn_link',
    btn_link: '#',
    features: {
      img: '/assets/images/home-four/features-thumb.webp',
      title: 'custom_soft.features.title',
      list: generateArray(4, {
        id: 1,
        title: 'custom_soft.features.namekey.title',
        description: 'custom_soft.features.namekey.description'
      })
    },
    faqs: generateArray(4, {
      id: 2,
      question: 'custom_soft.faqs.namekey.question',
      answer: 'custom_soft.faqs.namekey.answer'
    })
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
      list: generateArray(4, {
        id: 1,
        title: 'transcripcion.features.namekey.title',
        description: 'transcripcion.features.namekey.description'
      })
    },
    faqs: generateArray(4, {
      id: 1,
      question: 'transcripcion.faqs.namekey.question',
      answer: 'transcripcion.faqs.namekey.answer'
    })  
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
      list: generateArray(4, {
        id: 1,
        title: 'voiceprint.features.namekey.title',
        description: 'voiceprint.features.namekey.description'
      })
    },
    faqs: generateArray(6, {
      id: 1,
      question: 'voiceprint.faqs.namekey.question',
      answer: 'voiceprint.faqs.namekey.answer'
    })
  },
  {
    id: 'automatization',
    icon: <Workflow size={45} stroke='white' strokeWidth={1}/>,
    title: 'automatization.title',
    subtitle: 'automatization.subtitle',
    img_url: null,
    video_text: 'Ver demo',
    video_url: 'https://www.youtube.com/watch?v=0O2aH4XLbto',
    btn_text: 'Más información',
    btn_link: '#',
    features: {
      img: '/assets/images/home-four/features-thumb.webp',
      title: 'Automatización de procesos',
      list: generateArray(1, {
        id: 1,
        title: 'automatization.features.namekey.title',
        description: 'automatization.features.namekey.description'
      })
    },
    faqs: generateArray(4, {  
      id: 1,
      question: 'automatization.faqs.namekey.question',
      answer: 'automatization.faqs.namekey.answer'
    })
  }
];
