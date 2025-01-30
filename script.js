





let select = +prompt('How many coffees do you want?')

if(select == 0){
alert('Write a number greater than  0')}
else if(select !==  select){
alert('Write a number')}


function addWater(count){
return new Promise((resolve, reject) => {
setTimeout(()=>{
resolve(`${select} Wather,`)   
},parseInt(Math.random() * 500 * count))})   }

function addCoffee(count){
return new Promise((resolve, reject) => {
setTimeout(()=>{
if(select <= 5){
resolve(`${select} Coffee,`)   }
else{
reject(`Not enough Coffee...`)
document.writeln('Not enough Coffee...')
setTimeout(()=>{
alert('Not enough Coffee...')},800)
}},parseInt(Math.random() * 500 * count))})   
}

function addSuger(count){
return new Promise((resolve, reject) => {
setTimeout(()=>{
if(select <= 3){
resolve(`${select} Suger`)
}
else{
reject(`Not enough Suger...`)
document.writeln('Not enough Sugar...')
setTimeout(()=>{
alert('Sorry  sugar is not enough')},800)}
},parseInt(Math.random() * 500 * count))
})
}

function setOnFier(){
return new Promise((resolve, reject) => {
setTimeout(()=>{
resolve(`${select} SetOnFier`)    
}, parseInt(Math.random() * 1500 ))})}


async function makeCoffee(count){
let d1 = await addWater(count)
document.writeln(d1)
document.writeln('<br>')
let d2 = await addCoffee(count)
document.writeln(d2)
document.writeln('<br>')
let d3 = await addSuger(count)
document.writeln(d3)
document.writeln('<br>')
let d4 = await setOnFier();
document.writeln(d4)
setTimeout(()=>{alert('Your Coffe is ready')},1000)
}
makeCoffee(3)








