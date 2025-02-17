import { Jenis_kelamin } from "@prisma/client";
export declare class CreateMahasiswaDTO {
    nim: string;
    nama: string;
    kelas: string;
    jurusan: string;
    jenis_kelamin: Jenis_kelamin;
}
