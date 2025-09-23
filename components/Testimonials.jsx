import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { FaQuoteLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Avatar } from "@heroui/avatar"
import clsx from "clsx";
import { fontCaveat } from "@/config/fonts";

const Testimonials = () => {
    const testimonialData = [
        {
            quote: 'The first day I got my zombie, he tried to eat me 6 times! I love my new zombie!',
            name: 'Deadication Jones',
            avatar: '/man_emoji.png'
        },
        {
            quote: 'I could not have asked for a more loyal friend. He has no problem showing how much he wants me!',
            name: 'GhoulRush Carter',
            avatar: '/woman_emoji.png'
        },
        {
            quote: 'I loved my first zombie so much, I got two! I have to lock them in the bathroom to keep them from playing too rough!',
            name: 'Zombify Thomson',
            avatar: '/man_emoji2.png'
        },
    ]
    return (
        <section className="py-12">
            <div className="mx-auto p-2">
                <Marquee pauseOnHover>
                    {testimonialData.map(({ quote, name, avatar }) => (
                        <div className="max-w-6xl px-1">
                            <Card className="h-82">
                                <CardHeader>
                                    <FaQuoteLeft size={52} className="mx-auto" />
                                </CardHeader>
                                
                                <CardBody>
                                    <h3 className={clsx(
                                        fontCaveat.className,
                                        "max-w-[60vw] text-2xl md:text-4xl text-center px-6")}>
                                        {quote}
                                    </h3>
                                    
                                </CardBody>

                                <CardFooter className="gap-3 justify-center font-bold">
                                    <Avatar src={avatar} size="lg" radius="sm"/>
                                    - {name}
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </Marquee>
                

            </div>
            
        </section>
    );
}

export default Testimonials;