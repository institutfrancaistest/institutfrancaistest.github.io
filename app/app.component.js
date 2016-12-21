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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <div class=\"snow\">\n</div>\n  \t <nav class=\"white lighten-1\" role=\"navigation\">\n    <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><img width=\"50%\" src=\"http://www.institutfrancais.es/adjuntos/logotipo_20160719.jpg\"/></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a style=\"color:black;\" href=\"http://www.institutfrancais.es\">retour au site de l'institut</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n        <li><a href=\"#\">My cv</a></li>\n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">IFE</i></a>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n\n  ",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map