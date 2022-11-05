/**
 * | Chrome  |   Edge   | Safari  | Firefox  |  Opera   |
 * | :-----: | :------: | :-----: | :------: | :------: |
 * |  **9**  |  **12**  | **5.1** | **12.1** | **12.1** |
 *
 * @see https://caniuse.com/matchmedia
 * @see https://w3c.github.io/csswg-drafts/cssom-view/#dom-window-matchmedia
 */
export function matchMediaFeature<F extends MqFeature>(feature: F, value: MqFeatureValue<F>): MediaQueryList {
	return window.matchMedia(`(${feature}: ${value})`);
}

export type MqFeature = keyof MediaQueries;
export type MqFeatureValue<K extends MqFeature> = MediaQueries[K];

/**
 * @see https://www.w3.org/TR/mediaqueries-5/#valdef-media-all
 * @see https://www.w3.org/TR/mediaqueries-5/#valdef-media-print
 * @see https://www.w3.org/TR/mediaqueries-5/#valdef-media-screen
 */
export type MediaType =
	| 'all'
	| 'print'
	| 'screen'
	| 'tty'
	| 'tv'
	| 'projection'
	| 'handheld'
	| 'braille'
	| 'embossed'
	| 'aural'
	| 'speech';

export type MediaFeatureType = 'range' | 'discrete';

export type MqBoolean = 0 | 1;
export type MqAspectRatio = number; // CSSRatioValue
export type MqAnyHover = 'none' | 'hover';
export type MqAnyPointer = 'none' | 'coarse' | 'fine';
export type MqColorGamut = 'srgb' | 'p3' | 'rec2020';
export type MqColorIndex = number;
export type MqDisplayMode = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | 'windows-controls-overlay';
export type MqDynamicRange = 'standard' | 'high';
export type MqEnvironmentBlending = 'opaque' | 'additive' | 'subtractive';
export type MqForcedColors = 'none' | 'active';
export type MqGrid = undefined | MqBoolean;
export type MqHeight = number; // CSSLengthValue
export type MqHorizontalViewportSegments = number;
export type MqVerticalViewportSegments = number;
export type MqMinHeight = MqHeight;
export type MqMaxHeight = MqHeight;
export type MqHover = 'none' | 'hover';
export type MqInvertedColors = 'none' | 'inverted';
export type MqMonochrome = undefined | number;
export type MqNavControls = 'none' | 'back';
export type MqOrientation = 'portrait' | 'landscape';
export type MqOverflowBlock = 'none' | 'scroll' | 'optional-paged' | 'paged';
export type MqOverflowInline = 'none' | 'scroll';
export type MqPointer = 'none' | 'coarse' | 'fine';
export type MqPrefersColorScheme = 'light' | 'dark';
export type MqPrefersContrast = 'no-preference' | 'more' | 'less' | 'custom';
export type MqPrefersReducedData = 'no-preference' | 'reduce';
export type MqPrefersReducedMotion = 'no-preference' | 'reduce';
export type MqPrefersReducedTransparency = 'no-preference' | 'reduce';
export type MqResolution = number; // CSSResolutionValue
export type MqScan = 'interlace' | 'progressive';
export type MqScripting = 'none' | 'initial-only' | 'enabled';
export type MqUpdate = 'none' | 'slow' | 'fast';
export type MqVideoColorGamut = 'srgb' | 'p3' | 'rec2020';
export type MqVideoDynamicRange = 'standard' | 'high';
export type MqWidth = number; // CSSLengthValue
export type MqMinWidth = MqWidth;
export type MqMaxWidth = MqWidth;

export interface MediaQueries {
	'any-hover': MqAnyHover,
	'any-pointer': MqAnyPointer,
	'color-gamut': MqColorGamut,
	'color-index': MqColorIndex,
	'display-mode': MqDisplayMode,
	'dynamic-range': MqDynamicRange,
	'environment-blending': MqEnvironmentBlending,
	'forced-colors': MqForcedColors,
	'grid': MqGrid,
	'height': MqHeight,
	'min-height': MqMinHeight,
	'max-height': MqMaxHeight,
	'hover': MqHover,
	'horizontal-viewport-segments': MqHorizontalViewportSegments,
	'vertical-viewport-segments': MqVerticalViewportSegments,
	'inverted-colors': MqInvertedColors,
	'monochrome': MqMonochrome,
	'nav-controls': MqNavControls,
	'orientation': MqOrientation,
	'overflow-block': MqOverflowBlock,
	'overflow-inline': MqOverflowInline,
	'pointer': MqPointer,
	'prefers-color-scheme': MqPrefersColorScheme,
	'prefers-contrast': MqPrefersContrast,
	'prefers-reduced-data': MqPrefersReducedData,
	'prefers-reduced-motion': MqPrefersReducedMotion,
	'prefers-reduced-transparency': MqPrefersReducedTransparency,
	'resolution': MqResolution,
	'scan': MqScan,
	'scripting': MqScripting,
	'update': MqUpdate,
	'video-color-gamut': MqVideoColorGamut,
	'video-dynamic-range': MqVideoDynamicRange,
	'width': MqWidth,
	'min-width': MqMinWidth,
	'max-width': MqMaxWidth,
}
