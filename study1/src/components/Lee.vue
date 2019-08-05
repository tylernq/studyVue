<template>
    <div>
        <ol>
            <li v-for="j in LeeArr" :key="j" style="margin-bottom:20px">LeeArr:{{j}}</li>
        </ol>
        LeeArr: <input type="text" v-model.number="val">
        
        <child @childtest="Leetest" :childlist="LeeArr"></child>


    </div>
</template>

<script>
import child from '@/components/child'
export default {
    components:  {
        child:child
    },
    data(){
        return {
            LeeArr: [
                1,2,3,4
            ],
            val: 0
        }
    },
    methods:{
        Leetest(LeeV){
            this.val = LeeV;
            console.log(LeeV)
        }
    }
}
</script>
