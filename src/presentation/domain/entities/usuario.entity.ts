export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  cnh: string;
  tempoDeExperiencia: number;
  createdAt: Date;
  updatedAt: Date;
}
