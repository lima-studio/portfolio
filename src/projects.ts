import slug from "slug";

export interface IProjects {
  name: string;
  description: {
    en: string;
    pt: string;
  };
  about: {
    en: string;
    pt: string;
  };
  brand: string;
  category: {
    en: string;
    pt: string;
  };
  country: {
    en: string;
    pt: string;
  };
  primary_image_url: string;
  images: string[];
  slug: string;
  homepage?: boolean;
}

const projectsWithoutSlug: IProjects[] = [
  {
    name: "Ellaria - SP",
    description: {
      en: "Ellaria is more than a brand; is a movement that celebrates elegance and transformation in the universe of sexuality.",
      pt: "Ellaria é mais que uma marca; é um movimento que celebra a elegância e a transformação no universo da sexualidade.",
    },
    about: {
      en: `Ellaria is more than a brand; is a movement that celebrates elegance and transformation in the universe of sexuality. Inspired by the Protea flower, a symbol of courage, hope and change, Ellaria brings a new perspective to the erotic market: sophisticated products and authentic, sensual and “sexy without being vulgar” communication.

Our curation includes vibrators, lubricants, massage candles and accessories, carefully selected to enrich couples' sexual lives, offering well-being and strengthening the connection between two. Combining luxury, boldness and transparency, Ellaria breaks taboos and promotes open dialogue, valuing pleasure and well-being as pillars for healthy and lasting relationships.

Connect with Ellaria and discover the pleasure of intimacy elevated to the highest level of sophistication and self-confidence.

`,
      pt: `Ellaria é mais que uma marca; é um movimento que celebra a elegância e a transformação no universo da sexualidade. Inspirada na flor Protea, símbolo de coragem, esperança e mudança, Ellaria traz uma nova perspectiva ao mercado erótico: produtos sofisticados e uma comunicação autêntica, sensual e “sexy sem ser vulgar”.

Nossa curadoria inclui vibradores, lubrificantes, velas para massagem e acessórios, cuidadosamente selecionados para enriquecer a vida sexual de casais, oferecendo bem-estar e fortalecendo a conexão a dois. Combinando luxo, ousadia e transparência, Ellaria quebra tabus e promove o diálogo aberto, valorizando o prazer e o bem-estar como pilares para relacionamentos saudáveis e duradouros.

Conecte-se com Ellaria e descubra o prazer da intimidade elevada ao mais alto nível de sofisticação e autoconfiança.`,
    },
    brand: "Ellaria - São Paulo",
    category: {
      en: "Self-knowledge & Pleasure",
      pt: "Autoconhecimento & Prazer",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Ellaria/01.png",
    images: [
      "/projects/Ellaria/02.png",
      "/projects/Ellaria/03.gif",
      "/projects/Ellaria/04.png",
      "/projects/Ellaria/05.png",
      "/projects/Ellaria/06.gif",
      "/projects/Ellaria/08.png",
      "/projects/Ellaria/09.png",
      "/projects/Ellaria/10.png",
      "/projects/Ellaria/11.png",
      "/projects/Ellaria/12.png",
      "/projects/Ellaria/13.png",
      "/projects/Ellaria/14.png",
      "/projects/Ellaria/15.png",
      "/projects/Ellaria/16.png",
      "/projects/Ellaria/17.png",
      "/projects/Ellaria/18.png",
      "/projects/Ellaria/19.png",
      "/projects/Ellaria/20.png",
      "/projects/Ellaria/21.png",
      "/projects/Ellaria/22.png",
      "/projects/Ellaria/23.png",
      "/projects/Ellaria/25.gif",
      "/projects/Ellaria/26.png",
      "/projects/Ellaria/27.gif",
    ],
    slug: "",
  },
  {
    name: "AR TERAPIA",
    description: {
      en: "Ar Terapias Complementares is a company dedicated to transforming the lives of its clients through therapies that balance body, mind and spirit.",
      pt: "Ar Terapias Complementares é uma empresa dedicada a transformar a vida de seus clientes através de terapias que equilibram corpo, mente e espírito.",
    },
    about: {
      en: `Ar Terapias Complementares is a company dedicated to transforming the lives of its clients through therapies that balance body, mind and spirit. Our approach works with awareness of breathing, promoting integral health through techniques such as needle-free acupuncture (Acutonics), sacred massage, rebirth (Bioflow), shiatsu, systemic constellation and microphysiotherapy. With a focus on alleviating trauma, promoting self-knowledge and providing a lighter life, our difference lies in the combination of experience, innovation and care, offering a safe space for personal and emotional evolution.`,
      pt: `Ar Terapias Complementares é uma empresa dedicada a transformar a vida de seus clientes através de terapias que equilibram corpo, mente e espírito. Nossa abordagem trabalha com a consciência da respiração, promovendo saúde integral por meio de técnicas como acupuntura sem agulhas (Acutonics), massagem sagrada, renascimento (Bioflow), shiatsu, constelação sistêmica e microfisioterapia. Com foco em aliviar traumas, promover o autoconhecimento e proporcionar uma vida mais leve, nosso diferencial está na combinação de experiência, inovação e cuidado, oferecendo um espaço seguro para a evolução pessoal e emocional.`,
    },
    brand: "Ar Terapia",
    category: {
      en: "Health and Wellbeing",
      pt: "Saúde e Bem-Estar",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url:
      "/projects/Projeto - Ar Terapias/logo preferencial verde.png",

    slug: "",
    images: [
      "/projects/Projeto - Ar Terapias/01_image.gif",
      "/projects/Projeto - Ar Terapias/02_image.png",
      "/projects/Projeto - Ar Terapias/03_image.png",
      "/projects/Projeto - Ar Terapias/04_image.png",
      "/projects/Projeto - Ar Terapias/05_image.png",
      "/projects/Projeto - Ar Terapias/06_image.png",
      "/projects/Projeto - Ar Terapias/07_image.png",
      "/projects/Projeto - Ar Terapias/08_image.png",
      "/projects/Projeto - Ar Terapias/09_image.png",
      "/projects/Projeto - Ar Terapias/10_image.png",
      "/projects/Projeto - Ar Terapias/11_image.png",
      "/projects/Projeto - Ar Terapias/12_image.png",
      "/projects/Projeto - Ar Terapias/13_image.png",
      "/projects/Projeto - Ar Terapias/14_image.gif",
      "/projects/Projeto - Ar Terapias/15_image.gif",
      "/projects/Projeto - Ar Terapias/16_image.png",
      "/projects/Projeto - Ar Terapias/17_image.gif",
    ],
  },
  {
    name: "Sensatta Marketing®",
    description: {
      en: "Sensatta Marketing is a marketing and communications agency that stands out for its constant search for excellence in service and the results it provides.",
      pt: "A Sensatta Marketing é uma agência de marketing e comunicação que se diferencia pela busca constante da excelência no atendimento e pelos resultados que proporciona.",
    },
    about: {
      en: `Sensatta Marketing is a marketing and communications agency that stands out for its constant search for excellence in service and the results it provides. The name "Sensatta" comes from the term “sensatez”, which reflects the brand's proposal: acting with balance, common sense and wisdom in all its actions, always focused on creating authentic connections and generating results for its clients.

The Sensatta® symbol was designed based on a modular grid, bringing flexibility and precision to the design. It is a representation of the letter "S", the initial of the word Sensatta®, combined with the image of an owl. The owl, known for being a symbol of wisdom and reflection, was chosen for its look that is sometimes serious and serious, sometimes cute and charismatic, conveying authority, intelligence and empathy, which is the essence of the brand.

The owl has a raised eyebrow, a detail that further reinforces the aspect of wisdom, making the symbol unique and expressive.

`,
      pt: `A Sensatta Marketing é uma agência de marketing e comunicação que se diferencia pela busca constante da excelência no atendimento e pelos resultados que proporciona. O nome "Sensatta" vem do termo “sensatez”, que reflete a proposta da marca: agir com equilíbrio, bom senso e sabedoria em todas as suas ações, sempre focada em criar conexões autênticas e gerar resultados para os seus clientes.

O símbolo da Sensatta® foi projetado com base em um grid modular, trazendo flexibilidade e precisão ao design. Ele é uma representação da letra "S", inicial da palavra Sensatta®, combinada com a imagem de uma coruja. A coruja, conhecida por ser um símbolo de sabedoria e reflexão, foi escolhida por seu olhar ora compenetrado e sério, ora fofa e carismática, transmitindo autoridade, inteligência, empatia que é a essência da marca.

A coruja possui uma sobrancelha levantada, um detalhe que reforça ainda mais o aspecto de sabedoria, tornando o símbolo único e expressivo.`,
    },
    brand: "Sensatta MKT",
    category: {
      en: "Marketing",
      pt: "Marketing",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Sensatta MKT/01.png",
    slug: "",
    homepage: true,
    images: [
      "/projects/Sensatta MKT/02.png",
      "/projects/Sensatta MKT/03.png",
      "/projects/Sensatta MKT/04.gif",
      "/projects/Sensatta MKT/05.png",
      "/projects/Sensatta MKT/06.png",
      "/projects/Sensatta MKT/07.png",
      "/projects/Sensatta MKT/08.png",
      "/projects/Sensatta MKT/09.png",
      "/projects/Sensatta MKT/10.png",
      "/projects/Sensatta MKT/11.png",
      "/projects/Sensatta MKT/12.png",
      "/projects/Sensatta MKT/13.png",
      "/projects/Sensatta MKT/14.png",
      "/projects/Sensatta MKT/15.png",
      "/projects/Sensatta MKT/16.png",
      "/projects/Sensatta MKT/17.png",
      "/projects/Sensatta MKT/18.png",
      "/projects/Sensatta MKT/19.png",
      "/projects/Sensatta MKT/20.png",
      "/projects/Sensatta MKT/21.png",
      "/projects/Sensatta MKT/22.png",
      "/projects/Sensatta MKT/23.png",
    ],
  },
  {
    name: "Marco Souza",
    description: {
      en: "Agility, dynamism and flexibility are fundamental pillars in the work of Marco Souza, a talented 24-year-old Motion Designer graduated from the Federal University of Minas Gerais (UFMG). With more than 4 years of experience in the audiovisual universe, Marco stands out for his versatility and creativity in delivering innovative solutions in motion design.",
      pt: "Agilidade, dinamismo e flexibilidade são pilares fundamentais no trabalho de Marco Souza, um talentoso Motion Designer de 24 anos formado pela Universidade Federal de Minas Gerais (UFMG). Com mais de 4 anos de experiência no universo audiovisual, Marco se destaca por sua versatilidade e criatividade na entrega de soluções inovadoras em motion design.",
    },
    about: {
      en: `Agility, dynamism and flexibility are fundamental pillars in the work of Marco Souza, a talented 24-year-old Motion Designer graduated from the Federal University of Minas Gerais (UFMG). With more than 4 years of experience in the audiovisual universe, Marco stands out for his versatility and creativity in delivering innovative solutions in motion design. As a generalist designer, Marco explores a wide range of possibilities, from simple edits to complex 3D animations, fluidly navigating different fields of design. Its ability to adapt to each project guarantees the creation of unique and impactful pieces that capture the essence of each visual narrative. To represent these values, a monogram was developed using the Nokia Expanded Regular typography, with the initials "M" and "S". The choice of this expansive font reinforces the concept of movement and dynamism, visually translating the energy and flexibility that define Marco's style. MARCO SOUZA / MOTION DESIGNER / VISUAL IDENTITY / 2024`,
      pt: `Agilidade, dinamismo e flexibilidade são pilares fundamentais no trabalho de Marco Souza, um talentoso Motion Designer de 24 anos formado pela Universidade Federal de Minas Gerais (UFMG). Com mais de 4 anos de experiência no universo audiovisual, Marco se destaca por sua versatilidade e criatividade na entrega de soluções inovadoras em motion design. Como um designer generalista, Marco explora uma ampla gama de possibilidades, desde edições simples até animações 3D complexas, navegando com fluidez por diferentes campos do design. Sua capacidade de adaptar-se a cada projeto garante a criação de peças únicas e impactantes, que capturam a essência de cada narrativa visual. Para representar esses valores, foi desenvolvido um monograma utilizando a tipografia Nokia Expanded Regular, com as iniciais "M" e "S". A escolha dessa fonte expansiva reforça o conceito de movimento e dinamismo, traduzindo visualmente a energia e flexibilidade que definem o estilo de Marco. MARCO SOUZA  /  MOTION DESIGNER / IDENTITY VISUAL / 2024`,
    },
    brand: "Marco Souza",
    category: {
      en: "Motion Design",
      pt: "Motion Design",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Marco Souza/01.gif",
    slug: "",
    homepage: true,
    images: [
      "/projects/Marco Souza/02.png",
      "/projects/Marco Souza/03.png",
      "/projects/Marco Souza/04.png",
      "/projects/Marco Souza/05.gif",
      "/projects/Marco Souza/06.png",
      "/projects/Marco Souza/07.gif",
      "/projects/Marco Souza/08.gif",
      "/projects/Marco Souza/09.gif",
      "/projects/Marco Souza/10.png",
      "/projects/Marco Souza/11.png",
      "/projects/Marco Souza/12.png",
      "/projects/Marco Souza/13.gif",
      "/projects/Marco Souza/13.mp4",
      "/projects/Marco Souza/14.png",
      "/projects/Marco Souza/15.gif",
      "/projects/Marco Souza/16.gif",
      "/projects/Marco Souza/10.png",
      "/projects/Marco Souza/18.gif",
    ],
  },
];

export const projects = projectsWithoutSlug.map((project) => {
  return {
    ...project,
    slug: slug(project.name),
  };
});
