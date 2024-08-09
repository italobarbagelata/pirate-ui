"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Table } from "lucide-react";
import { Cat } from "lucide-react";
import { Bot } from "lucide-react";
import { PlugZap } from "lucide-react";
import { ScanFace } from "lucide-react";
import { AudioLines } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { use, useEffect } from "react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Home() {
  const { toast } = useToast();
  const { setTheme } = useTheme();
  const { theme } = useTheme();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-start gap-4 p-24">
      <Switch
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        name="themeSwitch"
      />
      <div className="flex flex-row gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Radio Group</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Radio Group</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>primary</div>
              <Button disabled>Click me</Button>
              <div>secondary</div>
              <Button variant="secondary" disabled>
                Click me
              </Button>
              <div>destructive</div>
              <Button variant="destructive" disabled>
                Click me
              </Button>
              <div>link</div>
              <Button variant="link" disabled>
                Click me
              </Button>
              <div>outline</div>
              <Button variant="outline" disabled>
                Click me
              </Button>
              <div>ghost</div>
              <Button variant="ghost" disabled>
                Click me
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Button Icons</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>primary</div>
              <Button>
                <Camera className="mr-2 h-4 w-4" />
                Click me
              </Button>
              <div>secondary</div>
              <Button variant="secondary">
                <Cat className="mr-2 h-4 w-4" /> Click me
              </Button>
              <div>destructive</div>
              <Button variant="destructive">
                Click me <Bot className="ml-2 h-4 w-4" />
              </Button>
              <div>link</div>
              <Button variant="link">
                Click me <PlugZap className="ml-2 h-4 w-4" />
              </Button>
              <div>outline</div>
              <Button variant="outline">
                Click me <ScanFace className="ml-2 h-4 w-4" />
              </Button>
              <div>ghost</div>
              <Button variant="ghost">
                <AudioLines className="mr-2 h-4 w-4" />
                Click me <AudioLines className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Icons</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>primary</div>
              <Button size="icon">
                <Camera className="h-4 w-4" />
              </Button>
              <div>secondary</div>
              <Button variant="secondary" size="icon">
                <Cat className="h-4 w-4" />
              </Button>
              <div>destructive</div>
              <Button variant="destructive" size="icon">
                <Bot className="h-4 w-4" />
              </Button>
              <div>link</div>
              <Button variant="link" size="icon">
                <PlugZap className="h-4 w-4" />
              </Button>
              <div>outline</div>
              <Button variant="outline" size="icon">
                <ScanFace className="h-4 w-4" />
              </Button>
              <div>ghost</div>
              <Button variant="ghost" size="icon">
                <AudioLines className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>default</div>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>disabled</div>
              <Input disabled type="email" placeholder="Email" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>full</div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Form</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
