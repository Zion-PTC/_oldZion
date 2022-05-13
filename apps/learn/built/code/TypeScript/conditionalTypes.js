const busEngine = {
    type: 'bio',
};
var Priority;
(function (Priority) {
    Priority[Priority["mustHave"] = 0] = "mustHave";
})(Priority || (Priority = {}));
const backlog = {
    releases: [
        {
            name: 'Sprint1',
            epics: [
                {
                    name: 'Account Manager',
                    tasks: [
                        { name: 'Single Sign On', priority: Priority.mustHave },
                        { name: 'Email notifications', priority: Priority.mustHave },
                    ],
                },
            ],
        },
    ],
};
