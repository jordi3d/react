import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const author= {
  avatarUrl: "https://pbs.twing.com/profile_images/1554940713/cunnigham_400x400.jpg",
  name: "Ward Cunningham",
};

export default function Comment({ author, text, date }) {
  return (
    <div className="Comment">
      {/*<div className="UserInfo">*/}
      <UserInfo name={author}>
        {/*<img className="Avatar" src={author.avatarUrl} alt={author.name} />*/}
        <Avatar author={author}/>
        <UserInfo/>
        <div className="UserInfo-name">{author.name}</div>
      {/*</div>*/}
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}
