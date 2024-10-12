import { Button } from "./ui/button"


function WhoSection() {

    return (
        <section id="who" className="mx-5 md:h-[450px] rounded-3xl mb-32" style={{
            backgroundImage: `url("/images/who-background.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#ffd622",
            backgroundPosition: "center left", // Posiciona a imagem no lado direito
            backgroundAttachment: "local", // Garante que o background não afete o conteúdo
            transform: "scaleX(-1)", // Inverte a imagem de fundo

        }}>
            <div className="p-5 flex flex-col justify-between h-full " style={{
                transform: "scaleX(-1)",
            }}>
                <div className="space-y-3">
                    <span className="text-xs text-[#8b6e00] font-semibold">WHO</span>
                    <h1 className="text-secondary text-6xl font-semibold max-w-xl">
                        <span className="text-[#8b6e00]">
                            Hello, I'm Lim.
                        </span>
                        <br></br>
                        Mascot and symbol of Lima Stdio.
                    </h1>
                    <p className="max-w-md  mb-10 text-lg  font-bold text-[#8b6e00]">I represent the personality and carry the last name of my creator.</p>


                </div>
                <Button className="mb-5 bg-white text-black font-semibold w-32 h-12 hover:opacity-90 hover:bg-white">
                    Threads
                </Button>
            </div>
        </section>
    )
}

export { WhoSection }
