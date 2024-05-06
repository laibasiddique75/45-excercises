function create_car(manufaturer, model, ...options){
 let car = {
     model : model
 };
 options.forEach(option => {
    let [key,value] = option.split(":");
    car [key.trim()] = value.trim();
 }); 
 return car;
}
 let my_car = create_car("Toyota","Corolla","Color: Black","Sunroof:True","Year:2024");

 console.log(my_car);
