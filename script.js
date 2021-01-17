window.onload = function() {
    function getContext() {
        if (window.context) {
            return window.context
        }
        
        window.context = document.getElementById("container").getContext("2d");
        return window.context
    }

    const animationName = "man-run"
    const animationFrames = [0, 1, 2, 3, 4, 5, 6, 7]
    ResourceManager.loadSet(animationName, animationFrames, onSuccess = function() {
        animation = new CustomAnimation(ResourceManager.get(animationName), [350, 350]);
    })

    setInterval(() => {
        getContext().fillStyle = "white"
        getContext().fillRect(0, 0, 500, 500)
        animation.draw(getContext())
    }, 100)
}