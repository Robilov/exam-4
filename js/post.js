const test = function (id) {
    let elPostTemplate = $_("#post-template").content;



    let newPostFragment = document.createDocumentFragment();

    function renderPost(obj) {
        let elPost = elPostTemplate.cloneNode(true);
        elPost.querySelector(".js-post__title").textContent = `${obj.title}`;
        elPost.querySelector(".js-post__body").textContent = `${obj.body}`;
        elPost.querySelector(".js-btn__comment").value = obj.id

        newPostFragment.appendChild(elPost);
    }

    function eachPosts(array) {
        array.forEach((obj) => {
            if (obj.userId == idUser)
                renderPost(obj);
        });

        elPostList.appendChild(newPostFragment);

        let elItems = $$_(".js-btn__comment")

        elItems.forEach(function (item) {

            item.addEventListener("click", () => {
                elCommentList.innerHTML = ""
                test2();
                idPost = item.value
                console.log(item.value);
            })
        })
    }

    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => eachPosts(data));
}