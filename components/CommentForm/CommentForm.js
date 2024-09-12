import { useState } from "react";

export default function CommentForm({ onSubmitComment }) {
  const [comment, setComment] = useState(""); // Zustand für den eingegebenen Kommentar

  function handleSubmit(event) {
    event.preventDefault(); // Verhindert, dass die Seite neu geladen wird
    if (comment.trim() === "") return; // Wenn das Textfeld leer ist, passiert nichts

    const newComment = {
      text: comment,
      date: new Date().toLocaleString(), // Speichert das Datum und die Uhrzeit
    };
    onSubmitComment(newComment); // Ruft die Funktion auf, um den Kommentar zu speichern
    setComment(""); // Setzt das Textfeld zurück
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)} // Der Text wird im Zustand gespeichert
        placeholder="Add your comment"
      />
      <button type="submit">Send</button>{" "}
      {/* Der Button, um den Kommentar abzuschicken */}
    </form>
  );
}
