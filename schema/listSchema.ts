import { z } from "zod";

export const GeneralListSchema = z.object({
  titulo: z.string(),
});

export type TList = z.infer<typeof GeneralListSchema>;
export type TListWithId = TList & { _id: string };
