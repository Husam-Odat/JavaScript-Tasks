var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  function avgAge() {
    const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
    return totalAge / persons.length;
}

console.log(avgAge());



//  let accumulator = 0;
//   const sumWithInitial = persons.reduce(
//     (accumulator, currentValue) => (accumulator + persons[0].age  ),
//     0
//   );
  
//   console.log(sumWithInitial);


// function avgAge(){
//     let arr = [];
// for ( j in  persons[0].age)
// {   let x
//     let y
//     y++;
//     x+=j;
//     arr =unshift(j);
// }
//     return x/y;
// }

// console.log(avgAge())