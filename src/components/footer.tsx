import { useTranslation } from "react-i18next";
import { FaArrowUp, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";
import BlurFade from "./magicui/blur-fade";



export default function Footer() {
    const { t } = useTranslation();
    const onScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <footer className="bg-gray-300 min-h-[600px]  grid grid-cols-1 pb-5 pt-12 px-5 rounded-t-3xl">
            <div className="flex">
                <BlurFade inView>
                    <img src="/logos/Ativo 24.png" alt="Logo" className="h-20"></img>
                </BlurFade>
                <BlurFade className="max-w-5xl mx-auto space-y-5" inView>

                    <p className="uppercase font-medium text-sm">{t('footer.contact')}</p>
                    <BlurFade inView className="text-4xl md:text-6xl  px-5 md:px-0" >
                        <p>
                            {t('footer.description')}
                        </p>
                    </BlurFade>

                    <a
                        href="/contact"
                        className="text-2xl hover:bg-transparent cursor-pointer" >{t('footer.button')} +</a>
                </BlurFade>
            </div>

            <div className="flex justify-between items-end w-full uppercase  text-sm font-medium">
                <div>
                    <span className="hidden md:block">
                        {t('footer.copyright')}  &copy; {new Date().getFullYear()}
                    </span>

                    <span className="md:hidden">
                        &copy;{new Date().getFullYear()}
                    </span>
                </div>

                <div>
                    <span className="hidden gap-2 items-center cursor-pointer md:flex" onClick={onScrollToTop}>
                        {t('footer.back_to_top')} <FaArrowUp />
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