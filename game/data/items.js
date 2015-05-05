/*
 * THESE ARE COLLECTION ITEMS
 * they land in the inventory
 * TODO some are stackable, like arrows
 * TODO unlocked and found are not nessecary anymore
 */
var items = {
		manual : {
			"id": "manual",
			"name": "Manual",
			"image": "data/img/items/small/manual.png",
			"icon": "data/img/items/small/manual.png"
		},
		arrows : {
			"id": 		"arrows",
			"name": 	"Arrows",
			"image": 	"data/img/items/small/arrows.png",
			"icon": 	"data/img/items/small/arrows.png"
		},
		deku_nut : {
			"id": "deku_nut",
			"name": "Deku Nut",
			"image": "data/img/items/small/deku_nut.png",
			"icon": "data/img/items/small/deku_nut.png"
		},
		deku_stick : {
			"id": "deku_stick",
			"name": "Deku Stick",
			"image": "data/img/items/small/deku_stick.png",
			"icon": "data/img/items/small/deku_stick.png"
		},
		deku_seeds : {
			"id": "deku_seeds",
			"name": "Deku Seeds",
			"image": "data/img/items/small/deku_seeds.png",
			"icon": "data/img/items/small/deku_seeds.png"
		},
		deku_shield : {
			"id": "deku_shield",
			"name": "Deku Shield",
			"image": "data/img/items/small/deku_shield.png",
			"icon": "data/img/items/small/deku_shield.png"
		},
		deku_sword : {
			"id": "deku_sword",
			"name": "Deku Sword",
			"image": "data/img/items/small/deku_sword.png",
			"icon": "data/img/items/small/deku_sword.png"
		},
		normal_boots : {
			"id": "normal_boots",
			"name": "Normal Boots",
			"image": "data/img/items/small/boots_normal.png",
			"icon": "data/img/items/small/boots_normal.png"
		},
		magic_beans : {
			"id": "magic_beans",
			"name": "Magic Beans",
			"image": "data/img/items/small/magic_beans.png",
			"icon": "data/img/items/small/magic_beans.png"
		},
		ocarina : {
			"id": "ocarina",
			"name": "Ocarina",
			"image": "data/img/items/small/ocarina.png",
			"icon": "data/img/items/small/ocarina.png"
		},
		empty_bootle : {
			"id": "empty_bottle",
			"name": "Empty Bottle",
			"image": "data/img/items/small/bottle_empty.png",
			"icon": "data/img/items/small/bottle_empty.png"
		},
		health : {
			"id": "health",
			"name": "Health Potion",
			"image": "data/img/items/small/bottle_health.png",
			"icon": "data/img/items/small/bottle_health.png"
		},
		boomerang : {
			"id": "boomerang",
			"name": "Boomerang",
			"image": "data/img/items/small/boomerang.png",
			"icon": "data/img/items/small/boomerang.png"
		},
		beer : {
			"id": "beer",
			"name": "Bier",
			"image": "data/img/items/small/bottle_beer.png",
			"icon": "data/img/items/small/bottle_beer.png"
		},
		lukas : {
			"id": "lukas",
			"name": "Nadelsturm",
			"image": "data/img/items/small/lukas.png",
			"icon": "data/img/items/small/lukas.png"
		},
		tanja : {
			"id": "tanja",
			"name": "Sving",
			"image": "data/img/items/small/sving.jpg",
			"icon": "data/img/items/small/sving.jpg"
		},
		rupee : {
			"id": "rupee",
			"name": "Rupee",
			"image": "data/img/items/small/rupee.png",
			"icon": "data/img/items/small/rupee.png"
		},
		test2 : {
			"id": "test2",
			"name": "Test Icon",
			"image": "data/img/items/small/sold_out.png",
			"icon": "data/img/items/small/sold_out.png"
		},
		test3 : {
			"id": "test3",
			"name": "Test Icon",
			"image": "data/img/items/small/sold_out.png",
			"icon": "data/img/items/small/sold_out.png"
		},
		test4 : {
			"id": "test4",
			"name": "Test Icon",
			"image": "data/img/items/small/sold_out.png",
			"icon": "data/img/items/small/sold_out.png"
		},
};



/*
 * THESE ARE ATTRIBUTE ITEMS
 * they don't land in the inventory, but affect the players status
 */
var attr_items = [
	"heart",
	"key",
	"rupee",
];
	


/*
 * THESE ARE PORTALS TO OTHER VIRTUAL LAYERS
 * (special items)
 */
var layers = {
	//"id"				: "display-name"
	"title"				:   {
							"name" : "Reality",
							"music" : undefined,
							},
	"reality"			:   {
							"name" : "Reality",
							"music" : undefined,
							},
	"kokiri_forest"		:   {
							"name" : "Kokiri Forest",
							"music" : "The Legend of Zelda - Kokiri Woods.mp3",
							},
	"shop"				:   {
							"name" : "Shop",
							"music" : "Zelda - Laden.mp3",
							},
	"gerudo_valley"		:   {
							"name" : "Gerudo Valley",
							"music" : "The Legend of Zelda - Gerudo Valley.mp3",
							},
	"spirit_temple"		:   {
							"name" : "Spirit Temple",
							"music" : "The Legend of Zelda - Spirit Temple.mp3",
							},
};



/*
 * items as a plain list (maybe good for designing items and save them as bundle)
 */
var ZeldaBundle = [
		manual : {
			"id": "manual",
			"name": "Manual",
			"image": "data/img/items/small/manual.png",
			"icon": "data/img/items/small/manual.png"
		},
		arrows : {
			"id": 		"arrows",
			"name": 	"Arrows",
			"image": 	"data/img/items/small/arrows.png",
			"icon": 	"data/img/items/small/arrows.png"
		},
		deku_nut : {
			"id": "deku_nut",
			"name": "Deku Nut",
			"image": "data/img/items/small/deku_nut.png",
			"icon": "data/img/items/small/deku_nut.png"
		},
		deku_stick : {
			"id": "deku_stick",
			"name": "Deku Stick",
			"image": "data/img/items/small/deku_stick.png",
			"icon": "data/img/items/small/deku_stick.png"
		},
		deku_seeds : {
			"id": "deku_seeds",
			"name": "Deku Seeds",
			"image": "data/img/items/small/deku_seeds.png",
			"icon": "data/img/items/small/deku_seeds.png"
		},
		deku_shield : {
			"id": "deku_shield",
			"name": "Deku Shield",
			"image": "data/img/items/small/deku_shield.png",
			"icon": "data/img/items/small/deku_shield.png"
		},
		deku_sword : {
			"id": "deku_sword",
			"name": "Deku Sword",
			"image": "data/img/items/small/deku_sword.png",
			"icon": "data/img/items/small/deku_sword.png"
		},
		normal_boots : {
			"id": "normal_boots",
			"name": "Normal Boots",
			"image": "data/img/items/small/boots_normal.png",
			"icon": "data/img/items/small/boots_normal.png"
		},
		magic_beans : {
			"id": "magic_beans",
			"name": "Magic Beans",
			"image": "data/img/items/small/magic_beans.png",
			"icon": "data/img/items/small/magic_beans.png"
		},
		ocarina : {
			"id": "ocarina",
			"name": "Ocarina",
			"image": "data/img/items/small/ocarina.png",
			"icon": "data/img/items/small/ocarina.png"
		},
		empty_bootle : {
			"id": "empty_bottle",
			"name": "Empty Bottle",
			"image": "data/img/items/small/bottle_empty.png",
			"icon": "data/img/items/small/bottle_empty.png"
		},
		health : {
			"id": "health",
			"name": "Health Potion",
			"image": "data/img/items/small/bottle_health.png",
			"icon": "data/img/items/small/bottle_health.png"
		},
		boomerang : {
			"id": "boomerang",
			"name": "Boomerang",
			"image": "data/img/items/small/boomerang.png",
			"icon": "data/img/items/small/boomerang.png"
		},
		rupee : {
			"id": "rupee",
			"name": "Rupee",
			"image": "data/img/items/small/rupee.png",
			"icon": "data/img/items/small/rupee.png"
		}
];
