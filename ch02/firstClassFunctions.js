const hi = name => `hi ${name}`;
const greeting = name => hi(name);

// is the same as, because functions are first class citizens in functional programming

const greeting = hi

// ignorant
const getServerStuff = callback => ajaxCall(json => callback(json));

// enlightened
const getServerStuff = ajaxCall;

//This  
const BlogController = {
    index(posts) { return Views.index(posts); },
    show(post) { return Views.show(post); },
    create(attrs) { return Db.create(attrs); },
    update(post, attrs) { return Db.update(post, attrs); },
    destroy(post) { return Db.destroy(post); },
  };

  // is the same as this

  const BlogController = {
    index: Views.index,
    show: Views.show,
    create: Db.create,
    update: Db.update,
    destroy: Db.destroy,
  };