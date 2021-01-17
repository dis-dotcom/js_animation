class CustomAnimation {
    constructor(frames, size) {
        this.frameCurrentIndex = 0
        this.framesCount = 8

        this.size = size
        this.frames = frames
    }

    draw(ctx) {
        if (this.frameCurrentIndex >= this.framesCount) {
            this.frameCurrentIndex = -1
        }
        if (this.frameCurrentIndex == -1) {
            this.frameCurrentIndex = 0
        }

        ctx.drawImage(this.getImage(), 0, 0, this.size[0], this.size[1], 0, 0, 500, 500)
        this.frameCurrentIndex += 1
    }

    getImage() {
        return this.frames[this.frameCurrentIndex]
    }
}