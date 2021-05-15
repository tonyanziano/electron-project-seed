import { GlitzClient } from "@glitz/core";
import transformers from "@glitz/transformers";

export const glitzClient = new GlitzClient({ transformer: transformers() });
