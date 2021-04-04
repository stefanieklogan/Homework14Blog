const displayCommentInput = async (event) => {
    event.preventDefault();
    var commentBtn = document.querySelector('.commentBtn');
    var commentContainer = document.querySelector('.commentContainer');
  
    commentContainer.classList.remove('hide');
    commentBtn.classList.add('hide');
    console.log('commentBtn pressed');
  };
  
  document
  .querySelector('.commentBtn')
  .addEventListener('click', displayCommentInput);
  
  /////////////////////////////////////////////////////////
  
  const saveNewComment = async (event) => {
    event.preventDefault();
    console.log('saveBtn pressed');
  
    const comment = document.querySelector('#commentText').value.trim();
    const id = event.target.getAttribute('data-id');
  
  console.log(comment);
  console.log(id);
  
  
    if (comment && id ) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id: id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        location.reload();
                  console.log('comment saved');
  
  
      } else {
        alert('Failed to save comment');
      }
    }
  };
  
  document
  .querySelector('.saveCommentBtn')
  .addEventListener('click', saveNewComment);

    /////////////////////////////////////////////////////////

    const editComment = async (event) => {
      event.preventDefault();
      console.log('editBtn pressed');
    
      const id = event.target.getAttribute('data-id');
   
      console.log(id);
          
      if (id) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
      });

      if (response.ok) {
          document.location.replace('/dashboard');
          alert('Post updated')
      } else {
          alert('Failed to update post')
      }
          }
    };
    
    document
    .querySelector('.editBtn')
    .addEventListener('click', editComment);

    /////////////////////////////////////////////////////////

    const deleteComment = async (event) => {
        event.preventDefault();
        console.log('deleteBtn pressed');
      
        const id = event.target.getAttribute('data-id');
     
        console.log(id);
            
        if (id) {
          const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            alert('Post deleted')
        } else {
            alert('Failed to delete post')
        }
            }
    };
      
      document
      .querySelector('.deleteBtn')
      .addEventListener('click', deleteComment);

