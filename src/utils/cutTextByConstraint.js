export const cutTextByConstraint = (text, constraint) => {
    if (text.length < constraint) return text;
    return text.split('').splice(0, constraint + 1).join('') + '...';
};