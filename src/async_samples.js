const samplePosts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two'}
];

const thirdPost = { title: 'Post Three', body: 'This is post three' };  //Keep from having to retype it all the time

function addPost(post) {
    samplePosts.push(post);
}



// Used in the callback version
function getPosts() {
    let output = [];
    samplePosts.forEach((post) => {
        output.push(stringy(post, ['title', 'body']));
    });
    const $list = buildList(output);
    displayResult($list);
}




function getSampleTasks() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json());
}









/*
getSampleTasks()
    .then((tasks) => {
        const _tasks = tasks.map((t) => {
           //return JSON.stringify(t);
            return stringy(t, ['id', 'name', 'username']);
        });
        const $list = buildList(_tasks);
        displayResult($list);
    });
*/



/*************************************************** public ***************************************************/

// Sample: createPost_Callback(thirdPost, getPosts);
function createPost_Callback(post, callback) {
    setTitle('Callback');
    setTimeout(() => {
        samplePosts.push(post);
        callback();
    }, 2000)
}

// Sample: createPost_Promise(thirdPost).then(getPosts);
function createPost_Promise(post) {
    setTitle('Promise');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            samplePosts.push(post);
            resolve();
            // Could add fake reject here based on some error checking
        }, 2000);
    })
}

