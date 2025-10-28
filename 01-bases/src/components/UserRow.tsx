import type { User } from "../interfaces/reqres.response";

export const UserRow = ({ user }: { user: User }) => (
  <tr>
    <td>
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-10 h-10 rounded-full"
      />
    </td>
    <td>
      {user.first_name} {user.last_name}
    </td>
    <td>{user.email}</td>
  </tr>
);
