/** @typedef {import("prettier").Config} PrettierConfig */

/** @type {PrettierConfig} */

const config = {
	plugins: ["prettier-plugin-tailwindcss"],
	printWidth: 80,
	tabWidth: 2,
	useTabs: false,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	endOfLine: "auto",
	bracketSameLine: false,
	arrowParens: "always",
};

export default config;
