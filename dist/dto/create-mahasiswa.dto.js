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
exports.CreateMahasiswaDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateMahasiswaDTO {
}
exports.CreateMahasiswaDTO = CreateMahasiswaDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "NIM Mahasiswa", type: String, example: "105841103322" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], CreateMahasiswaDTO.prototype, "nim", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nama Mahasiswa", type: String, example: "Muh Faturrachman" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], CreateMahasiswaDTO.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Kelas", type: String, example: "5A" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], CreateMahasiswaDTO.prototype, "kelas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Jurusan", type: String, example: "Informatika" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], CreateMahasiswaDTO.prototype, "jurusan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Jenis Kelamin", enum: client_1.Jenis_kelamin, example: "L" }),
    (0, class_validator_1.IsEnum)(client_1.Jenis_kelamin),
    __metadata("design:type", String)
], CreateMahasiswaDTO.prototype, "jenis_kelamin", void 0);
//# sourceMappingURL=create-mahasiswa.dto.js.map