import silabajs from "./lib/silabajs";
import _ from "lodash";

const CONSONANTS = /[bcdfghjklmnñpqrstvwxyz]/gim;
const NEWLINE = /[\r\n]/;

export default {
	toJeringoza(spanish) {
		const lines = spanish.split(NEWLINE);

		return _.chain(lines)
			.map((line) => {
				const words = line.split(" ");

				return words
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
					.join(" ");
			})
			.join("\n")
			.deburr()
			.value();
	},

	toSpanish(jeringoza) {}
};
