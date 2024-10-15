import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";


export function PartnersSection() {
    const { t, i18n } = useTranslation();
    const plugin = React.useRef(
        Autoplay({ delay: 2000 }),
    )


    const partners = [
        {
            role: {
                en: "Software Developer",
                pt: "Programador",
            },
            img: "/partners/1722702573556.jpg",
        },
        {
            role: {
                en: "Digital Marketing",
                pt: "MKT Digital",
            },
            img: "/partners/02.png",
        },
        {
            role: {
                en: "Motion Designer",
                pt: "Designer de Motion",
            },
            img: "/partners/marco.jpg",
        },
        {
            role: {
                en: "UI/UX Designer",
                pt: "Designer UI/UX",
            },
            img: "/partners/daddasx.jpg",
        }
    ];

    const english = i18n.language === 'en-US'

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-24">
                <div className="flex  flex-col px-5 ">
                    <div className="space-y-5 mb-16">
                        <BlurFade inView>
                            <h1 className="uppercase font-normal">{t('home.partners.title')}</h1>
                        </BlurFade>

                        <BlurFade inView delay={0.2}>
                            <p className="md:text-6xl font-normal">
                                <span className="opacity-30">{t('home.partners.span_title')}</span>
                                <br />
                                {t('home.partners.rely')}
                            </p>
                        </BlurFade>

                        <BlurFade inView delay={0.2} className="max-w-xl ">
                            <p className="md:text-md font-medium opacity-80">
                                {t('home.partners.description')}
                            </p>
                        </BlurFade>
                    </div>

                    <BlurFade inView delay={0.2}>
                        <a
                            className="bg-black px-10 py-4 text-white rounded-lg font-medium"
                            href="/contact"
                        >
                            {t('home.partners.quote_button')}
                        </a>
                    </BlurFade>
                </div>

                <BlurFade inView>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full pl-[110px] h-full"
                    >
                        <CarouselContent >
                            {partners.map((partner, index) => (
                                <CarouselItem key={index} className=" xl:basis-1/2 2xl:basis-1/3 " >
                                    <div className="rounded-lg flex justify-center items-end h-full py-5" style={{
                                        backgroundImage: `url(${partner.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter: "grayscale(100%)",
                                    }}>
                                        <span className="text-md xl:text-xl 2xl:text-xl text-white font-bold">{english ? partner.role.en : partner.role.pt}</span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                </BlurFade>
            </div>


            <div className="h-[500px] flex justify-center mb-24">
                <div className="w-[250px] h-[450px]">
                    <img
                        className="w-full h-full "
                        src="/logos/Ativo 8.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}