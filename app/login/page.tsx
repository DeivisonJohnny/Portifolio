"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  GithubFilled,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: unknown) => {
    console.log("Form submitted:", data);
  };

  const [nameShow, setNameShow] = useState("");
  const showName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setNameShow(name);
    return null;
  };

  return (
    <main className=" h-[100vh] flex items-center gap-[50px] justify-center w-[100%] max-w-[1400px] max-md:flex-col ">
      <section className="w-[50%] px-9 max-md:hidden">
        <article className="max-md:hidden flex flex-col gap-4 items-center">
          <h1 className=" text-[30px] w-[100%] flex items-center gap-4">
            Olá, Seja bem vindo {nameShow && (<p className=" font-bold gradient-text ">{nameShow} !</p>)}
          </h1>
          <p className=" w-[100%] ">
            Área de acesso à publicação, administração
          </p>
        </article>
      </section>
      <section className="w-[50%] px-9 transition-all duration-300 max-md:w-[100%] flex flex-col gap-[40px] ">
        <h1 className="gradient-text text-[50px] font-bold text-center py-2">
          Dev Johnny
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 transition-all duration-200  "
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Usuário"
                      autoComplete="off"
                      type="text"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event);
                        showName(event);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Senha" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[100%]">
              Submit
            </Button>
          </form>
        </Form>
        <div className=" w-[100%] flex items-center justify-around mt-6 ">
          <GithubFilled className="text-[30px] transition-all duration-300 transform translate-y-[0%] text-[#8161ff] cursor-pointer drop-shadow-shadow-icon hover:translate-y-[-20%] hover:text-[#af9cff] hover:drop-shadow-shadow-icon-from "></GithubFilled>
          <LinkedinFilled className="text-[30px] transition-all duration-300 transform translate-y-[0%] text-[#8161ff] cursor-pointer drop-shadow-shadow-icon hover:translate-y-[-20%] hover:text-[#af9cff] hover:drop-shadow-shadow-icon-from "></LinkedinFilled>
          <InstagramOutlined className="text-[30px] transition-all duration-300 transform translate-y-[0%] text-[#8161ff] cursor-pointer drop-shadow-shadow-icon hover:translate-y-[-20%] hover:text-[#af9cff] hover:drop-shadow-shadow-icon-from "></InstagramOutlined>
        </div>
      </section>
    </main>
  );
}
