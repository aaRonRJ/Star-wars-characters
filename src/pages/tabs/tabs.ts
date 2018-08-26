import { Component } from "@angular/core";
import { HomePage, MessagesPage, AudioPage } from "../index.pages";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1: any;
    tab2: any;
    tab3: any;

    constructor() {
        this.tab1 = HomePage;
        this.tab2 = MessagesPage;
        this.tab3 = AudioPage;
    }
}