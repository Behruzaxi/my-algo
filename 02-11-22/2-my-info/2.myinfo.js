let name = prompt("Ismingiz nima?")
let age = prompt("Yoshingiz nechchida")
let car = prompt("Moshinangizni nomi nima?")



function getMyInfo(){
    let data = {
        name: nam,
        age: age,
        car: car
    }
    console.log(`Mening ismim ${data.nam}. Mening yoshim ${data.age} moshinamning nomi ${car}`);
} 

