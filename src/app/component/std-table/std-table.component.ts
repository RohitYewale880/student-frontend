import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Istd } from 'src/app/model/student';
import { SnakbarService } from 'src/app/service/snakbar.service';
import { StudentService } from 'src/app/service/student.service';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stddata ! : Istd[]
  constructor(
    private _stdservice : StudentService,
    private _snakbar : SnakbarService,
    private _matdilog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getstddata()
    this.refreshUI()
  }

  refreshUI(){
    this._stdservice.updateUrl$.subscribe(res => {
      if(res === true){
        this.getstddata()
      }
    })
  }

  getstddata(){
    this._stdservice.getstudents().subscribe({
      next : res => {
        console.log(res)
        this.stddata = res.data
      },
      error : err => {
        console.log(err)
      }
    })
  }

  trackbyfn(index : number, item : Istd){
    return item.email
  }

  onRemove(id : number){
    this._matdilog.open(GetconfirmComponent, {
      width : '500px',
      disableClose : true,
      data : `Are you sure do you want to remove student whose id is ${id}`
    }).afterClosed().subscribe(res => {
      if(res){
        this._stdservice.removestudent(id).subscribe({
          next : res => {
            this._snakbar.OpenSnakbar(res.message)
            this.getstddata()
          },
          error :err => {
            this._snakbar.OpenSnakbar(err.error.message)
          }
        })
      }
    })
  }

  onEdit(std : Istd){
    this._stdservice.editStdObj$.next(std)
  }
}
