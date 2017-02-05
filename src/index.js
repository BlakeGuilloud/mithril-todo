const m = require('mithril');

const Layout = require('./views/Layout');
const UserList = require('./views/UserList');
const UserForm = require('./views/UserForm');

// m.mount(document.body, UserList);

m.route(document.body, '/list', {
  '/list': {
    render: function() {
      return m(Layout, m(UserList));
    },
  },
  '/edit/:id': {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    },
  },
});
