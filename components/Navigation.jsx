'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@heroui/navbar";
import clsx from "clsx";
import { fontPotter } from "@/config/fonts";
import ThemeSwitch from './ThemeSwitch';


const Navigation = () => {
    return (
        <Navbar maxWidth="xl" isBlurred={false} className="bg-transparent" position="static">
            <NavbarContent>
                <NavbarBrand>
                    <p className="font-header font-bold text-2xl text-primary text-shadow-md text-shadow-background">Zombies-R-Us</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem>
                <ThemeSwitch />
              </NavbarItem>
            </NavbarContent>
    </Navbar>
    );
}

export default Navigation;