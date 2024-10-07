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

type listSkills = {
  key: string;
  title: string;
};

interface QualityItem {
  nuOrder: number;
  title: string;
  text: string;
  list: listSkills[];
}

function MyQualityItem(props: QualityItem) {

  return (
    <Dialog>
      <DialogTrigger className=" w-[100%] 2xl:w-[80%] transition-all duration-500 ease-in-out flex items-center justify-around border-b-[0.5px] border-[#2a1454] py-[40px] cursor-pointer hover:bg-[#8143ff] ">
        <div className="flex gap-3 items-center w-[20%] ">
          <p className=" text-[35px] max-lg:text-[25px] font-bold text-[#8750f7]">
            {props.nuOrder.toString().padStart(0, "0")}
          </p>
          <h2 className=" text-[30px] text-left font-bold max-lg:text-[25px] ">
            {props.title}
          </h2>
        </div>
        <p className=" w-[45%] "> {props.text}</p>
        <ArrowRightOutlined style={{ fontSize: 30 }} />
      </DialogTrigger>
      <DialogContent className=" backdrop-blur-[1px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-2">
              <h3 className="text-[12px] text-[#9297a0]  tracking-wide  ">
                Algumas <strong>Tech Skills</strong> desta qualidades
              </h3>
              <ol className=" pl-4 list-disc flex flex-col gap-1 ">
                {props.list.map((value) => (
                  <li key={`key-${value.key}`}>{value.title}</li>
                ))}
              </ol>
              <div className=" flex items-center">
                <p className="text-[12px] tracking-wider ">More</p>
                <p className="text-[16px] tracking-wider ">...</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default MyQualityItem;
