// Importing the 'Books' component from the "books" file
import Books from "./books";
import { useEffect, useState } from "react";
import axios from "axios";


// Defining a functional component named Read
function Read() {
    // Data representing a list of books
    const [data, setData] = useState([]);

    useEffect(

        ()=>{
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                (response)=>{
                    setData(response.data.books)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },[]
    );

    return (
        <div>
            <h2>Hello from Read Component</h2>
            {/* Rendering the 'Books' component and passing the book data as 'myBooks' prop */}
            <Books myBooks={data}></Books>
        </div>
    );
}

// Exporting the Read component to make it available for use in other parts of the application
export default Read;
