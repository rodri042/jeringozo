import React, { PureComponent } from "react";
import JeringozaTranslator from "../JeringozaTranslator";
import "./global.css";

export default class App extends PureComponent {
	state = { input: "" };

	render() {
		const { input } = this.state;

		return (
			<div>
				<h1>Spanish-Jeringoza Translator</h1>
				<h2>
					<a href="https://github.com/rodri042/jeringozo">Fork me on GitHub!</a>
				</h2>

				<div>
					<textarea
						rows={1}
						cols={10}
						autoFocus
						onChange={(e) => {
							this.setState({ input: e.target.value });
						}}
					/>
				</div>
				<pre>{JeringozaTranslator.toJeringoza(input)}</pre>
			</div>
		);
	}
}
