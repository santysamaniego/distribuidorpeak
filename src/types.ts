export interface Product {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  highlighted: boolean;
  specs: { label: string; value: string }[];
  image: string;
}

export interface GroupedProduct {
  baseName: string;
  categoryId: string;
  description: string;
  highlighted: boolean;
  image: string;
  varieties: Product[];
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormInput {
  name: string;
  lastName: string;
  phone: string;
  message: string;
}
