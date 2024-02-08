
import  Container  from './ui/container'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

const routes = [
    {
        href: "/",
        label: "signup"
    },
    {
        href: "/login",
        label: "login"
    },
    {
        href: "/dashbord",
        label: "dashbord"
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
                <div className='flex items-center'>
                    <Button variant="ghost" size="icon" className="mr-2" aria-label="Toggle Theme" >
                        <Sun  className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                        <span className="sr-only">Toggle Theme</span>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}
export default Header