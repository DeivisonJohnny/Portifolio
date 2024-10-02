import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

export type StudiesType = {
  key?: React.Key;
  yearFrom: number;
  yearTo: number;
  course: string;
  university: string;
};

export default function Skills() {
  const formSchema = z.object({
    yearTo: z
      .string()
      .min(4, {
        message: "O campo deve ter ao menos 4 caracteres",
      })
      .max(4, {
        message: "O campo deve ter 4 caracteres",
      }),

    yearFrom: z
      .string()
      .min(4, {
        message: "O campo deve ter ao menos 4 caracteres",
      })
      .max(4, {
        message: "O campo deve ter 4 caracteres",
      }),

    course: z.string().min(8, {
      message: "O campo deve ter ao menos 8 caracteres",
    }),
    description: z.string().min(4, {
      message: "O campo deve ter ao menos 4 caracteres",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: unknown) => {
    console.log("🚀 ~ onSubmit ~ values:", data);
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

  const dataStudies = Array.from({ length: 100 }).map<StudiesType>((_, i) => ({
    key: `key-${i}`,
    yearFrom: 2024,
    yearTo: 2025,
    course: "Análise e Desenvolvimento de Sistema",
    university: "Universidade Cesmac",
  }));

  return (
    <div className=" w-full h-full rounded-[10px] flex flex-col ">
      <h1 className=" m-[30px] text-[white] text-[20px] font-semibold tracking-[1px] ">
        Skills
      </h1>

      <section className=" flex items-center flex-col w-full ">
        <div className=" w-[90%] ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className=" flex items-center flex-col max-lg:flex-row gap-5 transition-all duration-300 ">
                <div className=" w-[100%] flex items-center gap-[15px] max-lg:flex-wrap max-lg:w-[20%] ">
                  <FormField
                    control={form.control}
                    name="yearTo"
                    render={() => (
                      <FormItem className=" w-[50%] max-lg:w-[100%] ">
                        <FormLabel className=" text-[white] ">Inicio</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Inicio"
                            type="number"
                            className=" max-lg:w-[100%] no-spinner  text-[white] "
                            {...form.register("yearTo")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="yearFrom"
                    render={() => (
                      <FormItem className=" w-[50%] max-lg:w-[100%] ">
                        <FormLabel className=" text-[white] ">Fim</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Fim"
                            type="number"
                            className=" max-lg:w-[100%] no-spinner  text-[white] "
                            {...form.register("yearFrom")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-[100%] flex items-center gap-[15px] max-lg:flex-col ">
                  <FormField
                    control={form.control}
                    name="course"
                    render={() => (
                      <FormItem className=" w-[50%] max-lg:w-[100%] ">
                        <FormLabel className=" text-[white] ">Curso</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Curso"
                            type="text"
                            className=" max-lg:w-[100%] no-spinner  text-[white] "
                            {...form.register("course")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={() => (
                      <FormItem className=" w-[50%] max-lg:w-[100%] ">
                        <FormLabel className=" text-[white] ">
                          Descrição
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Descrição"
                            type="text"
                            className=" max-lg:w-[100%] no-spinner  text-[white] "
                            {...form.register("description")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className=" flex items-center justify-center pb-6 px-[10px] relative h-[70px] ">
                <Button className=" absolute right-0 " type="submit">
                  Adicionar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>

      <section className=" w-[100%] flex items-center justify-center flex-col">
        <ContainerTable
          columns={columns}
          dataSource={dataStudies}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 30 * 6 }}
        />
      </section>
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
