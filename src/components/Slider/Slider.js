import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function SliderShow() {
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',

            caption: 'Slide 1',
        },
        {
            url: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',

            caption: 'Slide 2',
        },
        {
            url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',

            caption: 'Slide 3',
        },
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings} className={cx('slider')}>
                {slideImages.map((slideImage, index) => (
                    <div key={index} className={cx('slide')}>
                        <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderShow;
