async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[id="post-title"]').value;
    const body_content = document.querySelector('textarea[id="post-body"]').value;
    console.log(title,body_content)
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body_content,
            // user_id: gotta call user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);