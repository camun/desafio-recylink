
// 1. Composite function
//

let rokket = (a) => (b) => (c) => a*b*c


// 2. Longest string
//

let rokket = (list) => {
	let high = list[0]
	list.forEach( (elem) => high = high.length < elem.length ? elem : high )
	return high;
}

// 3. String repetition
//

let rokket = (st,n) => {
	let st2 = "";
	for(let i=0;i<n;i+=1){
		st2 += st;
	}
	return st2;
}


// 4. Only last names
//


let rokket = (list) => list.map((elem) => elem.lastName)




// 5. Unique numbers
//


let rokket = (list1,list2) => {
	let list = []

	//iterate over first list

	list1.forEach((elem) => {
		!list.includes(elem) ? list.push(elem) : null  // if it does not include it save
	})

	//iterate over secound list
	list2.forEach((elem) => {
		!list.includes(elem) ? list.push(elem) : null  // if it does not include it save
	})

	return list;
}



console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]




const contacts = [  
	{ firstName: 'Juanito', lastName: 'Rokket' },  
	{ firstName: 'James', lastName: 'Bond' },  
	{ firstName: 'Harry', lastName: 'Potter' }
]


const list = ['best', 'company', 'ever']