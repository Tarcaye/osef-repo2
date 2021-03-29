export const romanConverter = {
  toRoman(arabic) {
    return "I".repeat(arabic)
    .replace("IIIII", "V")
    .replace("VV", "X")
    .replace("XXXXX", "L")
    .replace("LL", "C")
    
    .replace("IIII", "IV");
  }
  // toArabic(roman) {
  //     return /*your code here*/ undefined;
  // }
};
