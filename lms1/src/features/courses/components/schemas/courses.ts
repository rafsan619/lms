import { z } from "zod";

export const couseSchema = z.object({
    name: z.string().min(1, "Required"),
    description: z.string().min(1, "Required")
})