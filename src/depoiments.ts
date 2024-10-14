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
            pt: "Cara, adorei! Grande ideia com os ângulos fotográficos que você usou. Ficou super limpo e bonito com a nova identidade visual. Amei tudo!"
        },
        owner: {
            name: "Júlia Gusmão",
            role: {
                en: "Founder and Partner",
                pt: "Fundadora e Sócia"
            }
        }
    },
    {
        name: "Nanni Percussão",
        depoiment: {
            en: "You guys are f@#!ing awesome! You're going to crush it in the market! You're amazing, seriously! Total professional!",
            pt: "Vocês são incríveis! Vocês vão arrebentar no mercado! São maravilhosos, sério! Totalmente profissionais!"
        },
        owner: {
            name: "Arildo Nani",
            role: {
                en: "Multi-instrumentalist and Musician",
                pt: "Multi-instrumentista e Músico"
            }
        }
    },
    {
        name: "Skilo Produtora de Som",
        depoiment: {
            en: "Lima, the king of presentations! The project is awesome! Total Rock n' Roll! It turned out f@#!ing amazing!",
            pt: "Lima, o rei das apresentações! O projeto está incrível! Totalmente Rock n' Roll! Ficou f@#!ndo incrível!"
        },
        owner: {
            name: "Danilo Debien",
            role: {
                en: "Music Producer and Musician",
                pt: "Produtor Musical e Músico"
            }
        }
    },
    {
        name: "Beth Countinho",
        depoiment: {
            en: "Wow, guys, it turned out so beautiful! I’m completely in love! The symbol is just like mom. You were spot on. Congratulations!",
            pt: "Uau, gente, ficou tão lindo! Estou completamente apaixonada! O símbolo é exatamente como a mamãe. Vocês acertaram em cheio. Parabéns!"
        },
        owner: {
            name: "Raquel Coutinho",
            role: {
                en: "Producer and Coordinator",
                pt: "Produtora e Coordenadora"
            }
        }
    }
];

export { depoiments };
