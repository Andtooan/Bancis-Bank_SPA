const routes = [
    {
      path: "/login",
      template: login,
    },
    {
      path: "/contact",
      template: contact,
    },
    {
      path: "/aunth",
      template: auth,
    },
    {
      path: "/singup-admin",
      template: signup-admin,
    },
    {
      path: "/signup",
      template: signup,
    },
    {
      path: "/dashboard",
      template: dashboard,
    },
  ];
  
  const routesDict = {
    '/': {
      path: "/",
      template: login,
    },
    '/contact': {
      path: "/contact",
      template: contact,
    },
    '/auth': {
      path: "/aunth",
      template: auth,
    },
    '/signup-admin': {
      path: "/signup-admin",
      template: signup-admin,
    },
    '/signup': {
      path: "/signup",
      template: signup,
    },
    '/dashboard': {
      path: "/dashboard",
      template: dashboard,
    }
  }
  
  const loadRoute = async (path) => {
    const content = document.getElementById('data-router');
    const rta = routesDict[path];
    if (rta) {
      content.innerHTML = await rta.template();
    } else {
      content.innerHTML = '<p>not found 404</p>';
    }
  } 