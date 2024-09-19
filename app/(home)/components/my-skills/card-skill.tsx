import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";



type CardSkill = {
  iconText: string;
  iconImg?: string;
  porcent: string;
  titleBottom: string;
};

export default function CardSkill(props: CardSkill) {

  return (
    <Card className="border-none flex items-center justify-center flex-col p-0 gap-[10px] bg-transparent ">
      <CardContent className=" w-[180px] h-[182px]  bg-[#140c1c] grayscale-[90%]  transition-all duration-500 hover:bg-[#2A1454] flex items-center flex-col justify-center  py-[30px] rounded-[10px] px-8 border-[1px] border-[transparent] hover:border-[#8750f7] hover:grayscale-[0%] gap-2 ">
        {props.iconImg ? (
          <Image
            src={`/${props.iconImg}`}
            width={100}
            height={100}
            alt="Icones"
          />
        ) : (
          <h2
            className={` text-[#2b4ac7] text-[30px] font-bold cursor-default `}
          >
            {props.iconText}
          </h2>
        )}
        <p className=" text-[white] text-[16px] font-bold "> {props.porcent} </p>
      </CardContent>
      <CardFooter>
        <p className=" text-[#8750f7] font-medium cursor-default "> {props.titleBottom} </p>
      </CardFooter>
    </Card>
  );
}
