<template>
  <div class="container">
    <br>
    <br>
    <br>
    <h3>Assignment</h3>
    <br>
    <table class="table table-striped table-default">
  <thead>
    <tr>

      <th scope="col">Publication</th>
      <th scope="col">Inventory Type</th>
      <th scope="col">Gross Rate</th>
      <td></td>
    </tr>
  </thead>
  <tbody>
      <tr v-for="(save_publ, k) in save_publication" :key="k">

      <td>
    
 <multiselect
      v-model="save_publ.publication"
      :multiple="true"
      :options="options">
    </multiselect>
 </td>
        <td>
    
 <multiselect
      v-model="save_publ.inventory_type"
     @input="getItems(save_publ.inventory_type)"
      :multiple="false"
      :clear-on-select="false"
      :options="optionstwo">
    </multiselect>
 </td>
      <td>
<div class="form-group">
      <input type="text" class="form-control" v-model="save_publ.gross_rate" :readonly="save_publ.gross_rate">
      </div>
      </td>
      <td scope="row" class="trashIconContainer">
        <button class="btn btn-danger cercle"><i class="fa fa-minus" @click="deleteRow(k)"></i></button>
    </td>
    </tr>
 
  </tbody>
        <button type='button' class="btn btn-info"  @click="addNewRow">
    <i class="fas fa-plus"></i>
    Add
</button>
  
    <tr>
        <td><button type='button' class="btn btn-danger">
  
    Cancel
</button></td>
         <td colspan="2"><button type='button' class="btn btn-info">
  
    Draft
</button>
         <button type='button' class="btn btn-info">
  
    Save
</button></td>
    </tr>
</table>
</div>
</template>
<script>
  import Multiselect from 'vue-multiselect';

  export default {
    components: { Multiselect},

    data () {
      return {
        publication: null,
        inventory_type: null,
        gross_rate: null,
        options: ['Laravel', 'Laravel 5', 'Vue JS', 'ItSolutionStuff.com', 'HDTuto.com'],
        optionstwo: ['Premium', 'Super Premium', 'Special', 'ROS'],
       save_publication: [{
            publication: '',
            inventory_type: '',
            gross_rate: '',
           
        }]
      }
    },

     name: "List",
  
      mounted() {

        this.$store.dispatch("allpublicationFromDatabase")

      },
      computed: {
        save_publication_draft(){ //final output from here
           
            console.log(JSON.stringify(this.save_publication_draft));
        }
      },


      methods:{
       saveInvoice() {
            console.log(JSON.stringify(this.save_publication));
        },
       getItems(data) {
     
        },
   
        addNewRow() {
            this.save_publication.push({
                publication: '',
                inventory_type: '',
                gross_rate: '',
                
            });

        },
            deleteRow(k){    
        this.save_publication.splice(k,1);             
    } 
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">


