import silabajs from "./lib/silabajs";
import _ from "lodash";

const CONSONANTS = /[bcdfghjklmnñpqrstvwxyz]/gim;

export default {
	toJeringoza(spanish) {
		const words = spanish.split(" ");

		return _.chain(words)
			.map((word) => {
				const syllables = silabajs
					.getSilabas(word)
					.silabas.map((it) => it.silaba);

				return syllables
					.map((it) => {
						const vowels = it.replace(CONSONANTS, "");
						const vowel = _.last(vowels);
						return vowel ? `${it}p${vowel}` : it;
					})
					.join("");
			})
			.join(" ")
			.deburr()
			.value();
	},

	toSpanish(jeringoza) {}
};
