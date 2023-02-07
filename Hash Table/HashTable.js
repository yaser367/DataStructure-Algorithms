class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let totel = 0
        for(let i=0; i< key.length; i++){
            totel += key.charCodeAt(i)
            
        }
        return totel % this.size
    }
    set(key,value){
        
        const index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    display(){
        for(let i = 0; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new HashTable(3)

table.set("name",'yaser')
table.set("age",53)
table.set('hd','samsung')
// console.log(table.get('hd'))

table.display()
    