export const Note = ({ content, date, important }) => {
  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};
