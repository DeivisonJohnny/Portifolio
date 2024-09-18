import { Card, CardContent } from "@/components/ui/card";

type CardExperienceType = {
  yearInit: string;
  yearEnd: string;
  title: string;
  subTitle: string;
};

export default function CardExperience(props: CardExperienceType) {
  return (
    <Card className=" w-[80%] py-4 flex items-center justify-center bg-[#140c1c] transition-shadow duration-300 shadow-[0px_0px_25px_0px_rgba(136,80,247,0.16)] hover:shadow-[0px_0px_35px_0px_rgba(136,80,247,0.596)] max-lg:w-[100%] ">
      <CardContent className=" flex flex-col gap-2 w-full h-fit justify-center py-1 px-5 ">
        <h3 className=" w-full text-[#8750f7] font-bold ">
          {props.yearInit} - {props.yearEnd}
        </h3>
        <h2 className=" w-full text-[30px] font-bold ">
          {props.title.toUpperCase()}
        </h2>
        <h3 className=" w-full text-[14px] "> {props.subTitle} </h3>
      </CardContent>
    </Card>
  );
}
