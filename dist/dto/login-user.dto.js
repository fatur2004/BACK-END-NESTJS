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
exports.loginUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class loginUserDTO {
}
exports.loginUserDTO = loginUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'username',
        type: String,
        example: 'FathurRahman1231',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\S*$/i),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], loginUserDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'password',
        type: String,
        example: 'password1231',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\S*$/i),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], loginUserDTO.prototype, "password", void 0);
//# sourceMappingURL=login-user.dto.js.map