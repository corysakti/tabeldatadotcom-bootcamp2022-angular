import { Departemen } from "./departemen";

export class Category {
    // <nama_variable>! artinya adalah dia tidak perlu diinisialisasi
    id!: number ;
    nama! : string;
    description!: string;
    department!: Departemen;
  }
  