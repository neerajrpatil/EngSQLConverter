function worker(name,age,gender,salary){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.salary=salary;
}

var worker1=new worker("ayush",18,"male",10000);
var worker2=new worker("ramesh",20,"male",20000);
console.log(worker1.gender + worker2.salary);
