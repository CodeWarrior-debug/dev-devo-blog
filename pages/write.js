import dynamic from 'next/dynamic';
import { useState } from 'react';
// import { modules } from '../components/Editor'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules2 = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const requestObj = {
      id: new Date().toISOString(),
      title: title,
      content: content,
      isDraft: isDraft,
      isPublished: isPublished
    };

    fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(requestObj),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then((data) => {
        console.log(data)
      });

  }

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={submitHandler} className="text-black border-4 border-black">
      <label htmlFor="title">Title</label>
      <input type="text" value={title} name="title" placeholder="Enter a title" className="text-black border-4 border-black" onChange={handleTitleChange} required />
      <QuillNoSSRWrapper modules={modules2} onChange={setContent} theme="snow" className="text-black border-4 border-black h-[60vh]"/>
      <button>Save</button>
      <p>{content}</p>
    </form>
  )
}