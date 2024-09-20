/** @typedef {import("prettier").Config} PrettierConfig */

/** @type {PrettierConfig} */

const config = {
	plugins: ["prettier-plugin-tailwindcss"],
	printWidth: 100,
	tabWidth: 2,
	useTabs: false,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	endOfLine: "auto",
	bracketSameLine: true,
	arrowParens: "always",
	singleAttributePerLine: false,
	requirePragma: false,
};

export default config;
