<<<<<<< HEAD
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
	// import.meta.dirname is available after Node.js v20.11.0
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ["next"],
		rules: {
			"react/no-unescaped-entities": "off",
			"@next/next/no-page-custom-font": "off",
		},
	}),
];

export default eslintConfig;
=======
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
	// import.meta.dirname is available after Node.js v20.11.0
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ["next"],
		rules: {
			"react/no-unescaped-entities": "off",
			"@next/next/no-page-custom-font": "off",
		},
	}),
];

export default eslintConfig;
>>>>>>> 8368a53d75b251e2f87d47d3ebcdbcefd6e37d5c
