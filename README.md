# meteor-seo-heroku
Meteor + Phantomjs + Spiderable on Heroku

- add spiderable
```javascript
meteor add spiderable
```

- add DocHead
```
meteor add kadira:dochead
```

- create heroku app
```
heroku create <NAME-OF-THE-APP> --buildpack https://github.com/thebakeryio/heroku-buildpack-meteor.git#feature/phantomjs
```
