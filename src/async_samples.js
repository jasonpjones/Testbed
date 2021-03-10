function getSampleTasks() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json());
}

function getSomething() {
    setTimeout(() => {
        console.log('boo');
    }, 1000);
}



getSampleTasks()
    .then((tasks) => {
        const _tasks = tasks.map((t) => {
           //return JSON.stringify(t);
            return stringy(t, ['id', 'name', 'username']);
        });
        const $list = buildList(_tasks);
        displayResult($list);
    });







