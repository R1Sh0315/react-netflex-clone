import CarouselComponent from '../carousel/carousel';
import SiliderComponent from '../slider/slider';
import TopTen from '../topten/topten';

function MainContainComponent(){
    return(
        <div>
            <CarouselComponent></CarouselComponent>
            <SiliderComponent></SiliderComponent>
            <TopTen></TopTen>
        </div>
    )
}

export default MainContainComponent;