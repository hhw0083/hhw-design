import { existsSync } from "node:fs";
import { join } from "node:path";

export function existingPublicImage(src?: string) {
  if (!src?.startsWith("/")) {
    return undefined;
  }

  return existsSync(join(process.cwd(), "public", src.replace(/^\/+/, "")))
    ? src
    : undefined;
}
