<template>
    <div>
<table width="300"  border="1"  cellpadding="1" cellspacing="1" bgcolor="#000000" style="line-height:100px;">  
      <tr>    
            <td bgcolor="#FFFFFF">1</td>     
            <td bgcolor="#FFFFFF">2</td>     
            <td bgcolor="#FFFFFF">3</td> 
      </tr>
     <tr>
             <td bgcolor="#FFFFFF">4</td>     
             <td bgcolor="#FFFFFF">5</td>
             <td bgcolor="#FFFFFF">6</td>
     </tr>
      <tr>
             <td bgcolor="#FFFFFF">7</td>
             <td bgcolor="#FFFFFF">8</td>
             <td bgcolor="#FFFFFF">8</td>
     </tr> 
</table>

 <section>
        <ul>
            <li v-for="v in childlist" :key="v" @click="alert(v)"  style="margin-bottom:20px">{{v}}</li>
        </ul>
    </section>

</div>
</template>


<script>
export default {
    name: "JiuGongGe",
    props: [""]
    
}
</script>

<style>
</style>
