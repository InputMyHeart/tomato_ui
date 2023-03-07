class Notify {
    static DEFAULT_DURATION = 2000
    /**
     * @interface Options
     *  duration:number;
     *  color:string;
     *  background:string;
     */
    static custom(text, options) {
        options = Object.assign(
            {
                duration: Notify.DEFAULT_DURATION,
                color: 'white',
                background: '#000',
            },
            options
        )

        Notify.createNotify(text, options, options.duration)
    }

    static createNotify(text, type, duration) {
        const div = document.createElement('div')
        const NODE_ID = Date.now()
        div.setAttribute('id', NODE_ID)

        div.classList.add('tm-notify')
        div.classList.add('tm-notify-enter-animation')

        /**
         * 系统内置的主题,success,danger...
         * typeof 不是 "string",则是用户自定义的
         */
        if (typeof type == 'string') {
            div.classList.add(`tm-notify-${type}`)
        } else {
            div.style.color = type.color
            div.style.backgroundColor = type.background
        }

        div.textContent = text

        document.body.appendChild(div)

        Notify.removeNotify(NODE_ID, duration)
    }

    static removeNotify(idSelector, duration = Notify.DEFAULT_DURATION) {
        setTimeout(() => {
            const waitBeRemovedNode = document.getElementById(idSelector)
            waitBeRemovedNode.classList.remove('tm-notify-enter-animation')
            waitBeRemovedNode.classList.add('tm-notify-out-animation')
            waitBeRemovedNode.addEventListener('animationend', animationEnd)
            function animationEnd() {
                waitBeRemovedNode.removeEventListener('animationend', animationEnd)
                document.body.removeChild(waitBeRemovedNode)
            }
        }, duration)
    }

    static primary(text, duration = Notify.DEFAULT_DURATION) {
        Notify.createNotify(text, 'primary', duration)
    }

    static success(text, duration = Notify.DEFAULT_DURATION) {
        Notify.createNotify(text, 'success', duration)
    }
    static danger(text, duration = Notify.DEFAULT_DURATION) {
        Notify.createNotify(text, 'danger', duration)
    }
    static warn(text, duration = Notify.DEFAULT_DURATION) {
        Notify.createNotify(text, 'warn', duration)
    }
}

export default Notify
