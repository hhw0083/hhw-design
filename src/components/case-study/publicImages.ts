import { existsSync } from "node:fs";
import { join } from "node:path";

const imageExtensions = [".webp", ".png"] as const;

export function existingPublicImage(src?: string) {
  if (!src?.startsWith("/")) {
    return undefined;
  }

  const relativePath = src.replace(/^\/+/, "");

  if (existsSync(join(process.cwd(), "public", relativePath))) {
    return src;
  }

  const extensionMatch = src.match(/\.(webp|png)$/i);

  if (!extensionMatch) {
    return undefined;
  }

  const currentExtension = extensionMatch[0].toLowerCase();
  const basePath = src.slice(0, -extensionMatch[0].length);

  for (const extension of imageExtensions) {
    if (extension === currentExtension) {
      continue;
    }

    const candidate = `${basePath}${extension}`;

    if (
      existsSync(join(process.cwd(), "public", candidate.replace(/^\/+/, "")))
    ) {
      return candidate;
    }
  }

  return undefined;
}
