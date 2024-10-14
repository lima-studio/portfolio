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
    year: string;
    primary_image_url: string;
    images: string[];
    slug: string;
    homepage?: boolean,
}

const projectsWithoutSlug: IProjects[] = [
    {
        name: "Lima Stdio",
        description: {
            en: "Lima Stdio is a project of interactivity and art exchanges that aims to promote art as a means of expression and art.",
            pt: "Lima Stdio é um projeto de interatividade e intercâmbios de arte que visa promover a arte como meio de expressão e arte."
        },
        about: {
            en: "The project was created to promote art as a means of expression and art, allowing users to interact with art and promote art as art.",
            pt: "O projeto foi criado para promover a arte como meio de expressão e arte, permitindo aos usuários interagir com arte e promover a arte como arte."
        },
        brand: "Lima Stdio",
        category: {
            en: "Technology",
            pt: "Tecnologia"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2023",
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
            "/projects/Lima Stdio/thumbnails_versões.png"
        ]
    },
    {
        name: "Skilo Produtora de Som",
        description: {
            en: "Skilo Sound Producer is a sound brand that presents a work of art.",
            pt: "Skilo Produtora de Som é uma marca de som que apresenta uma arte de arte."
        },
        about: {
            en: "Skilo Sound Producer is a sound brand that presents a work of art.",
            pt: "Skilo Produtora de Som é uma marca de som que apresenta uma arte de arte."
        },
        brand: "Skilo Produtora de Som",
        category: {
            en: "Technology",
            pt: "Tecnologia"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2023",
        primary_image_url: "/projects/Skilo Produtora de Som/thumbnails_conceitual_3.jpg",
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
            "/projects/Skilo Produtora de Som/thumbnails_versões.jpg"
        ]
    },
    {
        name: "Nanni Percussão",
        description: {
            en: "Nanni Percussion is a project of interactivity and art exchanges that aims to promote art as a means of expression and art.",
            pt: "Nanni Percussão é um projeto de interatividade e intercâmbios de arte que visa promover a arte como meio de expressão e arte."
        },
        about: {
            en: "The project was created to promote art as a means of expression and art, allowing users to interact with art and promote art as art.",
            pt: "O projeto foi criado para promover a arte como meio de expressão e arte, permitindo aos usuários interagir com arte e promover a arte como arte."
        },
        brand: "Nanni Percussão",
        category: {
            en: "Technology",
            pt: "Tecnologia"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2023",
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
            "/projects/Nanni Percussão/Website_NanniPercussão®.jpg"
        ]
    },
    {
        name: "Festival Novos Encontros",
        description: {
            en: "The Festival Novos Encontros is an annual event that celebrates cultural and artistic diversity, bringing together people from different backgrounds and cultures to share unique experiences. This project focuses on developing an interactive and engaging website to promote the festival, providing detailed information about the program, participating artists, and venues.",
            pt: "O Festival Novos Encontros é um evento anual que celebra a diversidade cultural e artística, reunindo pessoas de diferentes origens e culturas para compartilhar experiências únicas. Este projeto é focado no desenvolvimento de um site interativo e envolvente para promover o festival, oferecendo informações detalhadas sobre programação, artistas participantes e locais de realização."
        },
        about: {
            en: "The website project for Festival Novos Encontros was designed to reflect the essence of the event, combining modern visual elements with intuitive navigation. With a responsive design, the site offers an immersive experience, highlighting the different activities of the festival and facilitating user interaction with the content. The goal is to strengthen the festival as a cultural meeting point and foster the exchange of experiences among participants.",
            pt: "O projeto do site do Festival Novos Encontros foi pensado para refletir a essência do evento, combinando elementos visuais modernos com uma navegação intuitiva. Com um design responsivo, o site oferece uma experiência imersiva, destacando as diferentes atividades do festival e facilitando a interação dos usuários com o conteúdo. O objetivo é fortalecer o festival como um ponto de encontro cultural e fomentar a troca de experiências entre os participantes."
        },
        brand: "Festival Novos Encontros",
        category: {
            en: "Technology",
            pt: "Tecnologia"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2023",
        primary_image_url: "/projects/Festival Novos Encontros/Bandeiras.jpg",
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
            "/projects/Festival Novos Encontros/thumbnails_start.gif",
            "/projects/Festival Novos Encontros/thumbnails_tipografia@1x_1.jpg",
            "/projects/Festival Novos Encontros/thumbnails_totem@1x_1.jpg",
            "/projects/Festival Novos Encontros/WEBSITE.gif"
        ]
    },
    {
        name: "Beth Coutinho",
        description: {
            en: "The Beth Coutinho project aims to create a digital platform to strengthen the online presence of this important figure in the local community. The website provides a space to share ideas, projects, and initiatives focused on social and community development.",
            pt: "O projeto Beth Coutinho tem como objetivo criar uma plataforma digital para fortalecer a presença online desta importante figura da comunidade local. O site oferece um espaço para compartilhar ideias, projetos e iniciativas voltadas ao desenvolvimento social e comunitário."
        },
        about: {
            en: "The creation of the Beth Coutinho website was based on an accessible and inclusive design, allowing different audiences to engage easily with her causes and projects. The layout was designed to promote user interaction and participation, with sections highlighting events, campaigns, and community news. The platform serves as a connection point, uniting people interested in building a fairer and more collaborative society.",
            pt: "A criação do site da Beth Coutinho foi baseada em um design acessível e inclusivo, permitindo que diferentes públicos possam se engajar facilmente com as suas causas e projetos. O layout foi pensado para promover a interação e a participação dos usuários, com seções que destacam eventos, campanhas e novidades da comunidade. A plataforma serve como um ponto de conexão, unindo pessoas interessadas em construir uma sociedade mais justa e colaborativa."
        },
        brand: "Beth Coutinho",
        category: {
            en: "Community",
            pt: "Comunidade"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2022",
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
            "/projects/Beth Coutinho/Thumbnails_tipografia.jpg"
        ]
    },
    {
        name: "Sensatta MKT",
        description: {
            en: "Sensatta MKT is a digital project developed for an innovative marketing agency, specializing in creative solutions for companies looking to strengthen their market presence. The website was designed to showcase the agency's services and innovative strategies in a dynamic and attractive way.",
            pt: "Sensatta MKT é um projeto digital desenvolvido para uma agência de marketing inovadora, especializada em soluções criativas para empresas que buscam fortalecer sua presença no mercado. O site foi projetado para apresentar os serviços oferecidos e as estratégias inovadoras da agência de maneira dinâmica e atrativa."
        },
        about: {
            en: "The development of the Sensatta MKT website focused on creating a modern and visually impactful platform that communicates the agency's expertise in digital marketing. The layout was designed to be clear and objective, facilitating user navigation and highlighting the agency's success cases. Additionally, the site integrates interactive features aimed at increasing visitor engagement, making the browsing experience more attractive.",
            pt: "O desenvolvimento do site da Sensatta MKT foi focado em criar uma plataforma moderna e visualmente impactante, que comunicasse a expertise da agência em marketing digital. O layout foi projetado para ser claro e objetivo, facilitando a navegação dos usuários e destacando os cases de sucesso da agência. Além disso, o site integra funcionalidades interativas que visam aumentar o engajamento dos visitantes, tornando a experiência de navegação mais atrativa."
        },
        brand: "Sensatta MKT",
        category: {
            en: "Technology",
            pt: "Tecnologia"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2022",
        primary_image_url: "/projects/Sensatta MKT/logo preferêncial.png",
        slug: "",
        homepage: true,
        images: [
            "/projects/Sensatta MKT/62feffcc-f199-4a5a-b5ae-5ddae1de3e48.gif",
            "/projects/Sensatta MKT/canecas.png",
            "/projects/Sensatta MKT/Capa.png",
            "/projects/Sensatta MKT/cartão de visitas.png",
            "/projects/Sensatta MKT/Cores.png",
            "/projects/Sensatta MKT/E-mail.png",
            "/projects/Sensatta MKT/Espaço.png",
            "/projects/Sensatta MKT/gif.gif",
            "/projects/Sensatta MKT/Google Forms.png",
            "/projects/Sensatta MKT/Grafismos.png",
            "/projects/Sensatta MKT/Grid.png",
            "/projects/Sensatta MKT/Grid-1.png",
            "/projects/Sensatta MKT/Outdoor.png",
            "/projects/Sensatta MKT/Outdoor-1.png",
            "/projects/Sensatta MKT/Papelaria.png",
            "/projects/Sensatta MKT/Papelaria-1.png",
            "/projects/Sensatta MKT/Post.gif",
            "/projects/Sensatta MKT/Proposta Comercial.png",
            "/projects/Sensatta MKT/símbolo.png",
            "/projects/Sensatta MKT/Stories.png",
            "/projects/Sensatta MKT/Tipografia.png",
            "/projects/Sensatta MKT/Totem.png",
            "/projects/Sensatta MKT/T-Shirt.png",
            "/projects/Sensatta MKT/Wallpaper.png"
        ]
    },
    {
        name: "Marco Souza",
        description: {
            en: "The Marco Souza project consists of developing a personalized website to highlight the services and professional journey of this renowned technology specialist. The website aims to increase his online presence and facilitate potential clients' access to his services and portfolio.",
            pt: "O projeto Marco Souza consiste no desenvolvimento de um site personalizado para destacar os serviços e a trajetória profissional deste renomado especialista em tecnologia. O site visa aumentar sua presença online e facilitar o acesso de potenciais clientes aos seus serviços e portfólio."
        },
        about: {
            en: "The design of the Marco Souza website was based on a clean and modern aesthetic, allowing easy navigation between different sections such as services offered, testimonials from clients, and contact information. Additionally, the site incorporates an engaging blog section where Marco can share insights and news about the technology sector, positioning himself as an authority in his area of expertise.",
            pt: "O design do site de Marco Souza foi baseado em uma estética limpa e moderna, permitindo fácil navegação entre as diferentes seções, como serviços oferecidos, depoimentos de clientes e informações de contato. Além disso, o site incorpora uma seção de blog envolvente onde Marco pode compartilhar insights e novidades sobre o setor de tecnologia, se posicionando como uma autoridade em sua área de atuação."
        },
        brand: "Marco Souza",
        category: {
            en: "Technology",
            pt: "Tecnologia"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2022",
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
            "/projects/Marco Souza/T-Shirt.png"
        ]
    },
    {
        name: "Maria Divina Gota",
        description: {
            en: "The Maria Divina Gota website was developed to promote and showcase the products of a brand of natural and organic cosmetics. The goal is to provide a platform where customers can learn more about the brand, its values, and easily and quickly purchase products.",
            pt: "O site Maria Divina Gota foi desenvolvido para promover e divulgar os produtos de uma marca de cosméticos naturais e orgânicos. O objetivo é oferecer uma plataforma onde os clientes possam conhecer melhor a marca, seus valores e adquirir os produtos de maneira fácil e rápida."
        },
        about: {
            en: "With a design focused on simplicity and nature, the Maria Divina Gota website reflects the principles of the brand, which prioritizes sustainability and the use of natural ingredients. The layout is clean and functional, allowing users to quickly find the products they are looking for and obtain detailed information about each one. Integration with e-commerce tools ensures an easy and secure shopping experience, reinforcing the brand's commitment to quality and customer satisfaction.",
            pt: "Com um design focado na simplicidade e na natureza, o site Maria Divina Gota reflete os princípios da marca, que prioriza a sustentabilidade e o uso de ingredientes naturais. O layout é limpo e funcional, permitindo que os usuários encontrem rapidamente os produtos que procuram e obtenham informações detalhadas sobre cada um deles. A integração com ferramentas de e-commerce garante uma experiência de compra fácil e segura, reforçando o compromisso da marca com a qualidade e a satisfação do cliente."
        },
        brand: "Maria Divina Gota",
        category: {
            en: "Technology",
            pt: "Tecnologia"
        },
        country: {
            en: "Brazil",
            pt: "Brasil"
        },
        year: "2022",
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
            "/projects/Maria Divina Gota/thumbnails_website.png"
        ]
    }
];


export const projects = projectsWithoutSlug.map((project) => {
    return {
        ...project,
        slug: slug(project.name)
    }
})



