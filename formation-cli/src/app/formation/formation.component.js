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
var core_1 = require("@angular/core");
var FormationComponent = /** @class */ (function () {
    function FormationComponent() {
    }
    FormationComponent.prototype.ngOnInit = function () {
    };
    FormationComponent = __decorate([
        core_1.Component({
            selector: 'maf-formation',
            templateUrl: './formation.component.html',
            styleUrls: ['./formation.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FormationComponent);
    return FormationComponent;
}());
exports.FormationComponent = FormationComponent;
//# sourceMappingURL=formation.component.js.map