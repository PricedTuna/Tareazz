export const getStyleText = (
  text: string,
  maxLength: number,
  wordMaxLength: number = 7,
): string => {
  let textWords = text.split(' ');

  if (text.length > maxLength) {
    const styledText = `${text.substring(0, maxLength - 3)}...`;
    return styledText;
  }

  // Tiene dos palabras
  if (textWords.length === 2) {
    if (
      (textWords[0].length <= wordMaxLength ||
        textWords[0].length <= wordMaxLength) &&
      text.length <= 12
    ) {
      return textWords.join('\n');
    }
  }

  return text;
};
