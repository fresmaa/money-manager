import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatNumberService {

  constructor() { }

  /**
   * Format Like number
   */
  public formatLikeNumber(num: any) {
    return this.numberFormat(num, 0);
  }

  public numberFormat(num: any, decimals: number = 0, decPoint: any = '.', thousandsSep: any = ',') {
    // Strip all characters but numerical ones.
    num = (num + '').replace(/[^0-9+\-Ee.]/g, '');
    const n = !isFinite(+num) ? 0 : +num,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
        dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
        toFixedFix = (nl: any, precn: any) => {
          const k = Math.pow(10, precn);
          return '' + Math.round(nl * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    const s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec);
  }
}
