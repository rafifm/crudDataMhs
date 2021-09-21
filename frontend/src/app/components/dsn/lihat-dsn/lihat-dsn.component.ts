import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DsnService } from 'src/app/services/dsn.service';

@Component({
  selector: 'app-lihat-dsn',
  templateUrl: './lihat-dsn.component.html',
  styleUrls: ['./lihat-dsn.component.css']
})
export class LihatDsnComponent implements OnInit {

  dsn: any;
  formDsn!: FormGroup;
  kolomDsn: string[] = ['nama','umur'];

  @Output() toggleSideBarForMe = new EventEmitter<any>();
  constructor(private dsnService:DsnService) { }

  ngOnInit(): void {
    this.formDsn = new FormGroup({
      nama_dsn: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      umur_dsn: new FormControl(null, {validators: [Validators.required]})
    });
    this.ambilData();
  }

  ambilData(){
    this.dsnService.ambilSemuaDsn().subscribe(ambilPengguna=> {
      this.dsn = ambilPengguna;
    });
  }

  daftar(){
    this.dsnService.tambahDsn({
      nama_dsn: this.formDsn.value.email,
      umur_dsn: this.formDsn.value.password
    }).subscribe(pengguna => {
      this.ambilData();
    }, error => {
      console.log(error);
    });
    this.formDsn.reset();
  }

  hapusPengguna(idPengguna: any){
    this.dsnService.hapus(idPengguna)
      .subscribe(pengguna=>{
        this.ambilData();
      }, error => {
        console.log(error);
      });
  }

  toggleSideBar(eventObject: any) {
    this.toggleSideBarForMe.emit(eventObject);
  }

}
