//****************************************************************** declarations ************************************************************

const samplePosts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two'}
];

const thirdPost = { title: 'Post Three', body: 'This is post three' };  //Keep from having to retype it all the time

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodby');
});

//****************************************************************** utility functions ************************************************************

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            samplePosts.push(post);
            resolve();
        }, 2000);
    });

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

function getSampleUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json());
}

function buildResultsFromUsers(users) {
    const _users = users.map((t) => {
        return stringy(t, ['id', 'name', 'username']);
    });
    const $list = buildList(_users);
    displayResult($list);
}

/*************************************************** Samples of callback, promise and async/await ***************************************************/

// Sample: createPost_Callback(thirdPost, getPosts);
function createPost_Callback(post, callback) {
    setTitle('Callback');
    setTimeout(() => {
        samplePosts.push(post);
        callback();
    }, 2000)
}

// Sample: createPost_Promise(thirdPost).then(getPosts).catch(err => console.log(err));
function createPost_Promise(post) {
    setTitle('Promise');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            samplePosts.push(post);
            resolve();
            // Could add fake reject here based on some error checking
        }, 2000);
    });
}

function doPromiseAll() {
    Promise.all([promise1, promise2, promise3])
        .then((values) => {
            console.log(values);
            const list = buildList(values);
            displayResult(list);
        });
}

//createPost_Await(thirdPost);
async function createPost_Await(post) {
    setTitle('Await (create post)');
    await addPost(post);
    getPosts();
}

// Samples:
// getTasksAsync(); runs but IDE complains about returned promise being ignored
// getTasksAsync().then(val => console.log(val));  //logs 'success'
async function getTasksAsync() {
    const users = await getSampleUsers();

    buildResultsFromUsers(users);   // no additional await since we already did 'then' on the results of the fetch

    return 'success';
}

async function getTasksAsyncTwo() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // const data = res.json(); //This doesn't work because at this point res is just a promise
    const users = await res.json(); //This one works because the await resolves res

    console.log(users);

    buildResultsFromUsers(users);
}