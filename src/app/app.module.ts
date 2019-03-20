import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatDialogModule} from "@angular/material";
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import { HelpComponent } from './components/help/help.component';
import { StatsComponent } from './components/stats/stats.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpService } from './services/http-service/http-service.service';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { MyTeamsComponent } from './components/my-teams/my-teams.component';
import { MatalotsComponent } from './components/matalots/matalots.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { StHeaderComponent } from './components/st-header/st-header.component';
import { MyInterceptor } from './services/interceptor/http-interceptor.service';
import { StSidenavComponent } from './components/st-sidenav/st-sidenav.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { StContentComponent } from './components/st-content/st-content.component';
import { MySwimmersComponent } from './components/my-swimmers/my-swimmers.component';
import { MyTrainningsComponent } from './components/my-trainnings/my-trainnings.component';
import { CreateTeamComponent } from './components/st-content/create-team/create-team.component';
import { CreateTeamBoxComponent } from './components/dialog-boxes/create-team/create-team.component';
import { PictureUpdateComponent } from './components/dialog-boxes/picture-update/picture-update.component';
import { CreateTrainingComponent } from './components/st-content/create-training/create-training.component';
import { CreateTrainningComponent } from './components/dialog-boxes/create-trainning/create-trainning.component';
import { GenericDialogBoxComponent } from './components/dialog-boxes/generic-dialog-box/generic-dialog-box.component';
import { AddTeamToTrainningComponent } from './components/dialog-boxes/add-team-to-trainning/add-team-to-trainning.component';
import { RealTimeTrainningComponent } from './components/real-time-trainning/real-time-trainning.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const appRoutes: Routes = [
  { path: '' , component: LoginPageComponent},
  { path: 'mainmenu', component: MainPageComponent },
];
const config: SocketIoConfig = { url: 'https://record-system-server.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    StatsComponent,
    ItemBoxComponent,
    MyTeamsComponent,
    MainPageComponent,
    StHeaderComponent,
    MatalotsComponent,
    MessagesComponent,
    SettingsComponent,
    LoginPageComponent,
    StSidenavComponent,
    StContentComponent,
    MySwimmersComponent,
    CreateTeamComponent,
    MyTrainningsComponent,
    CreateTeamBoxComponent,
    PictureUpdateComponent,
    CreateTrainingComponent,
    CreateTrainningComponent,
    GenericDialogBoxComponent,
    AddTeamToTrainningComponent,
    RealTimeTrainningComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateTeamBoxComponent,
    PictureUpdateComponent,
    CreateTrainningComponent,
    GenericDialogBoxComponent,
    AddTeamToTrainningComponent
  ]
})
export class AppModule { }
