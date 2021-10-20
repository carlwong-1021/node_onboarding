export const present = (object) => {
  return {
    id: object._id,
    slug: object.slug || '',
    title: object.title || '',
    content: object.content || '',
    author: object.author || '',
    tags: object.tags || [],
    comment_ids: object.comment_ids || [],
  };
};
export const presentCollection = (objects) => {
  return {
    items: objects.map((object) => present(object)),
  };
};
