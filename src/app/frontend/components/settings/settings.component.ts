import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent {
  languagePanelOpenState = false;
  panelOpenState = false;

  setLanguage(language: string) {
    console.log('language set to:', language)
  }
}
