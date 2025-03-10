const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

function renderBody() {
    let post = "";

    for (let i = 0; i < posts.length; i++) {
        post += `
            <section class="post">
                <div class="post-header">
                    <img src="${posts[i].avatar}" class="avatar">
                    <div class="user-info">
                        <p class="bold">${posts[i].name}</p>
                        <p class="light">${posts[i].location}</p>
                    </div>
                </div>
                <img src="${posts[i].post}" class="img-post">
                <div class="post-footer">
                    <div class="interaction">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <p class="bold">${posts[i].likes} likes</p>
                    <p><span class="bold">${posts[i].username}</span> <span class="light">${posts[i].comment}</span></p>
                </div>
            </section>
        `;
    }

    return post;    
}

const body = document.querySelector("body");
let bodyContent = renderBody();
body.innerHTML += bodyContent;

