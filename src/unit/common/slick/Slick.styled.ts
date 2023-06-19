import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

// Slick Css setting
export const Contain = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const SliderContain = styled.div`
    width: 100%;
`;

export const SliderItem = styled.div`
    width: 100%;
    height: 250px;
    margin: 15px;
`;
export const SliderImage = styled.img`
    width: 92%;
    height: 90%;

    &:hover {
        cursor: pointer;
    }
`;

export const SliderCustom = styled(Slider)`
    .slick-arrow {
        width: 50px;
        height: 50px;
    }
    .slick-prev::before {
        font-size: 50px;
        color: skyblue;
    }
    .slick-next::before {
        font-size: 50px;
        color: skyblue;
    }
    padding: 0 25px;
`;
