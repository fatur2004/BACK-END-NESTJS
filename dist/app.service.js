"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const bcrypt_1 = require("bcrypt");
const bcrypt_2 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AppService = class AppService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(data) {
        try {
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw new common_1.InternalServerErrorException('Terjadi kesalahan pada server');
            }
        }
    }
    async registerUser(data) {
        const user = await this.prisma.user.findFirst({
            where: {
                username: data.username,
            },
        });
        if (user) {
            throw new common_1.BadRequestException('Username sudah terdaftar');
        }
        const hash = (0, bcrypt_2.hashSync)(data.password, 10);
        const newUser = await this.prisma.user.create({
            data: {
                username: data.username,
                password: hash,
                role: 'USER',
            },
        });
        return newUser;
    }
    async login(data) {
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    username: data.username,
                },
            });
            if (user == null)
                throw new common_1.NotFoundException('Username Tidak Ditemukan');
            if ((0, bcrypt_1.compareSync)(data.password, user.password) == false)
                throw new common_1.BadRequestException('Password Salah');
            const payload = {
                id: user.id,
                username: user.username,
                role: user.role,
            };
            const token = await this.jwtService.signAsync(payload);
            return {
                token: token,
                user: payload,
            };
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Terdapat Masalah Dari Server Harap Coba Lagi dalam beberapa menit');
        }
    }
    async auth(user_id) {
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    id: user_id,
                },
            });
            if (user == null)
                throw new common_1.NotFoundException('User Tidak Ditemukan');
            return user;
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Terdapat Masalah Dari Server Harap Coba Lagi dalam beberapa menit');
        }
    }
    async getUsers() {
        return await this.prisma.user.findMany();
    }
    getHello() {
        return 'Hello World! FathurRahman';
    }
    async getMahasiswa() {
        return await this.prisma.mahasiswa.findMany();
    }
    async addMahasiswa(data) {
        const mahasiswa = await this.prisma.mahasiswa.findFirst({
            where: {
                nim: data.nim,
            },
        });
        if (mahasiswa != null)
            throw new common_1.NotFoundException('Mahasiswa dengan nim ini sudah ada');
        await this.prisma.mahasiswa.create({
            data: data,
        });
        return this.prisma.mahasiswa.findMany();
    }
    async deleteMahasiswa(nim) {
        const exist = this.prisma.mahasiswa.findFirst({
            where: {
                nim: nim,
            },
        });
        if (!exist) {
            throw new common_1.NotFoundException('NIM Tidak Ditemukan');
        }
        await this.prisma.mahasiswa.delete({
            where: {
                nim: nim,
            },
        });
        return await this.prisma.mahasiswa.findMany();
    }
    async updateMahasiswa(nim, data) {
        const mahasiswa = await this.prisma.mahasiswa.findFirst({
            where: {
                nim: nim,
            },
        });
        if (mahasiswa == null)
            throw new common_1.NotFoundException('NIM tidak di temukan');
        await this.prisma.mahasiswa.update({
            where: {
                nim: nim,
            },
            data: data,
        });
        return this.prisma.mahasiswa.findFirst({
            where: {
                nim: nim,
            },
        });
    }
    async getRuangan() {
        return await this.prisma.ruangan.findMany();
    }
    async addRuangan(data) {
        const exist = await this.prisma.ruangan.findUnique({
            where: { id: data.id },
        });
        if (exist) {
            throw new common_1.BadRequestException('ID sudah digunakan.');
        }
        return await this.prisma.ruangan.create({
            data,
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AppService);
//# sourceMappingURL=app.service.js.map