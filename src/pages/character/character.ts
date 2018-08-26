import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'page-character',
    templateUrl: 'character.html'
})
export class CharacterPage {
    character: any = {};

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        if (this.navParams.get('character')) {
            this.character = this.navParams.get('character');

            console.log(this.character);
        }
    }
}