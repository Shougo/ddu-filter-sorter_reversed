import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v2.2.0/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v2.2.0/deps.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  // deno-lint-ignore require-await
  override async filter(args: {
    denops: Denops;
    items: DduItem[];
  }): Promise<DduItem[]> {
    return Promise.resolve(args.items.reverse());
  }

  override params(): Params {
    return {};
  }
}
