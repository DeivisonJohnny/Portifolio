"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type QualityItem = {
  nuOrder: number;
  title: string;
  text: string;
};

function MyQualityItem(props: QualityItem) {
  return (
    <Dialog>
      <DialogTrigger className=" w-[100%] 2xl:w-[80%] transition-all duration-500 ease-in-out flex items-center justify-around border-b-[0.5px] border-[#2a1454] py-[40px] cursor-pointer hover:bg-[#8143ff] ">
        <div className="flex gap-3 items-center w-[20%] ">
          <p className=" text-[35px] max-lg:text-[25px] font-bold text-[#8750f7]">
            {props.nuOrder.toString().padStart(0, "0")}
          </p>
          <h2 className=" text-[30px] font-bold max-lg:text-[25px] ">
            {props.title}
          </h2>
        </div>
        <p className=" w-[45%] "> {props.text}</p>
        <ArrowRightOutlined style={{ fontSize: 30 }} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>
            <h2> {props.text} </h2>
            <div>
              <h3>Linguagens Desenvolvidas</h3>
              <ul>
                <li>
                  <p>PHP</p>
                </li>
                <li>
                  <p>JavaScript</p>
                </li>
                <li>
                  <p>TypeScript</p>
                </li>
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default MyQualityItem;
