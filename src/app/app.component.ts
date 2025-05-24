import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const availableLanguages = ['en', 'pl'];
    const browserLang = translate.getBrowserLang() ?? 'en';
    const languageToUse = availableLanguages.includes(browserLang) ? browserLang : 'en';

    translate.setDefaultLang('en');
    translate.use(languageToUse);
  }
}
