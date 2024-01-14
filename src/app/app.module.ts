import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpRequestInterceptor, httpInterceptorProviders } from './_helpers/http.interceptor';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdreDeTravailComponent } from './travaux/ordre-de-travail/ordre-de-travail.component';
import { MagasinComponent } from './stock/magasin/magasin.component';
import { FournisseurComponent } from './stock/fournisseur/fournisseur.component';
import { ArticleComponent } from './stock/article/article.component';
import { FichePVComponent } from './flotte/gestion_Des_Amandes/fiche-pv/fiche-pv.component';
import { DemandeAttributionComponent } from './flotte/demande-attribution/demande-attribution.component';
import { FicheMaterielComponent } from './materiels/fiche-materiel/fiche-materiel.component';
import { PositionsComponent } from './materiels/positions/positions.component';
import { CommandesComponent } from './achats/commandes/commandes.component';
import { DemandeAchatComponent } from './achats/demande-achat/demande-achat.component';
import { DemandeInvestissementComponent } from './investissement/demande-investissement/demande-investissement.component';
import { BudgetInvestissementComponent } from './investissement/budget-investissement/budget-investissement.component';
import { BudgetFonctionnementComponent } from './investissement/budget-fonctionnement/budget-fonctionnement.component';
import { DeamandeCarteTotalComponent } from './exploitation/deamande-carte-total/deamande-carte-total.component';
import { ReferentielCarteComponent } from './exploitation/referentiel-carte/referentiel-carte.component';
import { ActivitesComponent } from './travaux/activites/activites.component';
import { ListComponent } from './test/list/list.component';
import { DetailsComponent } from './test/details/details.component';
import { SidebarComponent } from './test/sidebar/sidebar.component';
import { MenuTabComponent } from './travaux/menu-tab/menu-tab.component';
import { PointerMainOeuvreComponent } from './travaux/pointer-main-oeuvre/pointer-main-oeuvre.component';
import { PlanifierMainOeuvreComponent } from './travaux/planifier-main-oeuvre/planifier-main-oeuvre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    NavbarComponent,
    OrdreDeTravailComponent,
    MagasinComponent,
    FournisseurComponent,
    ArticleComponent,
    FichePVComponent,
    DemandeAttributionComponent,
    FicheMaterielComponent,
    PositionsComponent,
    CommandesComponent,
    DemandeAchatComponent,
    DemandeInvestissementComponent,
    BudgetInvestissementComponent,
    BudgetFonctionnementComponent,
    DeamandeCarteTotalComponent,
    ReferentielCarteComponent,
    ActivitesComponent,
    ListComponent,
    DetailsComponent,
    SidebarComponent,
    MenuTabComponent,
    PointerMainOeuvreComponent,
    PlanifierMainOeuvreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,CommonModule,ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
