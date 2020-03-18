<template>
    <div class="container">
        <h2>{{comText}}</h2>
        <h2>{{reverseComText}}</h2>
        <h2>{{fullName}}</h2>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    data(){
        return {
            comText:"Hello computed!",
            firstName:'li',
            lastName:'guangyuan'
        }
    },
    computed: {
        reverseComText:function(){
            return this.comText.split('').reverse().join('');
        },
        now: function () {
            return Date.now();
        },
        // fullName:function(){
        //     return this.firstName + ' ' + this.lastName
        // },
        fullName:{
            get:function(){
                return this.firstName + ' ' + this.lastName
            },
            set:function(newVal){
                let names = newVal.split('');
                console.log('names', names)
            }
        }
    },
}
</script>