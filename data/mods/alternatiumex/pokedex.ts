export const Pokedex: {[speciesid: string]: SpeciesData} = {
	decidueyehermit: {
		num: 724,
		name: "Decidueye-Hermit",
		types: ["Grass", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 107, def: 100, spa: 70, spd: 100, spe: 80},
		abilities: {0: "Overgrow", 1: "Flower Veil", H: "Soul Reap"},
		heightm: 1.6,
		weightkg: 36.6,
	},
	decidueyeautumn: {
		num: 724,
		name: "Decidueye-Autumn",
		types: ["Fire", "Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 110, def: 70, spa: 110, spd: 70, spe: 80},
		abilities: {0: "Moxie", H: "Victory Star"},
		heightm: 1.6,
		weightkg: 36.6,
	},
	typhlosionexplosive: {
		num: 157,
		name: "Typhlosion-Explosive",
		types: ["Fire", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 73, atk: 94, def: 82, spa: 80, spd: 85, spe: 120},
		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Regenerator"},
		heightm: 1.7,
		weightkg: 79.5,
	},
	typhlosionwarlock: {
		num: 157,
		name: "Typhlosion-Warlock",
		types: ["Fire", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 83, atk: 69, def: 88, spa: 100, spd: 80, spe: 115},
		abilities: {0: "Blaze", 1: "Flame Body", H: "Immolation"},
		heightm: 1.7,
		weightkg: 79.5,
	},
	samurottfoamy: {
		num: 503,
		name: "Samurott-Foamy",
		types: ["Water", "Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 65, def: 90, spa: 100, spd: 105, spe: 75},
		abilities: {0: "Torrent", H: "Poison Heal"},
		heightm: 1.5,
		weightkg: 94.6,
	},
	samurottrogue: {
		num: 503,
		name: "Samurott-Rogue",
		types: ["Water", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 113, def: 80, spa: 95, spd: 77, spe: 80},
		abilities: {0: "Torrent", 1: "Water Veil", H: "Defiant"},
		heightm: 1.5,
		weightkg: 94.6,
	},
	oricorio: {
		num: 741,
		name: "Oricorio",
		types: ["Fire", "Flying"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 75, atk: 110, def: 75, spa: 85, spd: 100, spe: 95},
		abilities: {0: "Dancer", H: "Victory Star"},
		heightm: 0.6,
		weightkg: 3.4,
		otherFormes: null,
		formeOrder: null,
	},
	oricoriocheerleader: {
		num: 741,
		name: "Oricorio-Cheerleader",
		types: ["Electric", "Flying"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 75, atk: 118, def: 105, spa: 70, spd: 80, spe: 93},
		abilities: {0: "Dancer", H: "Staccato"},
		heightm: 0.6,
		weightkg: 3.4,
	},
	oricoriopau: {
		num: 741,
		name: "Oricorio-Pa'u",
		types: ["Grass", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 90, atk: 75, def: 90, spa: 110, spd: 90, spe: 75},
		abilities: {0: "Dancer", H: "Grassy Surge"},
		heightm: 0.6,
		weightkg: 3.4,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	horrorcorio: {
		num: 741,
		name: "Horrorcorio",
		types: ["Ghost", "Flying"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 95, atk: 70, def: 70, spa: 118, spd: 100, spe: 83},
		abilities: {0: "Necro Dancer"},
		heightm: 0.6,
		weightkg: 3.4,
	},
	pikachukanto: {
		num: 25,
		name: "Pikachu-Kanto",
		types: ["Electric"],
		gender: "M",
		baseStats: {hp: 60, atk: 100, def: 60, spa: 90, spd: 90, spe: 100},
		abilities: {0: "Electric Fusion"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachuhoenn: {
		num: 25,
		name: "Pikachu-Hoenn",
		types: ["Dark", "Steel"],
		gender: "M",
		baseStats: {hp: 60, atk: 60, def: 65, spa: 60, spd: 65, spe: 105},
		abilities: {0: "Split System"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachusinnoh: {
		num: 25,
		name: "Pikachu-Sinnoh",
		types: ["Normal", "Fairy"],
		gender: "M",
		baseStats: {hp: 70, atk: 110, def: 60, spa: 80, spd: 60, spe: 140},
		abilities: {0: "Dazzling"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachuunova: {
		num: 25,
		name: "Pikachu-Unova",
		types: ["Water", "Poison"],
		gender: "M",
		baseStats: {hp: 80, atk: 45, def: 80, spa: 45, spd: 80, spe: 85},
		abilities: {0: "Infiltrator", H: "Regenerator"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachutactic: {
		num: 25,
		name: "Pikachu-Tactic",
		types: ["Steel"],
		gender: "M",
		baseStats: {hp: 90, atk: 100, def: 120, spa: 100, spd: 50, spe: 20},
		abilities: {0: "Comatose", H: "Analytic"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachualola: {
		num: 25,
		name: "Pikachu-Alola",
		types: ["Dragon", "Ghost"],
		gender: "M",
		baseStats: {hp: 80, atk: 95, def: 60, spa: 95, spd: 90, spe: 80},
		abilities: {0: "Steelworker", H: "Surge Surfer"},
		heightm: 0.4,
		weightkg: 6,
	},
	pikachuworld: {
		num: 25,
		name: "Pikachu-World",
		types: ["Electric"],
		gender: "M",
		baseStats: {hp: 80, atk: 90, def: 70, spa: 90, spd: 70, spe: 100},
		abilities: {0: "Pastel Veil", H: "Libero"},
		heightm: 0.4,
		weightkg: 6,
	},
	ribombee: {
		num: 743,
		name: "Ribombee",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 80, atk: 85, def: 75, spa: 85, spd: 75, spe: 115},
		abilities: {0: "Swarm", 1: "Aroma Veil", H: "Filter"},
		heightm: 0.2,
		weightkg: 0.5,
		otherFormes: null,
		formeOrder: null,
	},
	ribombeetotem: {
		num: 743,
		name: "Ribombee-Totem",
		types: ["Grass", "Poison"],
		baseStats: {hp: 70, atk: 65, def: 105, spa: 100, spd: 90, spe: 64},
		abilities: {0: "Honey Gather", 1: "Swarm", H: "Poison Point"},
		heightm: 0.4,
		weightkg: 2,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
	},
	araquanid: {
		num: 752,
		name: "Araquanid",
		types: ["Bug", "Water"],
		baseStats: {hp: 75, atk: 70, def: 80, spa: 65, spd: 110, spe: 105},
		abilities: {0: "Water Bubble", H: "Water Absorb"},
		heightm: 1.8,
		weightkg: 82,
		otherFormes: null,
		formeOrder: null,
	},
	araquanidtotem: {
		num: 752,
		name: "Araquanid-Totem",
		types: ["Poison", "Flying"],
		baseStats: {hp: 68, atk: 65, def: 122, spa: 95, spd: 87, spe: 57},
		abilities: {0: "Water Bubble", H: "Water Absorb"},
		heightm: 3.1,
		weightkg: 217.5,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
	},
	vikavolt: {
		num: 738,
		name: "Vikavolt",
		types: ["Steel"],
		baseStats: {hp: 77, atk: 115, def: 90, spa: 70, spd: 90, spe: 85},
		abilities: {0: "Levitate", H: "Rough Skin"},
		heightm: 1.5,
		weightkg: 45,
		otherFormes: null,
		formeOrder: null,
	},
	vikavolttotem: {
		num: 738,
		name: "Vikavolt-Totem",
		types: ["Bug", "Electric"],
		baseStats: {hp: 70, atk: 125, def: 85, spa: 45, spd: 95, spe: 80},
		abilities: {0: "Magic Guard"},
		heightm: 2.6,
		weightkg: 147.5,
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
	},
};