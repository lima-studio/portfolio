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
import { t } from "i18next"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { FaArrowUp, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa"
import { z } from "zod"


const contactFormSchema = z.object({
    name: z.string()
        .min(3, { message: t("contact.formMessages.nameTooShort") })
        .max(50, { message: t("contact.formMessages.nameTooLong") }),
    email: z.string().email({ message: t("contact.formMessages.invalidEmail") }),
    cellphone: z.string().min(10, { message: t("contact.formMessages.cellphoneTooShort") }),
    brand: z.object({
        name: z.string().min(3, { message: t("contact.formMessages.brandNameTooShort") }).max(50, { message: t("contact.formMessages.brandNameTooLong") }),
        segment: z.string().min(3, { message: t("contact.formMessages.brandSegmentTooShort") }).max(50, { message: t("contact.formMessages.brandSegmentTooLong") }),
        description: z.string().min(3, { message: t("contact.formMessages.brandDescriptionTooShort") }).max(500, { message: t("contact.formMessages.brandDescriptionTooLong") }),
    }),
    estimatedBudget: z.string().refine((val) => val !== "", { message: t("contact.formMessages.budgetRequired") }).refine((val) => Number(val) > 0, { message: t("contact.formMessages.budgetGreaterThanZero") }),
})

export default function ContactPage() {
    const { t, i18n } = useTranslation();

    const english = i18n.language === "en-US"


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
            estimatedBudget: new Number(convertedEstimatedBudget).toLocaleString(english ? "en-US" : "pt-BR", { style: "currency", currency: english ? "USD" : "BRL" }),
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
            <Navbar />
            <div className="container px-5 mx-auto mb-32 grid grid-cols-1 space-y-16 mt-10">
                <div className="flex flex-col space-y-2 text-center">
                    <BlurFade inView>
                        <h1 className="text-5xl md:text-8xl font-semibold">{t('contact.header.mainTitle')}</h1>
                    </BlurFade>

                    <BlurFade inView delay={0.2}>
                        <p className="md:text-3xl">{t('contact.header.subTitle')}</p>
                    </BlurFade>
                </div>

                <div className="lg:px-52">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-10"
                        >
                            <BlurFade className="space-y-3" inView>
                                <h1 className="text-lg">{t('contact.formLabels.contactInfo')}</h1>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('contact.formLabels.name')}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder={t('contact.placeholders.name')} {...field}
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
                                            <FormLabel>{t('contact.formLabels.email')}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder={t('contact.placeholders.email')} {...field}
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
                                            <FormLabel>{t('contact.formLabels.cellphone')}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder={t('contact.placeholders.cellphone')}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </BlurFade>
                            <BlurFade className="space-y-3" inView delay={0.2}>
                                <h1 className="text-lg">{t('contact.formLabels.brandInfo')}</h1>
                                <FormField
                                    control={form.control}
                                    name="brand.name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('contact.formLabels.brandName')}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder={t('contact.placeholders.brandName')}
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
                                            <FormLabel>{t('contact.formLabels.brandSegment')}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    maxLength={50}
                                                    placeholder={t('contact.placeholders.brandSegment')}
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
                                            <FormLabel>{t('contact.formLabels.brandDescription')}</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className="h-12"
                                                    maxLength={500}
                                                    placeholder={t('contact.placeholders.brandDescription')}
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
                                            <FormLabel>{t('contact.formLabels.estimatedBudget')}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12"
                                                    placeholder={t('contact.placeholders.estimatedBudget')}
                                                    {...field}
                                                    value={new Intl.NumberFormat(english ? 'en-US' : 'pt-BR', {
                                                        style: 'currency',
                                                        currency: english ? 'USD' : 'BRL',
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
                                className="bg-secondary hover:bg-secondary/90"
                                type="submit"
                                disabled={sendingEmail}
                            >
                                {sendingEmail ? t('contact.button.sending') : t('contact.button.send')}
                            </Button>
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
                            {t('footer.copyright')}  &copy; {new Date().getFullYear()}
                        </span>

                        <span className="md:hidden">
                            &copy;{new Date().getFullYear()}
                        </span>
                    </div>

                    <div>
                        <span className="hidden gap-2 items-center cursor-pointer md:flex" onClick={onScrollToTop}>
                            {t('footer.back_to_top')} <FaArrowUp />
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