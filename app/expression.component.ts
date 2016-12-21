  import { Component, OnInit } from '@angular/core';
  import {Observable} from 'rxjs/Rx';

  import { Router }            from '@angular/router';

  @Component({
    selector: 'view',
    templateUrl: 'app/expression.component.html',
  })
  export class ExpressionComponent implements OnInit {
    
    //14
    adjectif0 : any = ["magique", "splendide", "fantastique", "époustouflante", "affolante", "grisante", "génialissime", "fabuleuse", "cool", "de la fête", "très chouette", "sans dettes"
    , "qui en jette", "pas bête"];
    //8
    adjectif1 : any = ["professeurs", "tuteurs", "rêveurs" , "amis" , "copains" , "stars" , "super héros"];
    //6
    adjectif2: any = ["souhaitent" , "annoncent" , "proposent" , "envoient" , "chuchotent" , "chantent"];
    //20
    adjectif3 : any = ["meilleurs", "énormes" , "inoubliables" , "délirants"]; 


    adjectifPrime : any = ["bonne" ,"folle" , "chouette" , "agréable" , "jolie" , "épatante" , "rigolante" , "ébouriffante"  , "copieuse" , "festive" , "arrosée" , "sérieuse" , "amoureuse"];
    //10
    adjectif4 : any = ["de belles" , "de joyeuses" , "d'excellentes" , "d'hilarantes" ,"de  stimulantes" , "de succulentes" , "d'incomparables" , "de grisantes" , "de studieuses" , "de rêveuses"];

    adjectif00 :string;
    adjectif01 :string;
    adjectif02 :string;
    adjectif03 :string;
    adjectif04 :string;
    adjectifPrime0 : string;

    
    constructor(
      private router: Router)
    { }

    ngOnInit(): void {
      this.getRadndomValue();
    }

    reload() {
      location.reload ();
    } 

    getRadndomValue() {

      let long0 : any = this.adjectif0.length;
      let long1: any = this.adjectif1.length;
      let long2 : any = this.adjectif2.length;
      let long3 : any = this.adjectif3.length;
      let long4 : any = this.adjectif4.length;
      let long5 : any = this.adjectifPrime.length;
      

      //show array lenght
      console.log(long0+" "+long1+" "+long2+" "+long3+" "+long4);

      //get a random value from the array
      let foo = Math.floor((Math.random() * 11) + 1);
      //add randomed value to variable
      this.adjectif00 = this.adjectif0[foo]

      let faa = Math.floor((Math.random() * 5) + 1);
      this.adjectif01 = this.adjectif1[faa]

      let fuu = Math.floor((Math.random() * 4) + 1);
      this.adjectif02 = this.adjectif2[fuu]

      let fii = Math.floor((Math.random() * 3) + 1);
      this.adjectif03 = this.adjectif3[fii]
      console.log(this.adjectif03)

      let fee = Math.floor((Math.random() * 8) + 1);
      this.adjectif04 = this.adjectif4[fee]

      let fpp = Math.floor((Math.random() * long5) + 1);
      this.adjectifPrime0 = this.adjectifPrime[fpp]
    } 

   

  }
