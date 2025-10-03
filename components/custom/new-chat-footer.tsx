import Image from "next/image";
import RedHeartEmoji from "@/assets/red-heart.svg";
import Link from "next/link";

export default function NewChatFooter(){
    return (
        <div className="w-full py-3 flex items-center justify-center">
            <p>Made with <Image src={RedHeartEmoji} alt="heart-emoji" className="h-4 w-4 inline-block" /> by <Link href={"https://tier3guy.com"}>@tier3guy</Link></p>
        </div>
    )
}