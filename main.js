const employees = [
    {
        id: 1,
        name: 'Farman',
        age: 22,
        position: 'Frontend | Team Leader',
        salary: 250
    },
    {
        id: 2,
        name: 'Subhan',
        age: 22,
        position: 'Backend | Team Leader',
        salary: 250
    },
    {
        id: 3,
        name: 'Aqil',
        age: 27,
        position: 'QA Tester',
        salary: 70
        
    },
    {
        id: 4,
        name: 'Lala',
        age: 18,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 5,
        name: 'Oktay',
        age: 12,
        position: 'Frontend',
        salary: 160
    },
]

// 1.Arrayin uzunluğun tapmaq

// console.log(employees.length);

// 2.At funksiyası ilə sonuncu elementin adını tapmaq

// const lastName=employees.at(-1).name;
// console.log(lastName);

// 3.Length ilə sonuncu elementin adını tapmaq

// const lastName=employees[employees.length-1].name
// console.log(lastName);

// 4.Arrayin sonuna yeni işçi əlavə etmək

// employees.push({
//     id:employees[employees.length - 1].id + 1,
//     name:'Hamid',
//     age:23,
//     position:'Web designer',
//     salary:120
// })
// console.log(employees);

// 5.Arrayin əvvəlinə yeni işçi əlavə etmək

// employees.unshift({
//     id:employees[employees.length - 1].id + 1,
//     name:'Hamid',
//     age:23,
//     position:'Web designer',
//     salary:120
// })
// console.log(employees);

// 6.Arrayin sonundan işçi silmək

// employees.pop({
//     id:employees[employees.length - 1].id + 1,
//     name:'Hamid',
//     age:23,
//     position:'Web designer',
//     salary:120
// })
// console.log(employees);

// 7.Arrayin əvvəlindəb işçi silmək

// employees.shift({
//     id:employees[employees.length - 1].id + 1,
//     name:'Hamid',
//     age:23,
//     position:'Web designer',
//     salary:120
// })
// console.log(employees);

// 8.İşçilərin adlarını join ilə yazdırmaq (Çətin deyil).

// const employeesNames = employees.map(employee=> employee.name)
// const joinNames =employeesNames.join('|')
// console.log(joinNames);

// 9.Arrayi tərsinə yazdırmaq

// const reversedEmployees = [...employees].reverse();
// console.log(reversedEmployees);

// 10.İşçilərin içində vəzifəsi Frontend olan varmı(includes methodu ilə)

// const frontEnd=employees.map((employee)=>
//     employee.position.includes('Frontend | Team Leader')
// )
// console.log(frontEnd);

// 11.İşçilərin içində vəzifəsi Frontend olan varmı(some methodu ilə)

// const frontEnd=employees.some((employee)=>
//     employee.position.includes('Frontend | Team Leader')
// )
// console.log(frontEnd);

// 12.Bütün işçilərin yaşı 18dən böyükdürmü

// const ages = employees.every(employee => employee.age > 18)
// console.log(ages);

// 13.Vəzifəsi Frontend | Team Leader olan işçinin indexini tapmaq

// const index = employees.findIndex(employee => employee.position === 'Frontend | Team Leader')
// console.log(index);

// 14.Vəzifəsi Frontend | Team Leader olan işçinin özünü tapmaq

// const find = employees.find(employee => employee.position === 'Frontend | Team Leader')
// console.log(find);

// 15.Yaşı 18dən böyük olan işçiləri göstərmək

// const map = employees.map(employee => employee.age > 18)
// console.log(map);

// 16.İşçilərin maaşlarının cəmin hesablamaq

// const sum=employees.reduce((acc,value)=>{return acc+value.salary;},0);
// console.log(sum);