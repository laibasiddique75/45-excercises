let current_users = ["Laiba","Bisma","Kareena","Rida","Admin"];
let new_users = ["Laiba","Bisma","Areeba","Karishma","Admin"];

new_users.forEach(new_one_user =>{
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
if(our_condition){
    console.log(`sorry ${new_one_user}, is already taken`);
    
}else {
    console.log(`This uername ${new_one_user} is available`);
    
}
})