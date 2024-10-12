import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Controla o progresso da rolagem
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn(className)}>
      <p className="flex flex-wrap md:text-3xl md:mb-32 mb-10">
        {words.map((word, i) => {
          // Ajustar o intervalo de transição para garantir que todas as palavras sejam reveladas no tempo certo
          const start = i / words.length;
          const end = start + 0.8 / words.length; // Ajuste aqui para melhor transição

          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // Transição de opacidade e scale para melhorar o efeito visual
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]); // Adiciona um leve efeito de zoom

  return (
    <span className="relative mx-1 lg:mx-2.5">
      <motion.span
        style={{ opacity, scale }} // Aplica os dois efeitos: opacidade e escala
        className="text-black dark:text-white"
        transition={{ duration: 0.3 }} // Ajuste de tempo para uma animação mais suave
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
