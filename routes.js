const routes = {
	'/contacto': {
		path: "/contacto",
		template: Contact,
	},
	'/signup': {
		path: "/signup",
		template: SignUp,
	},
	'/signup-admin': {
		path: "/signup-admin",
		template: SignUpAdmin,
	},
	'/auth': {
		path: "/auth",
		template: Auth,
	},
	'/home': {
		path: "/home",
		template: Dashboard,
	}
}

const loadRoute = async (path) => {
    const content = document.getElementById('data-router');
    const rta = routes[path];
    if (rta) {
	    content.innerHTML = await rta.template();
    } else {
    	content.innerHTML = '<p>not found 404</p>';
    }
}