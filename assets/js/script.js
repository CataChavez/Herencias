const addButton = document.querySelector('form')
addButton.addEventListener('submit', function(e) {
	e.preventDefault()
	const ownerName = document.querySelector('#propietario').value
	const ownerPhone = document.querySelector('#telefono').value
	const ownerAdress = document.querySelector('#direccion').value
	const petName = document.querySelector('#nombreMascota').value
	const petType = document.querySelector('#tipo').value
	const petSymptoms = document.querySelector('#enfermedad').value

	let currentAnimal = {} 
 
	switch (petType) { 
		case 'perro': 
			currentAnimal = new Dog (petName, petType, petSymptoms)
			break;		
		case 'gato':
			currentAnimal = new Cat (petName, petType, petSymptoms)
			break;		
		case 'conejo':
			currentAnimal = new Rabbit (petName, petType, petSymptoms)
				break;
	}
	const owner = new Owner (ownerName, ownerPhone, ownerAdress, currentAnimal)

	console.log(owner);

	document.getElementById('resultado').innerHTML = (`El nombre del dueño es: ${ownerName}. El domicilio es ${ownerAdress} 
	y el número de contacto es: ${ownerPhone}. La mascota es un ${petType}, el nombre de la mascota es: ${petName} y su diagnostico es ${petSymptoms}`)
})

class Animal{ 
	constructor(name, type){
		this.Name = name
		this.Type = type		
	}
	info(){ 
		return `El nombre del animal es: ${this.name}. Siendo este un: ${this.type}` 
	}
}

class Dog extends Animal{
	constructor (name, type, symptoms){
		super(name, type,) 
		this._symptoms = symptoms
	}
	get simptoms(){
		return this._simptoms
		}
	set simptoms(newSimptoms){
		this._symptoms = newSimptoms
	}
}

class Cat extends Animal{ 
	constructor (name, type, symptoms){
		super(name, type,)
		this._symptoms = symptoms
	}
	get simptoms(){
		return this._simptoms
		}
	set simptoms(newSimptoms){
		this._symptoms = newSimptoms
	}
}

class Rabbit extends Animal{ 
	constructor (name, type, symptoms){
		super(name, type,)
		this._symptoms = symptoms
	}
	get simptoms(){
		return this._simptoms
		}
	set simptoms(newSimptoms){
		this._symptoms = newSimptoms
	}
}

class Owner{
	constructor(name, phone, adress, animal){
	this.name = name
	this.phone = phone
	this.adress = adress
	this.animal = animal
	}
	ownerInfo(){
		 return `El nombre del dueño es: ${this.name}. El domicilio es ${this.adress} y el número de contacto es: ${this.phone}, nombre de la mascota es: ${this.animal.info}`
	}
}








