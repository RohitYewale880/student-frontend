import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/student';
import { SnakbarService } from 'src/app/service/snakbar.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  isineditMode : boolean = false;
  @ViewChild('stdform') stdform! : NgForm
  editObj !: Istd
  constructor(
    private stdservice : StudentService,
    private snakbar : SnakbarService
  ) { }

  ngOnInit(): void {
    this.patchform()
  }

  onSubmit(){
    let newObj = {
      ...this.stdform.value
    }

    this.stdservice.addStudent(newObj).subscribe({
      next : res => {
        this.snakbar.OpenSnakbar(res.message)
        this.stdservice.updateUrl$.next(true)
        this.stdform.reset()
      },
      error : err => {
        this.snakbar.OpenSnakbar(err.error.message)
      }
    })
  }

  patchform(){
    this.stdservice.editStdObj$.subscribe(res => {
      this.isineditMode = true;
      this.stdform.form.patchValue(res)
      this.editObj = res
    })
  }

  onUpadate(){
    let updateObj = {
      ...this.stdform.value,
      id : this.editObj.id
    }

    this.stdservice.updatestd(updateObj).subscribe({
      next : res => {
        this.snakbar.OpenSnakbar(res.message)
        this.stdservice.updateUrl$.next(true)
        this.stdform.reset()
        this.isineditMode = false;
      },
      error : err => {
        this.snakbar.OpenSnakbar(err.error.message)
      }
    })
  }
}
