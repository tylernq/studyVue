<template>
    <section>
        <ul>
            <li v-for="v in childlist" :key="v" @click="alert(v)"  style="margin-bottom:20px">{{v}}</li>
        </ul>
    </section>

</template>


<script>
export default {
    name: "child",
    props: ["childlist"],
    methods: {
        alert(childv){
            this.$emit("childtest",childv)
        },
    }
}
</script>


