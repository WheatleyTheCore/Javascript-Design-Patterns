function Drink(name) {
	this.name = name;
	this.state = 'liquid'; //by state here we mean state of matter
}

function Dish(name) {
	this.name = name;
	this.state = 'solid';
}

function FoodFactory() {
	this.makeItem = (type, name) => {
		switch(type){
			case('drink'):
				return new Drink(name);
				break;
			case('dish'):
				return new Dish(name);
				break;
		}
	}
}

const foodFactory = new FoodFactory();
const foods = [];

foods.push(foodFactory.makeItem('drink', 'soda'));
foods.push(foodFactory.makeItem('drink', 'water'));
foods.push(foodFactory.makeItem('dish', 'Pad Thai'));

foods.forEach(item => {
	console.log(item.name);
});
