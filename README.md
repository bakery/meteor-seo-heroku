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
heroku config:set ROOT_URL=https://<NAME-OF-THE-APP>.herokuapp.com/
```

- deploy
```
git push heroku master
```

- check in [Open Graph Object Debugger](https://developers.facebook.com/tools/debug/og/object/) and using **_escaped_fragment_** [https://<NAME-OF-THE-APP>.herokuapp.com/?_escaped_fragment_=](https://<NAME-OF-THE-APP>.herokuapp.com/?_escaped_fragment_=)
