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
var router_1 = require("@angular/router");
var ExpressionComponent = (function () {
    function ExpressionComponent(router) {
        this.router = router;
        //14
        this.adjectif0 = ["magique", "splendide", "fantastique", "époustouflante", "affolante", "grisante", "génialissime", "fabuleuse", "cool", "de la fête", "très chouette", "sans dettes",
            "qui en jette", "pas bête"];
        //8
        this.adjectif1 = ["professeurs", "tuteurs", "rêveurs", "amis", "copains", "stars", "super héros"];
        //6
        this.adjectif2 = ["souhaitent", "annoncent", "proposent", "envoient", "chuchotent", "chantent"];
        //20
        this.adjectif3 = ["meilleurs", "énormes", "inoubliables", "délirants"];
        this.adjectifPrime = ["bonne", "folle", "chouette", "agréable", "jolie", "épatante", "rigolante", "ébouriffante", "copieuse", "festive", "arrosée", "sérieuse", "amoureuse"];
        //10
        this.adjectif4 = ["de belles", "de joyeuses", "d'excellentes", "d'hilarantes", "de  stimulantes", "de succulentes", "d'incomparables", "de grisantes", "de studieuses", "de rêveuses"];
    }
    ExpressionComponent.prototype.ngOnInit = function () {
        this.getRadndomValue();
    };
    ExpressionComponent.prototype.reload = function () {
        location.reload();
    };
    ExpressionComponent.prototype.getRadndomValue = function () {
        var long0 = this.adjectif0.length;
        var long1 = this.adjectif1.length;
        var long2 = this.adjectif2.length;
        var long3 = this.adjectif3.length;
        var long4 = this.adjectif4.length;
        var long5 = this.adjectifPrime.length;
        //show array lenght
        console.log(long0 + " " + long1 + " " + long2 + " " + long3 + " " + long4);
        //get a random value from the array
        var foo = Math.floor((Math.random() * 11) + 1);
        //add randomed value to variable
        this.adjectif00 = this.adjectif0[foo];
        var faa = Math.floor((Math.random() * 5) + 1);
        this.adjectif01 = this.adjectif1[faa];
        var fuu = Math.floor((Math.random() * 4) + 1);
        this.adjectif02 = this.adjectif2[fuu];
        var fii = Math.floor((Math.random() * 3) + 1);
        this.adjectif03 = this.adjectif3[fii];
        console.log(this.adjectif03);
        var fee = Math.floor((Math.random() * 8) + 1);
        this.adjectif04 = this.adjectif4[fee];
        var fpp = Math.floor((Math.random() * long5) + 1);
        this.adjectifPrime0 = this.adjectifPrime[fpp];
    };
    return ExpressionComponent;
}());
ExpressionComponent = __decorate([
    core_1.Component({
        selector: 'view',
        templateUrl: 'app/expression.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ExpressionComponent);
exports.ExpressionComponent = ExpressionComponent;
//# sourceMappingURL=expression.component.js.map