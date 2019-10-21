import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private blue: BluetoothSerial, private toast: ToastController) {}
  
  async ngOnInit(){
    this.blue.enable();
    const conectar = this.blue.connect('98:D3:31:20:A0:2F');
    if (conectar) {
      const toastconectar = await this.toast.create({
        message: 'Conectado',
        duration: 2000
      });
      toastconectar.present();
    }else{
      const noconectar = await this.toast.create({
        message: 'No se ha podido conectar',
        duration: 2000
      });
      noconectar.present();
    }
    if (this.blue.isEnabled){
      console.log("Bluetooth prendido")
      const toast = await this.toast.create({
        message: 'Bluetooth prendido',
        duration: 2000  
      });
      toast.present();
    }else{
      const secondtoast = await this.toast.create({
        message: 'No se ha podido conectar',
        duration: 2000
      });
      secondtoast.present();
    }

  }

  ngOnDestroy() {
    this.blue.disconnect();
  }

  up(){
    this.blue.write('1');
  }
  down(){
    this.blue.write('3');
  }
  right(){
    this.blue.write('2');
  }
  left(){
    this.blue.write('4');
  }
  offiman(){
    this.blue.write('N');
  }
  oniman(){
    this.blue.write('S');
  }
  stop(){
    this.blue.write('P');
  }
  upiman(){
    this.blue.write('U');
  }
  downiman(){
    this.blue.write('D');
  }

}
