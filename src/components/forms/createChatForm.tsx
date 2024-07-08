"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form"
import { FC, PropsWithChildren } from "react"
import { Column, Row } from "../atoms/layout"
import { P } from "../atoms/text"
import { Input } from "../input"
import { Camera, LocateFixed } from "lucide-react";
import { Textarea } from "../textArea";
import { RadioGroup, RadioGroupItem } from "../radioGroup";
import { ToggleGroup, ToggleGroupItem } from "../toggleGroup";
import { cn } from "@/lib/utils";
import { Button } from "../atoms/button";


const _colors = [
      "blue-500",
      "lime-500",
      "yellow-500",
      "blue-500",
      "lime-500",
      "yellow-500",
      "blue-500",
      "lime-500",
      "yellow-500",
      "blue-500"
]

export const CreateChatForm = () => {
      const form = useForm({
            // resolver: zodResolver(signInSchema),
            defaultValues: {
              link: "",
              name: "",
              color: "",
              price: "",
              messagePack: "",
              profilePicture: "",
              location: "",
              onlineStatus: "",
              firstMessage: "",
              invitation: ""
            },
          })

      //     function onSubmit(data: z.infer<typeof signInSchema>) {
      //      console.log(data)
      //     }
      return (
            <Form {...form}>
                  <form className="flex flex-col gap-6">
                        <FormField 
                              control={form.control}
                              name="link"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormSection data={{label: "Your Link", count: 1}}>
                                                <FormControl>
                                                      <Input
                                                            container={{
                                                                  className:"gap-[2px]"
                                                            }}
                                                            leftElement={
                                                                  <P className="text-lime-500">dialme.chat/</P>
                                                            } 
                                                            placeholder="username" 
                                                            type="text" 
                                                            {...field} 
                                                      />
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormSection data={{label: "Your Name", count: 2}}>
                                                <FormControl>
                                                      <Input
                                                            container={{
                                                                  className:"gap-[2px]"
                                                            }}
                                                            placeholder="Your Name" 
                                                            type="text" 
                                                            {...field} 
                                                      />
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="color"
                              render={({ field }) => (
                                    <FormItem>
                                    <FormSection
                                          data={{
                                                label: "Color",
                                                count: 3
                                          }}
                                    >
                                          <FormControl>
                                                <ToggleGroup
                                                      onValueChange={field.onChange}
                                                      defaultValue={field.value} 
                                                      type="single" 
                                                      
                                                      size="sm"
                                                      className="pl-4 justify-start gap-2"
                                                >
                                                      {
                                                            _colors.map((color, index) => {
                                                                  return (
                                                                        <ToggleGroupItem key={index + color} value={color + index}><div className={cn("w-[18px] h-[18px] rounded-full", `bg-${color}`)} /></ToggleGroupItem>
                                                                  )
                                                            })
                                                      }
                                                       
                                                </ToggleGroup>
                                          </FormControl>
                                    </FormSection>
                                    <FormMessage />
                              </FormItem>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="price"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormSection data={{label: "Price per message", count: 4}}>
                                                <FormControl>
                                                      <Input
                                                            container={{
                                                                  className:"gap-[2px]"
                                                            }}
                                                            placeholder="$0,10" 
                                                            type="text" 
                                                            {...field} 
                                                      />
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                         <FormField
                              control={form.control}
                              name="messagePack"
                              render={({ field }) => (
                                    <FormItem className="space-y-3">
                                          <FormSection
                                                data={{
                                                      label: "Message Pack Promo",
                                                      count: 5
                                                }}
                                          >
                                                <FormControl>
                                                      <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex flex-col space-y-1"
                                                      >
                                                            <Row>
                                                                  <FormItem className="flex-1 flex items-center space-x-3 space-y-0">
                                                                        <FormControl>
                                                                              <RadioGroupItem value="5" />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal flex items-center">5 messages <P className="pl-2 text-sm text-lime-500">$0.50</P></FormLabel>
                                                                  </FormItem>

                                                                  <FormItem className="flex-1 flex items-center space-x-3 space-y-0">
                                                                        <FormControl>
                                                                              <RadioGroupItem value="10" />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal flex items-center">10 messages <P className="pl-2 text-sm text-lime-500">$1</P></FormLabel>
                                                                  </FormItem>
                                                            </Row>
                                                            <Row>
                                                                  <FormItem className="flex-1 flex items-center space-x-3 space-y-0">
                                                                        <FormControl>
                                                                              <RadioGroupItem value="50" />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal flex items-center">50 messages <P className="pl-2 text-sm text-lime-500">$5</P></FormLabel>
                                                                  </FormItem>

                                                                  <FormItem className="flex-1 flex items-center space-x-3 space-y-0">
                                                                        <FormControl>
                                                                              <RadioGroupItem value="100" />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal flex items-center">100 messages <P className="pl-2 text-sm text-lime-500">$10</P></FormLabel>
                                                                  </FormItem>
                                                            </Row>
                                                      </RadioGroup>
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="profilePicture"
                              render={({ field }) => (
                                    <FormSection
                                          data={{
                                                label: "Profile Picture",
                                                count: 6
                                          }}
                                    >
                                          <Button className="w-full"> <Camera className="mr-2" /> Add a photo</Button>
                                    </FormSection>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="location"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormSection data={{label: "Location", labelDesc: "Display a location", count: 7}}>
                                                <FormControl>
                                                      <Input
                                                            rightElement={
                                                                  <LocateFixed className="text-lime-500 w-5 h-5" />
                                                            }
                                                            container={{
                                                                  className:"gap-[2px]"
                                                            }}
                                                            placeholder="Indonesia" 
                                                            type="text" 
                                                            {...field} 
                                                      />
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="onlineStatus"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormSection
                                                data={{
                                                      label: "Online Status",
                                                      labelDesc: "Show Online Status",
                                                      count: 8
                                                }}
                                          >
                                                <FormControl>
                                                      <ToggleGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value} 
                                                            variant="outline" 
                                                            type="single" 
                                                            className="pl-4 justify-start"
                                                      >
                                                            <ToggleGroupItem value="online">Online</ToggleGroupItem>
                                                            <ToggleGroupItem value="offline">Offline</ToggleGroupItem>
                                                            <ToggleGroupItem value="busy">Busy</ToggleGroupItem>
                                                      </ToggleGroup>
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="firstMessage"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormSection data={{
                                                      label: "First Message", 
                                                      description: "This is the first message that will pop in the conversation when a user clicks on your profile", 
                                                      count: 9,
                                                      isRequired: false
                                                      }}>
                                                <FormControl>
                                                      <Textarea
                                                            {...field} 
                                                      />
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField 
                              control={form.control}
                              name="invitation"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormSection data={{
                                                      label: "Invitation", 
                                                      description: "Did someone invite you to dialme?", 
                                                      count: 10,
                                                      isRequired: false
                                                }}>
                                                <FormControl>
                                                      <Input
                                                            container={{
                                                                  className:"gap-[2px]"
                                                            }}
                                                            type="text" 
                                                            {...field} 
                                                      />
                                                </FormControl>
                                          </FormSection>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <Button type="submit">Create your Page</Button>
                  </form>
            </Form>
      )
}

interface FormSectionProps extends PropsWithChildren {
      data: {
            label: string;
            labelDesc?: string;
            description?: string
            count: number;
            isRequired?: boolean;
      }
}
const FormSection:FC<FormSectionProps> = ({ data, children }) => {
      const {isRequired = true } = data
      return (
            <Column className="gap-2">
                  <Row className="items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center rounded-full bg-stone-700 text-xs text-white">{data.count}</span>
                        <FormLabel className="row">{data.label}</FormLabel>
                        <P className="text-xs text-gray-400">{data.labelDesc}</P>
                        {
                              isRequired? (
                                    <span className="text-red-500 ">*</span>
                              ): null
                        }
                  </Row>
                  <P className="ml-6 text-xs text-gray-400">{data.description}</P>
                  <div className="px-4">
                        {children}
                  </div>
            </Column>
      )
}