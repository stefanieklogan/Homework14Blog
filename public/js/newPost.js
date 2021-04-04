const newFormHandler = async (event) => {
    event.preventDefault();
    console.log('button pressed');
  
    const title = document.querySelector('#postTitle').value.trim();
    const content = document.querySelector('#postDesc').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title: title, content: content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(title);
        console.log(content);
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };

  document
  .querySelector('.save')
  .addEventListener('click', newFormHandler);