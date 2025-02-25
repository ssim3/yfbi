import Navbar from "../components/Navbar";

const Layout = ({children} : Readonly<{ children : React.ReactNode }>) => {
    return ( 
        <main className="font-lexend-sans">
            <Navbar />
            {children}
        </main>
     );
}
 
export default Layout;