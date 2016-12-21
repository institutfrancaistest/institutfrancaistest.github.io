import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div class="snow">
</div>
  	 <nav class="white lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img width="50%" src="http://www.institutfrancais.es/adjuntos/logotipo_20160719.jpg"/></a>
      <ul class="right hide-on-med-and-down">
        <li><a style="color:black;" href="http://www.institutfrancais.es">retour au site de l'institut</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a href="#">My cv</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">IFE</i></a>
    </div>
  </nav>
  <router-outlet></router-outlet>

  `,
})
export class AppComponent  { name = 'Angular'; }
