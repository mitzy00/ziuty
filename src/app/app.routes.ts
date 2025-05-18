import { Routes } from '@angular/router';
import { SkladComponent } from './sklad/sklad.component';
import { LigaComponent } from './liga/liga.component';
import { MainComponent } from './main/main.component';
import { SpotkaniaComponent} from './spotkania/spotkania.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sklad', component: SkladComponent },
  { path: 'liga', component: LigaComponent },
  {path: 'spotkania', component: SpotkaniaComponent },
];
