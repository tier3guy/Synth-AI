import { cn } from "@/lib/utils";
import Logo from "@/components/custom/logo";
import { Spotlight } from "@/components/ui/spotlight";
import ChatInput from "@/components/custom/chat-input";
import NewChatFooter from "@/components/custom/new-chat-footer";


export default function Page() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col gap-10 items-center justify-center w-1/2">
        <Logo />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
            Hey, Avinash! <br /> <span>Whats in your mind?</span>
          </h1>
          <div className="w-full m-auto mt-6">
            <ChatInput />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0">
        <NewChatFooter />
      </div>
    </div>
  );
}
