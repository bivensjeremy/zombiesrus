import { siteConfig } from "@/config/site";

const Footer = () => {
    return (
        <footer>
            <p className='uppercase text-xs text-center bg-background text-slate-50'>
                &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
        </footer>
    );
}

export default Footer;