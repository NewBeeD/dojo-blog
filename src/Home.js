import {useState, useEffect} from 'react';
import BlogList from './bloglist';


const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'My new Website', body: 'Lorem ipsum...', author: 'mario', id: 1},
    {title: 'Welcome party!', body: 'Lorem ipsum...', author: 'yoshi', id: 2},
    {title: 'Web Dev top tips', body: 'Lorem ipsum...', author: 'mario', id: 3},
  ]);

  const [name, setName] = useState('Mario');

  const handleDelete = (id) => {

    const newBlogs = blogs.filter(blog => blog.id !== id);  

    setBlogs(newBlogs);
  }

  useEffect(() =>{
    console.log('Use effect Ran');
  }, []);
  
  return ( 
    <div className="home">
      <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/> 
      <button onClick={() => setName('Damien')}>Change Name</button>
      <p>{name}</p>
    </div>
   );
}
 
export default Home;