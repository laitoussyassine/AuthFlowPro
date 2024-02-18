import  Container  from './ui/container'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import ProfileButton from './ui/ProfileButton'
import { ModeToggle } from './ui/mode-toggle'


const routes = [
    {
        href: "/signup",
        label: "sign Up"
    },
    {
        href: "/login",
        label: "Login"
    }

]
const Header = () => {
    
  return (
    <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                <div className="flex items-center">
                    <Link className='ml-4 lg:ml:0'>
                        <h1 className='text-xl font-bold'>Task todo</h1>
                    </Link>
                </div>
                <nav className='flex items-center space-x-4 lg:space-x-6 hidden md:block'>
                    {routes.map((route,i) => (
                        <Button asChild variant="ghost" >
                            <Link key={i} to={route.href} className="text-sm font- transition-colors">
                                {route.label}
                            </Link>
                        </Button>
                    )
                    )}
                </nav>
                <div className='flex items-center gap-3'>
                    <ModeToggle />
                    <ProfileButton />
                </div>
            </div>
        </Container>
    </header>
    )
}
export default Header