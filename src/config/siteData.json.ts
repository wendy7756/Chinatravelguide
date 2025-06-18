export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "WanderWorld",
	// Your website's title and description (meta fields)
	title: "Authentic Travel Guides Around the World",
	description:
		"Explore the diverse beauty and rich cultures across the globe.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Wendy",
		email: "wendy7756@outlook.com",
		twitter: "wendy",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
