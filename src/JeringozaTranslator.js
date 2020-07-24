import silabajs from "./lib/silabajs";
import _ from "lodash";

const NON_LETTERS = /[^a-z]/gi;
const NON_VOWELS = /[^aeiou]/gi;
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
							.map((syllable) => {
								const letters = syllable.replace(NON_LETTERS, "");
								const vowels = letters.replace(NON_VOWELS, "");
								const vowel = _.last(vowels);
								const occurrences = _.sumBy(letters, (c) => c === vowel);

								let count = 0;
								return syllable.replace(new RegExp(letters, "g"), (match) => {
									count++;
									return count === occurrences ? `${match}p${vowel}` : match;
								});
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
