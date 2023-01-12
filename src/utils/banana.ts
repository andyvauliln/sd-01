import { run } from "@banana-dev/banana-dev";
import { env } from "../env/server.mjs";
import type { IGenerateImage } from "../types/generate-image";

export async function generateImage(prompt: string): Promise<IGenerateImage> {
  const modelParameters = {
    prompt: prompt,
  };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const output = (await run(
    env.BANANA_API_KEY,
    env.BANANA_MODEL_KEY,
    modelParameters
  )) as Promise<IGenerateImage>;
  return output;
}
