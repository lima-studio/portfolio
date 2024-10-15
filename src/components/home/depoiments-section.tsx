import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DesktopDepoiments, MobileDepoiments } from "./dopoiments-responsive";


export const DepoimentsSection = () => {
    const [activeDepoiment, setActiveDepoiment] = useState(0);

    // Detecta se está em uma tela maior ou igual a 768px (desktop)
    const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

    return (
        <>
            {isDesktop ? (
                <DesktopDepoiments activeDepoiment={activeDepoiment} setActiveDepoiment={setActiveDepoiment} />
            ) : (
                <MobileDepoiments />
            )}
        </>
    );
};
