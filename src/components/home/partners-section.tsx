import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function PartnersSection() {
  const { t, i18n } = useTranslation();

  const partners = [
    {
      role: {
        en: "Developer",
        pt: "Desenvolvedor",
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
        en: "Digital Marketing",
        pt: "MKT Digital",
      },
      img: "/partners/daddasx.jpg",
    },
  ];

  const english = i18n.language === "en-US";

  return (
    <div className="mb-20 md:mb-32 h-full mx-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="flex justify-evenly flex-col mb-10 lg:mb-0">
          <div className="flex gap-10 flex-col">
            <div className="flex items-baseline gap-4">
              <h1 className="uppercase font-medium">
                {t("home.partners.title")}
              </h1>
              <div className="flex flex-col gap-3">
                <p className="text-5xl md:text-6xl font-normal">
                  <span className="opacity-30">
                    {t("home.partners.span_title")}
                  </span>
                  <br />
                  {t("home.partners.rely")}
                </p>
                <p className="mt-5 md:text-md font-medium opacity-80 max-w-xl mb-5">
                  {t("home.partners.description")}
                </p>
                <button className="w-28 bg-black px-10 py-4 text-white rounded-lg font-medium ">
                  {t("home.partners.quote_button")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-[90px] h-[300px] lg:h-full">
          <Swiper
            modules={[Autoplay]}
            autoplay
            loop={true}
            spaceBetween={10}
            slidesPerView={2.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="h-[50vh]"
          >
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                className="rounded-xl flex justify-center h-full items-end  py-5"
                style={{
                  backgroundImage: `url(${partner.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(100%)",
                }}
              >
                <span className="text-sm md:text-xl 2xl:text-3xl text-white font-semibold">
                  {english ? partner.role.en : partner.role.pt}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
