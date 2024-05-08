import siteData from "@/data.json";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";


const siteLinks = siteData.siteLinks;
const siteDefault = siteData.siteDefault;

interface AppLinkProps extends HTMLAttributes<HTMLAnchorElement>, LinkProps {
    children: React.ReactNode,
}


export default function AppLink(props: AppLinkProps) {

    const {href, children, ...rest} = props;

    let link = href;
    
    if (!siteLinks.includes(link.toString())) {
        link = siteDefault
    }

    return (
        <Link href={link} {...rest}>
            { children }
        </Link>
    )
}
