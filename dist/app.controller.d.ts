import { AppService } from './app.service';
import { CreateMahasiswaDTO } from './dto/create-mahasiswa.dto';
import { createRuanganDTO } from './dto/create-ruangan.dto';
import { registerUserDTO } from './dto/register-user.dto';
import { loginUserDTO } from './dto/login-user.dto';
import { Response } from 'express';
import { User } from './entity/user.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getMahasiswa(): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        dibuat_pada: Date;
    }[]>;
    createMahasiswa(mahasiswa: CreateMahasiswaDTO): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        dibuat_pada: Date;
    }[]>;
    deleteMahasiswa(nim: string): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        dibuat_pada: Date;
    }[]>;
    updateMahasiswa(nim: string, mahasiswa: CreateMahasiswaDTO): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        dibuat_pada: Date;
    }>;
    getRuangan(): Promise<{
        id: number;
        nama_ruangan: string;
    }[]>;
    createRuangan(ruangan: createRuanganDTO): Promise<{
        id: number;
        nama_ruangan: string;
    }>;
    registerUser(user: registerUserDTO): Promise<{
        id: number;
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
    }>;
    login(data: loginUserDTO, res: Response): Promise<{
        token: string;
        user: {
            id: number;
            username: string;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
    getUsers(): Promise<{
        id: number;
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
    }[]>;
    auth(user: User): User;
    getLogout(res: Response): void;
}
