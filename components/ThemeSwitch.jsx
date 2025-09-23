"use client";

import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Switch } from "@heroui/switch";
import clsx from "clsx";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeSwitch({ className }) {
    const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();
    const isLight = theme === "light" || isSSR;

    const toggleTheme = () => {
        setTheme(isLight ? "dark" : "light");
    };

    return (
        <Switch
            isSelected={!isLight}
            onChange={toggleTheme}
            className={clsx(
                "transition-opacity hover:opacity-80 cursor-pointer",
                className
            )}
            color="primary"
            size="lg"
            // startContent={<HiMoon />}
            // endContent={<HiSun />}
            thumbIcon={({isSelected}) =>
                isSelected ? <HiMoon /> : <HiSun className='text-yellow-600' />
            }
        />
    );
}