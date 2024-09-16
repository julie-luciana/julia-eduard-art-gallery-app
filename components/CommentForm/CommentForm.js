import { useState } from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  background-color: var(--color-active);
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

const CommentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`;

const CommentInput = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: #222;
  color: white;
  resize: vertical;
  min-height: 80px;
`;

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
    <CommentFormContainer onSubmit={handleSubmit}>
      <CommentInput
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment"
      />
      <SubmitButton type="submit">Send</SubmitButton>{" "}
    </CommentFormContainer>
  );
}
