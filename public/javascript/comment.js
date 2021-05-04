async function commentClickHandler(event) {
    event.preventDefault();

    console.log('clicked!');
}

document.querySelector('.comment-btn').addEventListener('click', commentClickHandler);