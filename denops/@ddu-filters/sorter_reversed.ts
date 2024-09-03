import { type DduItem } from "jsr:@shougo/ddu-vim@~6.1.0/types";
import { BaseFilter } from "jsr:@shougo/ddu-vim@~6.1.0/filter";

import type { Denops } from "jsr:@denops/core@~7.0.0";

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
