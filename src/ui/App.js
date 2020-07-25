import React, { PureComponent } from "react";
import JeringozaTranslator from "../JeringozaTranslator";
import "./global.css";

export default class App extends PureComponent {
	state = { input: "" };

	render() {
		const { input } = this.state;
		const output = this._translate(input);

		return (
			<div>
				<h1>Spanish-Jeringoza Translator</h1>
				<h2>
					<a href="https://github.com/rodri042/jeringozo">Fork me on GitHub!</a>
				</h2>

				<div>
					<textarea
						className="input"
						rows={1}
						cols={10}
						autoFocus
						onChange={(e) => {
							const text = e.target.value;
							this.setState({ input: text });
							const newOutput = this._translate(text);
							if (newOutput) window.navigator.clipboard.writeText(newOutput);
						}}
					/>
				</div>
				<pre className="output">{output}</pre>
				{output && (
					<div className="message">
						(The translation has been copied to clipboard)
					</div>
				)}
			</div>
		);
	}

	_translate(text) {
		return JeringozaTranslator.toJeringoza(text);
	}
}
