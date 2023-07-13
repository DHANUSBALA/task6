1	class person{
2	      constructor(name, gender, age, nationality){
3	        this.name = name;
4	        this.gender = gender;
5	        this.age = age;
6	        this.nationality = nationality;
7	      }
8	    }
9	    
10	    var human = new person("bala", "male", 25, "indian");
11	  
12	    console.log(human.name);
13	    console.log(human.gender);
14	    console.log(human.age);
15	    console.log(human.nationality);









//second sum
	
2	let baseFee = .55
3	let cities = ["india", "Boston", "New York", ]
4	let uberRates = [5, 10, 15]
5	let customerName = "bala" 
6	let customerCity = "india"
7	console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
8	function getRate(customerCity) {
9	  function uberRate(customerCity, index) {
10	    let finalRate = (uberRates[index]) * baseFee
11	    return finalRate
12	  }
13	  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
14	}
15	getRate(customerCity)