class ResourceManager {
    static objects = {}
    
    static loadSet(name, files, onSuccess = null) {
        let set = []
        let srcSet = "Resources/" + name

        files.forEach(_ => {
            let fileName = srcSet + "/" + _ + ".png"
            let img = new Image()
            img.src = fileName
            set.push(img)
        });

        ResourceManager.objects[name] = set

        if (onSuccess) {
            onSuccess()
        }
    }

    static get(name) {
        return ResourceManager.objects[name]
    }
}