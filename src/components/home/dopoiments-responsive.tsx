import { depoiments } from "@/depoiments";
import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  activeDepoiment: number;
  setActiveDepoiment: Dispatch<SetStateAction<number>>;
}

// Componente específico para mobile
export const MobileDepoiments = () => {
  const { t, i18n } = useTranslation();
  const english = i18n.language === "en-US";

  return (
    <section className="mx-5 py-8 mb-20 md:mb-32 bg-black text-white">
      <div className="grid grid-cols-1 gap-6 px-4 py-6">
        {depoiments.map((depoiment, _) => {
          const ref = useRef(null);
          const inView = useInView(ref, {
            once: false,
            margin: "0% 0px 0% 0px",
          });

          return (
            <motion.div
              key={depoiment.name}
              className="space-y-5 mb-6 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0.1 }}
              transition={{ duration: 0.5 }}
              ref={ref}
              onClick={() => console.log(`Clicked on: ${depoiment.name}`)}
            >
              <motion.h2
                initial={{ color: "#ffffff" }}
                animate={{ color: inView ? "white" : "#ffffff" }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-normal"
              >
                {depoiment.name}
              </motion.h2>

              <div className="h-full">
                <p className="font-medium mb-4 text-sm">
                  {t("home.what_they_say_about_us")}
                </p>
                <div className="text-white text-3xl">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {english ? depoiment.depoiment.en : depoiment.depoiment.pt}
                  </motion.p>
                </div>

                <div className="text-[#aaaaaa] mt-6">
                  <p className="font-semibold text-base uppercase">
                    {depoiment.owner.name}
                  </p>
                  <p className="font-semibold text-sm">
                    {depoiment.name} -{" "}
                    <span className="font-normal">
                      {english
                        ? depoiment.owner.role.en
                        : depoiment.owner.role.pt}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// Componente específico para desktop
export const DesktopDepoiments = ({
  activeDepoiment,
  setActiveDepoiment,
}: Props) => {
  const { t, i18n } = useTranslation();
  const english = i18n.language === "en-US";

  return (
    <section className="mx-5 py-10 mb-20 md:mb-32 bg-black text-white rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
        <div>
          {depoiments.map((depoiment, index) => {
            const ref = useRef(null);

            return (
              <motion.div
                key={depoiment.name}
                className="space-y-20 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeDepoiment === index ? 1 : 0.1 }}
                transition={{ duration: 0.3 }}
                ref={ref}
                onClick={() => {
                  setActiveDepoiment(index);
                }}
              >
                <motion.h2
                  initial={{ color: "#ffffff" }}
                  animate={{
                    color: activeDepoiment === index ? "#dddddd" : "#ffffff",
                  }} // Muda a cor ao clicar
                  transition={{ duration: 0.5 }}
                  className="text-6xl font-medium"
                >
                  {depoiment.name}
                </motion.h2>
              </motion.div>
            );
          })}
        </div>

        <div className="h-full">
          <div className="sticky top-1/3">
            <p className="pl-20 font-medium mb-5">
              {t("home.what_they_say_about_us")}
            </p>
            <div className="flex text-white text-5xl">
              <div>
                <img
                  src={"/images/icons8-quote-left-96.png"}
                  alt={depoiments[activeDepoiment].name}
                  className="mr-20 h-12 opacity-15"
                />
              </div>
              <motion.p
                key={depoiments[activeDepoiment].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mr-20"
              >
                {english
                  ? depoiments[activeDepoiment].depoiment.en
                  : depoiments[activeDepoiment].depoiment.pt}
              </motion.p>
            </div>

            <div className="text-white pl-20 mt-10">
              <p className="font-medium text-xl uppercase">
                {depoiments[activeDepoiment].owner.name}
              </p>
              <p className="font-medium text-lg">
                {depoiments[activeDepoiment].name} -{" "}
                <span className="font-normal">
                  {english
                    ? depoiments[activeDepoiment].owner.role.en
                    : depoiments[activeDepoiment].owner.role.pt}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
