import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";



export default function Header() {
    const { t } = useTranslation()
    return (
        <header className=" flex flex-col justify-center container px-5 mx-auto mb-32 mt-10">
            <div className=" mb-10">
                <BlurFade blur="10px" delay={0.2}>
                    <p
                        className="uppercase text-sm font-normal text-start"
                    >
                        {t('home.header.span')}
                    </p>
                </BlurFade>

                <div className="flex flex-col  space-y-5 relative ">
                    <h1 className="
                    text-5xl
                    md:text-7xl
                    mb-2
                    lg:text-8xl
                    2xl:text-9xl font-semibold">
                        {t('home.header.title')}
                    </h1>

                    <p className="
                    relative bottom-3 
                    text-lg
                    2xl:absolute xl:right-0 xl:text-xl
                    2xl:right-0 2xl:max-w-full 2xl:left-[600px] 2xl:text-3xl
                    ">
                        {t('home.header.sub_title')}
                    </p>
                </div>


            </div>

            <BlurFade className="flex space-x-4">
                <a
                    href="/projects"
                    className="text-black bg-primary px-8 py-3 hover:bg-primary/90 cursor-pointer rounded transition  font-semibold"
                >
                    {t('home.buttons.project')}
                </a>
                <a
                    className="text-black bg-secondary px-8 py-3 hover:bg-secondary/90 cursor-pointer rounded transition  font-semibold"
                    href="/contact"
                >
                    {t('home.buttons.quote')}
                </a>
            </BlurFade>
        </header>

    );
}