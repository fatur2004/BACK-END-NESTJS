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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const create_mahasiswa_dto_1 = require("./dto/create-mahasiswa.dto");
const create_ruangan_dto_1 = require("./dto/create-ruangan.dto");
const register_user_dto_1 = require("./dto/register-user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("./entity/user.entity");
const auth_guard_1 = require("./auth.guard");
const user_decorator_1 = require("./user.decorator");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getMahasiswa() {
        return this.appService.getMahasiswa();
    }
    createMahasiswa(mahasiswa) {
        return this.appService.addMahasiswa(mahasiswa);
    }
    deleteMahasiswa(nim) {
        return this.appService.deleteMahasiswa(nim);
    }
    updateMahasiswa(nim, mahasiswa) {
        return this.appService.updateMahasiswa(nim, mahasiswa);
    }
    getRuangan() {
        return this.appService.getRuangan();
    }
    createRuangan(ruangan) {
        return this.appService.addRuangan(ruangan);
    }
    registerUser(user) {
        return this.appService.registerUser(user);
    }
    async login(data, res) {
        const result = await this.appService.login(data);
        res.cookie('token', result.token);
        result.user = (0, class_transformer_1.plainToInstance)(user_entity_1.User, result.user);
        return result;
    }
    getUsers() {
        return this.appService.getUsers();
    }
    auth(user) {
        return user;
    }
    getLogout(res) {
        res.cookie('token', null, { maxAge: 0 });
        res.status(200).send({ message: 'Logout berhasil' });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('mahasiswa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getMahasiswa", null);
__decorate([
    (0, common_1.Post)('mahasiswa'),
    (0, swagger_1.ApiBody)({ type: create_mahasiswa_dto_1.CreateMahasiswaDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mahasiswa_dto_1.CreateMahasiswaDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createMahasiswa", null);
__decorate([
    (0, common_1.Delete)('mahasiswa/:nim'),
    __param(0, (0, common_1.Param)('nim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteMahasiswa", null);
__decorate([
    (0, common_1.Put)('mahasiswa/:nim'),
    (0, swagger_1.ApiBody)({ type: create_mahasiswa_dto_1.CreateMahasiswaDTO }),
    __param(0, (0, common_1.Param)('nim')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_mahasiswa_dto_1.CreateMahasiswaDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateMahasiswa", null);
__decorate([
    (0, common_1.Get)('ruangan'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRuangan", null);
__decorate([
    (0, common_1.Post)('ruangan'),
    (0, swagger_1.ApiBody)({ type: create_ruangan_dto_1.createRuanganDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ruangan_dto_1.createRuanganDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createRuangan", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiBody)({ type: register_user_dto_1.registerUserDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.registerUserDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('Login'),
    (0, swagger_1.ApiBody)({
        type: login_user_dto_1.loginUserDTO,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.loginUserDTO, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/auth'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, user_decorator_1.UserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "auth", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getLogout", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map