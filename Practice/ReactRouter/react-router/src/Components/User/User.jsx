import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold">User</h1>
      <p className="text-xl">User ID: {id}</p>
    </div>
  );
}

export default User;
