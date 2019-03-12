import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SwimmerModel } from '../../models/SwimmerModel';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { HttpService } from '../../services/http-service.service';
import { GenericDialogBoxComponent } from '../dialog-boxes/generic-dialog-box/generic-dialog-box.component';

@Component({
  selector: 'app-my-swimmers',
  templateUrl: './my-swimmers.component.html',
  styleUrls: ['./my-swimmers.component.scss']
})
export class MySwimmersComponent implements OnInit {

  //#region Public Members
  public swimmers: SwimmerModel[] = [];
  //#endregion

  //#region Constructor & Lifecycle Hooks
  constructor(private httpservice: HttpService,
              private dialog: MatDialog,
              private spinnerservice: NgxUiLoaderService) { }

  public ngOnInit(): void {
    this.spinnerservice.start();
    var model = {
      coachmail: localStorage.getItem("email")
    }
    this.httpservice.httpPost('swimmer/getswimmers',model).subscribe(
      res =>{
        this.spinnerservice.stop();
        this.swimmers = res.swimmer;
      },
      err =>{
        this.spinnerservice.stop();
      }
    )
  }
  //#endregion

  //#region Public Methods
      /**
   * Error dialog Box Opening
   * @param email 
   */
  public OpenDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'נראה שמשהו השתבש בדרך...',
      body: 'נא לנסות מאוחר יותר',
      button: true,
      buttonText: "הבנתי!"
    };
    dialogConfig.width = "420px";
    dialogConfig.height = "250px";
    this.dialog.open(GenericDialogBoxComponent, dialogConfig);
}
  //#endregion

}