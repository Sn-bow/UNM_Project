import * as S from "./Header.styled"

const Header = () => {
    return (
        <S.Header>
            <S.LogoState>
                <S.Logo src='https://media.istockphoto.com/id/1408765390/ko/%EC%82%AC%EC%A7%84/%EB%AA%A8%EB%93%A0-%EB%AA%A9%ED%91%9C%EB%A5%BC-%EB%8B%AC%EC%84%B1%ED%95%98%EA%B3%A0-%EB%AA%A8%EB%93%A0-%EC%A1%B0%EA%B1%B4%EC%9D%84-%EC%B6%A9%EC%A1%B1%ED%95%98%EC%8B%AD%EC%8B%9C%EC%98%A4-%EA%B0%81-%EC%84%A4%EC%A0%95-%EB%AA%A9%ED%91%9C%EC%9D%98-%EB%8B%AC%EC%84%B1-%EC%9E%91%EC%97%85-%EC%99%84%EB%A3%8C-%EB%A7%88%EC%BC%80%ED%8C%85-%EA%B4%91%EA%B3%A0-%EA%B8%B0%EC%88%A0-%ED%96%A5%EC%83%81-%EB%86%92%EC%9D%80-%EC%83%9D%EC%82%B0%EC%84%B1-%EC%84%B1%EB%8A%A5-%EB%AA%A8%EB%93%A0-%EC%86%8C%EB%B9%84%EC%9E%90-%EA%B7%B8%EB%A3%B9%EC%9D%98-%EC%A0%81%EC%9A%A9-%EB%B2%94%EC%9C%84.jpg?s=1024x1024&w=is&k=20&c=MB_OVvAjZYX8vqd-NbJ1b8jeD3yyTjQfpuGU9IjqhXc=' alt='logo_image' />
            </S.LogoState>
            <S.CategoryState>
                카테고리
            </S.CategoryState>
            <S.UserInfoState>
                <S.MyPage>
                    없음 & <S.UserIcon />
                </S.MyPage>
                <S.SignIn>
                    로그인 & 로그아웃
                </S.SignIn>
            </S.UserInfoState>
        </S.Header>
    )
}

export default Header