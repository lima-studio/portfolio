import BlurFade from "@/components/magicui/blur-fade"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaArrowUp, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa"
import { z } from "zod"


const contactFormSchema = z.object({
    name: z.string()
        .min(3, { message: "Seu nome deve ter pelo menos 3 letras." })
        .max(50, { message: "Seu nome deve ter no máximo 50 letras." }),
    email: z.string().email({ message: "Por favor, insira um email válido." }),
    cellphone: z.string().min(10, { message: "Por favor, insira um telefone válido." }),
    brand: z.object({
        name: z.string().min(3, { message: "Nome da marca deve ter pelo menos 3 letras." }).max(50, { message: "Nome da marca deve ter no máximo 50 letras." }),
        segment: z.string().min(3, { message: "Segmento da marca deve ter pelo menos 3 letras." }).max(50, { message: "Segmento da marca deve ter no máximo 50 letras." }),
        description: z.string().min(3, { message: "Descricão da marca deve ter pelo menos 3 letras." }).max(500, { message: "Descricão da marca deve ter no máximo 500 letras." }),
    }),
    estimatedBudget: z.string().refine((val) => val !== "", { message: "Por favor, insira um orcamento estimado." }).refine((val) => Number(val) > 0, { message: "Orcamento estimado deve ser maior que zero." }),
})

export default function ContactPage() {

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            cellphone: "",
            brand: {
                name: "",
                segment: "",
                description: "",
            },
            estimatedBudget: "",
        },
    })
    const [sendingEmail, setSendingEmail] = useState(false)

    const onScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
        setSendingEmail(true)
        const convertedEstimatedBudget = parseFloat(data.estimatedBudget) / 100
        const formattedData: z.infer<typeof contactFormSchema> = {
            ...data,
            estimatedBudget: new Number(convertedEstimatedBudget).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        }

        try {
            await emailjs.send('service_rchp921', 'template_cry0rox', {
                name: formattedData.name,
                email: formattedData.email,
                cellphone: formattedData.cellphone,
                brand_name: formattedData.brand.name,
                brand_segment: formattedData.brand.segment,
                brand_description: formattedData.brand.description,
                estimated_budget: formattedData.estimatedBudget
            }, {
                limitRate: {
                    id: formattedData.email,
                    throttle: 1000,
                },
                publicKey: "Wx6jdXsIUxxYWiMwP"
            })

            toast({
                description: "Sua solicitação foi enviada com sucesso. Em breve entraremos em contato.",
            })
            form.reset()
            setSendingEmail(false)
        } catch (error) {
            console.error(error)
            toast({
                description: "Houve um erro ao enviar a solicitação. Por favor, tente novamente mais tarde.",
                variant: "destructive",
            })

            setSendingEmail(false)
        }
    }


    return (
        <div>
            <Navbar stickyNav={false} scrollNav={false} />
            <div className="container px-5 mx-auto my-32 grid grid-cols-1 space-y-16">
                <div className="flex flex-col space-y-2 text-center">
                    <BlurFade inView>
                        <h1 className="text-5xl md:text-8xl font-semibold">Vamos dar vida à suas ideias</h1>
                    </BlurFade>

                    <BlurFade inView delay={0.2}>
                        <p className="md:text-3xl">Entre em contato para discutir como podemos transformar suas ideias em realidades visuais únicas, aproveitando nosso compromisso com a excelência e a inovação para dar vida à sua ideia.</p>

                    </BlurFade>
                </div>

                <div className="lg:px-52">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-10"
                        >
                            <BlurFade className="space-y-3" inView>
                                <h1 className="text-lg">Informações de contato</h1>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder="Seu nome" {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder="Seu email" {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cellphone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder="Seu telefone"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </BlurFade>
                            <BlurFade className="space-y-3" inView delay={0.2}>
                                <h1 className="text-lg">Informações da marca</h1>
                                <FormField
                                    control={form.control}
                                    name="brand.name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder="Nome da marca"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="brand.segment"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Segmento</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder="Segmento da marca"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="brand.description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Descrição</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className="h-12"
                                                    maxLength={500}
                                                    placeholder="Descrição da marca"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="estimatedBudget"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Orçamento estimado</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    placeholder="Orçamento estimado"
                                                    {...field}
                                                    value={new Intl.NumberFormat('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    }).format(Number(field.value) / 100)}
                                                    onChange={(e) => {
                                                        const rawValue = e.target.value.replace(/[^0-9]/g, '');

                                                        field.onChange(rawValue);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </BlurFade>
                            <Button
                                className="bg-secondary hover:bg-secondary/90 w-full py-8 md:text-base"
                                type="submit"
                                disabled={sendingEmail}
                            >{sendingEmail ? 'Enviando...' : 'Enviar'}</Button>
                        </form>
                    </Form>
                </div>
            </div>

            <footer className="bg-gray-300 min-h-[100px] flex flex-col items-center uppercase  text-sm font-semibold pt-10 pb-5 gap-20">
                <div>
                    <img src="/logos/logo_LimaStdio.png" alt="Luiz" />
                </div>
                <div className="grid grid-cols-3 w-full justify-items-center ">
                    <div>
                        <span className="hidden md:block">
                            Todos os direitos reservados &copy; {new Date().getFullYear()}
                        </span>

                        <span className="md:hidden">
                            &copy;{new Date().getFullYear()}
                        </span>
                    </div>

                    <div>
                        <span className="hidden gap-2 items-center cursor-pointer md:flex" onClick={onScrollToTop}>
                            Voltar ao topo <FaArrowUp />
                        </span>

                        <span className="flex gap-2 items-center cursor-pointer md:hidden" onClick={onScrollToTop}>
                            <FaArrowUp />
                        </span>
                    </div>

                    <div>
                        <ul className="hidden gap-5 md:flex">
                            <li>
                                <a href="http://www.behance.net/limastdio" target="_blank">Behance</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/company/limastdio/" target="_blank">Linkedin</a>
                            </li>

                            <li>
                                <a href="http://www.instagram.net/limastdio" target="_blank">Instagram</a>
                            </li>
                        </ul>

                        <ul className="flex gap-5 md:hidden">
                            <li>
                                <a href="http://www.behance.net/limastdio" target="_blank">
                                    <FaBehance />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/company/limastdio/" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </li>

                            <li>
                                <a href="http://www.instagram.net/limastdio" target="_blank">
                                    <FaInstagram />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </footer>
        </div >
    )
}