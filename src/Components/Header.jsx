export default function Header(props) {
  return (
    <header className="nav">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
    </header>
  );
}
