export default function Comments({ comments = [] }) {
  // standard ist leeres Array
  return (
    <div>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>{comment.text}</p>
              <small>{comment.date}</small>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
