import { useState } from "react";

export default function CommentForm({ onSubmitComment }) {
  const [comment, setComment] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (comment.trim() === "") return;
    const newComment = {
      text: comment,
      date: new Date().toLocaleString(),
    };
    onSubmitComment(newComment); // Ruft die Funktion auf, um den Kommentar zu speichern
    setComment(""); // Setzt das Textfeld zurück
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment"
      />
      <button type="submit">Send</button>{" "}
      {/* Der Button, um den Kommentar abzuschicken */}
    </form>
  );
}
