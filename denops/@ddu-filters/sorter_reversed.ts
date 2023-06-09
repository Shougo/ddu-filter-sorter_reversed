import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v3.0.2/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v3.0.2/deps.ts";

type Params = Record<never, never>;

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
