export interface Product {
  id: string
  name: string
  category: string
  price: string
  description: string
  image?: string
  isHighlight?: boolean
}

export const allProducts: Product[] = [
  // BAKLAVA SORTEN
  {
    id: 'pistazie-baklava',
    name: 'Pistazien Baklava',
    category: 'baklava',
    price: '3,50 €',
    description: 'Hochwertige Antep-Pistazien (pro 100g)',
    isHighlight: true,
    image: '/products/pistazien.jpg'
  },
  {
    id: 'walnuss-baklava',
    name: 'Walnuss Baklava',
    category: 'baklava',
    price: '3,00 €',
    description: 'Aromatische Walnüsse (pro 100g)',
    isHighlight: true,
    image: '/products/cevizl.jpg'
  },
  {
    id: 'fistik-sarma',
    name: 'Fistik Sarma mit Pistazien',
    category: 'baklava',
    price: '3,00 €',
    description: 'Fein gerollt mit Pistazien (pro 100g)',
    isHighlight: true,
    image: '/products/sarma.jpg'
  },
  {
    id: 'kadayif',
    name: 'Kadayif',
    category: 'baklava',
    price: '3,50 €',
    description: 'Feine Teigfäden mit Nüssen (pro 100g)',
    isHighlight: true,
    image: '/products/kadayif.jpg'
  },

  // KUMPIR VARIATIONEN
  {
    id: 'kumpir-klasik',
    name: 'Sportler Kumpir',
    category: 'kumpir',
    price: '4,99 €',
    description: 'Traditionell gefüllte Ofenkartoffel',
    isHighlight: true,
    image: '/products/kumpir.jpg'
  },
  {
    id: 'kumpir-avocado',
    name: 'Avocado Kumpir',
    category: 'kumpir',
    price: '7,50 €',
    description: 'Mit frischer Avocado und Gemüse',
    isHighlight: true,
    image: '/products/kumpir.jpg'
  },
  {
    id: 'kumpir-spezial',
    name: 'Culinar Kumpir',
    category: 'kumpir',
    price: '7,00 €',
    description: 'Unsere Haus-Spezialität',
    isHighlight: true,
    image: '/products/kumpir.jpg'
  },

  // ANTIPASTI & CREMES
  {
    id: 'avocado-creme',
    name: 'Avocado Creme',
    category: 'antipasti',
    price: '2,70 €',
    description: 'Frische Avocado-Creme (pro 100g)',
    isHighlight: true,
    image: '/products/avocado.jpg'
  },
  {
    id: 'roter-grieche',
    name: 'Roter Grieche',
    category: 'antipasti',
    price: '2,70 €',
    description: 'Mediterrane Paprika-Creme (pro 100g)',
    isHighlight: true,
    image: '/products/roter.jpg'
  },
  {
    id: 'walnuss-feigen-creme',
    name: 'Walnuss-Feigen Creme',
    category: 'antipasti',
    price: '2,70 €',
    description: 'Süß-würzige Feigencreme (pro 100g)',
    isHighlight: true,
    image: '/products/walnuss.jpg'
  },
  {
    id: 'grune-gerieche',
    name: 'Grune Gerieche',
    category: 'antipasti',
    price: '2,70 €',
    description: '(pro 100g)',
    image: '/products/grune.jpg'
  },
  {
    id: 'tomaten-creme',
    name: 'Tomaten Creme',
    category: 'antipasti',
    price: '2,50 €',
    description: '(pro 100g)',
    image: '/products/tomaten.jpg'
  },
  {
    id: 'zaziki',
    name: 'Zaziki',
    category: 'antipasti',
    price: '2,10 €',
    description: '(pro 100g)',
    image: '/products/zaziki.jpg'
  },

  // OLIVEN
  {
    id: 'oliven-mandeln',
    name: 'Oliven mit Mandeln',
    category: 'oliven',
    price: '2,30 €',
    description: 'Gefüllt mit Mandeln (pro 100g)',
    isHighlight: true,
    image: '/products/mandeln.jpg'
  },
  {
    id: 'oliven-knoblauch',
    name: 'Oliven mit Knoblauch',
    category: 'oliven',
    price: '2,30 €',
    description: 'Intensiv mit Knoblauch (pro 100g)',
    isHighlight: true,
    image: '/products/knoblauch.jpg'
  },
  {
    id: 'chili-oliven',
    name: 'Grüne Oliven mit Chili',
    category: 'oliven',
    price: '2,10 €',
    description: 'Eingelegt, kernlos (pro 100g)',
    isHighlight: true,
    image: '/products/chili.jpg'
  },
  {
    id: 'schwarze-oliven',
    name: 'Eingelegte Schwarze Oliven',
    category: 'oliven',
    price: '2,10 €',
    description: '(pro 100g)',
    isHighlight: true,
    image: '/products/eingelegte.jpg'
  },
  {
    id: 'natur-oliven',
    name: 'Oliven Grüne Natur',
    category: 'oliven',
    price: '1,80 €',
    description: 'Eingelegt, kernlos (pro 100g)',
    isHighlight: true,
    image: '/products/natur.jpg'
  }
]

export const productCategories = [
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Handgemachte türkische Baklava in Perfektion - knusprig, süß und unwiderstehlich',
    isHighlight: true
  },
  {
    id: 'kumpir',
    name: 'Kumpir',
    description: 'Gefüllte Ofenkartoffeln mit frischen Zutaten - dein perfekter Snack'
  },
  {
    id: 'oliven',
    name: 'Oliven',
    description: 'Große Auswahl an premium Oliven - von mild bis intensiv'
  },
  {
    id: 'antipasti',
    name: 'Antipasti & Cremes',
    description: 'Hausgemachte Spezialitäten und frische Dips für jeden Geschmack'
  }
]

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Pistazien Baklava',
    category: 'baklava',
    price: 'Ab 11,99 €',
    description: 'Hochwertige Pistazien in hauchdünnem Teig',
    isHighlight: true
  },
  {
    id: '2',
    name: 'Gemischte Baklava',
    category: 'baklava',
    price: 'Ab 15,99 €',
    description: 'Vielfalt unserer Baklava-Spezialitäten'
  },
  {
    id: '3',
    name: 'Feinkost Paket',
    category: 'antipasti',
    price: 'Ab 24,99 €',
    description: 'Auswahl unserer besten Antipasti'
  }
]
