import Avatar from "./Avatar";

export default function UserInfo({ author }) {
  //console.log("UserInfo");
  return (
    <div className="UserInfo">
      <Avatar author={author} />
      <div className="UserInfo-name">{author.name}</div>
    </div>
  );
}
