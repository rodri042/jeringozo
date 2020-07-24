const silabajs = require("./lib/silabajs");

const CONSONANTS = /[bcdfghjklmnñpqrstvwxyz]/gim;

export default {
	toJeringoza(spanish) {
		const words = spanish.split(" ");

		return words
			.map((word) => {
				const syllables = silabajs
					.getSilabas(word)
					.silabas.map((it) => it.silaba);

				return syllables
					.map((it) => {
						const vowels = it.replace(CONSONANTS, "");
						const vowel = vowels[vowels.length - 1];
						return vowel ? `${it}p${vowel}` : it;
					})
					.join("");
			})
			.join(" ");
	},

	toSpanish(jeringoza) {}
};
