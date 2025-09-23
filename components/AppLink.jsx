import NextLink from "next/link";
import { Link as HeroLink } from "@heroui/link";
import { forwardRef } from "react";

export const AppLink = forwardRef(({ href, prefetch = true, ...props }, ref) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternal) {
        return (
            <NextLink href={href} passHref prefetch={prefetch}>
                <HeroLink ref={ref} {...props} />
            </NextLink>
        );
    }

    return (
        <HeroLink
            ref={ref}
            href={href}
            isExternal
            {...props}
        />
    );
});

AppLink.displayName = "AppLink";
