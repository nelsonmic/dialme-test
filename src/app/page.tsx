import { Button } from "@/components/atoms/button";
import { Column, Row } from "@/components/atoms/layout";
import { H, P } from "@/components/atoms/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { CreateChatForm } from "@/components/forms/createChatForm";
import { Input } from "@/components/input";
import { Send } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Row className="w-full justify-between bg-stone-950 p-6 max-w-[1600px]">
        <Column className="border border-stone-900 rounded-md flex-1 bg-black p-4 gap-6">
          <Column className="gap-2">
            <H className="text-lg text-gray-200">Create Your Chat</H>
            <P className="text-gray-400 text-sm">It&apos;s free and take 1 min to setup your account <br />Offer a direct access to your DM choose your price you will be able to change that anytime you want</P>
          </Column>
          <CreateChatForm />
        </Column>
        <Column className="border border-stone-900 bg-black flex-1 p-4">
          <Column className="min-h-[500px] justify-between">
              <div className="bg-lime-500 rounded-md p-4">
                <Row className="justify-between items-center mt-12">
                  <Row className="items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png"  />
                      <AvatarFallback>PR</AvatarFallback>
                    </Avatar>
                    <Column className="gap-0">
                      <P className="text-black text-sm font-bold">Pranav Ray</P>
                      <P className="text-xs text-gray-500">Paris</P>
                    </Column>
                  </Row>
                  <div className="bg-slate-600/35 w-[100px] rounded-md p-2" />
                </Row>
              </div>
              <Column>
                <Row className="items-center">
                  <Input />
                  <Button className="rounded-full w-12 h-12"><Send className="w-[40px] h-[40px]" /></Button>
                </Row>
              </Column>
          </Column>
        </Column>
      </Row>
    </main>
  );
}
