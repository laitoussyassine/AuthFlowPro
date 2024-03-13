import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate  } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { resetData } from '@/state/auth/authSlice';

const   ProfileButton = () => {

    
    



    return (
    
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src="img/profile-pic-removebg-preview.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>my account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" ><Link>Profile</Link></DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" ><Link>Dashboard</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem className="cursor-pointer" ><button onClick={onLogout}>
                Log Out</button>
            </DropdownMenuItem> */}
        </DropdownMenuContent>
    </DropdownMenu>
    )
}

export default ProfileButton;