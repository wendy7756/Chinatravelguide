export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "Themes",
		link: "/route/",
	},
	{
		text: "Destinations",
		link: "/#destination",
	},
	{
		text: "Pages",
		dropdown: [
			{
				text: "Tips",
				link: "/tools/",
			},
			{
				text: "Privacy",
				link: "/privacy-policy/",
			},
			{
				text: "Terms",
				link: "/terms-of-use/",
			},

		],
	},
];

export default navConfig;
