
export const getParsedDate = (date: string) => {
    const parsedDate = new Date(date);
    return parsedDate.toDateString().substring(4);
}