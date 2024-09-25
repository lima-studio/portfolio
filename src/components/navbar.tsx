import { useEffect, useState } from "react";
import { FaBars, FaInstagram, FaTimes, FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import BlurFade from "./magicui/blur-fade";
import { FadeText } from "./magicui/fade-text";

export default function Navbar({ scrollNav = true, stickyNav = true }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (!scrollNav) return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollNav]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [menuOpen]);


    const handleNavigation = (hash: string) => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
        }

        setMenuOpen(false);


        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 70;


                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 100);
    };


    return (
        <nav
            className={`
            ${stickyNav ? 'fixed' : 'absolute'} 
            top-0 left-0 right-0 z-50 px-5 py-5 transition-all duration-300 
            ${scrollNav && scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-md'}
        `}
        >
            <div className="flex justify-between items-center container mx-auto ">
                <BlurFade>
                    <a href="/" className="mixBlendMode">
                        <img
                            src="/logos/Ativo 8.png"
                            alt="Logo"
                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                    </a>
                </BlurFade>

                {/* Ícone de Menu para dispositivos móveis */}
                <div className="flex items-center md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Menu de navegação para telas grandes */}
                <ul className="hidden md:flex md:space-x-5 uppercase text-base font-mono ">
                    <li>
                        <a href="/projects" className="relative hover: transition group">
                            <FadeText
                                text="Projetos"
                                direction="up"
                                framerProps={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        transition: { delay: 0.25 },
                                    },
                                }}
                            />
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation("#about")} className="relative hover: transition group">
                            <FadeText
                                text="Sobre"
                                direction="up"
                                className="uppercase"
                                framerProps={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        transition: { delay: 0.5 },
                                    },
                                }}
                            />
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation("#skills")} className="relative hover: transition group">
                            <FadeText
                                text="Habilidades"
                                direction="up"
                                className="uppercase"
                                framerProps={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        transition: { delay: 1 },
                                    },
                                }}
                            />
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </button>
                    </li>
                    <li>
                        <a href="/contact" className="relative hover: transition group">
                            <FadeText
                                text="Contato"
                                direction="up"
                                framerProps={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        transition: { delay: 1.25 },
                                    },
                                }}
                            />
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                    </li>
                </ul>

                {/* Menu em tela cheia para dispositivos móveis */}
                <div className={`fixed inset-0 bg-white h-screen z-50 flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={toggleMenu} className="absolute top-10 right-10">
                        <FaTimes size={30} />
                    </button>
                    <ul className="flex flex-col space-y-8 text-3xl uppercase">
                        <li>
                            <a href="/projects">
                                Projetos
                            </a>
                        </li>
                        <li>
                            <button className="uppercase" onClick={() => handleNavigation("#about")}>
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button className="uppercase" onClick={() => handleNavigation("#skills")}>
                                Habilidades
                            </button>
                        </li>
                        <li>
                            <a href="/contact">
                                Contato
                            </a>
                        </li>
                    </ul>
                    <div className="flex space-x-5 mt-10">
                        <a href="https://wa.link/df9y7a" target="_blank">
                            <FaWhatsapp size={30} className="cursor-pointer" />
                        </a>
                        <a href="http://www.instagram.net/limastdio" target="_blank">
                            <FaInstagram size={30} className="cursor-pointer" />
                        </a>
                    </div>
                </div>


                <BlurFade className="hidden md:flex space-x-5 ">
                    <a href="https://wa.link/df9y7a" target="_blank">
                        <FaWhatsapp size={30} className="cursor-pointer " />
                    </a>
                    <a href="http://www.instagram.net/limastdio" target="_blank">
                        <FaInstagram size={30} className="cursor-pointer" />
                    </a>
                </BlurFade>
            </div>
        </nav>
    );
}
