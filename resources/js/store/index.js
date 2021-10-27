export default {

	state: {

              save_publication: [{
            publication: '',
            inventory_type: '',
            gross_rate: '',
           
        }]

	},

	getters: {

       getPublicationFormGetters(state){ //take parameter state

          return state.category
       }
	},

	actions: {
       allpublicationFromDatabase(context){

          axios.get("/")

               .then((response)=>{
                  console.log(response.data.save_publication_draft)
                  context.commit("categories",response.data.save_publication_draft) //save_publication will be run from mutation

               })

               .catch(()=>{
                  
                  console.log("Error........")
                  
               })
       }
	},

	mutations: {
       categories(state,data) {
          return state.category = data
       }
	}
}