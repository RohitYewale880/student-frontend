import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { OverlayModule } from "@angular/cdk/overlay";

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss']
})
export class GetconfirmComponent implements OnInit {

  msg!:string
  constructor(
    private matdilogref : MatDialogRef<GetconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data : string
  ) { 
    this.msg = data
  }

  ngOnInit(): void {
  }

  inClose(flag : boolean){
    this.matdilogref.close(flag)
  }
}
