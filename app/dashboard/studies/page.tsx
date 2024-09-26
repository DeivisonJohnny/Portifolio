import { Table } from "antd";
import type { TableColumnsType } from "antd";
import styled from "styled-components";

export type StudiesType = {
  key?: React.Key;
  yearFrom: number;
  yearTo: number;
  course: string;
  university: string;
};

export default function Studies() {
  const columns: TableColumnsType<StudiesType> = [
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
        Administre seus estudos
      </h1>

      <section></section>

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
