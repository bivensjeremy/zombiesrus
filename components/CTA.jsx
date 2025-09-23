import { Button } from "@heroui/button";
import { FaApple } from "react-icons/fa6";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

const CTA = () => {
    return (
        <section className="bg-background">
            <div className="max-w-7xl mx-auto py-24 text-center">
                <h2 className="font-bold text-3xl md:text-5xl mb-6 text-slate-50">
                    What are you waiting for? The Apocalypse??? <br/>Take the plunge today!
                </h2>

                <div className="flex gap-4 justify-center">
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
        </section>
    );
}

export default CTA;