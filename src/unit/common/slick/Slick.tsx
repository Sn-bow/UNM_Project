/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as S from "./Slick.styled"
import { type ISlickPropsType } from './Slick.type'

const Slick = (props: ISlickPropsType) => {

    // 후에 props.imageList 로 변환 필요
    const list: string[] = Array(10).fill("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg")

    const { dots, arrow, infinite, speed, slidesToShow, slidesToScroll, autoplay, autoplaySpeed } = props



    const settings = {
        dots: dots ?? false,
        arrow: arrow ?? true,
        infinite: infinite ?? true,
        speed: speed ?? 500,
        slidesToShow: slidesToShow ?? 4,
        slidesToScroll: slidesToScroll ?? 1,
        autoplay: autoplay ?? true,
        autoplaySpeed: autoplaySpeed ?? 5000,
    };


    return (
        <S.Contain className='temp'>
            <S.SliderContain className='temp2'>
                <S.SliderCustom {...settings}>
                    {list.map((sr, index) => (
                        <S.SliderItem key={index} className='item'>
                            <S.SliderImage src={sr} />
                        </S.SliderItem>
                    ))
                    }
                </S.SliderCustom>
            </S.SliderContain>
        </S.Contain>
    );
}

export default Slick

