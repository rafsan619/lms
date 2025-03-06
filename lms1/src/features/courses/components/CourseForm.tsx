"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function CourseForm(){
    const form = useForm({
        resolver: zodResolver(courseSchema) 
    })
}