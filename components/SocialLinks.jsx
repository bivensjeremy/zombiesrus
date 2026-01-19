
import { FaFacebook, FaInstagram, FaGlobe, FaMobileScreenButton, FaPaperPlane } from "react-icons/fa6";
import { AppLink } from './AppLink';
import { FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";

const SocialLinks = () => {
    const footerData = [
    {
        id: 1,
        link: siteConfig.links.facebook,
        image: FaFacebook,
        alt: 'Facebook Icon',
        color: '#1877F2'
    },
    {
        id: 2,
        link: siteConfig.links.instagram,
        image: FaInstagram,
        alt: 'Instagram Icon',
        color: '#DD2A7B'
    },
    {
        id: 3,
        link: siteConfig.links.linkedin,
        image: FaLinkedin,
        alt: 'LinkedIn Icon',
        color: '#0072B1'
    },
    {
        id: 4,
        link: siteConfig.links.business,
        image: FaGlobe,
        alt: 'Blueprint logo',
        color: '#1E3A8A'
    },
    {
        id: 5,
        link: `mailto:${siteConfig.company.email}`,
        image: FaPaperPlane,
        alt: 'Mail Icon',
        color: '#cc0000'
    },
    {
        id: 6,
        link: `tel:${siteConfig.company.phone}`,
        image: FaMobileScreenButton,
        alt: 'Phone Icon',
        color: '#374151'
    }
]


    return (
        <section className="pb-2 bg-background">
            <div className ="flex justify-center gap-6 text-2xl text-primary">
                {footerData.map(({ id, link, image: Icon, color }) => (
                    <AppLink key={id} href={link}>
                        <Icon size={20} className={`text-slate-50 hover:text-primary`} />
                    </AppLink>
                ))}
            </div>
        </section>
    );
}

export default SocialLinks;