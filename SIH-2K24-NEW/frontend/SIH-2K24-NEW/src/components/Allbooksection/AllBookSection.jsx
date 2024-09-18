import React,{ useState,useEffect} from 'react'
import './AllBookSection.css'
const AllBookSection = ({data}) => {
    console.log(data);
    // const [books, setBooks] = useState([]);
    const [books, setBooks] = useState(data);

  useEffect(() => {
    setBooks(data); 
  }, [data]);

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:1000/api/v1/deletebook/${id}`);
        setBooks(books.filter(book => book._id !== id)); // Remove the deleted book from the state
        alert("Book deleted successfully");
      } catch (error) {
        console.error("Error deleting book:", error);
        alert("Error deleting book");
      }
    };
  return (
    <div className="containss d-flex justify-content-start align-items-center flex-wrap my-3">
        {data && data.map((item,index)=>(
        <div className="book-item" style={{width:"220px",height:"370px"}}>
          <div className="book-item2">
            <img style={{width:"220px",height:"230px" }} className=" img-fluid" src={item.image} alt={item.bookname} />  
          </div>
           
        <h2 style={{fontSize:"22px"}} className=" p-2 m-0">{item.bookname}</h2>
        <p style={{fontSize:"30px", fontWeight:"500"}} className=" m-0">Rs. {item.price}</p>
        <div>
        <button className="btn btn-primary upd">UPDATE</button>
        <button className="btn btn-primary dlt" onClick={() => handleDelete(item._id)}>DELETE</button>
        </div>
        </div>))}
    </div>
  )
}


export default AllBookSection
