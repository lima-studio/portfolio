import { FaArrowUp, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";
import BlurFade from "./magicui/blur-fade";



export default function Footer() {
    const onScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <footer className="bg-gray-300 min-h-[500px] pt-32 grid grid-cols-1 pb-5">
            <div className="max-w-5xl mx-auto text-center">

                <p className="uppercase mb-5 font-semibold text-sm">Contato</p>
                <BlurFade inView className="text-4xl md:text-5xl mb-10 px-5 md:px-0" >
                    <p>Vamos juntos potencializar suas ideias e trazer ao mundo mais uma marca com propósito?</p>
                </BlurFade>

                <a
                    href="/contact"
                    className="text-2xl hover:bg-transparent cursor-pointer" >Entre em contato +</a>
            </div>

            <div className="grid grid-cols-3 w-full justify-items-center items-end uppercase  text-sm font-semibold">
                <div>
                    <span className="hidden md:block">
                        Todos os direitos reservados &copy; {new Date().getFullYear()}
                    </span>

                    <span className="md:hidden">
                        &copy;{new Date().getFullYear()}
                    </span>
                </div>

                <div>
                    <span className="hidden gap-2 items-center cursor-pointer md:flex" onClick={onScrollToTop}>
                        Voltar ao topo <FaArrowUp />
                    </span>

                    <span className="flex gap-2 items-center cursor-pointer md:hidden" onClick={onScrollToTop}>
                        <FaArrowUp />
                    </span>
                </div>

                <div>
                    <ul className="hidden gap-5 md:flex">
                        <li>
                            <a href="http://www.behance.net/limastdio" target="_blank">Behance</a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/company/limastdio/" target="_blank">Linkedin</a>
                        </li>

                        <li>
                            <a href="http://www.instagram.net/limastdio" target="_blank">Instagram</a>
                        </li>
                    </ul>

                    <ul className="flex gap-5 md:hidden">
                        <li>
                            <a href="http://www.behance.net/limastdio" target="_blank">
                                <FaBehance />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/company/limastdio/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </li>

                        <li>
                            <a href="http://www.instagram.net/limastdio" target="_blank">
                                <FaInstagram />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}