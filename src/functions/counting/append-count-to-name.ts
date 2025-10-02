/**
 * Appends a count to a string.
 * @param name The name to which the count will be appended.
 * @param count The count to append.
 * @returns The name with the count in brackets.
 */
export const appendCountToName = (name: string, count: number): string => `${name} [${count}]`;
