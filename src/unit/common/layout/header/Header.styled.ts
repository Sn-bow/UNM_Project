import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Header = styled.header`
    min-width: 800px;
    max-width: 1920px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 15px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
`;

export const UserInfoState = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LogoState = styled.div`
    width: 15%;
    height: 100%;
`;

export const CategoryState = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 8px;
`;

export const Logo = styled.img`
    width: 100%;
    height: 90px;

    &:hover {
        cursor: pointer;
    }
`;

export const MyPage = styled.span`
    font-size: 18px;
`;

export const UserIcon = styled(UserOutlined)`
    font-size: 30px;

    &:hover {
        cursor: pointer;
    }
`;

export const SignIn = styled.div`
    font-size: 25px;

    &:hover {
        cursor: pointer;
    }
`;
