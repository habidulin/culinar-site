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
    price: '12,99 €',
    description: 'Hochwertige Antep-Pistazien',
    isHighlight: true
  },
  {
    id: 'walnuss-baklava',
    name: 'Walnuss Baklava',
    category: 'baklava', 
    price: '11,99 €',
    description: 'Aromatische Walnüsse'
  },
  {
    id: 'gemischte-baklava',
    name: 'Gemischte Baklava',
    category: 'baklava',
    price: '15,99 €',
    description: 'Vielfalt unserer Spezialitäten'
  },
  {
    id: 'kadayif',
    name: 'Kadayif',
    category: 'baklava',
    price: '13,99 €',
    description: 'Feine Teigfäden mit Nüssen'
  },

  // KUMPIR VARIATIONEN
  {
    id: 'kumpir-klasik',
    name: 'Kumpir Klasik',
    category: 'kumpir',
    price: '8,50 €',
    description: 'Mit Käse, Mais, Erbsen'
  },
  {
    id: 'kumpir-spezial',
    name: 'Kumpir Spezial',
    category: 'kumpir',
    price: '9,50 €', 
    description: 'Mit allem Belag'
  },
  {
    id: 'kumpir-vegan',
    name: 'Kumpir Vegan',
    category: 'kumpir',
    price: '7,50 €',
    description: 'Pflanzliche Zutaten'
  },

  // OLIVEN SORTEN
  {
    id: 'grune-oliven',
    name: 'Grüne Oliven',
    category: 'oliven',
    price: '4,99 €',
    description: 'Mild und fruchtig'
  },
  {
    id: 'schwarze-oliven',
    name: 'Schwarze Oliven', 
    category: 'oliven',
    price: '5,99 €',
    description: 'Intensiv und würzig'
  },
  {
    id: 'gefuelle-oliven',
    name: 'Gefüllte Oliven',
    category: 'oliven',
    price: '6,99 €',
    description: 'Mit Mandel oder Paprika'
  },

  // ANTIPASTI & CREMES
  {
    id: 'hummus',
    name: 'Hummus',
    category: 'antipasti',
    price: '3,99 €',
    description: 'Cremiger Kichererbsen-Dip'
  },
  {
    id: 'baba-ghanoush',
    name: 'Baba Ghanoush',
    category: 'antipasti',
    price: '4,49 €',
    description: 'Auberginen-Spezialität'
  },
  {
    id: 'tzatziki',
    name: 'Tzatziki',
    category: 'antipasti',
    price: '3,49 €',
    description: 'Erfrischender Joghurt-Dip'
  },
  {
    id: 'pesto',
    name: 'Pesto Rosso',
    category: 'antipasti', 
    price: '4,99 €',
    description: 'Tomaten-Basilikum Creme'
  },
  {
    id: 'antipasti-teller',
    name: 'Antipasti Teller',
    category: 'antipasti',
    price: '12,99 €',
    description: 'Große Auswahl'
  },

  // FEINKOST PAKETE
  {
    id: 'feinkost-basic',
    name: 'Feinkost Paket Basic',
    category: 'antipasti',
    price: '19,99 €',
    description: 'Einstiegspaket'
  },
  {
    id: 'feinkost-premium',
    name: 'Feinkost Paket Premium',
    category: 'antipasti',
    price: '29,99 €',
    description: 'Premium Auswahl'
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
    price: 'Ab 12,99 €',
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