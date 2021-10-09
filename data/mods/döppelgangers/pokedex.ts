export const Pokedex: {[speciesid: string]: SpeciesData} = {
	clefable: {
		inherit: true,
		otherFormes: ["Clefable-Anti"],
		formeOrder: ["Clefable", "Clefable-Anti"],
	},
	clefableanti: {
		num: 36,
		name: "Clefable-Anti",
		baseSpecies: "Clefable",
		forme: "Anti",
		types: ["Steel"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 87, atk: 90, def: 61, spa: 90, spd: 90, spe: 65},
		abilities: {0: "Magic Guard", 1: "Limber", H: "Justified"},
		heightm: 1.3,
		weightkg: 40,
	},
	/*ninetales: {
		inherit: true,
		otherFormes: ["Ninetales-Alola", "Anti-Ninetales-Alola"],
		formeOrder: ["Ninetales", "Ninetales-Alola", "Anti-Ninetales-Alola"],
	},
	antininetalesalola: {
		num: 38,
		name: "Anti-Ninetales-Alola",
		baseSpecies: "Ninetales-Alola",
		forme: "Anti",
		types: ["Ice", "Poison"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 100, atk: 55, def: 85, spa: 90, spd: 115, spe: 60},
		abilities: {0: "Limber", H: "Regenerator"},
		heightm: 1.1,
		weightkg: 19.9,
	},
	slowking: {
		inherit: true,
		otherFormes: ["Anti-Slowking", "Slowking-Galar"],
		formeOrder: ["Slowking", "Anti-Slowking", "Slowking-Galar"],
	},
	antislowking: {
		num: 199,
		name: "Anti-Slowking",
		baseSpecies: "Slowking",
		forme: "Anti",
		types: ["Psychic", "Dark"],
		baseStats: {hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30},
		abilities: {0: "Prankster", 1: "Own Tempo", H: "Psychic Surge"},
		heightm: 2,
		weightkg: 79.5,
	},
	blissey: {
		inherit: true,
		otherFormes: ["Anti-Blissey"],
		formeOrder: ["Blissey", "Anti-Blissey"],
	},
	antiblissey: {
		num: 242,
		name: "Anti-Blissey",
		baseSpecies: "Blissey",
		forme: "Anti",
		types: ["Ghost", "Electric"],
		gender: "F",
		baseStats: {hp: 70, atk: 60, def: 80, spa: 90, spd: 130, spe: 90},
		abilities: {0: "Poison Heal", H: "Motor Drive"},
		heightm: 1.5,
		weightkg: 46.8,
	},
	garchomp: {
		inherit: true,
		otherFormes: ["Anti-Garchomp"],
		formeOrder: ["Garchomp", "Anti-Garchomp"],
	},
	antigarchomp: {
		num: 445,
		name: "Anti-Garchomp",
		baseSpecies: "Garchomp",
		forme: "Anti",
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 108, atk: 80, def: 102, spa: 122, spd: 85, spe: 103},
		abilities: {0: "Pastel Veil", H: "Intimidate"},
		heightm: 1.9,
		weightkg: 95,
	},
	ferrothorn: {
		inherit: true,
		otherFormes: ["Anti-Ferrothorn"],
		formeOrder: ["Ferrothorn", "Anti-Ferrothorn"],
	},
	antiferrothorn: {
		num: 598,
		name: "Anti-Ferrothorn",
		baseSpecies: "Ferrothorn",
		forme: "Anti",
		types: ["Grass", "Fire"],
		baseStats: {hp: 74, atk: 20, def: 131, spa: 94, spd: 54, spe: 116},
		abilities: {0: "Anticipation", H: "Magic Bounce"},
		heightm: 1,
		weightkg: 110,
	},
	landorus: {
		inherit: true,
		baseForme: "Incarnate",
		otherFormes: ["Landorus-Therian", "Anti-Landorus-Therian"],
		formeOrder: ["Landorus", "Landorus-Therian", "Anti-Landorus-Therian"],
	},
	antilandorustherian: {
		num: 645,
		name: "Anti-Landorus-Therian",
		baseSpecies: "Landorus-Therian",
		forme: "Anti",
		types: ["Steel", "Flying"],
		gender: "M",
		baseStats: {hp: 110, atk: 85, def: 145, spa: 130, spd: 75, spe: 55},
		abilities: {0: "Trace"},
		heightm: 1.3,
		weightkg: 68,
	},
	kyurem: {
		inherit: true,
		otherFormes: ["Anti-Kyurem", "Kyurem-Black", "Kyurem-White"],
		formeOrder: ["Kyurem", "Anti-Kyurem", "Kyurem-White", "Kyurem-Black"],
	},
	antikyurem: {
		num: 646,
		name: "Anti-Kyurem",
		baseSpecies: "Kyurem",
		forme: "Anti",
		types: ["Bug", "Steel"],
		gender: "N",
		baseStats: {hp: 125, atk: 115, def: 100, spa: 110, spd: 100, spe: 110},
		abilities: {0: "Dancer"},
		heightm: 3,
		weightkg: 325,
	},
	toxapex: {
		inherit: true,
		otherFormes: ["Anti-Toxapex"],
		formeOrder: ["Toxapex", "Anti-Toxapex"],
	},
	antitoxapex: {
		num: 748,
		name: "Anti-Toxapex",
		baseSpecies: "Toxapex",
		forme: "Anti",
		types: ["Poison", "Ground"],
		baseStats: {hp: 50, atk: 35, def: 112, spa: 133, spd: 102, spe: 63},
		abilities: {0: "Merciless", 1: "Limber", H: "Storm Drain"},
		heightm: 0.7,
		weightkg: 14.5,
	},
	kartana: {
		inherit: true,
		otherFormes: ["Anti-Kartana"],
		formeOrder: ["Kartana", "Anti-Kartana"],
	},
	antikartana: {
		num: 798,
		name: "Anti-Kartana",
		baseSpecies: "Kartana",
		forme: "Anti",
		types: ["Grass", "Fighting"],
		gender: "N",
		baseStats: {hp: 59, atk: 83, def: 131, spa: 97, spd: 139, spe: 61},
		abilities: {0: "Fluffy"},
		heightm: 0.3,
		weightkg: 0.1,
	},
	arctozolt: {
		inherit: true,
		otherFormes: ["Anti-Arctozolt"],
		formeOrder: ["Arctozolt", "Anti-Arctozolt"],
	},
	antiarctozolt: {
		num: 881,
		name: "Anti-Arctozolt",
		baseSpecies: "Arctozolt",
		forme: "Anti",
		types: ["Ground", "Steel"],
		gender: "N",
		baseStats: {hp: 90, atk: 55, def: 120, spa: 90, spd: 95, spe: 55},
		abilities: {0: "Thick Fat", 1: "Aftermath", H: "Clear Body"},
		heightm: 2.3,
		weightkg: 150,
	},*/
};