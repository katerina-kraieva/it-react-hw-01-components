import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendsList/FriendsList'
import Transactions from './components/Transactions/Transactions'
import user from './data/user.json'
import statisticalData from './data/statisticsData.json'
import friends from './data/friends.json';
import transactions from './data/transactions.json'
export default function App() {
    return <>
        <Profile name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} 
        />
        <FriendList friends={friends}/>
        <Transactions transactions={transactions}/>
    </>
}
