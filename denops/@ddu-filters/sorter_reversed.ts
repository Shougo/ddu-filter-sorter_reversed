import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v3.5.0/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v3.5.0/deps.ts";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    denops: Denops;
    items: DduItem[];
  }): Promise<DduItem[]> {
    return Promise.resolve(args.items.reverse());
  }

  override params(): Params {
    return {};
  }
}
