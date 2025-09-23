import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import {Image} from "@heroui/image";
import clsx from "clsx";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from '@heroui/link';
import { fontPotter } from "@/config/fonts";
import { BuyNow } from './BuyNow';

const Pricing = () => {
    const priceInfo = [
            {
                title: 'Day Walker',
                image: '/walking-zombie2.png',
                price: '$49',
                desc: ['Slow wanderer', 'Generally calm', 'Enjoys midnight snacks', 'Manageable for Beginners']
            },
            {
                title: 'Flesh Eater',
                image: '/gouhl-zombie.png',
                price: '$99',
                desc: ['Can be quite violent','Loves human flesh', 'Can lift up to 50lbs', 'Will keep you on your toes', ]
            },
            {
                title: 'Vegan Delight',
                image: '/crawling-zombie.png',
                price: '$119',
                desc: ['Our latest zombie', 'Loves to dig', 'Will chew brains, but will not digest them']
            }
        ]
    return (
        
        <section className="py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 px-3 lg:px-0">
                    <div className=" text-center lg:text-start my-auto pr-2 text-slate-50">
                        <h2 className="text-4xl font-extrabold">
                            A Zombie for Everyone to Enjoy!
                        </h2>


                        <p className="my-4">
                            Select from one of our generous options. Our Zombies have a variety of characteristics that are sure to keep you busy for days on end!
                        </p>

                        <Button
                            as={Link}
                            variant="light"
                            color="primary"
                            isExternal={true}
                            href="https://bivensblueprintllc.hbportal.co/public/68c4169c4d8580002134164b"
                            endContent={<FaAngleRight />}
                        >
                            Contact me to discuss other options
                        </Button>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-3 col-span-2 gap-3">
                {priceInfo.map(({ title, price, desc, image }, index) => (
                    <Card key={index} className="max-w-sm mx-auto w-full">
                        <CardHeader className={clsx(fontPotter.className,
                        "px-4 flex-col")}>
                            <h4 className="font-bold text-2xl">{title}</h4>
                            <p className="text-4xl font-bold">{price}</p>
                        </CardHeader>

                        <CardBody className="overflow-hidden h-56 flex items-center">
                            <Image
                                alt="Card background"
                                className="object-contain rounded-xl h-72"
                                src={image}
                            />
                        </CardBody>

                        <CardBody>
                            <ul className="text-base list-disc">
                                {desc.map((item, index) => (
                                    <li key={index}>
                                        - {item}
                                    </li>
                                ))}
                            </ul>
                        </CardBody>

                        <CardFooter>
                            <BuyNow />
                        </CardFooter>
                    </Card>
                ))}
                </div>    
                </div>
                
                
            </div>
            
            
        </section>
    );
}

export default Pricing;