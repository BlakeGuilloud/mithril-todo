const m = require('mithril');

const User = {
  list: [],
  loadList: function() {
    return m.request({
       method: "GET",
       url: "http://rem-rest-api.herokuapp.com/api/users",
       withCredentials: true,
     })
     .then((result) => {
        User.list = result.data
     });
  },
  current: {},
  load: function(id) {
    return m.request({
      method: 'GET',
      url: 'http://rem-rest-api.herokuapp.com/api/users/:id',
      data: { id },
      withCredentials: true,
    })
    .then((result) => {
      User.current = result;
    });
  },
  save: function() {
    return m.request({
      method: 'PUT',
      url: 'http://rem-rest-api.herokuapp.com/api/users/:id',
      data: User.current,
      withCredentials: true,
    })
  }
};

module.exports = User;
