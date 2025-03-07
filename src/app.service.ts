import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
import { CreateMahasiswaDTO } from './dto/create-mahasiswa.dto';
import { registerUserDTO } from './dto/register-user.dto';
import { compareSync } from 'bcrypt';
import { hashSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async register(data: registerUserDTO) {
    try {
    } catch (error) {
      if (error instanceof HttpException) {
        throw new InternalServerErrorException('Terjadi kesalahan pada server');
      }
    }
  }

  async registerUser(data: registerUserDTO) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: data.username,
      },
    });
    if (user) {
      throw new BadRequestException('Username sudah terdaftar');
    }
    const hash = hashSync(data.password, 10);
    const newUser = await this.prisma.user.create({
      data: {
        username: data.username,
        password: hash,
        role: 'USER',
      },
    });
    return newUser;
  }

  async login(data: registerUserDTO) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          username: data.username,
        },
      });

      if (user == null) throw new NotFoundException('Username Tidak Ditemukan');

      if (compareSync(data.password, user.password) == false)
        throw new BadRequestException('Password Salah');

      const payload = {
        id : user.id,
        username: user.username,
        role: user.role,
      };

      const token = await this.jwtService.signAsync(payload);

      return {
        token: token,
        user : payload,
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new InternalServerErrorException(
        'Terdapat Masalah Dari Server Harap Coba Lagi dalam beberapa menit',
      );
    }
  }

  async auth(user_id: number) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          id: user_id,
        },
      });
      if (user == null) throw new NotFoundException('User Tidak Ditemukan');
      return user;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new InternalServerErrorException(
        'Terdapat Masalah Dari Server Harap Coba Lagi dalam beberapa menit',
      );
    }
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  getHello(): string {
    return 'Hello World! FathurRahman';
  }

  async getMahasiswa() {
    return await this.prisma.mahasiswa.findMany();
  }

  async addMahasiswa(data: CreateMahasiswaDTO) {
    const mahasiswa = await this.prisma.mahasiswa.findFirst({
      where: {
        nim: data.nim,
      },
    });

    if (mahasiswa != null)
      throw new NotFoundException('Mahasiswa dengan nim ini sudah ada');

    await this.prisma.mahasiswa.create({
      data: data,
    });

    return this.prisma.mahasiswa.findMany();
  }

  async deleteMahasiswa(nim: string) {
    const exist = this.prisma.mahasiswa.findFirst({
      where: {
        nim: nim,
      },
    });

    if (!exist) {
      throw new NotFoundException('NIM Tidak Ditemukan');
    }

    await this.prisma.mahasiswa.delete({
      where: {
        nim: nim,
      },
    });

    return await this.prisma.mahasiswa.findMany();
  }

  async updateMahasiswa(nim: string, data: Partial<CreateMahasiswaDTO>) {
    const mahasiswa = await this.prisma.mahasiswa.findFirst({
      where: {
        nim: nim,
      },
    });

    if (mahasiswa == null) throw new NotFoundException('NIM tidak di temukan');
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

  async addRuangan(data: Prisma.RuanganCreateInput) {
    const exist = await this.prisma.ruangan.findUnique({
      where: { id: data.id },
    });

    if (exist) {
      throw new BadRequestException('ID sudah digunakan.');
    }

    return await this.prisma.ruangan.create({
      data,
    });
  }
}
