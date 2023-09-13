AFRAME.registerComponent('cursor-listener',{
    schema:{
        selectedItemsId:{type:'string',default:''}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handlePlacesListState:function(){
        const id = this.el.getAttribute('id')
        const postersId = ['spiderman','justiceliague','superman','avengers']
        if(postersId.includes(id)){
            const posterContainer = document.querySelector('#poster-container')
            posterContainer.setAttribute('cursor-listener',{
                selectedItemsId:id
            })
            this.el.setAttribute('material',{color:'orange',opacity:1})
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener('mouseenter',()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener('mouseleave',()=>{
            const {selectedItemsId} = this.data
            if(selectedItemsId){
                const element = document.querySelector(`#${selectedItemsId}`)
                const id = element.getAttribute('id')
                if(id == selectedItemsId){
                    element.setAttribute('material',{
                        color:'white',opacity:1
                    })
                }
            }
        })
    }
})
