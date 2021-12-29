import { CoinNames } from "store/types";

export interface ICoin {
  id: number;
  name: CoinNames;
  invested: number;
}
