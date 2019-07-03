import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})

export class ConfirmacaoComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoComponent>,
    
@Inject(MAT_DIALOG_DATA) public message: string) { }
onNoClick(): void {
    this.dialogRef.close();
  }
}