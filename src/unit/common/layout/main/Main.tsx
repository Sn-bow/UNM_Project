import styled from '@emotion/styled'

interface IMainPropsType {
    children: JSX.Element
}

const Main = (props: IMainPropsType) => {
    return (
        <MainContain>
            {props.children}
        </MainContain>
    )
}

export default Main


const MainContain = styled.div`
    margin-top: 30px;
    border: 1px solid white;
`