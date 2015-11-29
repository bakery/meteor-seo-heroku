Router.route('/', {
  name: 'home',
  onAfterAction: function () {
    DocHead.setTitle('Welcome home');
    DocHead.addMeta({
      name: "description", 
      content: "Site description"
    });
    DocHead.addMeta({
      property: "og:title", 
      content: "Facebook title"
    });
    DocHead.addMeta({
      property: "og:description", 
      content: "Facebook description"
    });
    DocHead.addMeta({
      property: "og:image", 
      content: "http://placehold.it/1200x630"
    });
  }
});