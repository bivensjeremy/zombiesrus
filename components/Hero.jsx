import Image from 'next/image';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import clsx from 'clsx';
import { fontPotter } from '@/config/fonts';
import { FaApple } from "react-icons/fa";

const Hero = () => (
    <section className="min-h-[50vh]">
        <div className='max-w-7xl mx-auto px-3 md:px-0'>
            <div className='grid md:grid-cols-2 items-center min-h-[50vh] mt-12 md:mt-0'>
                <div className='flex flex-col pb-6'>
                    <h1 className={clsx(
                        fontPotter.className,
                        "font-bold mb-4 text-5xl md:text-7xl text-slate-50 text-shadow-md text-shadow-background dark:text-slate-900 dark:text-shadow-foreground"
                    )}>
                        Get your own flesh-eating zombie today!
                    </h1>

                    <div className="flex gap-4 justify-center md:justify-start">
                        {/* Google Play Badge */}
                        <Button
                            as={Link}
                            href="https://play.google.com/store/apps/details?id=com.bivens.jeremy.blueprintv04"
                            isExternal
                            className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2"
                        >
                            <Image
                                src="/google-play-store-logo.png"  
                                alt='google play store logo'
                                height={24}
                                width={28}
                            />
                            <span className="flex flex-col leading-tight text-left">
                                <span className="text-[10px] uppercase">Get it on</span>
                                <span className="text-sm font-semibold">Google Play</span>
                            </span>
                        </Button>

                        {/* App Store Badge */}
                        <Button
                            as={Link}
                            href="https://apps.apple.com/us/app/bivens-blueprint/id6745745937" 
                            isExternal
                            className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2"
                        >
                            <FaApple className="text-2xl" />
                            <span className="flex flex-col leading-tight text-left">
                                <span className="text-[10px]">Download on the</span>
                                <span className="text-sm font-semibold">App Store</span>
                            </span>
                        </Button>
                    </div>
                </div>

                <div className='relative mx-auto md:mx-0 md:left-30'>
                    <Image 
                        src={'/iphone.png'}
                        alt='iphone image of zombie'
                        width={300}
                        height={300}
                        className='md:rotate-20 md:absolute -top-30'
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;