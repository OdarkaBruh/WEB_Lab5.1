/*
                              ==========
                                TASK 1
                              ==========
*/
const products = []
var product = {
}
function hulloJS(){
    console.log("hullo");
}

function createProduct(obj, callback){
    const myProduct = Object.create(obj)
    myProduct.id = products.length;
    myProduct.price = 4;
    myProduct.title = "Carrot";
    products.push(myProduct);
    callback(myProduct);
    
}

function logProduct(product) {
    console.log("Your product is: "+ product.title);
    console.log("It's id: "+ product.id);
    logTotalPrice(product);
}

function logTotalPrice(product){
    console.log("It's price: "+ product.price);
}

/*
                              ==========
                                TASK 3
                              ==========
*/

const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    АльфахолінНовіший: new Date("2026-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

function getMedicineNames(){
    console.log("Назви всіх препаратів: "+ Object.keys(medicines))
    getValidMedicineNames();
}

function getValidMedicineNames(){
    const currentDate = new Date();
    Object.filter = (obj, predicate) => 
        Object.keys(obj)
              .filter( key => predicate(obj[key]) )
              .reduce( (res, key) => (res[key] = obj[key], res), {} );
    
    var filteredMedicines = Object.filter(medicines, date => date > currentDate);  
    console.log("Назви не просрочених препаратів (не сортовано): "+ Object.keys(filteredMedicines))
    
    const sortedMedicines = Object.fromEntries(
        Object.entries(filteredMedicines).sort(([,a],[,b]) => a- b)
    );
    console.log("Назви не просрочених препаратів (сортовано): "+ Object.keys(sortedMedicines))
}

/*
                              ==========
                                TASK 5
                              ==========
*/

function task5(){
    const fruits = [
        { name: "apple", price: 200 },
        { name: "orange", price: 300 },
        { name: "grapes", price: 750 },
    ];

    console.log("Продукти до: ")
    printFruits(fruits, false);
    console.log("          ")
    console.log("Продукти зі знижкою: ")
    printFruits(createFruits(fruits), true);
}

function createFruits(f){
    var newFruits = f;
    newFruits.forEach((fruit, i) => {
        fruit.id = i + 1;
        fruit.price = fruit.price / 100 * 80;
    });
    return (newFruits);
}

function printFruits(object, toggle){
    object.forEach((fruit) => {
        console.log(fruit.name + "\n")
        if(toggle){
            console.log("ID: " + fruit.id + "\n")
        }
        console.log("Price: " + fruit.price + "\n")
        console.log("     =====     ")
    })
}

/*
                              ==========
                                TASK 7
                              ==========
*/

function task7(){
    class Clients {
        #email
        #login
        constructor() {
        }
        
        getEmail() {
            return this.#email;
        }

        setEmail(email) {
           this.#email = email;
        }

        getLogin() {
            return this.#login;
        }

        setLogin(login) {
            this.#login = login;
         }
    }

    const person1 = new Clients("123@gmail.com", "456");
    person1.setEmail("123@gmail.com");
    person1.setLogin("456");
    console.log("Email: "+ person1.getEmail());
    console.log("Login: "+ person1.getLogin());
}

/*
                              ==========
                                TASK 9
                              ==========
*/

function task9(){
    const allTags = {};
    createTag = (name) => {
        const myTag = Object.create({});
        myTag.name = name;
        myTag.amount = 1;
        console.log(myTag)
        tags.push(myTag);
    }
    const tweets = [
        { id: "000", likes: 5, tags: ["js", "nodejs"] },
        { id: "001", likes: 2, tags: ["html", "css"] },
        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
        { id: "003", likes: 8, tags: ["css", "react"] },
        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];
    
    tweets.forEach((e) => {
        e.tags.forEach((t) =>{
            allTags[t] = (allTags[t] || 0) + 1;
        })
        
    })

    console.log(allTags)

}

/*
                              ===========
                                TASK 10
                              ===========
*/

function task10(){
    var text = "{[usллц[у вц цу{}]}"
	console.log(text);
    if (checkBrackets(text)){
        console.log("Дужки закриті правильно.")
    }
    else {
        console.log("Ой! Дужки закриті неправильно!")
    }
}

function checkBrackets(text){
    let mapOfBrc = {
        ")" : "(",
        "}": "{",
        "]" : "["
    }

    let tagsCheckingStack = [];
    for (let i = 0; i < text.length; i++){
        if (text[i] === "(" || text[i] === "{" || text[i] === "["){
            tagsCheckingStack.push(text[i])
        }
        else if (tagsCheckingStack[tagsCheckingStack.length-1] === mapOfBrc[text[i]]){
            tagsCheckingStack.pop()
        };
    }
    return (tagsCheckingStack.length ? false : true)
}