import studioBancada from "@/assets/studio-bancada.jpg";
import studioMaquinas from "@/assets/studio-maquinas.jpg";
import studioMateriais from "@/assets/studio-materiais.jpg";
import studioEspaco from "@/assets/studio-espaco.jpg";

// Imports das imagens dos trabalhos (ajuste os nomes dos arquivos conforme seus assets)
import workLinhaContinuad from "@/assets/fineline.jpg";
import workCampoPreto from "@/assets/costas.jpg";
import workMarcaBreve from "@/assets/costela.jpg";
import workOrnamento from "@/assets/esterno.jpg";
import workRetratoCinza from "@/assets/braco.jpg";
import workProjetoFechado from "@/assets/canela.jpg";
import workAquarela from "@/assets/antebraco.jpg";

import { StaticImageData } from "next/image";

export type Work = {
  id: string;
  title: string;
  artist: string;
  style: string;
  placement?: string;
  description?: string;
  image?: string | StaticImageData;
  ratio: "portrait" | "square" | "landscape" | "tall";
};

export const works: Work[] = [
  {
    id: "w1",
    title: "Anime",
    artist: "Ravi Alcântara",
    style: "Aquarela",
    placement: "Perna",
    description: "Traços fortes e cores vibrantes, inspirado em personagens de anime.",
    image: workProjetoFechado,
    ratio: "tall",
  },
  {
    id: "w2",
    title: "Campo preto",
    artist: "Ravi Alcântara",
    style: "Blackwork",
    placement: "Costas",
    image: workCampoPreto,
    ratio: "portrait",
  },
  {
    id: "w3",
    title: "Marca breve",
    artist: "Nina Vecchio",
    style: "Minimalista",
    placement: "Costela",
    image: workMarcaBreve,
    ratio: "square",
  },
  {
    id: "w4",
    title: "Ornamento",
    artist: "Nina Vecchio",
    style: "Ornamental",
    placement: "Esterno",
    image: workOrnamento,
    ratio: "landscape",
  },
  {
    id: "w5",
    title: "Retrato em cinza",
    artist: "Ravi Alcântara",
    style: "Realismo",
    placement: "Braço",
    image: workRetratoCinza,
    ratio: "portrait",
  },
  {
    id: "w6",
    title: "Projeto fechado",
    artist: "Estúdio",
    style: "Aquarela",
    placement: "Antebraço",
    image: workAquarela,
    ratio: "tall",
  },
  {
    id: "w7",
    title: "Fineline",
    artist: "Nina Vecchio",
    style: "Blackwork",
    image: workLinhaContinuad,
    ratio: "square",
  },
];

export const studioShots = [
  { id: "s1", label: "Bancada", ratio: "landscape" as const, image: studioBancada },
  { id: "s2", label: "Máquinas", ratio: "portrait" as const, image: studioMaquinas },
  { id: "s3", label: "Materiais", ratio: "square" as const, image: studioMateriais },
  { id: "s4", label: "O espaço", ratio: "landscape" as const, image: studioEspaco },
];
