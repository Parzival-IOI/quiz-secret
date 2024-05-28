import { logout } from "@/utils/auth";

const LogoutButton = async () => {
  return (
    <div>
        <button type="button" onClick={() => {logout()}} className="hover:underline" >Sign out</button>
    </div>
  )
}

export default LogoutButton;