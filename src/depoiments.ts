export interface IDepoiments {
  name: string;
  depoiment: {
    en: string;
    pt: string;
  };
  owner: {
    name: string;
    role: {
      en: string;
      pt: string;
    };
  };
}

const depoiments: IDepoiments[] = [
  {
    name: "Fusoê",
    depoiment: {
      en: "Man, I loved it! Great idea with the photographic angles you used. It looks super clean and beautiful with the new visual identity. I loved everything!",
      pt: "Cara, adorei! Grande ideia com os ângulos fotográficos que você usou. Ficou super limpo e bonito com a nova identidade visual. Amei tudo!",
    },
    owner: {
      name: "Júlia Gusmão",
      role: {
        en: "Founder and Partner",
        pt: "Fundadora e Sócia",
      },
    },
  },
  {
    name: "Nanni Percussão",
    depoiment: {
      en: "You guys are f@#!ing awesome! You're going to crush it in the market! You're amazing, seriously! Total professional!",
      pt: "Vocês são incríveis! Vocês vão arrebentar no mercado! São maravilhosos, sério! Totalmente profissionais!",
    },
    owner: {
      name: "Arildo Nani",
      role: {
        en: "Musician and Producer",
        pt: "Músico e Produtor",
      },
    },
  },
  {
    name: "Skilo Produtora de Som",
    depoiment: {
      en: "Lima, the king of presentations! The project is awesome! Total Rock n' Roll! It turned out f@#!ing amazing!",
      pt: "Lima, o rei das apresentações! O projeto está incrível! Totalmente Rock n' Roll! Ficou f@#!ndo incrível!",
    },
    owner: {
      name: "Danilo Debien",
      role: {
        en: "Music Producer and Musician",
        pt: "Produtor Musical e Músico",
      },
    },
  },
  {
    name: "Beth Coutinho",
    depoiment: {
      en: "Wow, everyone, it turned out so beautiful! I’m completely in love! The symbol perfectly represents my mom. You nailed it. Congratulations!",
      pt: "Uau, pessoal, ficou tão lindo! Estou completamente apaixonada! O símbolo é a cara da minha mãe.Vocês acertaram em cheio. Parabéns!",
    },
    owner: {
      name: "Raquel Coutinho",
      role: {
        en: "Producer and Coordinator",
        pt: "Produtora e Coordenadora",
      },
    },
  },
  {
    name: "Maria Divina",
    depoiment: {
      en: "Truly divine! I loved everything! The colors, typography, approach, and presentation. You truly captured the essence of my brand.",
      pt: "Realmente divina! Eu amei tudo! As cores, tipografia, a abordagem, apresentação. Conseguiu capitar verdadeiramente a essência da minha marca.",
    },
    owner: {
      name: "Dolor Sit",
      role: {
        en: "Manager and Designer",
        pt: "Gerente e Designer",
      },
    },
  },
  {
    name: "Vittor Ramos",
    depoiment: {
      en: "Incredible! How a visual identity can say so much about someone’s personality. I see myself in this brand. Awesome! Strong and raw!",
      pt: "Incrível! Como uma identidade visual pode dizer tanto sobre a personalidade de alguém. Me vejo nessa marca. Foda! Forte e bruta!",
    },
    owner: {
      name: "Vittor Ramos",
      role: {
        en: "Personal Trainer",
        pt: "Personal Trainer",
      },
    },
  },
];

export { depoiments };
