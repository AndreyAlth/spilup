export interface FeatureItem {
    id: number;
    title: string;
    description: string;
}

export interface Feature {
  img: string | null;
  title: string;
  list: FeatureItem[];
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string | null;
  img_url: string | null;
  video_text: string | null;
  video_url: string | null;
  btn_text: string | null;
  btn_link: string;
  features: Feature;
  faq: Faq[];
}
