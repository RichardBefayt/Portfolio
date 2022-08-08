export const formatElements = (elements) => elements.map(
    (element) => ({
        id: element.id,
        name: element.name,
        thumbnail: element.thumbnail,
        description: element.description,
    }),
);