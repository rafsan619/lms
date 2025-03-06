import { canAccessAdminPages } from "@/permissions/general";
import { getCurrentUser } from "@/services/clerk";
import Link from "next/link";


export async function AdminLink(){
    const user = await getCurrentUser()
    if (!canAccessAdminPages(user)) return null
    return (
        <Link className="hover:bg-accent/10 flex items-center px-2" href="/admin">
        Admin
     </Link>
    )


}