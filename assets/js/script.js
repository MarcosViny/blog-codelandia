const searchInput = document.querySelector('.search__input')
const likes = document.querySelectorAll('.fa-heart')

// Input to Search Posts 
searchInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase()
    const posts = document.querySelectorAll('.post')

    posts.forEach(post => {
        const postTitle  = post.querySelector('.post__title').textContent.toLowerCase()
        const postDescription  = post.querySelector('.post__description').textContent.toLowerCase()

        if (postTitle.includes(inputValue) || postDescription.includes(inputValue)) {
            post.style.display = 'block'
            return
        }

        post.style.display = 'none'
    })
})

// Like Post
for(let like of likes) {
    like.addEventListener('click', function() {
        if(like.classList.contains('far')) {
            like.classList.remove('far')
            like.classList.add('fas')
        } else {
            like.classList.remove('fas')
            like.classList.add('far')
        }
    })
}