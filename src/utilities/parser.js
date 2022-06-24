const clean = str => str.replace(/[&/\\#,+()$~%?<>{}]/g, "");
const parse = type => {
	switch (type) {
		case "project":
			return (req, res, next) => {
				try {
					const project = {
						title: clean(req.body.title),
						description: clean(req.body.description),
						priority: clean(req.body.priority),
						state: clean(req.body.state),
						ownerId: req.body.ownerId,
						startDate: new Date(req.body.startDate),
						endDate: new Date(req.body.endDate),
					};
					req.body = project;
					if (req.params.id) req.id = parseInt(req.params.id);
					next();
				} catch (error) {
					return res.status(422).send("project validation failed");
				}
			};
		case "item":
			return (req, res, next) => {
				try {
					const item = {
						title: clean(req.body.title),
						description: clean(req.body.description),
						priority: clean(req.body.priority),
						type: clean(req.body.type),
						state: clean(req.body.state),
						severity: clean(req.body.severity),
						assigneeId: req.body.assigneeId,
						projectId: req.body.projectId,
						startDate: new Date(req.body.startDate),
						endDate: new Date(req.body.endDate),
					};
					req.body = item;
					if (req.params.id) req.id = parseInt(req.params.id);
					next();
				} catch (error) {
					return res.status(422).send("item validation failed");
				}
			};
		case "task":
			return (req, res, next) => {
				try {
					const task = {
						title: clean(req.body.title),
						description: clean(req.body.description),
						remainingWork: parseInt(req.body.remainingWork),
						completedWork: parseInt(req.body.completedWork),
						originalEstimate: parseInt(req.body.originalEstimate),
						activity: clean(req.body.activity),
						priority: clean(req.body.priority),
						type: clean(req.body.type),
						state: clean(req.body.state),
						severity: clean(req.body.severity),
						assigneeId: req.body.assigneeId,
						itemId: req.body.itemId,
						startDate: new Date(req.body.startDate),
						endDate: new Date(req.body.endDate),
					};
					req.body = task;
					if (req.params.id) req.id = parseInt(req.params.id);
					next();
				} catch (error) {
					return res.status(422).send("task validation failed");
				}
			};
		case "user":
			return (req, res, next) => {
				try {
					const user = {
						email: req.body.email,
						password: req.body.password,
						name: clean(req.body.password),
						title: clean(req.body.password),
						role: clean(req.body.password),
					};
					req.body = user;
					if (req.params.id) req.id = parseInt(req.params.id);
					next();
				} catch (error) {
					return res.status(422).send("user validation failed");
				}
			};
		default:
			return null;
	}
};

module.exports = parse;
