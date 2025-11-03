import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Anillos } from './pages/anillos/anillos';
import { Dijes } from './pages/dijes/dijes';
import { Pulseras } from './pages/pulseras/pulseras';
import { Cadenas } from './pages/cadenas/cadenas';


// Definicion de rutas
export const routes: Routes = [
    {path: '', component: Home},
    {path: 'nosotros', component: About},
    {path: 'contacto', component: Contact},
    {path: 'cadenas', component: Cadenas},
    {path: 'anillos', component: Anillos},
    {path: 'dijes', component: Dijes},
    {path: 'pulseras', component: Pulseras},
    {path: '**', redirectTo: 'Home', pathMatch: 'full'}
];
