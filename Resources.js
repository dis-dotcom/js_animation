class ResourceManager {
    static objects = {}
    
    static loadSet(name, files, onSuccess = null) {
        let isDone = false
        let set = []
        let srcSet = "Resources/" + name

        for (let i = 0; i < files.length; i++) set.push(null);
        
        let isCompleted = (arr) => {
            return arr.filter(_ => _ == null).length == 0
        }

        files.forEach(_ => {
            let fileName = srcSet + "/" + _ + ".png"
            let img = new Image()
            img.src = fileName
            img.i = _
            img.onload = () => {
                let i = img.i
                set[i] = img

                if (isCompleted(set)) {
                    ResourceManager.objects[name] = set

                    if (onSuccess) {
                        onSuccess()
                    }
                }
            }
        });
    }

    static get(name) {
        return ResourceManager.objects[name]
    }
}