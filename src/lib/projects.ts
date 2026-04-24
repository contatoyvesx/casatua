import heroKitchen from "@/assets/hero-kitchen.jpg";
import projectCloset from "@/assets/project-closet.jpg";
import projectLiving from "@/assets/project-living.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectDining from "@/assets/project-dining.jpg";
import detailCraft from "@/assets/detail-craft.jpg";

export type Category =
  | "Cozinha"
  | "Closet"
  | "Sala"
  | "Home Office"
  | "Dormitório"
  | "Banheiro"
  | "Sala de Jantar";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  location: string;
  year: string;
  area: string;
  cover: string;
  gallery: string[];
  description: string;
  highlights: string[];
}

export const categories: Category[] = [
  "Cozinha",
  "Closet",
  "Sala",
  "Home Office",
  "Dormitório",
  "Banheiro",
  "Sala de Jantar",
];

export const projects: Project[] = [
  {
    slug: "cozinha-imponente-jardins",
    title: "Cozinha Imponente — Jardins",
    category: "Cozinha",
    location: "São Paulo, SP",
    year: "2024",
    area: "32 m²",
    cover: heroKitchen,
    gallery: [heroKitchen, detailCraft, projectDining],
    description:
      "Uma cozinha pensada para receber. Marcenaria em madeira nobre com acabamento acetinado, ilha em mármore Calacatta e iluminação cênica integrada compõem um ambiente sofisticado, funcional e atemporal.",
    highlights: [
      "Marcenaria sob medida em freijó natural",
      "Ilha monolítica em mármore Calacatta",
      "Iluminação LED integrada e dimerizada",
      "Eletrodomésticos de embutir premium",
    ],
  },
  {
    slug: "closet-master-alphaville",
    title: "Closet Master — Alphaville",
    category: "Closet",
    location: "Barueri, SP",
    year: "2024",
    area: "24 m²",
    cover: projectCloset,
    gallery: [projectCloset, detailCraft],
    description:
      "Um closet projetado como uma boutique particular. Portas de vidro fumê com perfil bronze, iluminação interna e ilha central em mármore para joias e acessórios.",
    highlights: [
      "Portas em vidro fumê com perfil em bronze",
      "Iluminação interna em todos os módulos",
      "Ilha central com tampo em mármore",
      "Organização inteligente e personalizada",
    ],
  },
  {
    slug: "living-contemporaneo-itaim",
    title: "Living Contemporâneo — Itaim",
    category: "Sala",
    location: "São Paulo, SP",
    year: "2023",
    area: "48 m²",
    cover: projectLiving,
    gallery: [projectLiving, detailCraft],
    description:
      "Painel de TV em madeira ebanizada com nichos iluminados e marcenaria assimétrica que valoriza a horizontalidade do ambiente. Integração total entre estar, jantar e varanda.",
    highlights: [
      "Painel em madeira ebanizada brasileira",
      "Nichos com iluminação cênica indireta",
      "Sistema de áudio embutido",
      "Integração com varanda gourmet",
    ],
  },
  {
    slug: "home-office-executivo",
    title: "Home Office Executivo — Moema",
    category: "Home Office",
    location: "São Paulo, SP",
    year: "2024",
    area: "18 m²",
    cover: projectOffice,
    gallery: [projectOffice, detailCraft],
    description:
      "Biblioteca particular com marcenaria do piso ao teto, mesa de trabalho em madeira maciça e poltrona de couro. Um refúgio para concentração e leitura.",
    highlights: [
      "Estantes do piso ao teto em madeira nobre",
      "Mesa de trabalho em madeira maciça",
      "Iluminação focal em cada prateleira",
      "Acústica otimizada para reuniões",
    ],
  },
  {
    slug: "suite-master-vila-nova",
    title: "Suíte Master — Vila Nova Conceição",
    category: "Dormitório",
    location: "São Paulo, SP",
    year: "2024",
    area: "28 m²",
    cover: projectBedroom,
    gallery: [projectBedroom, projectCloset],
    description:
      "Painel de cabeceira em madeira folheada com criados-mudos integrados e iluminação indireta. Ambiente acolhedor, com paleta neutra e materiais nobres.",
    highlights: [
      "Cabeceira monolítica em folheado de nogueira",
      "Criados-mudos integrados ao painel",
      "Iluminação indireta dimerizada",
      "Recanto de leitura sob medida",
    ],
  },
  {
    slug: "banheiro-spa-higienopolis",
    title: "Banheiro Spa — Higienópolis",
    category: "Banheiro",
    location: "São Paulo, SP",
    year: "2023",
    area: "12 m²",
    cover: projectBathroom,
    gallery: [projectBathroom, detailCraft],
    description:
      "Bancada dupla em mármore com gabinete suspenso em madeira escura e metais em ouro envelhecido. Um banheiro projetado como experiência sensorial.",
    highlights: [
      "Gabinete suspenso em madeira escura",
      "Bancada dupla em mármore Calacatta",
      "Metais em acabamento ouro envelhecido",
      "Iluminação cênica em arandelas",
    ],
  },
  {
    slug: "sala-jantar-adega-pinheiros",
    title: "Sala de Jantar com Adega — Pinheiros",
    category: "Sala de Jantar",
    location: "São Paulo, SP",
    year: "2024",
    area: "36 m²",
    cover: projectDining,
    gallery: [projectDining, detailCraft, heroKitchen],
    description:
      "Buffet com adega climatizada integrada, prateleiras iluminadas para cristais e mesa de jantar para 10 pessoas. Ambiente desenhado para receber em grande estilo.",
    highlights: [
      "Adega climatizada para 120 garrafas",
      "Prateleiras iluminadas para cristais",
      "Mesa de jantar em madeira maciça",
      "Painel acústico em tecido natural",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
