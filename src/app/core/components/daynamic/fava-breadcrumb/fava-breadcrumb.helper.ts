import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const breadcrumbTranslate =
  (key: string = ''): (() => string) =>
  () =>
    inject(TranslateService).instant(key);

export interface IBhrBreadcrumb {
  path: string;
  titleItem: string;
}
