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
    name: "Padaria Cravo e Canela",
    description: {
      en: "Padaria Cravo e Canela is a traditional family bakery and confectionery. Located in the region of Mateus Leme, a Brazilian municipality in the state of Minas Gerais, Southeast of the country. It belongs to the Metropolitan Region of Belo Horizonte, located about 60 km west of the state capital.",
      pt: "A Padaria e Confeitaria Cravo e Canela é uma padaria e confeitaria familiar tradicional. Localizada na região de Mateus Leme, município brasileiro no estado de Minas Gerais, Região Sudeste do país. Pertence à Região Metropolitana de Belo Horizonte, estando situada a cerca de 60 km a oeste da capital do estado.",
    },
    about: {
      en: `With over 20 years of existence, Padaria Cravo e Canela has specialized in Minas Gerais products. "Quitandas" and various other products are part of its offerings. In partnership with Easy Tráfego agency, we developed a visual identity that reinforces the company's new positioning and addresses the new architectural conception of the physical space.
    The sound of the train's whistle is heard at Cravo e Canela Bakery. It signals the arrival and departure of people and their stories, the coming and going of loads. Cravo (clove) and Canela (cinnamon) are spices that sharpen the senses of smell and taste. The time has come to collect memories!`,
      pt: `Com mais de 20 anos de existência, a Padaria e Confeitaria Cravo e Canela vem se especializando em produtos mineiros. "Quitandas" e diversos outros produtos no seguimento. Em parceria com a agência Easy Tráfego, desenvolvemos uma identidade visual que reforça o novo posicionamento da empresa e aborda a nova concepção arquitetônica do espaço físico.
    A Padaria Cravo e Canela ouve o apito do trem. É o aviso da hora das chegadas e partidas das pessoas e suas histórias, do vai e vem das cargas. Cravo e Canela são especiarias. Aguçam os sentidos do olfato e paladar. Chegou a hora de colecionar memórias!`,
    },
    brand: "Padaria Cravo e Canela",
    category: {
      en: "Food",
      pt: "Alimentação",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url:
      "/projects/Padaria Cravo e Canela/02_PCC_cartãopostal_1400x800.gif",
    slug: "",
    images: [
      "/projects/Padaria Cravo e Canela/thuimbnails_conceito.gif",
      "/projects/Padaria Cravo e Canela/thuimbnails_tipografia.gif",
      "/projects/Padaria Cravo e Canela/thumbnails_avatar+destques.jpg",
      "/projects/Padaria Cravo e Canela/thumbnails_avental+pratos.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_Capa.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_cartão de vistitas.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_conceito.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_conceito_07.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_conceito_#05.jpg",
      "/projects/Padaria Cravo e Canela/thumbnails_copo+embalagem.jpg",
      "/projects/Padaria Cravo e Canela/thumbnails_coverphoto.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_diretrizes.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_diretrizes copy 2.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_grafismo.jpg",
      "/projects/Padaria Cravo e Canela/thumbnails_posts.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_saco.jpg",
      "/projects/Padaria Cravo e Canela/Thumbnails_sacocumprido.jpg",
      "/projects/Padaria Cravo e Canela/thumbnails_stories.jpg",
    ],
  },
  {
    name: "Ar Terapias",
    description: {
      en: "Ar Terapias Complementares is a company dedicated to transforming the lives of its clients through therapies that balance body, mind and spirit.",
      pt: "Ar Terapias Complementares é uma empresa dedicada a transformar a vida de seus clientes através de terapias que equilibram corpo, mente e espírito.",
    },
    about: {
      en: `Our approach works with health awareness, promoting integral health through techniques such as needle-free acupuncture (Acutonics), sacred massage, rebirth (Bioflow), shiatsu, systemic constellation and microphysiotherapy. With a focus on alleviating trauma, promoting self-knowledge and providing a lighter life, our difference lies in the combination of experience, innovation and care, offering a safe space for personal and emotional evolution. We breathe how we live and we live how we breathe. Our work proposes a transformation in the way of living! To this end, the AIR we breathe is fundamental. We help change the energy around each person who comes to us, so that the air becomes lighter and a happier life. AR (element) + A (initial) + circular movement with hands.`,
      pt: `Nossa abordagem trabalha com a consciência da respiração, promovendo saúde integral por meio de técnicas como acupuntura sem agulhas (Acutonics), massagem sagrada, renascimento (Bioflow), shiatsu, constelação sistêmica e microfisioterapia. Com foco em aliviar traumas, promover o autoconhecimento e proporcionar uma vida mais leve, nosso diferencial está na combinação de experiência, inovação e cuidado, oferecendo um espaço seguro para a evolução pessoal e emocional. Respiramos como vivemos e vivemos como respiramos. Nosso trabalho propõe uma transformação no modo de viver! Para tanto, o AR que respiramos é fundamental. Ajudamos a mudar a energia em torno de cada um que nos procura, para que o AR fique mais leve e a vida mais feliz. AR (elemento)  +  A (inicial)  +  movimento circulares com mãos.`,
    },
    brand: "Ar Terapias",
    category: {
      en: "Therapy",
      pt: "Terapia",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Projeto - Ar Terapias/logo_preferêncial.gif",
    slug: "",
    images: [
      "/projects/Projeto - Ar Terapias/conceito.png",
      "/projects/Projeto - Ar Terapias/conceito_ecobag.png",
      "/projects/Projeto - Ar Terapias/consultório.png",
      "/projects/Projeto - Ar Terapias/frases conceito.png",
      "/projects/Projeto - Ar Terapias/grid.png",
      "/projects/Projeto - Ar Terapias/logo.png",
      "/projects/Projeto - Ar Terapias/logo-1.png",
      "/projects/Projeto - Ar Terapias/logo-2.png",
      "/projects/Projeto - Ar Terapias/massagem.png",
      "/projects/Projeto - Ar Terapias/papelaria.png",
      "/projects/Projeto - Ar Terapias/papelaria 02.png",
      "/projects/Projeto - Ar Terapias/quadros.png",
      "/projects/Projeto - Ar Terapias/selo_grafismo.png",
      "/projects/Projeto - Ar Terapias/slogan.png",
      "/projects/Projeto - Ar Terapias/tipografia.png",
      "/projects/Projeto - Ar Terapias/toalha_sabonete.png",
    ],
  },
  {
    name: "Ellaria Sexual Care",
    description: {
      en: "Ellaria is more than a brand; it`s a movement that celebrates elegance and transformation in the world of sexuality.",
      pt: "Ellaria é mais que uma marca; é um movimento que celebra a elegância e a transformação no universo da sexualidade.",
    },
    about: {
      en: `Inspired by the Protea flower, a symbol of courage, hope, and change, Ellaria brings a fresh perspective to the erotic market: sophisticated products and an authentic, sensual communication that’s “sexy without being vulgar.”
            Our curated selection includes vibrators, lubricants, massage candles, and accessories, carefully chosen to enhance the sexual well-being of couples, fostering intimacy and connection. Blending luxury, boldness, and transparency, Ellaria breaks down taboos and promotes open dialogue, valuing pleasure and well-being as pillars for healthy, lasting relationships.
            
            Connect with Ellaria and experience intimacy elevated to the highest level of sophistication and self-confidence.
            `,
      pt: `Inspirada na flor Protea, símbolo de coragem, esperança e mudança, Ellaria traz uma nova perspectiva ao mercado erótico: produtos sofisticados e uma comunicação autêntica, sensual e “sexy sem ser vulgar”.

            Nossa curadoria inclui vibradores, lubrificantes, velas para massagem e acessórios, cuidadosamente selecionados para enriquecer a vida sexual de casais, oferecendo bem-estar e fortalecendo a conexão a dois. Combinando luxo, ousadia e transparência, Ellaria quebra tabus e promove o diálogo aberto, valorizando o prazer e o bem-estar como pilares para relacionamentos saudáveis e duradouros.
            
            Conecte-se com Ellaria e descubra o prazer da intimidade elevada ao mais alto nível de sofisticação e autoconfiança.`,
    },
    brand: "Ellaria Sexual Care",
    category: {
      en: "Sexshop, Sexuality",
      pt: "Sexshop, Sexualidade",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Ellaria Sexual Care/01.png",
    images: [
      "/projects/Ellaria Sexual Care/02.png",
      "/projects/Ellaria Sexual Care/03.gif",
      "/projects/Ellaria Sexual Care/04.png",
      "/projects/Ellaria Sexual Care/05.png",
      "/projects/Ellaria Sexual Care/06.gif",
      "/projects/Ellaria Sexual Care/08.png",
      "/projects/Ellaria Sexual Care/09.png",
      "/projects/Ellaria Sexual Care/10.png",
      "/projects/Ellaria Sexual Care/11.png",
      "/projects/Ellaria Sexual Care/12.png",
      "/projects/Ellaria Sexual Care/13.png",
      "/projects/Ellaria Sexual Care/14.png",
      "/projects/Ellaria Sexual Care/15.png",
      "/projects/Ellaria Sexual Care/16.png",
      "/projects/Ellaria Sexual Care/17.png",
      "/projects/Ellaria Sexual Care/18.png",
      "/projects/Ellaria Sexual Care/19.png",
      "/projects/Ellaria Sexual Care/20.png",
      "/projects/Ellaria Sexual Care/21.png",
      "/projects/Ellaria Sexual Care/22.png",
      "/projects/Ellaria Sexual Care/23.png",
      "/projects/Ellaria Sexual Care/25.gif",
      "/projects/Ellaria Sexual Care/26.png",
      "/projects/Ellaria Sexual Care/27.gif",
    ],
    slug: "",
  },
  {
    name: "Lima Stdio",
    description: {
      en: "Lima Stdio is a studio specialized in visual identity management, offering comprehensive design solutions from concept to final execution.",
      pt: "Lima Stdio é um estúdio especializado em gestão de identidade visual, oferecendo soluções completas de design, desde a concepção até a execução final.",
    },
    about: {
      en: " Our focus is on creating unique and consistent visual identities that reflect the essence of each brand. With a creative and strategic approach, we develop logos, graphic materials, and visual elements that strengthen our clients' presence in the market. Whether for new businesses or established brands, Lima Stdio transforms ideas into impactful visuals, always aligning design and functionality to communicate with clarity and style.",
      pt: "Nosso foco é criar identidades visuais únicas e consistentes, que refletem a essência de cada marca. Com uma abordagem criativa e estratégica, desenvolvemos logotipos, materiais gráficos e elementos visuais que fortalecem a presença de nossos clientes no mercado. Seja para empresas que estão começando ou para marcas consolidadas, a Lima Stdio transforma ideias em visuais impactantes, sempre alinhando design e funcionalidade para comunicar com clareza e estilo.",
    },
    brand: "Lima Stdio",
    category: {
      en: "Technology",
      pt: "Tecnologia",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Lima Stdio/thumbnails_poster.jpg",
    slug: "",
    images: [
      "/projects/Lima Stdio/thumbnails_blusa.jpg",
      "/projects/Lima Stdio/thumbnails_Capa.jpg",
      "/projects/Lima Stdio/thumbnails_cores.jpg",
      "/projects/Lima Stdio/thumbnails_Estúdio.jpg",
      "/projects/Lima Stdio/thumbnails_GeraçãodeAlternativa.jpg",
      "/projects/Lima Stdio/thumbnails_Grid.jpg",
      "/projects/Lima Stdio/thumbnails_headphone.jpg",
      "/projects/Lima Stdio/thumbnails_instagram.jpg",
      "/projects/Lima Stdio/thumbnails_logo.jpg",
      "/projects/Lima Stdio/thumbnails_moodboard.jpg",
      "/projects/Lima Stdio/thumbnails_papelaria_01.jpg",
      "/projects/Lima Stdio/thumbnails_papelaria_02.jpg",
      "/projects/Lima Stdio/thumbnails_papelaria_03.jpg",
      "/projects/Lima Stdio/thumbnails_planejamento.jpg",
      "/projects/Lima Stdio/thumbnails_portfólio.jpg",
      "/projects/Lima Stdio/thumbnails_simbolo.jpg",
      "/projects/Lima Stdio/thumbnails_tipografia.jpg",
      "/projects/Lima Stdio/thumbnails_versões.gif",
      "/projects/Lima Stdio/thumbnails_versões.png",
    ],
  },
  {
    name: "Skilo Produtora de Som",
    description: {
      en: "Skilo Produtora de Som is a sound production company dedicated to delivering high-quality audio solutions for a wide range of projects. ",
      pt: "Skilo Produtora de Som é uma empresa dedicada a oferecer soluções de áudio de alta qualidade para uma ampla variedade de projetos. ",
    },
    about: {
      en: "From sound design and music composition to recording and mixing, we bring creativity and technical expertise to every production. Our team works closely with clients to craft immersive and captivating soundscapes that enhance storytelling, whether for films, commercials, podcasts, or any other audio-visual media. At Skilo Produtora de Som, we transform ideas into powerful sound experiences, ensuring that each project resonates with its audience in a unique and impactful way.",
      pt: "Desde design de som e composição musical até gravação e mixagem, trazemos criatividade e expertise técnica para cada produção. Nossa equipe trabalha de perto com os clientes para criar paisagens sonoras imersivas e cativantes que potencializam a narrativa, seja para filmes, comerciais, podcasts ou qualquer outro meio audiovisual. Na Skilo Produtora de Som, transformamos ideias em experiências sonoras poderosas, garantindo que cada projeto ressoe com seu público de maneira única e impactante.",
    },
    brand: "Skilo Produtora de Som",
    category: {
      en: "Sound Production",
      pt: "Produção de Som",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url:
      "/projects/Skilo Produtora de Som/thumbnails_conceitual_3.jpg",
    slug: "",
    images: [
      "/projects/Skilo Produtora de Som/coverphoto_Skilo.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_antes e depois.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_cartão de visitas.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_conceito4.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_conceito5.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_conceitual.png",
      "/projects/Skilo Produtora de Som/thumbnails_conceitual_2.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_conceitual_5.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_conceitual_43.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_conceitual copy 2.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_cores.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_grafismo.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_grid.gif",
      "/projects/Skilo Produtora de Som/thumbnails_grid.png",
      "/projects/Skilo Produtora de Som/thumbnails_papelaria.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_papelaria_2.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_simbolo.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_slogan.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_social media.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_social media copiar.jpg",
      "/projects/Skilo Produtora de Som/thumbnails_versões.jpg",
    ],
  },
  {
    name: "Nanni Percussão",
    description: {
      en: "Nanni Percussão is a brand specialized in crafting handmade percussion instruments, blending tradition and innovation in every piece.",
      pt: "Nanni Percussão é uma marca especializada na criação de instrumentos de percussão artesanais, combinando tradição e inovação em cada peça. ",
    },
    about: {
      en: "With a commitment to sound quality and authenticity, our instruments are carefully crafted using selected materials and refined techniques to deliver unique and rich tones. Whether for professional musicians or percussion enthusiasts, Nanni Percussão offers an authentic musical experience, where every beat resonates with excellence and a passion for music. We transform rhythm into art, helping bring compositions to life with precision and soul.",
      pt: "Com um compromisso com a qualidade sonora e a autenticidade, nossos instrumentos são feitos à mão, utilizando materiais selecionados e técnicas refinadas para oferecer timbres únicos e profundos. Seja para músicos profissionais ou entusiastas da percussão, a Nanni Percussão proporciona uma experiência musical autêntica, onde cada batida é marcada por excelência e paixão pela música. Transformamos ritmo em arte, ajudando a dar vida a composições com precisão e alma.",
    },
    brand: "Nanni Percussão",
    category: {
      en: "Percussion",
      pt: "Percussão",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Nanni Percussão/Thumbnails_Capa.jpg",
    slug: "",
    images: [
      "/projects/Nanni Percussão/Thumbnails_cartãodevisitas.jpg",
      "/projects/Nanni Percussão/Thumbnails_cartãodevisitas2.jpg",
      "/projects/Nanni Percussão/Thumbnails_conceito.jpg",
      "/projects/Nanni Percussão/Thumbnails_conceito02.jpg",
      "/projects/Nanni Percussão/Thumbnails_conceito03.jpg",
      "/projects/Nanni Percussão/Thumbnails_conceito4.jpg",
      "/projects/Nanni Percussão/Thumbnails_cores.jpg",
      "/projects/Nanni Percussão/Thumbnails_grafismos.jpg",
      "/projects/Nanni Percussão/Thumbnails_grid.jpg",
      "/projects/Nanni Percussão/Thumbnails_Nanni.jpg",
      "/projects/Nanni Percussão/Thumbnails_poster.jpg",
      "/projects/Nanni Percussão/Thumbnails_poster2.jpg",
      "/projects/Nanni Percussão/Thumbnails_promocionais.jpg",
      "/projects/Nanni Percussão/Thumbnails_tipografia.jpg",
      "/projects/Nanni Percussão/Thumbnails_website.jpg",
      "/projects/Nanni Percussão/Thumbnails_websitemobile.jpg",
      "/projects/Nanni Percussão/website.jpg",
      "/projects/Nanni Percussão/Website_NanniPercussão®.jpg",
    ],
  },
  {
    name: "Festival Novos Encontros",
    description: {
      en: "Project executed through the State Culture Incentive Law - CA 2018.13607.0352 + CA 2018.13607.0337. Sponsored by the company AcelorMittal. It brings as a central concept the ideal of: new encounters. Rhythms, people, generations, ideologies, customs and expressions.",
      pt: "Projeto executado por meio da Lei Estadual de Incentivo à Cultura - CA 2018.13607.0352 + CA 2018.13607.0337. Patrocinado pela empresa AcelorMittal. Trás como conceito central a ideal de: novos encontros. Ritmos, pessoas, gerações, ideologias, costumes e expressões.",
    },
    about: {
      en: `A celebration of day and night in a democratic and accessible place for everyone! Held at Américo Renné Giannetti Municipal Park, the Novos Encontros festival invites influential artists of our time who have made and continue to make history in Brazilian popular music. The program provided entertainment for a diverse age range, from children and teenagers to adults and seniors. Promoting two days of festivities at affordable prices, the first edition of the Novos Encontros Festival brought joy to the weekend of Belo Horizonte residents with great music, art, and culture. To bring this concept to life, Uhuru Comunicação agency hired me to design and execute the entire visual identity and its applications. We created a logo by combining two similar and popular fonts, Nunito Font Family and Ultraprint, both featuring friendly characteristics, easy readability, and legibility, which reflect the idea of "encounters." This concept continued in the creation of a pattern of instruments using image compositing techniques, arranged to intersect within their respective vibrant, saturated, natural-colored rectangles, combined with a pastel and sober tone. The result evokes a sense of joy, outdoor fun, and connection with the city's nature, celebrating diversity over two days of peaceful afternoons and energetic nights. *The choice of colors also aligns with the sponsor company's visual identity. Sponsorship: ArcelorMittal. Production: Através Gestão Cultural and Pira Cultural. Execution: Cingulado.`,
      pt: `Celebração do dia e da noite em um lugar democrático, acessível e para todos! Realizado no Parque Municipal Américo Renné Giannetti, o festival Novos Encontros convida artistas expressivos de nosso tempo que fazem e fizeram história na música popular brasileira. Uma programação que possibilitou o divertimento de toda uma faixa etária diversa, da criança ao adolescente, do adulto à melhor idade. Promovendo dois dias de festa à preços populares, o Festival Novos Encontros em sua primeira edição, alegrou o final de semana dos belorizontinos com muita música boa, arte e cultura. E para dar vida à esse conceito, a agência Uhuru Comunicação me contratou para idealização e execução de toda identidade visual e suas aplicações. Criamos um logotipo a partir da junção de duas fontes semelhantes e populares, Nunito Font Family e a Ultraprint, fontes com características mais amigáveis, de fácil leitura e legibilidade, que trazem essa ideia de "encontros". Essa ideia segue na criação de um padrão de instrumentos usando a técnica de trucagem de imagens dispostas de forma a se encontrarem em seus respectivos retângulos, de cores vibrantes, saturadas, naturais, unidas à uma cor pastel e sóbria. Imprimindo um tom de alegria, diversão ao ar livre, em contato com a natureza da cidade, celebrando a diversidade em dois dias de tardes tranquilas e uma noites energéticas. *A escolha das cores seguem a premissa de comunicarem também com a empresa patrocinadora. Patrocínio: ArcelorMittal. Produção: Através Gestão Cultural e Pira Cultural. Realização: Cingulado.`,
    },
    brand: "Festival Novos Encontros",
    category: {
      en: "Festival",
      pt: "Festival",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url:
      "/projects/Festival Novos Encontros/thumbnails_start.gif",
    slug: "",
    images: [
      "/projects/Festival Novos Encontros/Conceito_FestivalNovosEncontros.jpg",
      "/projects/Festival Novos Encontros/print material-mockup-6722.jpg",
      "/projects/Festival Novos Encontros/print material-mockup-7823.jpg",
      "/projects/Festival Novos Encontros/thumbnail_coverphotoo_Facebook.gif",
      "/projects/Festival Novos Encontros/thumbnails_folder@1x_1.jpg",
      "/projects/Festival Novos Encontros/thumbnails_impressos.jpg",
      "/projects/Festival Novos Encontros/thumbnails_palco@1x_1.jpg",
      "/projects/Festival Novos Encontros/thumbnails_paradadeônibus.gif",
      "/projects/Festival Novos Encontros/thumbnails_poster.jpg",
      "/projects/Festival Novos Encontros/thumbnails_simbologia.jpg",
      "/projects/Festival Novos Encontros/thumbnails_socialmedia.gif",
      "/projects/Festival Novos Encontros/thumbnails_tipografia@1x_1.jpg",
      "/projects/Festival Novos Encontros/thumbnails_totem@1x_1.jpg",
      "/projects/Festival Novos Encontros/WEBSITE.gif",
    ],
  },
  {
    name: "Beth Coutinho",
    description: {
      en: "Beth Coutinho is a Brazilian cook who feeds people's souls and bodies. In a simple and sophisticated, fun and exciting way. He is 71 years old and has more than half a century of experience with Brazilian cuisine, especially that of his homeland, Minas Gerais.",
      pt: "Beth Coutinho é uma cozinheira brasileira que alimenta a alma e o corpo das pessoas. De um jeito simples e sofisticado, divertido e emocionante. São 71 anos de idade e mais de meio século de experiência com a culinária brasileira, especialmente a de sua terra, Minas Gerais.",
    },
    about: {
      en: "To design the brand's new visual identity and materialize this young spirit that is the character Beth Coutinho, we took into account her charisma, stage presence and striking physical characteristic: her smile. We then chose to translate and immortalize your smile using a symbol that summarizes this purpose. Transforming one of your photos into a minimalist and organic symbol. Without using grids or any tools that make it too symmetrical. Additionally, we strategically chose to make the name of your Cook Show, and its slogan: Eat, sing and laugh.",
      pt: "Para concepção da nova identidade visual da marca e materialização desse espírito jovem que é a personagem Beth Coutinho, levamos em consideração sua carisma, presença de palco e característica física marcante: seu sorriso. Escolhemos então em traduzir e eternizar o seu sorriso a partir de um símbolo que sintetize esse propósito. Transformando uma de suas fotos em um símbolo minimalista e orgânico. Sem fazer o uso de grids e nenhuma ferramenta que tornasse-o simétrico demais. Além disso, escolhemos estrategicamente tornar o nome de seu Cook Show, e sua tagline: Comer, cantar e gargalhar.",
    },
    brand: "Beth Coutinho",
    category: {
      en: "Cooking",
      pt: "Culinária",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Beth Coutinho/Thumbnails_BethCoutinho2.jpg",
    slug: "",
    homepage: true,
    images: [
      "/projects/Beth Coutinho/BethCoutinho®_versões.gif",
      "/projects/Beth Coutinho/BethCoutinho®_versões.jpg",
      "/projects/Beth Coutinho/embalagens.gif",
      "/projects/Beth Coutinho/jaleco.gif",
      "/projects/Beth Coutinho/redessociais.jpg",
      "/projects/Beth Coutinho/Thumbnails_adesivo.jpg",
      "/projects/Beth Coutinho/Thumbnails_bandeira.jpg",
      "/projects/Beth Coutinho/Thumbnails_BethCoutinho.jpg",
      "/projects/Beth Coutinho/Thumbnails_bolacha.jpg",
      "/projects/Beth Coutinho/Thumbnails_caderno de receitas.jpg",
      "/projects/Beth Coutinho/Thumbnails_caneca.jpg",
      "/projects/Beth Coutinho/Thumbnails_capa.jpg",
      "/projects/Beth Coutinho/Thumbnails_cartão de visitas.jpg",
      "/projects/Beth Coutinho/Thumbnails_comer, cantar e gargalhar.jpg",
      "/projects/Beth Coutinho/Thumbnails_conceito.jpg",
      "/projects/Beth Coutinho/Thumbnails_conceito2.jpg",
      "/projects/Beth Coutinho/Thumbnails_conceito copy 3.jpg",
      "/projects/Beth Coutinho/Thumbnails_cores.jpg",
      "/projects/Beth Coutinho/Thumbnails_destaques.jpg",
      "/projects/Beth Coutinho/Thumbnails_envelope.jpg",
      "/projects/Beth Coutinho/Thumbnails_grafismo.jpg",
      "/projects/Beth Coutinho/Thumbnails_Lançamento da Marca.jpg",
      "/projects/Beth Coutinho/Thumbnails_MasterChef.jpg",
      "/projects/Beth Coutinho/Thumbnails_MasterChef2.jpg",
      "/projects/Beth Coutinho/Thumbnails_MasterChef3.jpg",
      "/projects/Beth Coutinho/Thumbnails_MasterChef4.jpg",
      "/projects/Beth Coutinho/Thumbnails_panela.jpg",
      "/projects/Beth Coutinho/Thumbnails_papelaria.jpg",
      "/projects/Beth Coutinho/Thumbnails_prato.jpg",
      "/projects/Beth Coutinho/Thumbnails_sacolacraft.jpg",
      "/projects/Beth Coutinho/Thumbnails_sacolas.jpg",
      "/projects/Beth Coutinho/Thumbnails_selo.jpg",
      "/projects/Beth Coutinho/Thumbnails_símbolo.jpg",
      "/projects/Beth Coutinho/Thumbnails_timbrado + caderno.jpg",
      "/projects/Beth Coutinho/Thumbnails_tipografia.jpg",
    ],
  },
  {
    name: "Sensatta Marketing®",
    description: {
      en: "Sensatta Marketing is a marketing and communication agency that stands out for its constant pursuit of excellence in service and the results it delivers.",
      pt: "A Sensatta Marketing é uma agência de marketing e comunicação que se diferencia pela busca constante da excelência no atendimento e pelos resultados que proporciona.",
    },
    about: {
      en: `The name "Sensatta" comes from the term "sensibility," reflecting the brand's purpose: to act with balance, good judgment, and wisdom in all its actions, always focused on creating authentic connections and generating results for its clients.

      The Sensatta® symbol was designed based on a modular grid, providing flexibility and precision in the design. It represents the letter "S," the initial of the word Sensatta®, combined with the image of an owl. The owl, known as a symbol of wisdom and reflection, was chosen for its ability to look both focused and serious at times, yet also soft and charismatic, conveying authority, intelligence, empathy, and the essence of the brand.
      
      The owl has a raised eyebrow, a detail that further emphasizes its wisdom, making the symbol unique and expressive.`,
      pt: `O nome "Sensatta" vem do termo “sensatez”, que reflete a proposta da marca: agir com equilíbrio, bom senso e sabedoria em todas as suas ações, sempre focada em criar conexões autênticas e gerar resultados para os seus clientes.

      O símbolo da Sensatta® foi projetado com base em um grid modular, trazendo flexibilidade e precisão ao design. Ele é uma representação da letra "S", inicial da palavra Sensatta®, combinada com a imagem de uma coruja. A coruja, conhecida por ser um símbolo de sabedoria e reflexão, foi escolhida por seu olhar ora compenetrado e sério, ora fofa e carismática, transmitindo autoridade, inteligência, empatia que é a essência da marca.
      
      A coruja possui uma sobrancelha levantada, um detalhe que reforça ainda mais o aspecto de sabedoria, tornando o símbolo único e expressivo.`,
    },
    brand: "Sensatta Marketing®",
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
    primary_image_url: "/projects/Marco Souza/Capa_thmbnalis.png",
    slug: "",
    homepage: true,
    images: [
      "/projects/Marco Souza/Apresentação.png",
      "/projects/Marco Souza/Assinatura-de-e-mail.gif",
      "/projects/Marco Souza/Behance-.gif",
      "/projects/Marco Souza/Capa.gif",
      "/projects/Marco Souza/Cartão-de-Visitas.gif",
      "/projects/Marco Souza/Composição conceito.png",
      "/projects/Marco Souza/Contra Capa.png",
      "/projects/Marco Souza/Cup.png",
      "/projects/Marco Souza/Grafismos.png",
      "/projects/Marco Souza/Grid.png",
      "/projects/Marco Souza/Grid 02.png",
      "/projects/Marco Souza/Grid Conceito.png",
      "/projects/Marco Souza/Intagram1.gif",
      "/projects/Marco Souza/Intagram02.gif",
      "/projects/Marco Souza/Intagram_02.gif",
      "/projects/Marco Souza/Linkedin.png",
      "/projects/Marco Souza/Logo.png",
      "/projects/Marco Souza/Logo_02.png",
      "/projects/Marco Souza/Logo Animado 03.png",
      "/projects/Marco Souza/Logo Animado 04.png",
      "/projects/Marco Souza/logo + tagline.png",
      "/projects/Marco Souza/logo-+-tagline.gif",
      "/projects/Marco Souza/mac.gif",
      "/projects/Marco Souza/Papel-de-Parede.gif",
      "/projects/Marco Souza/Poster.gif",
      "/projects/Marco Souza/smartphone.gif",
      "/projects/Marco Souza/Tipografia + Cor.png",
      "/projects/Marco Souza/Tipografia-+-Cor.gif",
      "/projects/Marco Souza/T-Shirt.png",
    ],
  },
  {
    name: "Maria Divina Gota",
    description: {
      en: "Founded in 2008, doTERRA was conceived and built with the mission of sharing guaranteed purity essential oils with the world. ",
      pt: "Fundada em 2008, a doTERRA foi concebida e construída com a missão de compartilhar com o mundo óleos essenciais de pureza garantida. ",
    },
    about: {
      en: `Founded in 2008, doTERRA was conceived and built with the mission of sharing guaranteed purity essential oils with the world. Stemming from her personal experience with these incredible and precious resources offered by nature, @mariadivinagota emerges from a need to expand the offering and interest in the products and services provided by the partner company. Commercial representative and owner Maria Rita. For the conception of the new brand and entire visual identity, we explored unique elements that evoke strong symbolism, relating to gift, prosperity, natural, essential, and well-being. Thinking to enhance this narrative, we brought complementary intense colors that denote liveliness, translating the extraction of natural oil. MARIA + DIVINE + DROP + ESSENTIAL. Maria: Sovereign lady, seer, or pure. It is a name of uncertain origin, probably originating from the Hebrew Myriam, which means "sovereign lady" or "the seer." Divine: adj. Relating to God; inspired or originating from God: divine mercy. Expressing excellence; excellent, splendid, beautiful: divine spectacle; divine food. Drop: Oil Volatile aromatic compounds of natural occurrence are found in seeds, peels, stems, roots, flowers, and other parts of plants and can have both pleasant and potent fragrances.`,
      pt: `Fundada em 2008, a doTERRA foi concebida e construída com a missão de compartilhar com o mundo óleos essenciais de pureza garantida. A partir da sua experiência pessoal com esses incríveis e preciosos recursos oferecidos pela natureza, @mariadivinagota surge da necessidade de ampliar a oferta e o interesse pelos produtos e serviços disponibilizados pela empresa parceira. Representante comercial e proprietária Maria Rita. Para a concepção da nova marca e de toda a identidade visual, exploramos elementos únicos que evocam forte simbolismo, relacionados ao presente, à prosperidade, ao natural, ao essencial e ao bem-estar. Pensando em valorizar essa narrativa, trouxemos cores complementares intensas que denotam vivacidade, traduzindo a extração do óleo natural. MARIA + DIVINO + GOTA + ESSENCIAL. Maria: Senhora soberana, vidente ou pura. É um nome de origem incerta, provavelmente originado do hebraico Myriam, que significa “senhora soberana” ou “a vidente”. Divino: adj. Relacionando-se com Deus; inspirado ou originário de Deus: misericórdia divina. Expressando excelência; excelente, esplêndido, belo: espetáculo divino; comida divina. Gota: Óleo Compostos aromáticos voláteis de ocorrência natural são encontrados em sementes, cascas, caules, raízes, flores e outras partes das plantas e podem ter fragrâncias agradáveis ​​e potentes.`,
    },
    brand: "Maria Divina Gota",
    category: {
      en: "Well-being",
      pt: "Bem-estar",
    },
    country: {
      en: "Brazil",
      pt: "Brasil",
    },
    primary_image_url: "/projects/Maria Divina Gota/01.png",
    slug: "",
    homepage: true,
    images: [
      "/projects/Maria Divina Gota/thumbnails_almofada+toalha.png",
      "/projects/Maria Divina Gota/thumbnails_camisa.png",
      "/projects/Maria Divina Gota/thumbnails_capa.png",
      "/projects/Maria Divina Gota/thumbnails_cartãodevisitas.png",
      "/projects/Maria Divina Gota/thumbnails_conceito.jpg",
      "/projects/Maria Divina Gota/thumbnails_conceito.png",
      "/projects/Maria Divina Gota/thumbnails_conceito00.png",
      "/projects/Maria Divina Gota/thumbnails_conceito03.png",
      "/projects/Maria Divina Gota/thumbnails_conceito04.png",
      "/projects/Maria Divina Gota/thumbnails_conceito05.png",
      "/projects/Maria Divina Gota/thumbnails_conceito06.png",
      "/projects/Maria Divina Gota/thumbnails_conceito copy 2.png",
      "/projects/Maria Divina Gota/thumbnails_copo.png",
      "/projects/Maria Divina Gota/thumbnails_cores.gif",
      "/projects/Maria Divina Gota/thumbnails_doTERRA.png",
      "/projects/Maria Divina Gota/thumbnails_embalagem02.jpg",
      "/projects/Maria Divina Gota/thumbnails_embalagemn02.png",
      "/projects/Maria Divina Gota/thumbnails_facebook.png",
      "/projects/Maria Divina Gota/thumbnails_garrafa.png",
      "/projects/Maria Divina Gota/thumbnails_grafismo.gif",
      "/projects/Maria Divina Gota/thumbnails_grafismo.mp4",
      "/projects/Maria Divina Gota/thumbnails_grid.png",
      "/projects/Maria Divina Gota/thumbnails_grid2.png",
      "/projects/Maria Divina Gota/thumbnails_instagram.png",
      "/projects/Maria Divina Gota/thumbnails_produtos.png",
      "/projects/Maria Divina Gota/thumbnails_selos.png",
      "/projects/Maria Divina Gota/thumbnails_símbolo.png",
      "/projects/Maria Divina Gota/thumbnails_tipografia.png",
      "/projects/Maria Divina Gota/thumbnails_website.png",
    ],
  },
];

export const projects = projectsWithoutSlug.map((project) => {
  return {
    ...project,
    slug: slug(project.name),
  };
});
