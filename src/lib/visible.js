export default {
    isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    },
    onVisibilityChange(el, callback) {
        let oldVisible = false
        const that = this
        return function() {
            let visbile = that.isElementInViewport(el)
            if(visbile !== oldVisible) {
                oldVisible = visbile
                if(typeof callback === 'function'){
                    callback()
                } 
            }
        }
    },
    register(el, callback) {
        const handler = this.onVisibilityChange(el, callback)
        if (window.addEventListener) {
            window.addEventListener('DOMContentLoaded', handler, false); 
            window.addEventListener('load', handler, false); 
            window.addEventListener('scroll', handler, false); 
            window.addEventListener('resize', handler, false); 
        } else if (window.attachEvent)  {
            window.attachEvent('onDOMContentLoaded', handler); // IE9+ :(
            window.attachEvent('onload', handler);
            window.attachEvent('onscroll', handler);
            window.attachEvent('onresize', handler);
        }
    }
}
