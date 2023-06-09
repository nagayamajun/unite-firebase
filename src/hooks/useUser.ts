import { UserRepository } from "@/modules/user/user.repository";
import { useEffect, useState } from "react"
import { User } from "../types/user"

export const useUser = () => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedUser = await UserRepository.findMany();
      setUser(fetchedUser);
    })()
  }, [])

  return { users }
}
