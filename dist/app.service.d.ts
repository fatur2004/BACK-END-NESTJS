import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { CreateMahasiswaDTO } from './dto/create-mahasiswa.dto';
import { registerUserDTO } from './dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(data: registerUserDTO): Promise<void>;
    registerUser(data: registerUserDTO): Promise<{
        id: number;
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
    }>;
    login(data: registerUserDTO): Promise<{
        token: string;
        user: {
            id: number;
            username: string;
            role: import(".prisma/client").$Enums.UserRole;
        };
    }>;
    auth(user_id: number): Promise<{
        id: number;
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
    }>;
    getUsers(): Promise<{
        id: number;
        username: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        created_at: Date;
    }[]>;
    getHello(): string;
    getMahasiswa(): Promise<{
        nim: string;
        nama: string;
        kelas: string;
        jurusan: string;
        jenis_kelamin: import(".prisma/client").$Enums.Jenis_kelamin;
        dibuat_pada: Date;
    }[]>;
    addMahasiswa(data: CreateMahasiswaDTO): Promise<{
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
    updateMahasiswa(nim: string, data: Partial<CreateMahasiswaDTO>): Promise<{
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
    addRuangan(data: Prisma.RuanganCreateInput): Promise<{
        id: number;
        nama_ruangan: string;
    }>;
}
