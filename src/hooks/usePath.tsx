'use client';
import { usePathname } from "next/navigation";

export function usePath() {
    const p = usePathname();
    // console.log(p.split("/").pop());
    const aspects = p.split("/");


    return {
        paths: aspects,
        recent: aspects.pop()
    }
}

export function usePathList() {
    const p = usePathname();
    return p.split("/");
}