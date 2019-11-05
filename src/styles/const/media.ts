export enum MediaSize {
	DESKTOP = 1440,
	LAPTOP = 1024,
	TABLET = 768,
	MOBILE_BIG = 425,
	MOBILE_REGULAR = 375,
	MOBILE_SMALL = 320
}

export const MediaQuery = {
	DESKTOP: `@media (min-width: ${MediaSize.LAPTOP}px)`,
	LAPTOP: `@media (max-width: ${MediaSize.LAPTOP}px)`
};
