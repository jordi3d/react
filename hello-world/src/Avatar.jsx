export default function Avatar({ author }) {
  //console.log("Avatar");
  return <img className="Avatar" src={author.avatarUrl} alt={author.name} />;
}
