"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import styled from "styled-components";

type CardJobs = {
  titleCard: string;
  descriptionCard: string;
  nameImg: string;
  id: string;
};

export default function CardJobs(props: CardJobs) {
  return (
    <CardContainer
      id={props.id}
      className=" h-[40%] w-[50%] flex items-center flex-col max-lg:w-[100%] cursor-pointer transition-shadow duration-300 bg-[#140c1c] shadow-[0px_0px_25px_0px_rgba(136,80,247,0.16)] hover:shadow-[0px_0px_35px_0px_rgba(136,80,247,0.27)]
"
    >
      <CardHeader className=" w-[100%] flex gap-1 ">
        <CardTitle> {props.titleCard} </CardTitle>
        <CardDescription className="text-[13px] ">
          {props.descriptionCard}
        </CardDescription>
      </CardHeader>
      <CardContent className=" flex items-center justify-center h-[400px] py-4 ">
        <Image
          className=" w-[80%] "
          src={require(`../../../public/img/${props.nameImg}`)}
          alt={"Imagem dos card"}
          objectFit="cover"
          layout="raw"
          width={500}
          height={500}
        ></Image>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled(Card)`


`;
