import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaygroundsPage } from './playgroundspage';

@NgModule({
  declarations: [
    PlaygroundsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaygroundsPage),
  ],
})
export class PlaygroundsPageModule {}
