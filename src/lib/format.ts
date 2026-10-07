const numberFormat = new Intl.NumberFormat('en-US');

/** "blue, grey" → "Blue, grey"; also tidies SWAPI's placeholders: "unknown" → "Unknown", "n/a" → "N/A". */
export function formatText(value: string): string {
	const trimmed = value.trim();
	if (trimmed.toLowerCase() === 'n/a') return 'N/A';
	return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * SWAPI sends numbers as strings ("1,358", "10.4 ", "unknown").
 * Numeric values get thousands separators and an optional unit; anything else goes through `formatText`.
 */
export function formatMeasure(value: string, unit?: string): string {
	const trimmed = value.trim();
	if (!/^[\d,.]+$/.test(trimmed)) return formatText(trimmed);

	const formatted = numberFormat.format(Number(trimmed.replaceAll(',', '')));
	return unit ? `${formatted} ${unit}` : formatted;
}
