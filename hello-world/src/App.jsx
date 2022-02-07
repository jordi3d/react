import "./App.css";
import UserInfo from "./UserInfo";

const author = {
  avatarUrl:
    "https://pbs.twimg.com/profile_images/3582614559/1cba57e706b6fc91e1abd73bbd0ee0a6_400x400.jpeg",
  /* "https://pbs.twimg.com/profile_images/1554940713/cunningham_400x400.jpg",
  name: "Ward Cunningham",*/
  name: "Jordi Alonso",
};

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <UserInfo author={author} />
    </div>
  );
}
