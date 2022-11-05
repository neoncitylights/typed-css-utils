import { PropertiesHyphen } from 'csstype';

export type CSSProperty = keyof PropertiesHyphen;
export type CSSPropertyValue<K extends CSSProperty> = Required<PropertiesHyphen[K]>;

/**
 * |  Chrome  |   Edge   | Safari  | Firefox  |  Opera   |
 * | :------: | :------: | :-----: | :------: | :------: |
 * |  **61**  |  **79**  |  **9**  |  **55**  |  **15**  |
 *
 * @see https://caniuse.com/css-supports-api
 * @see https://w3c.github.io/csswg-drafts/css-conditional/#at-supports-ext
 */
export function cssSupports<K extends CSSProperty>(property: K, value: CSSPropertyValue<K>): boolean {
	return CSS.supports(property, value.toString());
}
