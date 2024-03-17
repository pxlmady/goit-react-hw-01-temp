// App.jsx
import React from "react";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import profile from "./data/profile.json";
import friends from "./data/friends.json";
import transaction from "./data/transaction.json";

export const App = () => {
  return (
    <div>
      <Profile
        avatar={profile.avatar}
        tag={`@${profile.tag}`}
        username={profile.username}
        location={profile.location}
        stats={profile.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory transactions={transaction} />
    </div>
  );
};
