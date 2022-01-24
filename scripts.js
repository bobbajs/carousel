(function(d) {
    const images = d.querySelectorAll('.carousel__photo');
    let activeIndex = 0;
    let defaultClass = 'carousel__photo';

    const moveSlide = (newIndex, oldIndex) => {
        let oldNext = oldIndex + 1 >= images.length ? 0 : oldIndex + 1;
        let oldPrev = oldIndex - 1 < 0 ? images.length - 1 : oldIndex - 1;

        [ oldIndex, oldNext, oldPrev ].forEach(index => {
            images[index].classList = [ defaultClass ];
        });

        activeIndex = newIndex;
        let next = activeIndex + 1 === images.length ? 0 : activeIndex + 1;
        let prev = activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1;

        images[next].classList.add('next');
        images[prev].classList.add('prev');
        images[activeIndex].classList.add('active');
    }

    const showNext = () => {
        let newActiveIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

        moveSlide(newActiveIndex, activeIndex);
    }

    const showPrev = () => {
        let newActiveIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;

        moveSlide(newActiveIndex, activeIndex);
    }

    const initCarousel = () => {
        // set initial status
        images[images.length - 1].classList.add('prev');
        images[activeIndex + 1].classList.add('next');

        // add event listener
        d.querySelector('.carousel__button--next').addEventListener('click', showNext);
        d.querySelector('.carousel__button--prev').addEventListener('click', showPrev);
    }

    initCarousel();
})(document);