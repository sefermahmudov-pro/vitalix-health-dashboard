var choice = Number(prompt("Ne yapmak istersin?\n1 - Köpek Yaşı\n2 - Kalan Yaşam\n3 - BMI"));
if (choice == 1) {
// 
var name = prompt("Adın ne?");
name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
alert("Merhaba " + name);
var dogAge = Number(prompt("Köpeğin kaç yaşında"))
function dogAgeCalculator(x) {var humanAge = (x - 2) * 4 + 21
return humanAge}
var result = dogAgeCalculator (dogAge)
alert("Köpeğin " + dogAge + " yaşında ve insan yaşına göre " + result);
}
else if(choice == 2) {
// 
var age = Number(prompt("Kaç yaşındasın"))
function lifeInWeeks(x) {var yearsRemaining = 90 - x
var days = yearsRemaining * 365
var weeks = yearsRemaining * 52
var months = yearsRemaining * 12
return (days + " gün " + weeks + " hafta " + months + " ay")}
var result = lifeInWeeks(age);
alert(result)
}
else if (choice == 3){
// 
var height = Number(prompt("Boyu giriniz"))
var weight = Number(prompt("Kiloyu giriniz"))
function bmiCalculator (w,h) { var bmi = w / (h * h)
bmi = Math.round(bmi)
if (bmi < 18.5){
 return "BMI'in " + bmi + " ve bu zayıf"}
else if (bmi >=18.5 && bmi < 25){
return "BMI'in " + bmi + " ve bu normal"}
else{
return "BMI'in " + bmi + " ve bu fazla kilolu" }}
var result = bmiCalculator(weight,height)
alert(result)
    }
else {
    alert("Geçersiz seçim")}