import { RoleEnum } from '../../enums/roleenum';
import { PageEnum } from 'src/app/enums/componentview';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileServiceService } from '../../services/profile-service/profile-service.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { GenericDialogBoxComponent } from '../dialog-boxes/generic-dialog-box/generic-dialog-box.component';
import { PictureUpdateComponent } from '../dialog-boxes/picture-update/picture-update.component';

@Component({
  selector: 'app-st-sidenav',
  templateUrl: './st-sidenav.component.html',
  styleUrls: ['./st-sidenav.component.scss']
})
export class StSidenavComponent implements OnInit {

  //#region Public Members
  @Output() eventFromSideNav: EventEmitter<PageEnum> = new EventEmitter();
  public role = RoleEnum;
  //#endregion

  //#region Constructor & Lifecycle Hooks
  constructor(public dialog: MatDialog,
              public profileservice: ProfileServiceService) { }

  public ngOnInit(): void {
  }
  //#endregion

  //#region Public Methods
  /**
   * Display hamburger menu on mobile only
   */
  public Menu():void{
    var temp  = document.getElementById("menu");
    temp.style.display = "none";   
  }

  /**
   * Handle click on sidenav item and redirect the user
   */
  public SideNiveClick(str: string):void{
    switch(str){
      case "landing":
      this.eventFromSideNav.emit(PageEnum.Landing);
      break;
      case "mytrainnings":
      this.eventFromSideNav.emit(PageEnum.MyTrainnings);
      break;
      case "myteams":
      this.eventFromSideNav.emit(PageEnum.MyTeams);
      break;
      case "myswimmers":
      this.eventFromSideNav.emit(PageEnum.MySwimmers);
      break;
      case "realtimetrainning":
      this.eventFromSideNav.emit(PageEnum.RealTimeTrainning);
      break;
      case "statistics":
      this.eventFromSideNav.emit(PageEnum.Statistics);
      break;
      case "matalots":
      this.eventFromSideNav.emit(PageEnum.MyMatalots);
      break;
      case "messages":
      this.eventFromSideNav.emit(PageEnum.Messages);
      break;
      case "settings":
      this.eventFromSideNav.emit(PageEnum.Settings);
      break;
      case "help":
      this.eventFromSideNav.emit(PageEnum.Help);
      break;
    }
  }

  /**
   * Update picture profile
   */
  public AddPictureProfile():void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    dialogConfig.width = "420px";
    dialogConfig.height = "250px";
    var ref = this.dialog.open(PictureUpdateComponent, dialogConfig);
    ref.afterClosed().subscribe(
      res =>{ 
        console.log(res); 
        this.profileservice.GetProfile()
      }
    )
  }
  //#endregion

}
