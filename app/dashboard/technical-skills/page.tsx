"use client";

import "../../public/style/technical-skills.css";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Space, Table, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

import ImgCrop from "antd-img-crop";
import { CirclePlus, UploadIcon } from "lucide-react";
import FormItem from "antd/es/form/FormItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { WarningOutlined } from "@ant-design/icons";

export type TechnicalSkillsType = {
  key?: React.Key;
  image: string;
  acronymSkills: string;
  techSkills: string;
}[];

export default function TechnicalSkills() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const formSchema = z.object({
    image: z.string(),
    acronymSkills: z.string().min(1, {
      message: "O campo deve ser preenchido",
    }),

    techSkills: z.string().min(1, {
      message: "O campo deve ser preenchido",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      acronymSkills: "",
      techSkills: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const preparePayload = {
      ...values,
      image: fileList[0]?.url || fileList[0]?.thumbUrl,
    };

    console.log("🚀 ~ onSubmit ~ preparePayload:", preparePayload);
  };

  const columns: unknown = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (path: string) => (
        <>
          <Space wrap size={16}>
            <Avatar
              size={50}
              icon={
                path ? (
                  <Image
                    src={path}
                    width={200}
                    height={200}
                    alt="Logo"
                    className="w-full h-full"
                  ></Image>
                ) : (
                  <WarningOutlined />
                )
              }
            ></Avatar>
          </Space>
        </>
      ),
    },

    {
      title: "Sigla",
      dataIndex: "acronym",
      key: "acronym",
    },
    {
      title: "Linguagem",
      dataIndex: "techSkills",
      key: "techSkills",
    },
    {
      title: "Ações",
      dataIndex: "actionUpdate",
      Key: "actionUpdate",
      render: (_: unknown, id: string) => (
        <>
          <div className="flex gap-3 justify-center">
            <Button
              key={id}
              className=" transition-all duration-500 h-fit w-fit px-[5px] py-[1px] rounded-[3px] bg-transparent border-[1.9px] border-dashed border-blue-500 hover:bg-blue-500 "
            >
              <p>Alterar</p>
            </Button>
            <Button
              key={id}
              className=" transition-all duration-500 h-fit w-fit px-[5px] py-[1px] rounded-[3px] bg-transparent border-[1.9px] border-dashed border-[#ff1c2f] hover:bg-[#ff1c2f] "
            >
              <p>Deletar</p>
            </Button>
          </div>
        </>
      ),
    },
  ];

  const dataStudies = Array.from({ length: 50 }).map((_, i) => ({
    key: `key-${i}`,
    logo: "/eu.jpg",
    acronym: "PHP",
    techSkills: "Hypertext Preprocessor (PHP)",
  }));

  return (
    <div className=" w-full h-full rounded-[10px] flex flex-col ">
      <h1 className=" m-[30px] text-[white] text-[20px] font-semibold tracking-[1px] ">
        Administre suas habilidades técnicas
      </h1>
      <div className=" h-full flex items-center flex-col ">
        <Dialog>
          <div className="w-[90%] flex justify-end">
            <DialogTrigger className=" w-fit ">
              <Button className="  flex gap-1 items-center button-neon ">
                <CirclePlus size={18} />
                <p>Adicionar</p>
              </Button>
            </DialogTrigger>
          </div>
          <DialogContent
            className="flex items-center justify-center py-[50px] px-[30px] backdrop-blur-[3px] flex-col"
            aria-describedby={undefined}
          >
            <DialogTitle className="w-full pb-6 text-[17px] tracking-wide ">
              Cadastrar Skills
            </DialogTitle>
            <section className=" w-[100%] flex items-center justify-center gap-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=" w-[90%] flex items-center flex-col gap-4 "
                >
                  <div className=" w-[100%] flex items-center gap-6 flex-col ">
                    <div className=" w-full flex items-center justify-center flex-row ">
                      <ImgCrop rotationSlider>
                        <Upload
                          className="  w-fit transition-all duration-300 "
                          listType="picture-card"
                          fileList={fileList}
                          maxCount={1}
                          onChange={onChange}
                          onPreview={() => openModal()}
                        >
                          <UploadIcon size={33} />
                        </Upload>
                      </ImgCrop>
                    </div>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                      <DialogContent
                        aria-describedby={undefined}
                        className=" flex items-center justify-center flex-col w-[50%] h-[50%] backdrop-blur-[3px] "
                      >
                        <DialogTitle>
                          <h1>
                            {fileList[0]?.name ? fileList[0]?.name : "Imagem"}
                          </h1>
                        </DialogTitle>
                        {(fileList[0]?.thumbUrl || fileList[0]?.url) && (
                          <Image
                            src={
                              fileList[0]?.thumbUrl ||
                              fileList[0]?.url ||
                              undefined ||
                              ""
                            }
                            alt="Imagem upload modal"
                            width={1000}
                            height={1000}
                            className=" w-[90%] h-[90%] rounded-lg "
                          />
                        )}
                      </DialogContent>
                    </Dialog>

                    <FormField
                      control={form.control}
                      name="acronymSkills"
                      render={() => (
                        <FormItem className=" w-[100%] ">
                          <FormLabel className="text-[white] pl-1 ">
                            Sigla
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="text-[white] "
                              placeholder="Ex: PY"
                              type="text"
                              {...form.register("acronymSkills")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="techSkills"
                      render={() => (
                        <FormItem className=" w-[100%] ">
                          <FormLabel className="text-[white] pl-1 ">
                            Linguagem
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="text-[white] "
                              placeholder="Ex: Python"
                              type="text"
                              {...form.register("techSkills")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className=" w-[100%] flex items-end ">
                    <Button type="submit" className=" w-[100%] button-neon ">
                      Cadastrar
                    </Button>
                  </div>
                </form>
              </Form>
            </section>
          </DialogContent>
        </Dialog>
        <section className=" w-[100%] flex items-center justify-center flex-col gap-4">
          <h2 className=" text-left w-[90%] text-[white] text-[16px] tracking-[.05px] ml-2 ">
            Liguagens
          </h2>

          <ContainerTable
            columns={columns}
            dataSource={dataStudies}
            pagination={{ pageSize: 10 }}
            scroll={{ y: 30 * 12 }}
          />
        </section>
      </div>
    </div>
  );
}

const ContainerTable = styled(Table)`
  border: 1px solid #303030;
  border-radius: 8px;
  width: 90%;
  transition: 500ms;

  padding: 10px 20px;

  .ant-pagination-item {
    background-color: #242424;
  }

  .ant-pagination-item a {
    color: white;
  }

  .ant-pagination-item-active a {
    color: #1677ff !important;
  }
`;
