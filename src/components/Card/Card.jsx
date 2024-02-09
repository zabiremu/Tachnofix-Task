export default function Card({ user }) {
  const { image, firstName, lastName, email, address, company } = user;
  return (
    <div className="p-6 mx-2 mb-2 bg-white border border-gray-200 rounded-lg columns-2xs dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="w-10 h-10 rounded" src={image} alt="Medium avatar" />
      </div>
      <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Name: {firstName} {lastName}
        </h5>
      </a>
      <p className="mb-1 text-gray-500 dark:text-gray-400">Email: {email}</p>
      <p className="mb-1 text-gray-500 dark:text-gray-400">
        Company Name:
        <br /> {company?.name}
      </p>
      <p className="mb-1 text-gray-500 dark:text-gray-400">
        Address: {address?.address}
      </p>
      <p className="mb-1 text-gray-500 dark:text-gray-400">
        City: {address?.city}
      </p>
      <p className="mb-1 text-gray-500 dark:text-gray-400">
        PostalCode: {address?.postalCode}
      </p>
    </div>
  );
}
