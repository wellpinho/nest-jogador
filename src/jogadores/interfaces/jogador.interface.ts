/*
 ** No seu exemplo, as propriedades id, phone, name e email são marcadas como readonly,
 ** o que significa que uma vez que um objeto IJogador é criado, esses valores não podem
 ** ser alterados.
 */
export interface IJogador {
  readonly id: number;
  readonly phone: string;
  readonly email: string;
  name: string;
  ranking: string;
  positionRanking: number;
  jogadorAvatar: string;
}
