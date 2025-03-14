/*
 ** DTO tem o objetivo de mapear o
 ** objeto que vem no body do cliente
 ** e trafega este objeto em toda aplicação
 */
export class CriarJogadorDto {
  readonly phone: string;
  readonly email: string;
  readonly name: string;
}
