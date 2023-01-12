import { z } from "zod";
import type { IGenerateImage } from "../../../types/generate-image";
import { generateImage } from "../../../utils/banana";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const mlRouter = createTRPCRouter({
  generateImage: publicProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      const image = await generateImage(input.prompt);
      return image;
    }),
});
