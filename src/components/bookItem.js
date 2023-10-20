// Importing necessary components from react-bootstrap
import { CardBody, CardHeader } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

// Defining a functional component named BookItem with props as the parameter
function BookItem(props) {
    return (
        <div>
            {/* Card component from react-bootstrap */}
            <Card>
                {/* Displaying the book's title in the Card Header */}
                <Card.Header>{props.myBook.title}</Card.Header>

                <Card.Body>
                    <blockquote className='blockquote mb-0'>
                        {/* Displaying the book's thumbnail image */}
                        <img src={props.myBook.thumbnailUrl} alt={props.myBook.title}></img>

                        <footer>
                            {/* Displaying the first author of the book */}
                            {props.myBook.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

// Exporting the BookItem component to make it available for use in other parts of the application
export default BookItem;
