import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoundingService {

  roundNumber(grandTotalAmount) {
    let roundingAmount = 0;
    if (grandTotalAmount % 1 != 0) {
      // This number has decimal places
      const decimalPortion = grandTotalAmount % 1;
      const formattedDecimalPortionToTwoDp = (Math.round(decimalPortion * 100) / 100).toFixed(2);
      const lastCharacterOfString = formattedDecimalPortionToTwoDp.substr(formattedDecimalPortionToTwoDp.length - 1);
      if (lastCharacterOfString !== "0" && lastCharacterOfString !== "5") {
        // Rounding needs to be done
        const lastCharacterOfStringAsInteger = parseInt(lastCharacterOfString);
        if (lastCharacterOfStringAsInteger <= 2) {
          roundingAmount = -lastCharacterOfStringAsInteger;
        } else if (lastCharacterOfStringAsInteger > 2 && lastCharacterOfStringAsInteger <= 4) {
          roundingAmount = 5 - lastCharacterOfStringAsInteger;
        } else if (lastCharacterOfStringAsInteger > 5 && lastCharacterOfStringAsInteger <= 7) {
          roundingAmount = -(lastCharacterOfStringAsInteger - 5);
        } else {
          // This is for 8, 9
          roundingAmount = 10 - lastCharacterOfStringAsInteger;
        }
      }
    }
    roundingAmount = roundingAmount / 100;
    roundingAmount = parseFloat(roundingAmount.toFixed(2));
    return roundingAmount;
  }

  constructor() { }
}
