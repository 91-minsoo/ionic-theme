import { Component } from '@angular/core';
import { ActionSheetController, AlertController, MenuController, PopoverController, LoadingController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private menu: MenuController,
    private loadingController: LoadingController
  ) {}

  onThemeChange(event) {
    const root = document.documentElement;
    const isChecked = event.detail.checked;

    if(isChecked) {
      root.classList.add('dark-mode');
    }
    else {
      root.classList.remove('dark-mode');
    }
  }

  async onClickActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  async onClickAlert(type) {
    let options: AlertOptions = {
      header: 'alert',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }]
    };

    switch(type) {
      case 'input':
        options.inputs = [{
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        }, {
          // input date with min & max
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        }, {
          // input date without min nor max
          name: 'name5',
          type: 'date'
        }, {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        }, {
          name: 'name7',
          type: 'number'
        }];
      break;
      case 'radio':
        options.inputs = [{
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        }, {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        }, {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        }, {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        }, {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        }, {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }];
      break;
      case 'check':
        options.inputs = [{
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        }, {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        }, {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        }, {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        }, {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        }, {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }];
      break;
    }

    const alert = await this.alertController.create(options);

    await alert.present();
  }

  async toggleMenu(event) {
    const isOpen = await this.menu.isOpen();

    if(isOpen) this.menu.close('first');
    else this.menu.open('first');
  }

  async onClickLoading() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Please wait...',
      translucent: true
    });
    
    return await loading.present();
  }

}

