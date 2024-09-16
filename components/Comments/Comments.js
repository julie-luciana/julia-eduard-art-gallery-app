import styled from "styled-components";

const CommentContainer = styled.div`
  background-color: #444;
  padding: 15px;
  margin-bottom: 10px;
`;

const CommentAuthor = styled.small`
  font-weight: bold;
  margin-bottom: 5px;
  color: #ddd;
`;

const CommentText = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  border-bottom: 1px solid #555;
`;

export default function Comments({ comments = [] }) {
  // standard ist leeres Array
  return (
    <CommentContainer>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <CommentText>
          {comments.map((comment, index) => (
            <p key={index}>
              <p>{comment.text}</p>
              <CommentAuthor>{comment.date}</CommentAuthor>{" "}
            </p>
          ))}
        </CommentText>
      )}
    </CommentContainer>
  );
}
