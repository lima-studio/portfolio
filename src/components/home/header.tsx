import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";



export default function Header() {
    const { t, i18n } = useTranslation()
    const english = i18n.language === 'en-US';
    return (
        <header className=" flex flex-col justify-center container px-5 mx-auto mt-10 mb-20 md:mb-32 ">
            <div className=" mb-10">
                <BlurFade blur="10px" delay={0.2}>
                    <p
                        className="uppercase text-sm font-normal text-start"
                    >
                        {t('home.header.span')}
                    </p>
                </BlurFade>

                <div className="flex flex-col  space-y-5 relative ">
                    <h1 className={`
                   
                    text-5xl
                    md:text-7xl
                    mb-2
                    lg:text-8xl
                    2xl:text-9xl font-medium`}>
                        {t('home.header.title')}
                    </h1>

                    <p className={`
                    relative bottom-[1.5rem]
                    text-lg
                    2xl:absolute xl:text-xl
                     ${english ? "2xl:max-w-full 2xl:left-[600px] 2xl:text-3xl xl:right-0" : " 2xl:text-2xl 2xl:max-w-xl 2xl:left-[850px] "}
                    `}>
                        {t('home.header.sub_title')}
                    </p>
                </div>


            </div>

            <BlurFade className="flex space-x-4">
                <a
                    href="/projects"
                    className="text-black bg-primary px-8 py-3 hover:bg-primary/90 cursor-pointer rounded transition  font-medium"
                >
                    {t('home.buttons.project')}
                </a>
                <a
                    className="text-black bg-secondary px-8 py-3 hover:bg-secondary/90 cursor-pointer rounded transition  font-medium"
                    href="/contact"
                >
                    {t('home.buttons.quote')}
                </a>
            </BlurFade>
        </header>

    );
}