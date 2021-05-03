import React from 'react';

const Row = (props) => {
    return (
        <tr>
            <td data-label="Book cover"><img src={props.book.book_cover_url} alt="book cover"/></td>
            <td data-label="Title">{props.book.title}</td>
            <td data-label="Author">{props.book.author}</td>
            <td data-label="Published Date">{props.book.published_date}</td>
        </tr>
    );
}

export default Row;