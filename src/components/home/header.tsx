import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";



export default function Header() {
    const { t } = useTranslation()
    return (
        <header className="min-h-[600px] flex flex-col justify-center container px-5 mx-auto mb-10">
            <div className=" mb-16">
                <BlurFade blur="10px" delay={0.2}>
                    <p
                        className="uppercase text-sm font-normal text-start"
                    >
                        {t('home.header.span')}
                    </p>
                </BlurFade>

                <div className="flex flex-col  space-y-4 ">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold">
                        {t('home.header.title')}
                    </h1>

                    <p className="text-lg">
                        {t('home.header.sub_title')}
                    </p>
                </div>


            </div>

            <BlurFade className="flex space-x-4">
                <a
                    href="/projects"
                    className="text-black bg-primary px-8 py-3 hover:bg-primary/90 cursor-pointer rounded transition shadow font-semibold"
                >
                    {t('home.buttons.project')}
                </a>
                <a
                    className="text-black bg-secondary px-8 py-3 hover:bg-secondary/90 cursor-pointer rounded transition shadow font-semibold"
                    href="/contact"
                >
                    {t('home.buttons.quote')}
                </a>
            </BlurFade>
        </header>

    );
}