import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="mb-20 md:mb-32 h-full mx-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="flex justify-evenly flex-col mb-10 lg:mb-0">
          <div className="flex gap-10 flex-col">
            <div className="flex items-baseline">
              <div
                className="flex flex-col gap-5"
                style={{ marginLeft: "4rem" }}
              >
                <h1 className="uppercase font-medium">
                  {t("home.partners.title")}
                </h1>
                <p className="text-5xl md:text-6xl font-medium">
                  {t("home.partners.rely")}
                </p>
                <p className="mt-5 md:text-md font-normal text-xl opacity-80 max-w-xl mb-5">
                  {t("home.partners.description")}
                </p>
                <button className="min-w-16 w-[250px] bg-black px-10 py-4 text-white rounded-lg font-medium transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
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
                }}
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
