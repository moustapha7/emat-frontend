import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CommandesComponent } from './achats/commandes/commandes.component';
import { DemandeAchatComponent } from './achats/demande-achat/demande-achat.component';
import { BudgetInvestissementComponent } from './investissement/budget-investissement/budget-investissement.component';
import { BudgetFonctionnementComponent } from './investissement/budget-fonctionnement/budget-fonctionnement.component';
import { DemandeInvestissementComponent } from './investissement/demande-investissement/demande-investissement.component';
import { DeamandeCarteTotalComponent } from './exploitation/deamande-carte-total/deamande-carte-total.component';
import { ReferentielCarteComponent } from './exploitation/referentiel-carte/referentiel-carte.component';
import { DemandeAttributionComponent } from './flotte/demande-attribution/demande-attribution.component';
import { FichePVComponent } from './flotte/gestion_Des_Amandes/fiche-pv/fiche-pv.component';
import { FicheMaterielComponent } from './materiels/fiche-materiel/fiche-materiel.component';
import { PositionsComponent } from './materiels/positions/positions.component';
import { ArticleComponent } from './stock/article/article.component';
import { FournisseurComponent } from './stock/fournisseur/fournisseur.component';
import { MagasinComponent } from './stock/magasin/magasin.component';
import { OrdreDeTravailComponent } from './travaux/ordre-de-travail/ordre-de-travail.component';
import { ActivitesComponent } from './travaux/activites/activites.component';
import { PointerMainOeuvreComponent } from './travaux/pointer-main-oeuvre/pointer-main-oeuvre.component';
import { PlanifierMainOeuvreComponent } from './travaux/planifier-main-oeuvre/planifier-main-oeuvre.component';
import { MaintenancePlanningComponent } from './travaux/maintenance-planning/maintenance-planning.component';
import { ListOrganisationComponent } from './administration/organisation/list-organisation/list-organisation.component';
import { OrganisationComponent } from './administration/organisation/organisation/organisation.component';
import { AddOrganisationComponent } from './administration/organisation/add-organisation/add-organisation.component';
import { EditOrganisationComponent } from './administration/organisation/edit-organisation/edit-organisation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'commandes', component: CommandesComponent },
  { path: 'demande-achat', component: DemandeAchatComponent },

  { path: 'budget-investissement', component: BudgetInvestissementComponent },
  { path: 'budget-fonctionnement', component: BudgetFonctionnementComponent },
  { path: 'demande-investissement', component: DemandeInvestissementComponent },

  { path: 'demande-carte-total', component: DeamandeCarteTotalComponent },
  { path: 'referentiel-carte', component: ReferentielCarteComponent },

  { path: 'demande-attribution', component: DemandeAttributionComponent },
  { path: 'fiche-pv', component: FichePVComponent },

  { path: 'fiche-materiel', component: FicheMaterielComponent },
  { path: 'positions', component: PositionsComponent },

  { path: 'articles', component: ArticleComponent },
  { path: 'fournisseurs', component: FournisseurComponent },
  { path: 'magasins', component: MagasinComponent },

  { path: 'ordre-de-travail', component: OrdreDeTravailComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'pointer-main-oeuvre', component: PointerMainOeuvreComponent },
  { path: 'planifier-main-oeuvre', component: PlanifierMainOeuvreComponent },
  { path: 'planning-maintenance', component: MaintenancePlanningComponent },

  { path: 'list-organisations', component: ListOrganisationComponent },
  { path: 'organisations', component: OrganisationComponent },
  { path: 'list-organisations', component: ListOrganisationComponent },
  { path: 'add-organisations', component: AddOrganisationComponent },
  { path: 'edit-organisations/:id', component: EditOrganisationComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }