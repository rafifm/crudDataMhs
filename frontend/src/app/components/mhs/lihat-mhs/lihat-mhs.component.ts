import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MhsService } from 'src/app/services/mhs.service';

@Component({
  selector: 'app-lihat-mhs',
  templateUrl: './lihat-mhs.component.html',
  styleUrls: ['./lihat-mhs.component.css']
})
export class LihatMhsComponent implements OnInit {

  mhs: any;
  formMhs!: FormGroup;
  kolomMhs: string[] = ['nama','umur'];

  @Output() toggleSideBarForMe = new EventEmitter<any>();
  constructor(private mhsService:MhsService) { }

  ngOnInit(): void {
    this.formMhs = new FormGroup({
      nama_mhs: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      umur_mhs: new FormControl(null, {validators: [Validators.required]})
    });
    this.ambilData();
  }

  ambilData(){
    this.mhsService.ambilSemuaMhs().subscribe((ambilPengguna: any)=> {
      this.mhs = ambilPengguna;
    });
  }

  daftar(){
    this.mhsService.tambahMhs({
      nama_mhs: this.formMhs.value.email,
      umur_mhs: this.formMhs.value.password
    }).subscribe(() => {
      this.ambilData();
    }, (error: any) => {
      console.log(error);
    });
    this.formMhs.reset();
  }

  hapusPengguna(idPengguna: any){
    this.mhsService.hapus(idPengguna)
      .subscribe(()=>{
        this.ambilData();
      }, (error: any) => {
        console.log(error);
      });
  }

  toggleSideBar(eventObject: any) {
    this.toggleSideBarForMe.emit(eventObject);
  }

}
