type Friend = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthday: string;
  memo: string;
  isFavorite: boolean;
};

const Friend = ({
  name,
  email,
  phone,
  address,
  birthday,
  memo,
  isFavorite,
}: Friend) => {
  return (
    <div className="p-4 ">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg focus-visible:shadow-lg active:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-3">{name}</h2>
          <p className="leading-relaxed mb-3">
            <strong>Email:</strong> {email}
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Address:</strong> {address}
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Birthday:</strong> {birthday}
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Memo:</strong> {memo}
          </p>
          {isFavorite && (
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-500 rounded-full">
              Favorite
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Friend;
export type { Friend };
