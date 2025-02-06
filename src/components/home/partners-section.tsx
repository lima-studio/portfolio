import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { InteractiveHoverButton } from "../interactive-hover-button";
import { ChevronRight } from "lucide-react";

export function PartnersSection() {
  const { t } = useTranslation();

  const partners = [
    {
      img: "/partners/Sintetizar.jpg",
    },
    {
      img: "/partners/Imergir.jpg",
    },
    {
      img: "/partners/Idealizar.jpg",
    },
    {
      img: "/partners/Experimentar.jpg",
    },
    {
      img: "/partners/Entregar.jpg",
    },
    {
      img: "/partners/Descobrir.jpg",
    },
  ];

  return (
    <div className="h-[600px] mx-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="flex items-baseline">
          <div
            className="flex flex-col gap-5"
            style={{ marginLeft: "4rem" }}
          >
            <h1 className="uppercase font-medium">
              {t("home.partners.title")}
            </h1>
            <p className="text-5xl md:text-6xl font-medium">
              {t("home.partners.rely.1")} <br />
              {t("home.partners.rely.2")}
            </p>
            <p className="mt-5 md:text-md font-normal text-xl opacity-80 max-w-xl mb-5">
              {t("home.partners.description")}
            </p>
            <InteractiveHoverButton
              colors={{
                primary: "black",
                hover: "primary",
                text: "white",
              }}
              icon={<ChevronRight
                size={18}
              />}
            >
              {t("home.partners.quote_button")}

            </InteractiveHoverButton>
          </div>
        </div>

        <div className="lg:pl-[90px] h-[300px] lg:h-full">
          <Swiper
            modules={[Autoplay]}
            autoplay
            loop={true}
            spaceBetween={30}
            slidesPerView={2.5}
            className="h-full"
          >
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                className="rounded-xl flex justify-center  items-end  py-5 bg-yellow-100"
                style={{
                  backgroundImage: `url(${partner.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
