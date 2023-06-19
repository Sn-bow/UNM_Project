import Header from './header/Header'
import Main from './main/Main'

interface ILayoutPropsType {
    children: JSX.Element
}

const Layout = (props: ILayoutPropsType) => {
    return (
        <>
            <Header />
            <Main>
                {props.children}
            </Main>
        </>
    )
}

export default Layout