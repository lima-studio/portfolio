import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import BlurFade from "./magicui/blur-fade";
import { FadeText } from "./magicui/fade-text";

export default function Navbar() {
    const {
        t,
        i18n: { language, changeLanguage },
    } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();



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
            className="h-[230px] py-5 mb-10"
        >
            <div className="flex justify-between px-5 xl:px-10 2xl:px-14 h-full">
                <div className="flex flex-col items-end justify-between">
                    <BlurFade>
                        <a href="/" className="mixBlendMode">
                            <img
                                src="/logos/Ativo 8.png"
                                alt="Logo"
                                className="w-5 h-5 md:w-10 md:h-10 object-contain"
                            />
                        </a>
                    </BlurFade>

                    {/* Menu de navegação para telas grandes */}
                    <ul className=" font-bold text-end ">
                        <li>
                            <a href="/projects" className="relative hover: transition group">
                                <FadeText
                                    text={t('navbar.links.works')}
                                    direction="up"
                                    framerProps={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            transition: { delay: 0.25 },
                                        },
                                    }}
                                    className="text-xl"
                                />
                            </a>
                        </li>
                        <li>
                            <button onClick={() => handleNavigation("#about")} className="relative hover: transition group">
                                <FadeText
                                    text={t('navbar.links.about')}
                                    direction="up"
                                    framerProps={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            transition: { delay: 0.5 },
                                        },
                                    }}
                                    className="text-xl"
                                />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigation("#skills")} className="relative hover: transition group">
                                <FadeText
                                    text={t('navbar.links.skills')}
                                    direction="up"
                                    framerProps={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            transition: { delay: 1 },
                                        },
                                    }}
                                    className="text-xl"
                                />
                            </button>
                        </li>
                        <li>
                            <a href="/contact" className="relative hover: transition group">
                                <FadeText
                                    text={t('navbar.links.contact')}
                                    direction="up"
                                    framerProps={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            transition: { delay: 1.25 },
                                        },
                                    }}
                                    className="text-xl"
                                />
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        </li>
                    </ul>
                </div>


                <BlurFade className="flex justify-between flex-col">
                    <div>
                        <p>bh/mg</p>
                        <p>{t('navbar.country')}</p>
                        <div>
                            <button
                                className={`${language === 'en-US' ? 'font-bold' : ''}`}
                                onClick={() => changeLanguage('en-US')}
                            >
                                EN
                            </button>
                            /
                            <button
                                className={`${language === 'pt-BR' ? 'font-bold' : ''}`}
                                onClick={() => changeLanguage('pt-BR')}
                            >
                                PT
                            </button>
                        </div>
                    </div>
                    <div className="flex space-y-3 flex-col ">
                        <a href="https://wa.link/df9y7a" target="_blank">
                            <FaWhatsapp size={30} className="cursor-pointer text-secondary" />
                        </a>
                        <a href="http://www.instagram.net/limastdio" target="_blank">
                            <FaInstagram size={30} className="cursor-pointer text-secondary" />
                        </a>
                    </div>
                </BlurFade>
            </div>
        </nav >
    );
}
