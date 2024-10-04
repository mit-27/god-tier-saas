"use client"
import Subtitle from "@/components/ui/Subtitle"
import Title from "@/components/ui/Title"


import { useState } from "react";
import CodeSelection from "./code-selection";

const Guide = () => {
  

  return (
    <div className="grid grid-cols-1 mt-8 min-h-screen">

    <div className="flex flex-col items-start gap-3 px-7 pb-8 text-center md:items-center md:px-10">
      <div className="relative flex flex-col md:items-center lg:flex-row">
      <Title className="lg:text-5xl">End to end type safety to create and use the APIs</Title>
      </div>
        <Subtitle>
        Define your APIs with ts-rest Router, implement them in your NestJS controllers, and use them in NextJS using type-safe TanStack queries.
        </Subtitle>

        <CodeSelection/>
    </div>
    </div>

  )
}

export default Guide