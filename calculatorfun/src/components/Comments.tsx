import React, { useState } from 'react';

const Comments = () => {
    const [comment, setComment] = useState(""); // För att lagra den aktuella kommentaren
    const [latestComment, setLatestComment] = useState(""); // För att lagra den senaste kommentaren

    const handleComment = () => {
        if (comment.trim()) { // Kontrollera att kommentaren inte är tom
            setLatestComment(comment); // Uppdatera senaste kommentaren
            setComment(""); // Rensa inputfältet
        }
    };

    return (
        <div>
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Skriv en kommentar..."
            />
            <button onClick={handleComment}>Visa kommentar</button>

            <div>
                <h2>Senaste kommentaren:</h2>
                <p>{latestComment}</p> {/* Visa den senaste kommentaren */}
            </div>
        </div>
    );
};

export default Comments;
