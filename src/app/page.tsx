import Friend from "./components/Friend";
const friends: Friend[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    birthday: "1990-01-01",
    memo: "Friend from college",
    isFavorite: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    address: "456 Elm St, Othertown, USA",
    birthday: "1992-02-02",
    memo: "Friend from work",
    isFavorite: false,
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-555-5555",
    address: "789 Oak St, Sometown, USA",
    birthday: "1995-03-03",
    memo: "Friend from gym",
    isFavorite: true,
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "444-444-4444",
    address: "321 Pine St, Anycity, USA",
    birthday: "1988-04-04",
    memo: "Friend from school",
    isFavorite: false,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
      {friends.map((friend) => (
        <Friend {...friend} key={friend.id} />
      ))}
    </div>
  );
}
