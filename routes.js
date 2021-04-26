  const routesDict = {
    '/': {
      path: "/",
      template: login,
    },
    '/contact': {
      path: "/contact",
      template: Contact,
    },
    '/auth': {
      path: "/auth",
      template: auth,
    },
    '/signup-admin': {
      path: "/signup-admin",
      template: SignUpAdmin,
    },
    '/signup': {
      path: "/signup",
      template: SignUp,
    },
    '/dashboard': {
      path: "/dashboard",
      template: Dashboard,
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