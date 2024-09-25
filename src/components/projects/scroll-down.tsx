"use client"

import { SlArrowDown } from "react-icons/sl";
import { Button } from "../ui/button";


export default function ScrollDown() {
    return (


        <Button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="cursor-pointer w-32 h-16 rounded-full text-black bg-white bg-opacity-75 flex justify-center items-center hover:bg-opacity-95 hover:bg-white "


        >

            <SlArrowDown className="w-5 h-5" />

        </Button>


    )
}