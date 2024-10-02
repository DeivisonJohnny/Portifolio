import "../../public/style/technical-skills.css";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetProp, Table, Upload, UploadFile, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

import ImgCrop from "antd-img-crop";
import { CirclePlus, UploadIcon } from "lucide-react";
import FormItem from "antd/es/form/FormItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type TechnicalSkillsType = {
  key?: React.Key;
  image: string;
  acronymSkills: string;
  techSkills: string;
}[];

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export default function TechnicalSkills() {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
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
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const onSubmit = (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    const payload = {
      ...data,
      image: fileList[0]?.url || fileList[0]?.thumbUrl,
    };
    console.log("🚀 ~ onSubmit ~ payload:", payload);
  };

  const columns = [
    {
      title: "Ano de Início",
      dataIndex: "yearFrom",
      key: "yearFrom",
    },
    {
      title: "Ano de Conclusão",
      dataIndex: "yearTo",
      key: "yearTo",
    },
    {
      title: "Curso",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Universidade",
      dataIndex: "university",
      key: "university",
    },
  ];

  const dataStudies = Array.from({ length: 100 }).map((_, i) => ({
    key: `key-${i}`,
    yearFrom: 2024,
    yearTo: 2025,
    course: "Análise e Desenvolvimento de Sistema",
    university: "Universidade Cesmac",
  }));

  return (
    <div className=" w-full h-full rounded-[10px] flex flex-col ">
      <h1 className=" m-[30px] text-[white] text-[20px] font-semibold tracking-[1px] ">
        Administre suas habilidades técnicas
      </h1>
      <div className=" h-full flex items-center flex-col ">
        <Dialog>
          <DialogTrigger className="w-[90%] flex justify-end">
            <Button className="  flex gap-1 items-center button-neon ">
              <CirclePlus size={18} />
              <p>Adicionar</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center py-[50px] px-[30px] backdrop-blur-[3px] ">
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
                          onPreview={onPreview}
                        >
                          <UploadIcon size={33} />
                        </Upload>
                      </ImgCrop>
                    </div>

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
            scroll={{ y: 30 * 15 }}
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

  .ant-table-container > .ant-table-body {
    scrollbar-width: 2px !important;
  }
  .ant-table-container {
    background-color: #17191b;
    color: white;
  }

  .ant-table-thead > tr > th {
    background-color: #17191b;
    color: white;
  }

  .ant-table-cell-row-hover {
    background-color: #3f3f3f84 !important;
  }

  .ant-table-cell {
    border-bottom: none !important;
    font-size: 13px !important;
    padding: 10px !important;
  }

  .ant-table-cell:before {
    display: none;
  }
  .ant-table-cell-scrollbar {
    box-shadow: none !important;
  }

  .ant-pagination-item-link > span svg {
    color: white;
    font-weight: bold;
    font-size: 16px !important;
  }

  .ant-pagination-item {
    background-color: #242424;
  }

  .ant-pagination-item a {
    color: white;
  }

  .ant-pagination-item-active a {
    color: #1677ff !important;
  }

  .ant-select,
  .ant-select-selector {
    border: none !important;
    border-radius: 6px;
    background-color: #242424 !important;
    color: white;
  }
`;
