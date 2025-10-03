import Image from "next/image";
import LogoSvg from "@/assets/logo.svg";

export default function Logo() {
    return (
        <div className="z-10 bg-background">
            <Image src={LogoSvg} alt="logo" />
        </div>
    );
}
