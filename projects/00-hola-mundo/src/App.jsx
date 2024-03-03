import  "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users =  [
  {
    userName: 'Miaurwick',
    name: "Mia Lune Du Diable",
    isFollowing: true
  },

  {
    userName: 'GothiccMiaurwick',
    name: "Lady of iron",
    isFollowing: false
  },

  {
    userName: 'Dva',
    name: "Gotthic Miaurwick",
    isFollowing: true
  }
]


export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      {
        users.map(user => {
          const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
              >
                {name}
              </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}
