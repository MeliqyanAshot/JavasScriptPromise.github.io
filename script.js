





let select = +prompt('How many coffees do you want?')

if(select == 0){
alert('Write a number greater than  0')}
else if(select !==  select){
alert('Write a number')}


function Water(count){
return new Promise((resolve, reject) => {
setTimeout(()=>{
resolve(`${select}  cups    Water,`)   
},parseInt(Math.random() * 500 * count))})   }

function Coffee(count){
return new Promise((resolve, reject) => {
setTimeout(()=>{
if(select <= 5){
resolve(`${select}  spoon  Coffee,`)   }
else{
reject(`Not enough Coffee...`)
document.writeln('Not enough Coffee...')
setTimeout(()=>{
alert('Not enough Coffee...')},800)
}},parseInt(Math.random() * 500 * count))})   
}

function Suger(count){
return new Promise((resolve, reject) => {
setTimeout(()=>{
if(select <= 3){
resolve(`${select} spoon  Suger`)
}
else{
reject(`Not enough Suger...`)
document.writeln('Not enough Sugar...')
setTimeout(()=>{
alert('Sorry  sugar is not enough')},800)}
},parseInt(Math.random() * 500 * count))
})
}

function Fire(){
return new Promise((resolve, reject) => {
setTimeout(()=>{
resolve("SetOnFier")    
}, parseInt(Math.random() * 1500 ))})}

async function coffeeՕrder(count){
let forWater = await Water(count)
document.writeln(forWater)
document.writeln('<hr>')
document.writeln('<br>')
let forCoffee = await Coffee(count)
document.writeln(forCoffee)
document.writeln('<hr>')
document.writeln('<br>')
let forSuger = await Suger(count)
document.writeln(forSuger)
document.writeln('<hr>')
document.writeln('<br>')
let forFire = await Fire();
document.writeln(forFire)
setTimeout(()=>{alert('Your Coffee is ready')},1000)
}
coffeeՕrder(3)








