
export interface IDepoiments {
    name: string
    depoiment: string;
    owner: {
        name: string
        role: string
    }
}

const depoiments: IDepoiments[] = [
    {
        name: "Fusoê",
        depoiment: "Man, I loved it! Great idea with the photographic angles you used. It looks super clean and beautiful with the new visual identity. I loved everything!",
        owner: {
            name: "Júlia Gusmão",
            role: "Founder and Partner"
        }
    },
    {
        name: "Nanni Percussão",
        depoiment: "You guys are f@#!ing awesome! You're going to crush it in the market! You're amazing, seriously! Total professional!",
        owner: {
            name: "Arildo Nani",
            role: "Multi-instrumentalist and Musician"
        }
    },
    {
        name: "Skilo Produtora de Som",
        depoiment: "Lima, the king of presentations! The project is awesome! Total Rock n' Roll! It turned out f@#!ing amazing!",
        owner: {
            name: "Danilo Debien ",
            role: "Music Producer and Musician"
        }
    },
    {
        name: "Beth Countinho",
        depoiment: "Wow, guys, it turned out so beautiful! I’m completely in love! The symbol is just like mom. You were spot on. Congratulations!",
        owner: {
            name: "Raquel Coutinho",
            role: "Producer and Coordinator"
        }
    },
]

export { depoiments };
