
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "24px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0F6EB8 
		"--color-primary-50": "219 233 244", // #dbe9f4
		"--color-primary-100": "207 226 241", // #cfe2f1
		"--color-primary-200": "195 219 237", // #c3dbed
		"--color-primary-300": "159 197 227", // #9fc5e3
		"--color-primary-400": "87 154 205", // #579acd
		"--color-primary-500": "15 110 184", // #0F6EB8
		"--color-primary-600": "14 99 166", // #0e63a6
		"--color-primary-700": "11 83 138", // #0b538a
		"--color-primary-800": "9 66 110", // #09426e
		"--color-primary-900": "7 54 90", // #07365a
		// secondary | #4F36FF 
		"--color-secondary-50": "229 225 255", // #e5e1ff
		"--color-secondary-100": "220 215 255", // #dcd7ff
		"--color-secondary-200": "211 205 255", // #d3cdff
		"--color-secondary-300": "185 175 255", // #b9afff
		"--color-secondary-400": "132 114 255", // #8472ff
		"--color-secondary-500": "79 54 255", // #4F36FF
		"--color-secondary-600": "71 49 230", // #4731e6
		"--color-secondary-700": "59 41 191", // #3b29bf
		"--color-secondary-800": "47 32 153", // #2f2099
		"--color-secondary-900": "39 26 125", // #271a7d
		// tertiary | #06a2ff 
		"--color-tertiary-50": "218 241 255", // #daf1ff
		"--color-tertiary-100": "205 236 255", // #cdecff
		"--color-tertiary-200": "193 232 255", // #c1e8ff
		"--color-tertiary-300": "155 218 255", // #9bdaff
		"--color-tertiary-400": "81 190 255", // #51beff
		"--color-tertiary-500": "6 162 255", // #06a2ff
		"--color-tertiary-600": "5 146 230", // #0592e6
		"--color-tertiary-700": "5 122 191", // #057abf
		"--color-tertiary-800": "4 97 153", // #046199
		"--color-tertiary-900": "3 79 125", // #034f7d
		// success | #4fff7b 
		"--color-success-50": "229 255 235", // #e5ffeb
		"--color-success-100": "220 255 229", // #dcffe5
		"--color-success-200": "211 255 222", // #d3ffde
		"--color-success-300": "185 255 202", // #b9ffca
		"--color-success-400": "132 255 163", // #84ffa3
		"--color-success-500": "79 255 123", // #4fff7b
		"--color-success-600": "71 230 111", // #47e66f
		"--color-success-700": "59 191 92", // #3bbf5c
		"--color-success-800": "47 153 74", // #2f994a
		"--color-success-900": "39 125 60", // #277d3c
		// warning | #ffff5e 
		"--color-warning-50": "255 255 231", // #ffffe7
		"--color-warning-100": "255 255 223", // #ffffdf
		"--color-warning-200": "255 255 215", // #ffffd7
		"--color-warning-300": "255 255 191", // #ffffbf
		"--color-warning-400": "255 255 142", // #ffff8e
		"--color-warning-500": "255 255 94", // #ffff5e
		"--color-warning-600": "230 230 85", // #e6e655
		"--color-warning-700": "191 191 71", // #bfbf47
		"--color-warning-800": "153 153 56", // #999938
		"--color-warning-900": "125 125 46", // #7d7d2e
		// error | #E5468C 
		"--color-error-50": "251 227 238", // #fbe3ee
		"--color-error-100": "250 218 232", // #fadae8
		"--color-error-200": "249 209 226", // #f9d1e2
		"--color-error-300": "245 181 209", // #f5b5d1
		"--color-error-400": "237 126 175", // #ed7eaf
		"--color-error-500": "229 70 140", // #E5468C
		"--color-error-600": "206 63 126", // #ce3f7e
		"--color-error-700": "172 53 105", // #ac3569
		"--color-error-800": "137 42 84", // #892a54
		"--color-error-900": "112 34 69", // #702245
		// surface | #22222e 
		"--color-surface-50": "222 222 224", // #dedee0
		"--color-surface-100": "211 211 213", // #d3d3d5
		"--color-surface-200": "200 200 203", // #c8c8cb
		"--color-surface-300": "167 167 171", // #a7a7ab
		"--color-surface-400": "100 100 109", // #64646d
		"--color-surface-500": "34 34 46", // #22222e
		"--color-surface-600": "31 31 41", // #1f1f29
		"--color-surface-700": "26 26 35", // #1a1a23
		"--color-surface-800": "20 20 28", // #14141c
		"--color-surface-900": "17 17 23", // #111117
		
	}
}