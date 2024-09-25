import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Studies() {
  return (
    <div className=" w-full h-full rounded-[10px] flex flex-col ">
      <h1 className=" m-[30px] text-[white] text-[20px] font-semibold tracking-[1px] ">
        Administre seus estudos
      </h1>

      <section className=" w-[100%] flex items-center justify-center flex-col">
        <div className=" w-[90%] border-[1px] border-[#2c2c2c] rounded-[5px]">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="rounded-[10px_10px_0px_0px] ">
                <TableHead className="  text-[#888888] font-semibold w-[100px] rounded-[8px_0px_0px_0px] ">
                  Nº Ordem
                </TableHead>
                <TableHead className=" text-[#888888] font-semibold ">
                  Inicio
                </TableHead>
                <TableHead className=" text-[#888888] font-semibold ">
                  Fim
                </TableHead>
                <TableHead className=" text-[#888888] font-semibold ">
                  Estudo
                </TableHead>
                <TableHead className="  text-[#888888] font-semibold rounded-[0px_8px_0px_0px] ">
                  Subtitulo
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-[white] text-[16px] ">1</TableCell>
                <TableCell className="text-[white] text-[16px] ">
                  2022
                </TableCell>
                <TableCell className="text-[white] text-[16px] ">
                  2024
                </TableCell>
                <TableCell className="text-[white] text-[16px] ">
                  Análise e Desenvolvimento de Sistemas
                </TableCell>
                <TableCell className="text-[white] text-[16px] ">
                  Universidade Cesmac
                </TableCell>
              </TableRow>
            </TableBody>
            <TableCaption className="py-2 text-[#7a7a7a] tracking-[1px] ">
              Lista de Estudos
            </TableCaption>
          </Table>
        </div>
      </section>
    </div>
  );
}
