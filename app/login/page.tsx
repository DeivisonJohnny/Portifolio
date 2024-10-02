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
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "O usuario deve ter ao menos 3 caracteres",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter ao menos 6 caracteres",
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
          <h1 className=" text-[30px] w-[100%] flex items-center gap-4 flex-wrap ">
            Olá, Seja bem vindo{" "}
            {nameShow && (
              <p className=" font-bold gradient-text ">{nameShow} !</p>
            )}
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
              name="user"
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
          <Link target="_blank" href="https://instagram.com/deivisonjohnny">
            <GithubFilled
              target="_blank"
              className="text-[30px] transition-all duration-300 transform translate-y-[0%] text-[#8161ff] cursor-pointer drop-shadow-shadow-icon hover:translate-y-[-20%] hover:text-[#af9cff] hover:drop-shadow-shadow-icon-from "
            ></GithubFilled>
          </Link>
          <Link target="_blank" href="https://instagram.com/deivisonjohnny">
            <LinkedinFilled
              target="_blank"
              className="text-[30px] transition-all duration-300 transform translate-y-[0%] text-[#8161ff] cursor-pointer drop-shadow-shadow-icon hover:translate-y-[-20%] hover:text-[#af9cff] hover:drop-shadow-shadow-icon-from "
            ></LinkedinFilled>
          </Link>
          <Link target="_blank" href="https://instagram.com/deivisonjohnny">
            <InstagramOutlined
              target="_blank"
              className="text-[30px] transition-all duration-300 transform translate-y-[0%] text-[#8161ff] cursor-pointer drop-shadow-shadow-icon hover:translate-y-[-20%] hover:text-[#af9cff] hover:drop-shadow-shadow-icon-from "
            ></InstagramOutlined>
          </Link>
        </div>
      </section>
    </main>
  );
}
