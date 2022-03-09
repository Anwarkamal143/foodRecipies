import NavList from "../components/NavList/NavList"

const Main = ({ className }: { className?: string }) => {
    return (
        <div className={`${className}`}>
            <NavList />
        </div>
    )
}

export default Main
