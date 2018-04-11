import Velocity from 'velocity-animate'

export default {
    defaultOptions: {
        duration: 750,
        easing: 'easeInOutQuad',
    },
    scroll(){
        let spacingCompensation = 18
        const next = document.querySelector('.HeroHeader').nextElementSibling
        const headerHeight = -1 * document.querySelector('.MainHeader').clientHeight // make the offset the opposite of the menu's height
        if(next.classList.contains('Partners')) spacingCompensation += next.clientHeight
        const options = {
            ...this.defaultOptions,
            offset: headerHeight + spacingCompensation
        }
        Velocity(next, 'scroll', options)
    }
}