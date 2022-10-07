const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const disorders = originalDisorderFormat.split("|$|")
const disorders1 = disorders.join("</div><div>")
console.log(`<div>${disorders1}</div>`)