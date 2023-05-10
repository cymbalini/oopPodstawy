'use strict'

// const login ='pkania'
// const name ='Kania'
// const firstname ='Piotr'
// const age =20
// const boss = true
// const persone1={
//     login:'pkania',
//     name:'Kania',
//     firstname:'Piotr',
//     age:20,
//     boss:true,
//     sayHallo:function(){
//         console.log(this.name)
//     }
// }
// console.log(typeof persone1)
// console.log(persone1.login)
// console.log(persone1.age)
// persone1.sayHallo()

function User(login,name,age,boss){
    this.login=login
    this.name=name
    this.age=age
    this.boss=boss
    this.sayHallo=function(){
        console.log(`Czesc tu ${this.name}`)
    }
}
const user1=new User('akowalska','anna',30,false)
user1.sayHallo()
const user2=new User('jnowak','jan',40,true)
user2.sayHallo()