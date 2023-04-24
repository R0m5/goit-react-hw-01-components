import user from '../utils/user.json';
import data from '../utils/data.json';
import friends from '../utils/friends.json';
import transactions from '../utils/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/Transaction';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
