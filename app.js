var root = document.body

var Splash = {
    view: function() {
        return m("a", {href: "#!/hello"}, "Enter!")
    }
}

var count = 0 // added a variable

var Hello = {
  handleClick: function() {
    m.request({
      method: 'PUT',
      url: 'http://rem-rest-api.herokuapp.com/api/tutorial/1',
      data: {
        count: count + 1,
      },
      withCredentials: true,
    })
    .then((data) => {
      count = parseInt(data.count);
    });
  },
  view: function() {
    return m("main", [
      m("h1", {class: "title"}, "My first app"),
      m("button", { onclick: this.handleClick }, count + " clicks"),
    ])
  }
}

// m.mount(root, Hello)

m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
})
