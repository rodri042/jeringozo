const silabajs = require("./silabajs");

const input = process.argv[2];
const consonantes = /[bcdfghjklmnñpqrstvwxyz]/gim;
const palabras = input.split(" ");
const output = palabras.map((palabra) => {
	const silabas = silabajs.getSilabas(palabra).silabas.map((it) => it.silaba);
	return silabas.map((it) => {
		const vocales = it.replace(consonantes, "");
		const vocal = vocales[vocales.length - 1];
		return vocal ? `${it}p${vocal}` : it;
	}).join("");
}).join(" ");
console.log(output);