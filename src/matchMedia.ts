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

// Viewport/page characteristics media features
// @see https://drafts.csswg.org/mediaqueries-5/#mf-viewport-characteristics

export type MqAspectRatio = number; // CSSRatioValue
export type MqHeight = number; // CSSLengthValue
export type MqWidth = number; // CSSLengthValue
export type MqOrientation = 'portrait' | 'landscape';
export type MqOverflowBlock = 'none' | 'scroll' | 'optional-paged' | 'paged';
export type MqOverflowInline = 'none' | 'scroll';
export type MqHorizontalViewportSegments = number;
export type MqVerticalViewportSegments = number;
export type MqDisplayMode = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | 'windows-controls-overlay';

// Display quality media features
// @see https://drafts.csswg.org/mediaqueries-5/#mf-display-quality

export type MqResolution = number; // CSSResolutionValue
export type MqScan = 'interlace' | 'progressive';
export type MqGrid = undefined | MqBoolean;
export type MqUpdate = 'none' | 'slow' | 'fast';
export type MqEnvironmentBlending = 'opaque' | 'additive' | 'subtractive';

// Color media features
// @see https://drafts.csswg.org/mediaqueries-5/#mf-color

export type MqColor = number;
export type MqColorIndex = number;
export type MqMonochrome = undefined | number;
export type MqColorGamut = 'srgb' | 'p3' | 'rec2020';
export type MqDynamicRange = 'standard' | 'high';
export type MqInvertedColors = 'none' | 'inverted';

// Interaction media features
// @see https://drafts.csswg.org/mediaqueries-5/#mf-interaction

export type MqPointer = 'none' | 'coarse' | 'fine';
export type MqHover = 'none' | 'hover';
export type MqAnyPointer = 'none' | 'coarse' | 'fine';
export type MqAnyHover = 'none' | 'hover';
export type MqNavControls = 'none' | 'back';

// Video media features
// @see https://drafts.csswg.org/mediaqueries-5/#video-prefixed-features

export type MqVideoColorGamut = 'srgb' | 'p3' | 'rec2020';
export type MqVideoDynamicRange = 'standard' | 'high';

// Scripting media features
// @see https://drafts.csswg.org/mediaqueries-5/#mf-scripting

export type MqScripting = 'none' | 'initial-only' | 'enabled';

// User preference media features
// @see https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences

export type MqPrefersColorScheme = 'light' | 'dark';
export type MqPrefersContrast = 'no-preference' | 'more' | 'less' | 'custom';
export type MqForcedColors = 'none' | 'active';
export type MqPrefersReducedData = 'no-preference' | 'reduce';
export type MqPrefersReducedMotion = 'no-preference' | 'reduce';
export type MqPrefersReducedTransparency = 'no-preference' | 'reduce';

export interface MediaQueries {
	// Viewport/page characteristics media features
	'aspect-ratio': MqAspectRatio,
	'min-aspect-ratio': MqAspectRatio,
	'max-aspect-ratio': MqAspectRatio,
	'height': MqHeight,
	'min-height': MqHeight,
	'max-height': MqHeight,
	'width': MqWidth,
	'min-width': MqWidth,
	'max-width': MqWidth,
	'orientation': MqOrientation,
	'overflow-block': MqOverflowBlock,
	'overflow-inline': MqOverflowInline,
	'horizontal-viewport-segments': MqHorizontalViewportSegments,
	'min-horizontal-viewport-segments': MqHorizontalViewportSegments,
	'max-horizontal-viewport-segments': MqHorizontalViewportSegments,
	'vertical-viewport-segments': MqVerticalViewportSegments,
	'min-vertical-viewport-segments': MqVerticalViewportSegments,
	'max-vertical-viewport-segments': MqVerticalViewportSegments,
	'display-mode': MqDisplayMode,

	// Display quality media features
	'resolution': MqResolution,
	'min-resolution': MqResolution,
	'max-resolution': MqResolution,
	'scan': MqScan,
	'grid': MqGrid,
	'update': MqUpdate,
	'environment-blending': MqEnvironmentBlending,

	// Color media features
	'color': MqColor,
	'min-color': MqColor,
	'max-color': MqColor,
	'color-index': MqColorIndex,
	'monochrome': MqMonochrome,
	'min-monochrome': MqMonochrome,
	'max-monochrome': MqMonochrome,
	'color-gamut': MqColorGamut,
	'min-color-index': MqColorIndex,
	'max-color-index': MqColorIndex,
	'dynamic-range': MqDynamicRange,
	'inverted-colors': MqInvertedColors,

	// Interaction media features
	'pointer': MqPointer,
	'hover': MqHover,
	'any-pointer': MqAnyPointer,
	'any-hover': MqAnyHover,
	'nav-controls': MqNavControls,

	// Video media features
	'video-color-gamut': MqVideoColorGamut,
	'video-dynamic-range': MqVideoDynamicRange,

	// Scripting media features
	'scripting': MqScripting,

	// User preference media features
	'prefers-color-scheme': MqPrefersColorScheme,
	'prefers-contrast': MqPrefersContrast,
	'forced-colors': MqForcedColors,
	'prefers-reduced-data': MqPrefersReducedData,
	'prefers-reduced-motion': MqPrefersReducedMotion,
	'prefers-reduced-transparency': MqPrefersReducedTransparency,
}
